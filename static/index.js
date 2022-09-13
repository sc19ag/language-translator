
function translate() {
    var inputData = {
        srcLangText : document.getElementById('src_lang_input').value,
        srcLang : document.getElementById('input-lang-box').value,
        destLang : document.getElementById('output-lang-box').value
    };

    var jsonInputData = JSON.stringify(inputData);

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: jsonInputData
    };
    
    /* send jsonInputData to /translate resource in flask app via a http POST request, recieve the translated text as json response
     and "print" translated text to output box on webpage */
    fetch('/translate', options).then(response => response.json()).then(json => {
        let keys = Object.keys(json);
        if(keys[1] == 'srcLang') {
            document.getElementById('dest_lang_output').value = json.text;
        } else {
            alert(json.errorMessage)
        }
    });
}
