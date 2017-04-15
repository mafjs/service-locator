var t = require('tap');

var ServiceLocator = require(__dirname + '/../../src/ServiceLocator');


t.test('#constructor: should create without errors', function (t) {
    new ServiceLocator();

    t.end();
});


t.test('#constructor:should create without errors when logger with debug method passed', function (t) {
    var logger = {
        debug: function () {}
    };

    var locator = new ServiceLocator(logger);

    locator.get('test');

    t.end();
});


t.test('#constructor: should throw error when logger has no debug method', function (t) {
    var logger = {};

    t.throws(
        function () {
            new ServiceLocator(logger);
        },
        /maf-service-locator: constructor, no logger.debug method/
    );

    t.end();
});


t.test('#set: should set new service', function (t) {
    var locator = new ServiceLocator();

    var result = locator.set('test', function () {});

    t.ok(result instanceof ServiceLocator);

    t.end();
});

t.test('#set: should throw error if name of service is not a string', function (t) {
    var locator = new ServiceLocator();

    t.throws(
        function () {
            locator.set(null, function () {});
        },
        /maf-service-locator: set method, name should be a string/
    );

    t.throws(
        function () {
            locator.set({}, function () {});
        },
        /maf-service-locator: set method, name should be a string/
    );

    t.throws(
        function () {
            locator.set([], function () {});
        },
        /maf-service-locator: set method, name should be a string/
    );

    t.end();

});

t.test('#set: should throw error if service callback is not a function', function (t) {
    var locator = new ServiceLocator();

    t.throws(
        function () {
            locator.set('test', null);
        },
        /maf-service-locator: set method, callback should be a function. service name = test/
    );

    t.throws(
        function () {
            locator.set('test', {});
        },
        /maf-service-locator: set method, callback should be a function. service name = test/
    );

    t.throws(
        function () {
            locator.set('test', '');
        },
        /maf-service-locator: set method, callback should be a function. service name = test/
    );

    t.end();

});

t.test('#get: should throw error if service name is not a string', function (t) {
    var locator = new ServiceLocator();

    t.throws(
        function () {
            locator.get(null);
        },
        /maf-service-locator: get method, name should be a string/
    );

    t.throws(
        function () {
            locator.get({});
        },
        /maf-service-locator: get method, name should be a string/
    );

    t.throws(
        function () {
            locator.get([]);
        },
        /maf-service-locator: get method, name should be a string/
    );

    t.end();
});

t.test('#get: should return null if no service', function (t) {
    var locator = new ServiceLocator();

    t.ok(locator.get('test') === null);

    t.end();
});

t.test('#get: should create and return service if callback exists', function (t) {

    var locator = new ServiceLocator();

    locator.set('test', function () {
        return {
            name: 'test service name'
        };
    });

    var service = locator.get('test');

    t.ok(typeof service === 'object');
    t.ok(service.name === 'test service name');

    t.end();

});

t.test('#get: should return service if callback already called', function (t) {

    var locator = new ServiceLocator();

    locator.set('test', function () {
        return {
            name: 'test service name'
        };
    });

    locator.get('test');

    var service = locator.get('test');

    t.ok(typeof service === 'object');
    t.ok(service.name === 'test service name');

    t.end();

});


t.test('#getNames: should return name of setted services', function (t) {
    var locator = new ServiceLocator();

    locator.set('test1', function () {

    });

    locator.set('test2', function () {

    });

    locator.set('test0', function () {

    });

    t.same(locator.getNames(), ['test1', 'test2', 'test0']);

    t.end();
});
