***
# NOTICE:
 
## This repository has been archived and is not supported.
 
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***
NOTICE: SUPPORT FOR THIS PROJECT HAS ENDED 

This projected was owned and maintained by Walmart. This project has reached its end of life and Walmart no longer supports this project.

We will no longer be monitoring the issues for this project or reviewing pull requests. You are free to continue using this project under the license terms or forks of this project at your own risk. This project is no longer subject to Walmart's bug bounty program or other security monitoring.


## Actions you can take

We recommend you take the following action:

  * Review any configuration files used for build automation and make appropriate updates to remove or replace this project
  * Notify other members of your team and/or organization of this change
  * Notify your security team to help you evaluate alternative options

## Forking and transition of ownership

For [security reasons](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/), Walmart does not transfer the ownership of our primary repos on Github or other platforms to other individuals/organizations. Further, we do not transfer ownership of packages for public package management systems.

If you would like to fork this package and continue development, you should choose a new name for the project and create your own packages, build automation, etc.

Please review the licensing terms of this project, which continue to be in effect even after decommission.

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
