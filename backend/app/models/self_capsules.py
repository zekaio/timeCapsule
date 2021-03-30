from app.extends.helper import conver_voice, conver_image
from app.extensions import db, Model


class SelfCapsule(Model):
    __tablename__ = 'selfCapsules'

    capsule_id = db.Column(db.Integer, primary_key=True)

    sender_id = db.Column(db.Text)
    time_limit = db.Column(db.Text)

    content_word = db.Column(db.Text)
    content_pic = db.Column(db.Text)
    content_voice = db.Column(db.Text)

    def to_dict(self):
        return {
            "content": self.content_word,
            "pic": [conver_image(img) for img in eval(self.content_pic)],
            "voice": self.content_voice if self.content_voice is None else conver_voice(self.content_voice)
        }
