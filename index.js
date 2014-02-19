var pull = require('pull-stream');

function set(key){
  return pull.collect(function(end, data){
    localStorage.setItem(key, data);
  });
}

function get(key){
  var data = localStorage.getItem(key);
  return pull.values([data]);
}

function has(key){
  var result = false;
  if(Object.keys(localStorage).indexOf(key) > -1){
    if(localStorage.getItem(key).length !== 0){
      result = true;
    }
  }
  return result;
}

module.exports = {
  has: has,
  set: set,
  get: get
}
