# settinger
A simple setting loader and saver module. It saves your setting object to file or read from file.

# Installation

    $ npm install settinger
    
# Usage

to load:

    var s = require("settinger");

to read:

    var settings = s.read("./settings.json");
    console.log(s);

or

    s.read("./settings.json");
    console.log(s.settings);

to write:

    s.write("./settings.json", data);
    

