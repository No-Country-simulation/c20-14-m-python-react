import json

import jwt
from django.contrib.auth import authenticate

from skillup import settings
from .models import Profile, Enrollment, Course
from .utils.verification import validate_token, send_verification_email
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.contrib.auth.models import User
from django.views import View
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.core.validators import validate_email
from django.contrib.auth.password_validation import validate_password
from api.jwt_auth_utils.auth import generate_jwt_token
from api.jwt_auth_utils.mixins import JWTAuthenticationMixin


@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(View):
    def post(self, request):
        try:
            # Intentar cargar el cuerpo de la solicitud como JSON
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if validate_email(email):
                return JsonResponse({'error': 'Correo electronico no valido'}, status=400)
            
            validate_password(password)
            
            if User.objects.filter(email=email):
                return JsonResponse ({'error': 'Este e-mail ya esta en uso'}, status=400)
            
            user = User.objects.create_user(username=email, email=email, password=password, is_active=False)
            Profile.objects.create(user=user)

            
            # SEND VERIFICATION EMAIL
            send_verification_email(request, user)
            return JsonResponse ({'message': 'Usuario registrado existosamente'}, status=201)
        
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Solicitud inválida. Se esperaba un JSON'}, status=400)
        
        except ValidationError as e: 
            return JsonResponse({'error': e.messages}, status=400)
        


class UserActivationView(View):
    def get(self, request, uidb64, token):
        user = validate_token(uidb64, token)
        if user is not None:
            user.is_active = True
            user.save()
            return JsonResponse({'status': 200})
        else:
            return JsonResponse({'status': 400})


@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        # User authentication
        user = authenticate(request, username=email, password=password)

        if user is not None:
            token = generate_jwt_token(user)
            return JsonResponse({'user_id': user.id, 'token': token}, status=200)

        else:
            return JsonResponse({'error': 'Credenciales Invalidas'}, status=400)


class UserCoursesView(JWTAuthenticationMixin, View):
    def get(self, request, pk):
        enrollments = Enrollment.objects.filter(user_id=pk)

        user_courses = []
        for enrollment in enrollments:
            course = enrollment.course
            user_courses.append(course.as_dict())

        return JsonResponse({'enrollments': user_courses}, status=200)


class AllCoursesView(JWTAuthenticationMixin, View):
    def get(self, request):
        courses = Course.objects.all()
        courses_list = []

        for course in courses:
            courses_list.append(course.as_dict())

        return JsonResponse({'message': 'success', 'courses': courses_list}, status=200)


@method_decorator(csrf_exempt, name='dispatch')
class ProfileView(JWTAuthenticationMixin, View):
    def get(self, request, pk):
        user_id = User.objects.get(pk=pk)
        profile = Profile.objects.get(user_id=user_id)
        return JsonResponse(profile.as_dict(), status=200)


    def post(self, request, pk):
        try:
            profile = Profile.objects.get(user_id=pk)
            data = json.loads(request.body)
            print(data.items())

            for key, value in data.items():
                if hasattr(profile.user, key):
                    setattr(profile.user, key, value)
            profile.user.save()

            return JsonResponse(profile.as_dict(), status=200)

        except ObjectDoesNotExist:
            return JsonResponse({'error': 'Perfil no encontrado'}, status=400)
