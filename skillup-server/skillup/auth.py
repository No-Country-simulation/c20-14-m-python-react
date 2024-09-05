# skillup/auth.py

import jwt
from datetime import datetime, timedelta
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
import json

# Generar el token JWT
def generate_jwt_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(days=1),  # Expiración del token (1 día)
        'iat': datetime.utcnow()  # Tiempo de emisión
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token

# Iniciar sesión y devolver el token JWT
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        # Autenticar al usuario
        user = authenticate(username=username, password=password)

        if user is not None:
            token = generate_jwt_token(user.id)
            return JsonResponse({'token': token})
        else:
            return JsonResponse({'error': 'Credenciales inválidas'}, status=400)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

# Refrescar el token JWT
@csrf_exempt
def refresh_token_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        old_token = data.get('token')

        try:
            payload = jwt.decode(old_token, settings.SECRET_KEY, algorithms=['HS256'])
            new_token = generate_jwt_token(payload['user_id'])
            return JsonResponse({'token': new_token})
        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'Token expirado'}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Token inválido'}, status=401)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

# Registrar un nuevo usuario y devolver el token JWT
@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Faltan datos'}, status=400)

        # Verificar si el usuario ya existe
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Usuario ya existe'}, status=400)

        # Crear el nuevo usuario
        user = User(username=username, password=make_password(password))
        user.save()

        # Generar el token JWT
        token = generate_jwt_token(user.id)
        return JsonResponse({'token': token})

    return JsonResponse({'error': 'Método no permitido'}, status=405)

