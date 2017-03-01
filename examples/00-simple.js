var ServiceLocator = require('../index');

var logger = {
    debug: function () {
        console.log.apply(console, arguments);
    }
};

var api = new ServiceLocator(logger);

api.set('tasks', function () {
    return {
        getOneById: function (id) {
            return {
                id: id
            };
        }
    };
});

console.log(api.get('tasks').getOneById(1));
console.log(api.get('tasks').getOneById(1));
