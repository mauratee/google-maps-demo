
from jinja2 import StrictUndefined
from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    """ Show homepage. """

    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")