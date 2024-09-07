import json

from .models import Profile

from django.http import JsonResponse
from django.utils.decorators import method_decorator

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User 
from django.views import View

from skillup.auth import generate_jwt_token, refresh_token_view

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(View):

    def post(self, request):
        data = json.loads(request.body)
        email = data.get ('email')
        password = data.get ('password')
        if User.objects.filter(email=email):
            return JsonResponse ({'error': 'Este e-mail ya esta en uso'}, status=400)
        
            # Next to do, create return error for invalid JSON
            # JSONDecodeError
            # ValidationError
            # except Exception
        
        user = User.objects.create(username=email, email=email, password=password)
        Profile.objects.create(user=user)

        token = generate_jwt_token(user.id)
        return JsonResponse ({'message': 'Usuario registrado existosamente', 'token': token}, status=201)

    