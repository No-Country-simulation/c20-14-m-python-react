from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .utils.verification import validate_token, verification_email


def activate(request, uidb64, token):
    user = validate_token(uidb64, token)
    if user is not None:
        user.is_active = True
        user.save()
        return JsonResponse({'status': 200})
    else:
        return JsonResponse({'status': 400})

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        user = User.objects.create_user(username='fulanito14', email='fernandostarlin1012@gmail.com', password='LacontraseñaMasFuerteDelMundoMundial1233!^%$', is_active=False)
        user.save()
        verification_email(request, user)
        return JsonResponse({'status': 200})


