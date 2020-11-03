from . import db


class Anagram(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stringA = db.Column(db.String(50))
    stringB = db.Column(db.String(50))
