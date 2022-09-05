from flask import Flask, render_template
from translate import *

app = Flask(
    __name__,
    template_folder = "templates",
    static_folder = "static",
    )

@app.route("/")
def render_html():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()