import requests
import time

def ping_endpoint():
    url = 'http://localhost:8000/'
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print("ping exitoso!")
        else:
            print(f"Error en el ping: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error en el ping: {e}")

if __name__ == "__main__":
    while True:
        ping_endpoint()
        time.sleep(60 * 10) # Each 10 minutes