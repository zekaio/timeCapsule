import hashlib
import base64


def conver_image(img):
    return f'{hashlib.md5(img.encode(encoding="UTF-8")).hexdigest()}.jpg'


def conver_voice(voice):
    return f'{hashlib.md5(voice.encode(encoding="UTF-8")).hexdigest()}.mp3'
