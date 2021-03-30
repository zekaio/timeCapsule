from app.extensions import db, Model


class User(Model):
    __tablename__ = 'users'

    uid = db.Column(db.Integer, primary_key=True)
    open_id = db.Column(db.Text)
    nickname = db.Column(db.Text)
    phone = db.Column(db.Text)
    email = db.Column(db.Text)
