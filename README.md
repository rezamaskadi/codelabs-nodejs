# API User #

### What is this? ###

* User service API for web & mobile apps

### How do I get set up? ###

* Install Node.js v8.6.0

* Install npm v5.3.0
    
* Install project dependencies:
    
    - Install all dependencies defined in package.json:
    
        `npm install`
    
* Setup environment variables

    This project uses [dotenv](https://www.npmjs.com/package/dotenv), please configure the proper environment variables before running this application.
    
    - Copy the `.sample-env` file and rename it to `.env`
    - Edit all sample fields with the correct environment variables for the application server
    
* Database migration (using [Sequelize](http://docs.sequelizejs.com)):

    - create model (and migration): `node node_modules/.bin/sequelize model:create --name <model_name> --attributes <attributes>`
    - create migration: `node node_modules/.bin/sequelize migration:create`
    - run: `node node_modules/.bin/sequelize db:migrate`
    - undo: `node node_modules/.bin/sequelize db:migrate:undo`
    - help: `node node_modules/.bin/sequelize help`

* How to run tests:

    `npm test`

* Deployment instructions

    `npm start` or `node index.js`    

### Contribution guidelines ###

* Writing tests:

    This project use [Mocha](http://mochajs.org/) as the testing environment, and [Chai](http://chaijs.com/) as the assertion library.
    This project also provide code coverage using [Istanbul](https://www.npmjs.com/package/istanbul).
    Code coverage report can be viewed in `coverage/lcov-report/index.html` after running test.
    All test files should be located under the `tests` directory.

* Writing code:

    Please fork this repository first for starting a contribution. This project use ESLint as Javascript lint library.
    
    - To run ESlint, type `node node_modules/.bin/eslint .`
    - Fixing code errors, just type `node node_modules/.bin/eslint . --fix`

### Who do I talk to? ###

&copy; [Rakhmatullah Yoga Sutrisna](https://source.gits.id/rakhmatullahyoga) - [PT GITS Indonesia](https://gits.co.id) 2017