# skillup/auth.py

import jwt

from datetime import datetime, timedelta
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


# Generar el token JWT
def generate_jwt_token(user):
    payload = {
        'user_id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'role': user.profile.role,
        'exp': datetime.utcnow() + timedelta(days=1),  # Expiración del token (1 día)
        'iat': datetime.utcnow(),  # Tiempo de emisión

    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token


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


# Verificar el token JWT
def verify_jwt_token(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        return payload['user_id'] # Devuelve el id del usuario
    except jwt.ExpiredSignatureError:
        raise Exception('Token expirado')
    except jwt.InvalidTokenError:
        raise Exception('Token invalido')

