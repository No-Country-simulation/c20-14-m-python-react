from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from django.conf import settings
from .tokens import account_activation_token

def verificationEmail(request, user, to_email):
    domain = get_current_site(request).domain
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = account_activation_token.make_token(user)

    mail_subject = "Activate your user account."
    message = f'Hi { user.username }, \nPlease click here to confirm your registration. \nhttp://{ domain }/activate/{ uid }/{ token }'

    totalSent = send_mail(
        mail_subject,
        message,
        settings.EMAIL_HOST_USER,
        [to_email],
        fail_silently=False
    )

    return totalSent
    
def validateToken(uidb64, token):
    User = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except:
        user = None
    
    if user is not None and account_activation_token.check_token(user, token):
        return user
    else:
        return None