from flask import Flask, request, jsonify, Response, render_template
import json
from gilded_rose import Item, GildedRose

app = Flask(__name__)

current_data = []


@app.route("/adding")
def add():
    return render_template('form.html')


@app.route("/additem", methods=['GET', 'POST'])
def addItem():
    if request.method == 'POST':  # this block is only entered when the form is submitted
        name = request.form['name']
        sell_in = request.form['sell_in']  # if key doesn't exist, returns a 400, bad request error
        quality = request.form['quality']
        # newItem = Item(name, sell_in, quality)
        # Items.append(newItem)
        current_data.append({"name": name, "sell_in": sell_in, "quality": quality})

        return render_template("index.html", data=current_data)


@app.route("/")
def getItems():
    return render_template("index.html", data=current_data)


@app.route('/update/<index>', methods=["POST"])
def update(index):
    newObj = current_data[int(index) - 1]
    print(newObj)
    updatedObj = GildedRose(newObj)
    updatedObj.update_quality()
    current_data[int(index) - 1] = {"name": updatedObj.name, "sell_in": updatedObj.sell_in,
                                    "quality": updatedObj.quality}
    return render_template("index.html", data=current_data)


app.run()
