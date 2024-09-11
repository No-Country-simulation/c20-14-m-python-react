import json

from .models import Profile
from .utils.verification import validate_token, send_verification_email

from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.views import View
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.password_validation import validate_password
from django.db import IntegrityError, transaction

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


# VISTA PROTEGIDA

# class HomeView(JWTAuthenticationMixin, View):
#     def get(self, request):
#         return JsonResponse({'Message': 'Hello world'}, status=200)

