import time
import requests


API_BASE_URL = "https://skillup-pi83.onrender.com"


def ping():
    while True:
        try:
            response = requests.get(API_BASE_URL)
            print(f"pong - Status code: {response.status_code}")
        except Exception as e:
            print(f"Error pinging server: {e}")

        # Esperar 15 minutos
        time.sleep(60)


if __name__ == "__main__":
    ping()