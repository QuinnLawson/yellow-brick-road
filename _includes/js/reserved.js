// bad
var superman = {
  default: { clark: 'kent' },
  private: true
};
var superman = {
  class: 'alien'
};
var superman = {
  klass: 'alien'
};

// good
var superman = {
  defaults: { clark: 'kent' },
  hidden: true
};
var superman = {
  type: 'alien'
};