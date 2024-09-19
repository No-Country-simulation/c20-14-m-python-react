import requests
import time

def ping_endpoint():
    url = 'https://skillup-pi83.onrender.com'
    try:
        response = requests.get(url)
        if response.status_code == 404:
            print("ping exitoso!")
        else:
            print(f"Error en el ping: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error en el ping: {e}")

if __name__ == "__main__":
    while True:
        ping_endpoint()
        time.sleep(60 * 10) # Each 10 minutes