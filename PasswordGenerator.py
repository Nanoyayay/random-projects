from datetime import datetime
import requests
import random

print("some password generator i made at 3am (genuinely)")
print("Coded by Nanoyayay on GitHub")
option = input("choose password strength (use hashtags, max 4): ")
if option == "#":
    print("getting passwords...")
    url = "https://raw.githubusercontent.com/Nanoyayay/passgendatabase/refs/heads/database/WeakPasswords?token=GHSAT0AAAAAADIIUUGZSTYNYWROCODBG4EO2EJSAXA"
    response = requests.get(url)
    if response.status_code == 200:
        lines = response.text.splitlines()
        password = random.choice(lines)
        print("Random password:", password)
elif option == "##":
    print("getting passwords...")
    url = "https://raw.githubusercontent.com/Nanoyayay/passgendatabase/refs/heads/database/GoodPasswords?token=GHSAT0AAAAAADIIUUGY6JWQDU6WBJDPYQZM2EJSBEA"
    response = requests.get(url)
    if response.status_code == 200:
        lines = response.text.splitlines()
        password = random.choice(lines)
        print("Random password:", password)
elif option == "###":
    print("getting passwords...")
    url = "https://raw.githubusercontent.com/Nanoyayay/passgendatabase/refs/heads/database/GreatPasswords?token=GHSAT0AAAAAADIIUUGYNLHIK5IHE4LXQVKY2EJSBRQ"
    response = requests.get(url)
    if response.status_code == 200:
        lines = response.text.splitlines()
        password = random.choice(lines)
        print("Random password:", password)
elif option == "####":
    print("getting passwords...")
    url = "https://raw.githubusercontent.com/Nanoyayay/passgendatabase/refs/heads/database/StrongPasswords?token=GHSAT0AAAAAADIIUUGZ5L5RISFOADU5XWHC2EJSBYQ"
    response = requests.get(url)
    if response.status_code == 200:
        lines = response.text.splitlines()
        password = random.choice(lines)
        print("Random password:", password)
else:
    print("Couldn't get passwords. (maybe dinky wifi or you typed a bit too much?)")
receiptwanted = input("Do you want a receipt? (y/n, dont ask why): ")
if receiptwanted.lower() == "y":
    print("Generating receipt...")
    print("------------------------------------------------")
    print("Password:", password)
    print("Strength:", option)
    print("Generated at:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print("Thanks for using Nanoyayay's Password Generator!")
    print("------------------------------------------------")