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

inside of /route/add/ folder, Index.js
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

If client calls / folderRouter calls /route/Index.js.
if client calls /add/ folderRouter calls /route/add/Index.js
Index.js not important, important thing is inside of file top of comments.
route info should be defined..