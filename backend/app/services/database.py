from typing import *
import random

from app.models import *
from app.extends.error import HttpError


def get_user_info(openid) -> dict:
    user: User = (
        User
            .query
            .filter_by(open_id=openid)
            .first()
    )

    return {"participated": True if user is not None else False}


def get_self_timecapsule(openid: str, offset: int) -> dict:
    count: int = (
        SelfCapsule
            .query
            .filter_by(sender_id=openid)
            .count()
    )
    if count == 0:
        raise HttpError(404, '没有更多了')
    if offset is None:
        offset = 0
    else:
        offset = int(offset) % count

    capsule: SelfCapsule = (
        SelfCapsule
            .query
            .filter_by(sender_id=openid)
            .offset(int(offset))
            .first()
    )

    return capsule.to_dict()


def get_qrcode_timecapsule(openid: str, offset: int) -> dict:
    user: User = (
        User
            .query
            .filter_by(open_id=openid)
            .first()
    )

    if not user:
        raise HttpError(404, "没有参与活动")
    count: int = (
        ToTaCapsules
            .query
            .filter_by(from_qrcode=True, receiver_tel=user.phone)
            .count()
    )
    if count == 0:
        raise HttpError(404, '没有更多了')

    if offset is None:
        offset = 0
    else:
        offset = int(offset) % count
    capsule: ToTaCapsules = (
        ToTaCapsules
            .query
            .filter_by(from_qrcode=True, receiver_tel=user.phone)
            .offset(int(offset))
            .first()
    )

    return capsule.to_dict()


def get_code_timecapsule(code: str) -> dict:
    code = code.upper()
    capsule: ToTaCapsules = (
        ToTaCapsules
            .query
            .filter_by(code=code)
            .first()
    )

    if not capsule:
        raise HttpError(404, "取信码不存在")

    return capsule.to_dict()


def get_stranger_timecapsule(capsule_id: str) -> dict:
    rand_id = random.randint(1, 201)
    while capsule_id and capsule_id.isdigit() and rand_id == int(capsule_id):
        rand_id = random.randint(1, 201)

    capsule: StrangerCapsule = (
        StrangerCapsule
            .query
            .filter_by(capsule_id=rand_id)
            .first()
    )

    return capsule.to_dict()
