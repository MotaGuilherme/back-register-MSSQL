# bad-request-error
BadRequestError is a custom error constructor for HTTP errors (bad parameters, forbidden, unauthorized…).
It takes an error message as first parameter and optionally a [HTTP error code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors) as second parameter (defaults to `400`).

## Installation
It requires at least Node V6 as it uses JavaScript classes.

```
npm install --save bad-request-error
```

## Usage
In addition to the [native `Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) constructor properties, `BadRequestError` adds `httpStatus` and has its `name` property set to `BadRequestError`.

```js
const BadRequestError = require('bad-request-error');

async function addComment(req, res) {
    await const isCorrectPasswd = checkPasswd(req);
    if (!isCorrectPasswd) return throw new BadRequestError('Your password looks wrong', 401);

    // whatever you have to do if password is correct
}
```

It's very convenient to use it with an error handler function like the following:

```js
// /lib/handleError.js

/**
 * Send client err if it's validation error or log if it's a native or low level error
 * @param { Object } err error object
 * @param { Object } res
 */
function handleError(err, res) {
    // send errmsg to user if it's a BadRequestError
    if (res && err.name && err.name === 'BadRequestError') {
        res.status(err.httpStatus).json({ error: err.message });
        return;
    }

    // send http err if res object is provided
    if (res) res.status(500).send('Server Error');

    // if it's more low level, or if errorField isn't an error's propt
    console.error(err); // or custom logger like winston
}

module.exports = handleError;
```

If using promises, the error is easily handled in a catch block.

```js
const BadRequestError = require('bad-request-error');
const handleError = require('/lib/handleError');

// this function return a promise with the same BadRequestError as above if password doesn't match
// BadRequestError('Your password looks wrong', 401);
function checkPasswd(passwd) {}

function addComment(req, res) {
    checkPasswd(req.body.passwd)
    .then(() => {
        // whatever you have to do if password is correct
    })
    .catch(err => handleError(err, res));
}
```

## Contributing
There's sure room for improvement, so feel free to hack around and submit PRs!
Please just follow the style of the existing code, which is [Airbnb's style](http://airbnb.io/javascript/) with [minor modifications](.eslintrc).

To maintain things clear and visual, please follow the [git commit template](https://github.com/Buzut/git-emojis-hook).
