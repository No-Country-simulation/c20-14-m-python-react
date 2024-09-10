from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from .tokens import account_activation_token
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail



def send_verification_email(request, user):
    domain = get_current_site(request).domain
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = account_activation_token.make_token(user)

    mail_subject = "Activate your user account."
    content = f'http://{domain}/activate/{uid}/{token}'

    message = Mail(
        from_email=os.getenv('DEFAULT_FROM_EMAIL', '<EMAIL>'),
        to_emails=user.email,
        subject=mail_subject,
        html_content=content)
    print(message)
    try:
        sg = SendGridAPIClient(api_key=os.getenv('SENDGRID_API_KEY', '1234'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e)

    return message


def validate_token(uidb64, token):
    user = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = user.objects.get(pk=uid)
    except:
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        return user
    else:
        return None
