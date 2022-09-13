import flask as fl
from googletrans import Translator

app = fl.Flask(
    __name__,
    template_folder = "templates",
    static_folder = "static",
    )

@app.route("/", methods=['GET', 'POST'])
def render_html():
    return fl.render_template('index.html')

@app.route("/translate", methods=['GET', 'POST'])
def translate_func():
    
    content_type = fl.request.headers.get('Content-Type')
    if (content_type == 'application/json'):
         data = fl.request.get_json()
         print('content type is application/json')
    else:
        print('Error at /translate: request header is not application/json')
        return 'Error at /translate: request header is not application/json'
    print()
    
    '''
    data = fl.request.get_json()
    print(data)
    '''

    # converts full language string of src and dest langs, from client, into one of googletrans's language codes
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
    translated = translator.translate(data['srcLangText'], data['destLang'], data['srcLang'])
    print(translated)

    translated_dict = {
        'text' : translated.text,
        'srcLang' : translated.src,
        'destLang' : translated.dest
    }

    return fl.jsonify(translated_dict)


if __name__ == '__main__':
    app.run()