import * as fsPromises from 'node:fs/promises';

console.log("I am running.");

async function translate() {
    var inputData = {
        srcLangText : null,
        srcLang : null,
        destLang : null
    };
    inputData['srcLangText'] = document.getElementById('src_lang_input').value;
    inputData['srcLang'] = document.getElementById('input-lang-box').value;
    inputData['destLang'] = document.getElementById('output-lang-box').value;

    var jsonInputData = JSON.stringify(inputData);
    /* save json input data to json file, which is to be stored in ../data directory (relative path to this file) */
    var fileHandle = fsPromises.open('../data/input_data.json');
    const promise = fsPromises.writeFile(fileHandle, jsonInputData);
    await promise;

    /* get translated output from other json file (to be stored in save directory by translate.py), parse it into a 
    js object and write the destination language's text to the output box on the webpage */
}