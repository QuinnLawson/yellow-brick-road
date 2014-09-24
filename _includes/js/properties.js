var luke = {
  jedi: true,
  age: 28
};

// bad
var isJedi = luke['jedi'];

// good
var isJedi = luke.jedi;

function getProp(prop) {
  return luke[prop];
}
var isJedi = getProp('jedi');