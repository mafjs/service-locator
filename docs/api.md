# maf-service-locator Public API

# usage

```js

var ServiceLocator = require('maf-service-locator');

var TaskApi = require('./api/Tasks');

var api = new ServiceLocator();

api.set('tasks', function () {
    return new TaskApi();
});

var task = api.get('tasks').getOneById(1);

```
