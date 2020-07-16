# -*- coding: utf-8 -*-

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='postgresql://postgres:90210@localhost:5432/store'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)




class Items(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    quality_score = db.Column(db.Integer)
    expiration_date = db.Column(db.DateTime)
    #category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)

def __init__(self, name, quality_score, expiration_date):
 
    self.name = name
    self.quality_score = quality_score
    self.expiration_date = expiration_date


class Categories(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    #items = db.relationship('Items', backref='items', lazy=True)


@app.route('/items/create', methods = ['POST'])
def insert():

    if request.method == 'POST':

        name = request.form['name']
        quality_score = request.form['quality_score']
        expiration_date = request.form['expiration_date']

        my_items = Items(name, quality_score, expiration_date)
        db.session.add(my_items)
        db.session.commit()

        flash("Items were Inserted Successfully")

        return redirect(url_for('Index'))



@app.route('/')
def Index():
        all_items = Items.query.all()



if __name__ == '__main__':
        app.run()
