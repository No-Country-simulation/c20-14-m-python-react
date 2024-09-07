# skillup/auth.py

import jwt

from datetime import datetime, timedelta
from django.conf import settings
from django.http import JsonResponse
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

