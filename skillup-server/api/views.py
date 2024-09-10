from django.shortcuts import render
from django.http import JsonResponse
from .utils.verification import validate_token


def activate(request, uidb64, token):
    user = validate_token(uidb64, token)
    if user is not None:
        user.is_active = True
        user.save()
        return JsonResponse({'status': 200})
    else:
        return JsonResponse({'status': 400})
