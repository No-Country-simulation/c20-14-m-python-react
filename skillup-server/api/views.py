import json

from .models import Profile

from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User 
from django.views import View

@method_decorator(csrf_exempt, name='dispatch')
class ProfileView(View):

    def post(self, request):
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get ('email')
        password = data.get ('password')
        if User.objects.filter(username=username):
            return JsonResponse ({'error': 'Este usuario ya esta en uso'}, status=400)
        if User.objects.filter(email=email):
            return JsonResponse ({'error': 'Este e-mail ya esta en uso'}, status=400)
        
            #Next to do, create return error for invalid JSON 
            '''JSONDecodeError
            ValidationError
            except Exception''' 
        
        user = User.objects.create (username=username,email=email, password=password)
        profile = Profile.objects.create (user=user)
        return JsonResponse ({'message': 'Usuario registrado existosamente'}, status=201)

    