

(function(a, b, c) {
  /* ../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry((f, a) => {
	
  return a.map(f);

});
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? ../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Model,
  ProbabilityTree
 } = require("./index");
var { 
  create,
  extend,
  mixin,
  cond
 } = require("kit/js/util"),
    { 
  Interface
 } = require("./lib/interface");
(function() {
  /* tests.sibilant:8:0 */

  var m = create(Model)();
  m.train(4, [ "a", "a", "b", "b", "c", "d", "a", "b", "t", "g", "g", "t", "a", "a", "g", "r", "t", "y", "w", "r", "q", "g", "d", "f", "q", "a", "f", "h", "e", "a" ]);
  console.log("random string", m.generateRandomPhrase(50));
  var t = m.random();
  console.log(t);
  console.log(t.likelyhood);
  m.degrade(t.seq);
  return console.log(t.likelyhood);
}).call(this);