var settinger = {};

settinger.settings = {};
settinger.ok = false;

settinger.read = function(address) {
    var fs = require('fs');
    try {
        var data = fs.readFileSync(address, 'utf8');
        settinger.settings = JSON.parse(data);
    } catch (err) {
        return err;
    }
    return settinger.settings;
};

settinger.write = function(address, data) {
    var fs = require('fs');
    try {
        fs.writeFileSync(address, JSON.stringify(data));
    } catch (err) {
        return err;
    }
    return undefined;
};

settinger.checkExists = function(path) {
    var fs = require('fs');
    if (fs.existsSync(path)) {
        return true;
    }
    return false;
}


module.exports = settinger;
