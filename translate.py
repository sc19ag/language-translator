from googletrans import Translator

translator = Translator()

# Here, I need to pass the input text from the user input, in the html, to the translate() function AND ensure the 
# src and dest language parameters of the translate() function match that of the drop-down boxes in the html document
# translator.translate(input text, dest lang as string (language code from googletrans required), src lang as string)