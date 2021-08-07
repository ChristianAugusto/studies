import requests

def getRequest(url):
    response = requests.get(url) # url, data
    if response.status_code == 200:
        return response.json()
    elif response.status_code == 404:
        return False


data = getRequest('https://dog.ceo/api/breeds/list/all')
print(data["message"])