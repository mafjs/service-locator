# maf-service-locator

clean simple service locator

[![bitHound Overall Score](https://www.bithound.io/github/mafjs/service-locator/badges/score.svg)](https://www.bithound.io/github/mafjs/service-locator)
[![bitHound Dependencies](https://www.bithound.io/github/mafjs/service-locator/badges/dependencies.svg)](https://www.bithound.io/github/mafjs/service-locator/master/dependencies/npm)
[![Build Status](https://travis-ci.org/mafjs/service-locator.svg?branch=master)](https://travis-ci.org/mafjs/service-locator)
[![Coverage Status](https://coveralls.io/repos/github/mafjs/service-locator/badge.svg?branch=master)](https://coveralls.io/github/mafjs/service-locator?branch=master)

[![NPM](https://nodei.co/npm/maf-service-locator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/maf-service-locator/)

# install

```
npm i maf-service-locator
```

can be used in node.js and in browsers

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

see [docs/api.md](docs/api.md)

# LICENSE

MIT
