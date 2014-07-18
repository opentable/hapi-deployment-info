#Hapi deployment-info
[![Build Status](https://travis-ci.org/opentable/hapi-deployment-info.png?branch=master)](https://travis-ci.org/opentable/hapi-deployment-info) [![NPM version](https://badge.fury.io/js/hapi-deployment-info.png)](http://badge.fury.io/js/hapi-deployment-info) ![Dependencies](https://david-dm.org/opentable/hapi-deployment-info.png)

Shared code for the `deployment-info` endpoint. 

Returns deployment-info (specified in config).

Installation:

```npm install hapi-deployment-info```

Usage:

```
var server = hapi.createServer();

server.pack.require("hapi-deployment-info",
  // data to return
  {
    lastCommitSha: "df45100b52f68d6b8152a10e5200c5853b5202ed",
    lastCommitTimestamp: "2014-07-17T08:42:00Z"
  },
  function (err){
    if(err){
      throw err;
    }
  }
);
```

Routes:

- `/deployment-info`                // returns the deployment info in the config
- `/server`                         // gives the server hostname