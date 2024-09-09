from django.http import JsonResponse
import jwt

from skillup import settings


class JWTAuthenticationMixin:
    def dispatch(self, request, *args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return JsonResponse({'error': 'Token no proporcionado'}, status=401)

        try:
            # Elimina el prefijo 'Bearer ' si está presente
            if token.startswith('Bearer '):
                token = token[7:]

            # Decodifica el token usando la clave secreta
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            request.user_id = payload['user_id']  # Recupera el ID del usuario

        except jwt.ExpiredSignatureError:
            return JsonResponse({'error': 'El token ha expirado'}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({'error': 'Token invalido'}, status=401)

        return super().dispatch(request, *args, **kwargs)
