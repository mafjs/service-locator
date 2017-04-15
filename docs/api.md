# maf-service-locator 0.2.0 API

<!-- toc -->

- [ServiceLocator](#servicelocator)
  - [`constructor ([logger])`](#constructor-logger)
  - [`set (name, callback)`](#set-name-callback)
  - [`get (name)`](#get-name)
  - [`getNames ()`](#getnames-)

<!-- tocstop -->

## ServiceLocator

### `constructor ([logger])`

- `logger` - optional. if passed, should have debug method

### `set (name, callback)`

set new service callback

- `name` - String. name of service
- `callback` - Function. service creation callback

return `this`

### `get (name)`

- `name` - String. name of service

return service object or null, if service not exists

### `getNames ()`

since `0.2.0`

return `Array`. names of services
