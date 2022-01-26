
from jinja2 import StrictUndefined
from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    """ Show homepage. """

    return render_template("index.html")


@app.route("/map/search")
def search_page():
    """ Render search page. """

    return render_template("search.html")


@app.route("/search_address")
def search_use_API():
    """ Take user input from HTML form and send to 
        NYC Geosearch API to get lat lng coordinates
        to render Google Map of search result. """
    
    # request.args.get user input
    # send user input to NYC Geosearch
    # save lat lng coordinates of search to variable or render error message
    # ? jsonify lat lng ?
    # ? pass lat lng as variable to Jinja

    return render_template("searched_map.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")