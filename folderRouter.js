/*jslint node: true, evil: true, regexp: true, sloppy: true*/

var fs = require('fs'),
    regExp = new RegExp(/catview\.(\w+)\s*:\s*(.+)/g);

module.exports = function (path, app, $in) {
    var files = fs.readdirSync(path),
        key,
        file,
        temp;

	for (key = 0; key < files.length; key += 1) {
		file = {
			data: String(fs.readFileSync(path + files[key])),
			view: "*",
			call: "run",
			method: "get"
		};

		while ((temp = regExp.exec(file.data)) !== null) {
			file[temp[1]] = temp[2];
		}

		eval("app." + file.method + "('" + file.view.replace(/\'/g, "\\'") + "',function() {\r\n" + file.data + "\r\nif(" + file.call + ") {" + file.call + "(arguments[0], arguments[1], $in, file);\r\n}});");
	}
};