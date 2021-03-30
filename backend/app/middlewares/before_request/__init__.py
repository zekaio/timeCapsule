from .is_ongoing import is_ongoing
from .check_wechat_login import check_wechat_login


def before_request():
    is_ongoing()
    check_wechat_login()
