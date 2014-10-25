## Installation

    npm install folderrouter

## Usage

``` js
var folderRouter = require('folderrouter');

folderRouter('/routes/', app, {
	myoption: true
});
```

#### inside of /routes/ folder
##### Index.js
``` js
/*
 * route.where: /
 * route.method: get
 * route.execute: run
 */


function run(request, response, out, route) {
	response.send(out.myoption);   // true
	console.log(route.method);   // get
}
```

##### OnePlusOne.js
``` js
/*
 * route.where: /opo
 * route.method: get
 * route.execute: run
 */


function run(request, response, out, route) {
	response.send("2");
}
```

#### inside of /routes/add/ folder
##### Index.js
``` js
/*
 * route.where: /
 * route.method: get
 * route.execute: run
 */


function run(request, response, out, route) {
	response.send("hello");
}
```

##### Add.js
``` js
/*
 * route.where: /:a/:b
 * route.method: get
 * route.execute: run
 */


function run(request, response, out, route) {
	response.send(parseInt(request.params.a) + parseInt(request.params.b));
}
```


on `/` returns `true`

on `/opo` returns `2`

on `/add/` returns `hello`

on `/add/1/2` returns `3`