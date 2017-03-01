# maf-service-locator

clean simple service locator

[![bitHound Overall Score](https://www.bithound.io/github/mafjs/service-locator/badges/score.svg)](https://www.bithound.io/github/mafjs/service-locator)
[![bitHound Dependencies](https://www.bithound.io/github/mafjs/service-locator/badges/dependencies.svg)](https://www.bithound.io/github/mafjs/service-locator/master/dependencies/npm)
[![Build Status](https://travis-ci.org/mafjs/service-locator.svg?branch=master)](https://travis-ci.org/mafjs/service-locator)
[![Coverage Status](https://coveralls.io/repos/github/mafjs/service-locator/badge.svg?branch=master)](https://coveralls.io/github/mafjs/service-locator?branch=master)

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
