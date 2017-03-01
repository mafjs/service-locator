# maf-service-locator

clean simple service locator

# install

```
npm i maf-service-locator
```

# usage

```js

var ServiceLocator = require('maf-service-locator');

var api = new ServiceLocator();

api.set('tasks', function () {
    var TaskService = require('./TaskService');
    return new TaskService();
});

var task = api.get('tasks').getOneById(1);

```

# API

## constructor (logger)

pass logger if need debug service creation

## set (name \<String>, callback \<Function>)

set new service name and creation callback

## get (name \<String>)

get service by name or null if not exists

# LICENSE

MIT
