from flask import Flask, request, jsonify, Response, render_template
import json
from gilded_rose import Item

app = Flask(__name__)

Items = []


@app.route("/adding")
def add():
    return render_template('form.html')


@app.route("/additem", methods=['GET', 'POST'])
def addItem():
    if request.method == 'POST':  # this block is only entered when the form is submitted
        name = request.form['name']
        sell_in = request.form['sell_in']  # if key doesn't exist, returns a 400, bad request error
        quality = request.form['quality']
        newItem = Item(name, sell_in, quality)
        Items.append(newItem)
        current_data = []

        for item in Items:
            current_data.append({"name": item.name, "sell_in": item.sell_in, "quality": item.quality})

        return render_template("index.html", data=current_data)


@app.route("/")
def getItems():
    current_data = []

    for item in Items:
        current_data.append({"name": item.name, "sell_in": item.sell_in, "quality": item.quality})

    return render_template("index.html", data=current_data)


app.run()
