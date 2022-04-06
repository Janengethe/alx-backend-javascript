## Javascript

### Setup
#### Install NodeJS 12.11.x
> (in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

#### Install Jest, Babel, and ESLint
> in your project directory:

* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`

##### Configuration files
`package.json`
`babel.config.js`
`.eslintrc.js`

* Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

### File tests
* Use `npx eslint <filename>` to fix lint.
* Run `npm run dev <filename>` for the scripts.