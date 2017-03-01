/**
 * @param {?Logger} logger
 */
function ServiceLocator (logger) {
    this._logger = this._validateLogger(logger);
    this._callbacks = {};
    this._services = {};
}

/**
 * set new service callback
 *
 * @param {String}   name
 * @param {Function} callback
 * @return {this}
 */
ServiceLocator.prototype.set = function (name, callback) {

    if (typeof name !== 'string') {
        throw this._createError('set method, name should be a string');
    }

    if (typeof callback !== 'function') {
        throw this._createError(
            'set method, callback should be a function. service name = ' + name
        );
    }

    this._debug('add new service "' + name + '" callback' );

    this._callbacks[name] = callback;

    return this;
};

/**
 * get service by name
 *
 * @param {String} name
 * @return {*}
 */
ServiceLocator.prototype.get = function (name) {
    if (typeof name !== 'string') {
        throw this._createError('get method, name should be a string');
    }

    this._debug('get service by name "' + name + '"');

    var service = null;

    if (this._services[name]) {
        service = this._services[name];
        this._debug('service "' + name + '" already created, return service');
    } else {
        service = this._createService(name);
    }

    return service;
};

/**
 * create service with callback
 *
 * @private
 * @param {String} name
 * @return {*}
 */
ServiceLocator.prototype._createService = function (name) {

    if (typeof this._callbacks[name] === 'undefined') {
        this._debug('no callback for service "' + name + '"');
        return null;
    }

    this._services[name] = this._callbacks[name]();

    this._debug('service created "' + name + '"');

    return this._services[name];

};

/**
 * validate logger
 *
 * @private
 * @param {?Logger} logger
 * @return {Logger|Null}
 */
ServiceLocator.prototype._validateLogger = function (logger) {
    if (!logger) {
        return null;
    }

    if (typeof logger.debug !== 'function') {
        throw this._createError('constructor, no logger.debug method');
    }

    return logger;
};

/**
 * create error
 *
 * @private
 * @param {String} message
 * @return {Error}
 */
ServiceLocator.prototype._createError = function (message) {
    return new Error('maf-service-locator: ' + message);
};

/**
 * log debug if logger exists
 *
 * @private
 */
ServiceLocator.prototype._debug = function () {
    if (
        this._logger &&
        this._logger.debug &&
        typeof this._logger.debug === 'function'
    ) {
        this._logger.debug.apply(this._logger, arguments);
    }
};



module.exports = ServiceLocator;
