## Examplary module

**This is an examplary module, that is published to NPM.**

**Please ignore this, as this module does not provide any real functionality.**

This module uses [OpenDota API](https://docs.opendota.com) to search for players by player names.

### Installation

```
npm i js-classes-examplary-module
```

### Usage

Create an instance of the module:

```
const Examplary = require('js-classes-examplary-module');
const Instance = new Examplary();
```

Then use it in some async function:

```
const players = await Instance.searchPlayers('some player name');
console.log(players);
```
