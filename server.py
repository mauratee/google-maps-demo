
from jinja2 import StrictUndefined
from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)


@app.route("/")
def index():
    """ Show homepage. """

    return render_template("index.html")


@app.route("/map/search")
def search_page():
    """ Render search page. """

    return render_template("search.html")


@app.route("/api/search_address")
def search_use_API():
    """ Take user input from HTML form and send to 
        NYC Geosearch API to get lat lng coordinates
        to render Google Map of search result. """
    
    # request.args.get user input
    text = request.args.get("search_nyc_address")
    # print("*"*40)
    # print(searched_address)

    # send user input to NYC Geosearch
    url = "https://geosearch.planninglabs.nyc/v1/autocomplete"
    payload = {"text": text}
    res = requests.get(url, params=payload)
    data = res.json()
    features = data["features"]
     # save lat lng coordinates of search to variable or render error message
    coordinates = features[0]["geometry"]["coordinates"]
    print("*"*40)
    print(coordinates)
    # ? jsonify lat lng - yes! via AJAX request
    # ? pass lat lng as variable to Jinja - not best practice!

    return jsonify({"coordinates": coordinates})


if __name__ == "__main__":
    app.run(host="0.0.0.0")