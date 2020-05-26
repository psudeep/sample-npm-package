# sample npm package
NPM package boiler plate for anyone to clone and get started

- node version: `v12.16.1` check `.nvmrc` file `nvm use`
- install packages: `npm install`
- command to run: `npm run build` - project uses typescript
- if you have already run this command before, remove the lib folder and run the above command again

### format command

- `npm run lint`
- `npm run format`


### how to use this module:
- add below in client package.json(ex: psudeep/app/package.json)
  - "@psudeep/sample-npm-package": "^0.0.1",


### steps to publish package in public mode

- for private package you need to pay to npm
- `npm login` run this command in your package directory
- enter the username and password of npmjs.com account
- run the command `npm publish --access public`
- access your package on https://www.npmjs.com/package/@psudeep/sample-npm-package  


