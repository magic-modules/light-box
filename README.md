## @magic-modules/light-box

this is the [@magic-modules](https://github.com/magic-modules)
[Xkcd](https://xckd.com) component. It loads comic strips from imgs.light-box.com.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:
```bash
npm install --save-exact @magic-modules/light-box
```

#### usage:

```javascript
LightBox('/img/img.png')
```

```
<LightBox
  state
  img="https://imgs.xkcd.com/comics/digital_data.png"
  right="true"
  width="389"
  url="https://www.brainlesstales.com/"
  text="comic by brainlesstales">
</LightBox>
```

#### changelog

##### 0.0.1
first release.

##### 0.0.2
* fix image sizes
* image hover has cursor: pointer

##### 0.0.3 
bump required node version to 14.2.0

##### 0.0.4 - unreleased
...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/light-box.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/light-box
[travis-image]: https://img.shields.io/travis/com/magic-modules/light-box/master
[travis-url]: https://travis-ci.com/magic-modules/light-box
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/light-box/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/light-box/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/light-box/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/light-box
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/light-box.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/light-box.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/light-box/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/light-box
