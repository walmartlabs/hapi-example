***
# NOTICE:
 
## This repository has been archived and is not supported.
 
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***

Walmart HAPI Example
====================

This is the simplest possible example that we could come up with that
uses the [Walmart API wrapper](https://www.npmjs.com/package/walmart). It
should not be viewed as an example of how we code at Walmart.

This example uses [Hapi](http://hapijs.com/) if you want to use
express instead [try here](https://github.com/walmartlabs/express-example).

## Install

```
npm install
```

## Setting up your environment

You need a [key from Walmart](https://developer.walmartlabs.com/member).
And then you need to set that in your environment:

```
export WALMART_API_KEY=THE_KEY_YOU_JUST_GOT
```

### Run

```
npm start
```

From there, navigate to the [home page](http://127.0.0.1:3000/).
