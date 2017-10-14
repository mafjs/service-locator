let ServiceLocator = require('../index');

let logger = {
    debug: function(...args) {
        console.log(...args); // eslint-disable-line no-console
    }
};

let api = new ServiceLocator(logger);

api.set('tasks', function() {
    return {
        getOneById: function(id) {
            return {
                id: id
            };
        }
    };
});

console.log(api.get('tasks').getOneById(1)); // eslint-disable-line no-console
console.log(api.get('tasks').getOneById(1)); // eslint-disable-line no-console
