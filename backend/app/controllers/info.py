from flask import Blueprint, session

from app.services import database

info_bp = Blueprint('info', __name__, url_prefix='/info')


@info_bp.route('')
def get_user_info():
    return database.get_user_info(session.get("openid"))
