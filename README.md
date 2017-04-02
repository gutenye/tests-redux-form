Getting Started
---------------

[Online Demo](http://gutenye.github.io/tests-redux-form)

Implements

- redux-form
- Animations between step transitions and to the progress bar.
- Unit tests for reducers and components
- Validation

Tested on latest Chrome.

View result

```
$ npm install -g http-server
$ http-server build
```

Run in Development

```
$ yarn
$ yarn start    // start dev server
```

Run test

```
$ yarn test     // run tests
```

Hacking Code
------------

Source code structure

```
src/
  pages/              // pages and components
  components/         // shared components
  states/             // redux reducer and actions
  validations/        // validation utils
  assets/             // svg icons
```

For simplicity, I use a simple webpack.config.js configuration. Future improvements includes:

- Use next.js: support SSR, code-spliting by default.
- Use styled-components: powerful css-in-js styling.
- Add Progressive Web App support.

Copyright
----------

(the MIT License)

Copyright (c) 2017 Guten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
