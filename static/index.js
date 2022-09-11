
function translate() {
    var inputData = {
        srcLangText : document.getElementById('src_lang_input').value,
        srcLang : document.getElementById('input-lang-box').value,
        destLang : document.getElementById('output-lang-box').value
    };

    var jsonInputData = JSON.stringify(inputData);
    console.log('jsonInputData = ' + jsonInputData);

    const options = {
        content: 'application/json',
        method: 'POST',
        body: jsonInputData
    };

    /*    
    inputData['srcLangText'] = document.getElementById('src_lang_input').value;
    inputData['srcLang'] = document.getElementById('input-lang-box').value;
    inputData['destLang'] = document.getElementById('output-lang-box').value; */
    
    /* send jsonInputData to /translate resource in flask app via a http POST request, recieve the translated text as json response
     and convert this json response into an object containing the translated text */
    var translated = {};
    fetch('/translate', options).then(response => response.json()).then(response => {
        translated = JSON.parse(response);
    });

    /* display the translated text in the output box on the webpage */
    document.getElementById('dest_lang_output').innerHTML = translated;

    
    /* save json input data to json file, which is to be stored in ../data directory (relative path to this file) */
    /* var fileHandle = fsPromises.open('../data/input_data.json');
    const promise = fsPromises.writeFile('../data/input_data.json', jsonInputData); 
    await promise; */

    /* get translated output from other json file (to be stored in save directory by translate.py), parse it into a 
    js object and write the destination language's text to the output box on the webpage */
}

/*
console.log("I am running.");

var src_lang_input_val = document.getElementById('src_lang_input').value;
if (src_lang_input_val !== undefined && src_lang_input_val !== null) {
    console.log('src_lang_input_val is true');
}
*/

console.log("src_lang_input value: " + document.getElementById('src_lang_input').value);
