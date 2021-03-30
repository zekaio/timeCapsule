from flask import Blueprint, session, request

from app.services import database

timecapsule_bp = Blueprint('timecapsule', __name__, url_prefix='/timecapsules')


# 写给自己
@timecapsule_bp.route('/me')
def get_self_timecapsule():
    return database.get_self_timecapsule(session.get('openid'), request.args.get('offset'))


# 取信二维码
@timecapsule_bp.route('/qrcode')
def get_qrcode_timecapsule():
    return database.get_qrcode_timecapsule(session.get('openid'), request.args.get('offset'))


# 取信码
@timecapsule_bp.route('/code')
def get_code_timecapsule():
    return database.get_code_timecapsule(request.args.get('code'))


# 陌生人
@timecapsule_bp.route('/stranger')
def get_stranger_timecapsule():
    return database.get_stranger_timecapsule(request.args.get('code'))
