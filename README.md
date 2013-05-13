#LocalStore

Local storage library with pull stream api.

##Example

  var request = require('hyperquest');
  var pull = require('pull-stream');
  var pullable = require('stream-to-pullstream');
  var store = require('localstore');

  var pullbaleRequest = pullable(request.get(https://api.github.com/repos/substack/hyperquest))

  //Save the body of the request
  pullableRequest.pipe(store.set('substack.hyperquest'));

  //Get and log request to output
  store.get('substack.hyperquest').pipe(pull.log());


##Methods

  var store = require('store');

###Store.set(key)

Set is a sink stream therefore there can only be one
store set in the pipe.

  request.get('key').pipe(sink())

###Store.get(key)

Get is source stream you can pull from it. It must be at the start
of a pipeline.


##Store JSON

local store currently doesn't have and will not support storing
values as JSON. It is recommend that you use a json stream
transfomer for performing such opperation.


