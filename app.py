from urllib import request
from flask import Flask, render_template, jsonify
from googletrans import Translator

app = Flask(
    __name__,
    template_folder = "templates",
    static_folder = "static",
    )

@app.route("/")
def render_html():
    return render_template('index.html')

@app.route("/translate", methods=['POST'])
def translate_func():
    data = request.get_json()

    # converts full language string of src and dest langs from client into one of googletrans's language codes
    if data['srcLang'] == 'English':
        data['srcLang'] = 'en'
    elif data['srcLang'] == 'French':
        data['srcLang'] = 'fr'
    elif data['srcLang'] == 'Turkish':
        data['srcLang'] = 'tr'
    
    if data['destLang'] == 'English':
        data['destLang'] = 'en'
    elif data['destLang'] == 'French':
        data['destLang'] = 'fr'
    elif data['destLang'] == 'Turkish':
        data['destLang'] = 'tr'

    translator = Translator()
    translated = translator.translate(data['srcLangText'], data['srcLang'], data['destLang'])

    return jsonify(translated)


if __name__ == '__main__':
    app.run()