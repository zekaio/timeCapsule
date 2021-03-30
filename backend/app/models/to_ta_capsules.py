from app.extends.helper import conver_image, conver_voice

from app.extensions import db, Model


class ToTaCapsules(Model):
    __tablename__ = 'toTaCapsules'

    capsule_id = db.Column(db.Integer, primary_key=True)

    code = db.Column(db.Text)  # 取信码
    sender_id = db.Column(db.Text)
    time_limit = db.Column(db.Text)
    from_qrcode = db.Column(db.Boolean)

    content_word = db.Column(db.Text)
    content_pic = db.Column(db.Text)
    content_voice = db.Column(db.Text)

    receiver_name = db.Column(db.Text)
    receiver_tel = db.Column(db.Text)
    receiver_email = db.Column(db.Text)

    content_name = db.Column(db.Text)
    content_phone = db.Column(db.Text)
    wechat = db.Column(db.Text)
    QQ = db.Column(db.Text)
    email = db.Column(db.Text)

    def to_dict(self):
        return {
            "content": self.content_word,
            "pic": [conver_image(img) for img in eval(self.content_pic)],
            "voice": self.content_voice if self.content_voice is None else conver_voice(self.content_voice)
        }
