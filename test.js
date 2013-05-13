var test = require('tape');
var store = require('./index');
var pull = require('pull-stream');


test('set key and value', function(t){
  t.plan(1);
  pull.values(['testString']).pipe(store.set('testString'));
  var testDataStored = localStorage.getItem('testString');
  t.is(testDataStored, 'testString', 'the data is stord and correct');
});


test('get value from key', function(t){
  t.plan(1);
  store.get('testString').pipe(pull.collect(function(end, data){
    t.is(data[0], 'testString', 'the data is stord and correct');
  }));
});