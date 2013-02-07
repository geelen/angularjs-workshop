# AngularFTW Recap - Seek.com.au 4th February, 2013

This repository has all the information presented in Monday's session, for your reference.

## Getting started

- Install [Yeoman](http://yeoman.io/)
- `cd presentation && yeoman server`
- Open http://localhost:3500

## Individual Examples

All the examples live in `/examples/nr/file.html`, and should be able to be opened directly.
E.g. `open examples/1/basics.html`

## Testing

The testing part of the course was covered in the `demo` repository.
The 'unit'-level test files live in `demo/spec/controllers` and `demo/spec/directives`.
The end-to-end tests, and runner, live in `demo/app/test`.

Recall that it's `cd demo && testacular start` to fire up the unit tests and watch for changes.
It's also possible to use `yeoman test` to run a once-off test.

If you want to run the e2e tests, fire up the server using `yeoman server` then `open http://localhost:3501/test/runner.html`

## App Structure

The discussion around application structure, communication and refactoring was introduced in the `gifs` directory.
Check `gifs/app/scripts/controllers` and `gifs/app/scripts/services`.

Again, run `yeoman server` and hit `http://localhost:3502/` to see the code working.

## Useful links

- http://angularjs.org/ - watch the intro videos
- http://docs.angularjs.org/guide/directive - bookmark this
- http://docs.angularjs.org/api/ - keep this open for the rest of your life
- http://egghead.io/ - every one of these videos is great
- http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-testacular.html - a great discussion about testing your app at different levels.
- https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en - the AngularJS Batarang Chrome Extension
- http://builtwith.angularjs.org/ - real world AngularJS apps

## Worthwhile blog posts

- http://blog.appfog.com/angularjs-the-beauty-of-concision/
- http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html
- http://blog.akquinet.de/2013/01/22/maintainable-rich-web-applications-with-angularjs/
- http://dailyjs.com/2012/11/08/angularjs-pitfalls/
- 

## Feedback form

If you've got a few minutes, would you mind filling out an [anonymous feedback form](https://docs.google.com/forms/d/1wuMNeQyPQZW9mZKsZTEtAbY6_6mkQq_RMdWptcqavLk/viewform)
on the course so I can improve it in future?

## Questions?

If you have an AngularJS question, please get in touch. Best way is through twitter - I'm [@glenmaddern](http://twitter.com/glenmaddern).

