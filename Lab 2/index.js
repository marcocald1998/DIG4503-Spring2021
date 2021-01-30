const Fetch = require('./Fetch.js');

const valid = new Fetch("arcanine" , "#0ECA3A");
valid.fetch();

const invalid = new Fetch("pikapika");
invalid.fetch();