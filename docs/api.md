# maf-service-locator Public API

```js

class ServiceLocator {

    /**
     * @param {?Logger} logger optional. if passed, should have debug method
     */
    constructor (logger) {}

    /**
     * set new service callback
     *
     * @param {String}   name
     * @param {Function} callback
     * @return {this}
     */
    set (name, callback) {}

    /**
     * return service by name or null if not exists
     *
     * create if not exists and callback present
     *
     * @param {String} name
     * @return {*|Null}
     */
    get (name) {}
}

```

# usage

```js

var ServiceLocator = require('maf-service-locator');
var TaskApi = require('./api/Tasks');
var logger = require('./Logger').getLogger();

var api = new ServiceLocator(logger);

api.set('tasks', function () {
    return new TaskApi();
});

var task = api.get('tasks').getOneById(1);

```
