

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
  TreeMap
 } = require("./tree"),
    { 
  create,
  extend,
  mixin,
  cond
 } = require("kit/js/util");
var ProbabilityTree = Interface.define("ProbabilityTree", { 
  init( value = this.value,parent = this.parent,_children = (new Map()) ){ 
    
      this.value = value;this.parent = parent;this._children = _children;
      return this;
    
   },
  extend:TreeMap,
  get seq(  ){ 
    
      return this.value.seq;
    
   },
  get count(  ){ 
    
      var self = this;
      return (this.value) ? this.value.count : (function(r) {
        /* ../../node_modules/kit/inc/macros.sibilant:162:9 */
      
        self.each((node) => {
        	
          return (function() {
            if (node.value) {
              return r += node.value.count;
            }
          }).call(this);
        
        });
        return r;
      })(0);
    
   },
  get likelyhood(  ){ 
    
      return (this.count / this._model.total);
    
   },
  set count( v ){ 
    
      return (function() {
        if (this.value) {
          return this.value.count = v;
        } else {
          return this.value = { 
            count:v
           };
        }
      }).call(this);
    
   }
 });
exports.ProbabilityTree = ProbabilityTree;