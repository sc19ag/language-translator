/* import * as fsPromises from 'node:fs/promises'; */

console.log("I am running.");

function translate() {
    var inputData = {
        srcLangText : document.getElementById('src_lang_input').value,
        srcLang : document.getElementById('input-lang-box').value,
        destLang : document.getElementById('output-lang-box').value
    };
    /*    
    inputData['srcLangText'] = document.getElementById('src_lang_input').value;
    inputData['srcLang'] = document.getElementById('input-lang-box').value;
    inputData['destLang'] = document.getElementById('output-lang-box').value; */

    var jsonInputData = JSON.stringify(inputData);
    
    /* send jsonInputData to /translate resource in flask app via a http POST request */


    /* receive the response from the http POST request containing the translated text in json form and display this in the 
    output box on the webpage */


    
    /* save json input data to json file, which is to be stored in ../data directory (relative path to this file) */
    /* var fileHandle = fsPromises.open('../data/input_data.json');
    const promise = fsPromises.writeFile('../data/input_data.json', jsonInputData); 
    await promise; */

    /* get translated output from other json file (to be stored in save directory by translate.py), parse it into a 
    js object and write the destination language's text to the output box on the webpage */
}