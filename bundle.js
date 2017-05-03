(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let R = require('ramda'),
    square = function square(x) {
        return x * x;
    },
    squares = R.chain(square, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
document.getElementById('response').innerHTML = squares;

},{"ramda":2}],2:[function(require,module,exports){
module.exports={F:require("./src/F"),T:require("./src/T"),__:require("./src/__"),add:require("./src/add"),addIndex:require("./src/addIndex"),adjust:require("./src/adjust"),all:require("./src/all"),allPass:require("./src/allPass"),always:require("./src/always"),and:require("./src/and"),any:require("./src/any"),anyPass:require("./src/anyPass"),ap:require("./src/ap"),aperture:require("./src/aperture"),append:require("./src/append"),apply:require("./src/apply"),applySpec:require("./src/applySpec"),ascend:require("./src/ascend"),assoc:require("./src/assoc"),assocPath:require("./src/assocPath"),binary:require("./src/binary"),bind:require("./src/bind"),both:require("./src/both"),call:require("./src/call"),chain:require("./src/chain"),clamp:require("./src/clamp"),clone:require("./src/clone"),comparator:require("./src/comparator"),complement:require("./src/complement"),compose:require("./src/compose"),composeK:require("./src/composeK"),composeP:require("./src/composeP"),concat:require("./src/concat"),cond:require("./src/cond"),construct:require("./src/construct"),constructN:require("./src/constructN"),contains:require("./src/contains"),converge:require("./src/converge"),countBy:require("./src/countBy"),curry:require("./src/curry"),curryN:require("./src/curryN"),dec:require("./src/dec"),descend:require("./src/descend"),defaultTo:require("./src/defaultTo"),difference:require("./src/difference"),differenceWith:require("./src/differenceWith"),dissoc:require("./src/dissoc"),dissocPath:require("./src/dissocPath"),divide:require("./src/divide"),drop:require("./src/drop"),dropLast:require("./src/dropLast"),dropLastWhile:require("./src/dropLastWhile"),dropRepeats:require("./src/dropRepeats"),dropRepeatsWith:require("./src/dropRepeatsWith"),dropWhile:require("./src/dropWhile"),either:require("./src/either"),empty:require("./src/empty"),eqBy:require("./src/eqBy"),eqProps:require("./src/eqProps"),equals:require("./src/equals"),evolve:require("./src/evolve"),filter:require("./src/filter"),find:require("./src/find"),findIndex:require("./src/findIndex"),findLast:require("./src/findLast"),findLastIndex:require("./src/findLastIndex"),flatten:require("./src/flatten"),flip:require("./src/flip"),forEach:require("./src/forEach"),forEachObjIndexed:require("./src/forEachObjIndexed"),fromPairs:require("./src/fromPairs"),groupBy:require("./src/groupBy"),groupWith:require("./src/groupWith"),gt:require("./src/gt"),gte:require("./src/gte"),has:require("./src/has"),hasIn:require("./src/hasIn"),head:require("./src/head"),identical:require("./src/identical"),identity:require("./src/identity"),ifElse:require("./src/ifElse"),inc:require("./src/inc"),indexBy:require("./src/indexBy"),indexOf:require("./src/indexOf"),init:require("./src/init"),insert:require("./src/insert"),insertAll:require("./src/insertAll"),intersection:require("./src/intersection"),intersectionWith:require("./src/intersectionWith"),intersperse:require("./src/intersperse"),into:require("./src/into"),invert:require("./src/invert"),invertObj:require("./src/invertObj"),invoker:require("./src/invoker"),is:require("./src/is"),isArrayLike:require("./src/isArrayLike"),isEmpty:require("./src/isEmpty"),isNil:require("./src/isNil"),join:require("./src/join"),juxt:require("./src/juxt"),keys:require("./src/keys"),keysIn:require("./src/keysIn"),last:require("./src/last"),lastIndexOf:require("./src/lastIndexOf"),length:require("./src/length"),lens:require("./src/lens"),lensIndex:require("./src/lensIndex"),lensPath:require("./src/lensPath"),lensProp:require("./src/lensProp"),lift:require("./src/lift"),liftN:require("./src/liftN"),lt:require("./src/lt"),lte:require("./src/lte"),map:require("./src/map"),mapAccum:require("./src/mapAccum"),mapAccumRight:require("./src/mapAccumRight"),mapObjIndexed:require("./src/mapObjIndexed"),match:require("./src/match"),mathMod:require("./src/mathMod"),max:require("./src/max"),maxBy:require("./src/maxBy"),mean:require("./src/mean"),median:require("./src/median"),memoize:require("./src/memoize"),merge:require("./src/merge"),mergeAll:require("./src/mergeAll"),mergeWith:require("./src/mergeWith"),mergeWithKey:require("./src/mergeWithKey"),min:require("./src/min"),minBy:require("./src/minBy"),modulo:require("./src/modulo"),multiply:require("./src/multiply"),nAry:require("./src/nAry"),negate:require("./src/negate"),none:require("./src/none"),not:require("./src/not"),nth:require("./src/nth"),nthArg:require("./src/nthArg"),objOf:require("./src/objOf"),of:require("./src/of"),omit:require("./src/omit"),once:require("./src/once"),or:require("./src/or"),over:require("./src/over"),pair:require("./src/pair"),partial:require("./src/partial"),partialRight:require("./src/partialRight"),partition:require("./src/partition"),path:require("./src/path"),pathEq:require("./src/pathEq"),pathOr:require("./src/pathOr"),pathSatisfies:require("./src/pathSatisfies"),pick:require("./src/pick"),pickAll:require("./src/pickAll"),pickBy:require("./src/pickBy"),pipe:require("./src/pipe"),pipeK:require("./src/pipeK"),pipeP:require("./src/pipeP"),pluck:require("./src/pluck"),prepend:require("./src/prepend"),product:require("./src/product"),project:require("./src/project"),prop:require("./src/prop"),propEq:require("./src/propEq"),propIs:require("./src/propIs"),propOr:require("./src/propOr"),propSatisfies:require("./src/propSatisfies"),props:require("./src/props"),range:require("./src/range"),reduce:require("./src/reduce"),reduceBy:require("./src/reduceBy"),reduceRight:require("./src/reduceRight"),reduceWhile:require("./src/reduceWhile"),reduced:require("./src/reduced"),reject:require("./src/reject"),remove:require("./src/remove"),repeat:require("./src/repeat"),replace:require("./src/replace"),reverse:require("./src/reverse"),scan:require("./src/scan"),sequence:require("./src/sequence"),set:require("./src/set"),slice:require("./src/slice"),sort:require("./src/sort"),sortBy:require("./src/sortBy"),sortWith:require("./src/sortWith"),split:require("./src/split"),splitAt:require("./src/splitAt"),splitEvery:require("./src/splitEvery"),splitWhen:require("./src/splitWhen"),subtract:require("./src/subtract"),sum:require("./src/sum"),symmetricDifference:require("./src/symmetricDifference"),symmetricDifferenceWith:require("./src/symmetricDifferenceWith"),tail:require("./src/tail"),take:require("./src/take"),takeLast:require("./src/takeLast"),takeLastWhile:require("./src/takeLastWhile"),takeWhile:require("./src/takeWhile"),tap:require("./src/tap"),test:require("./src/test"),times:require("./src/times"),toLower:require("./src/toLower"),toPairs:require("./src/toPairs"),toPairsIn:require("./src/toPairsIn"),toString:require("./src/toString"),toUpper:require("./src/toUpper"),transduce:require("./src/transduce"),transpose:require("./src/transpose"),traverse:require("./src/traverse"),trim:require("./src/trim"),tryCatch:require("./src/tryCatch"),type:require("./src/type"),unapply:require("./src/unapply"),unary:require("./src/unary"),uncurryN:require("./src/uncurryN"),unfold:require("./src/unfold"),union:require("./src/union"),unionWith:require("./src/unionWith"),uniq:require("./src/uniq"),uniqBy:require("./src/uniqBy"),uniqWith:require("./src/uniqWith"),unless:require("./src/unless"),unnest:require("./src/unnest"),until:require("./src/until"),update:require("./src/update"),useWith:require("./src/useWith"),values:require("./src/values"),valuesIn:require("./src/valuesIn"),view:require("./src/view"),when:require("./src/when"),where:require("./src/where"),whereEq:require("./src/whereEq"),without:require("./src/without"),xprod:require("./src/xprod"),zip:require("./src/zip"),zipObj:require("./src/zipObj"),zipWith:require("./src/zipWith")};
},{"./src/F":3,"./src/T":4,"./src/__":5,"./src/add":6,"./src/addIndex":7,"./src/adjust":8,"./src/all":9,"./src/allPass":10,"./src/always":11,"./src/and":12,"./src/any":13,"./src/anyPass":14,"./src/ap":15,"./src/aperture":16,"./src/append":17,"./src/apply":18,"./src/applySpec":19,"./src/ascend":20,"./src/assoc":21,"./src/assocPath":22,"./src/binary":23,"./src/bind":24,"./src/both":25,"./src/call":26,"./src/chain":27,"./src/clamp":28,"./src/clone":29,"./src/comparator":30,"./src/complement":31,"./src/compose":32,"./src/composeK":33,"./src/composeP":34,"./src/concat":35,"./src/cond":36,"./src/construct":37,"./src/constructN":38,"./src/contains":39,"./src/converge":40,"./src/countBy":41,"./src/curry":42,"./src/curryN":43,"./src/dec":44,"./src/defaultTo":45,"./src/descend":46,"./src/difference":47,"./src/differenceWith":48,"./src/dissoc":49,"./src/dissocPath":50,"./src/divide":51,"./src/drop":52,"./src/dropLast":53,"./src/dropLastWhile":54,"./src/dropRepeats":55,"./src/dropRepeatsWith":56,"./src/dropWhile":57,"./src/either":58,"./src/empty":59,"./src/eqBy":60,"./src/eqProps":61,"./src/equals":62,"./src/evolve":63,"./src/filter":64,"./src/find":65,"./src/findIndex":66,"./src/findLast":67,"./src/findLastIndex":68,"./src/flatten":69,"./src/flip":70,"./src/forEach":71,"./src/forEachObjIndexed":72,"./src/fromPairs":73,"./src/groupBy":74,"./src/groupWith":75,"./src/gt":76,"./src/gte":77,"./src/has":78,"./src/hasIn":79,"./src/head":80,"./src/identical":81,"./src/identity":82,"./src/ifElse":83,"./src/inc":84,"./src/indexBy":85,"./src/indexOf":86,"./src/init":87,"./src/insert":88,"./src/insertAll":89,"./src/intersection":160,"./src/intersectionWith":161,"./src/intersperse":162,"./src/into":163,"./src/invert":164,"./src/invertObj":165,"./src/invoker":166,"./src/is":167,"./src/isArrayLike":168,"./src/isEmpty":169,"./src/isNil":170,"./src/join":171,"./src/juxt":172,"./src/keys":173,"./src/keysIn":174,"./src/last":175,"./src/lastIndexOf":176,"./src/length":177,"./src/lens":178,"./src/lensIndex":179,"./src/lensPath":180,"./src/lensProp":181,"./src/lift":182,"./src/liftN":183,"./src/lt":184,"./src/lte":185,"./src/map":186,"./src/mapAccum":187,"./src/mapAccumRight":188,"./src/mapObjIndexed":189,"./src/match":190,"./src/mathMod":191,"./src/max":192,"./src/maxBy":193,"./src/mean":194,"./src/median":195,"./src/memoize":196,"./src/merge":197,"./src/mergeAll":198,"./src/mergeWith":199,"./src/mergeWithKey":200,"./src/min":201,"./src/minBy":202,"./src/modulo":203,"./src/multiply":204,"./src/nAry":205,"./src/negate":206,"./src/none":207,"./src/not":208,"./src/nth":209,"./src/nthArg":210,"./src/objOf":211,"./src/of":212,"./src/omit":213,"./src/once":214,"./src/or":215,"./src/over":216,"./src/pair":217,"./src/partial":218,"./src/partialRight":219,"./src/partition":220,"./src/path":221,"./src/pathEq":222,"./src/pathOr":223,"./src/pathSatisfies":224,"./src/pick":225,"./src/pickAll":226,"./src/pickBy":227,"./src/pipe":228,"./src/pipeK":229,"./src/pipeP":230,"./src/pluck":231,"./src/prepend":232,"./src/product":233,"./src/project":234,"./src/prop":235,"./src/propEq":236,"./src/propIs":237,"./src/propOr":238,"./src/propSatisfies":239,"./src/props":240,"./src/range":241,"./src/reduce":242,"./src/reduceBy":243,"./src/reduceRight":244,"./src/reduceWhile":245,"./src/reduced":246,"./src/reject":247,"./src/remove":248,"./src/repeat":249,"./src/replace":250,"./src/reverse":251,"./src/scan":252,"./src/sequence":253,"./src/set":254,"./src/slice":255,"./src/sort":256,"./src/sortBy":257,"./src/sortWith":258,"./src/split":259,"./src/splitAt":260,"./src/splitEvery":261,"./src/splitWhen":262,"./src/subtract":263,"./src/sum":264,"./src/symmetricDifference":265,"./src/symmetricDifferenceWith":266,"./src/tail":267,"./src/take":268,"./src/takeLast":269,"./src/takeLastWhile":270,"./src/takeWhile":271,"./src/tap":272,"./src/test":273,"./src/times":274,"./src/toLower":275,"./src/toPairs":276,"./src/toPairsIn":277,"./src/toString":278,"./src/toUpper":279,"./src/transduce":280,"./src/transpose":281,"./src/traverse":282,"./src/trim":283,"./src/tryCatch":284,"./src/type":285,"./src/unapply":286,"./src/unary":287,"./src/uncurryN":288,"./src/unfold":289,"./src/union":290,"./src/unionWith":291,"./src/uniq":292,"./src/uniqBy":293,"./src/uniqWith":294,"./src/unless":295,"./src/unnest":296,"./src/until":297,"./src/update":298,"./src/useWith":299,"./src/values":300,"./src/valuesIn":301,"./src/view":302,"./src/when":303,"./src/where":304,"./src/whereEq":305,"./src/without":306,"./src/xprod":307,"./src/zip":308,"./src/zipObj":309,"./src/zipWith":310}],3:[function(require,module,exports){
var always=require("./always");module.exports=always(!1);
},{"./always":11}],4:[function(require,module,exports){
var always=require("./always");module.exports=always(!0);
},{"./always":11}],5:[function(require,module,exports){
module.exports={"@@functional/placeholder":!0};
},{}],6:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return Number(r)+Number(u)});
},{"./internal/_curry2":104}],7:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry1=require("./internal/_curry1"),curryN=require("./curryN");module.exports=_curry1(function(r){return curryN(r.length,function(){var n=0,t=arguments[0],c=arguments[arguments.length-1],e=Array.prototype.slice.call(arguments,0);return e[0]=function(){var r=t.apply(this,_concat(arguments,[n,c]));return n+=1,r},r.apply(this,e)})});
},{"./curryN":43,"./internal/_concat":99,"./internal/_curry1":103}],8:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry3=require("./internal/_curry3");module.exports=_curry3(function(r,n,e){if(n>=e.length||n<-e.length)return e;var t=n<0?e.length:0,c=t+n,u=_concat(e);return u[c]=r(e[c]),u});
},{"./internal/_concat":99,"./internal/_curry3":105}],9:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xall=require("./internal/_xall");module.exports=_curry2(_dispatchable(["all"],_xall,function(r,e){for(var l=0;l<e.length;){if(!r(e[l]))return!1;l+=1}return!0}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xall":140}],10:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),curryN=require("./curryN"),max=require("./max"),pluck=require("./pluck"),reduce=require("./reduce");module.exports=_curry1(function(r){return curryN(reduce(max,0,pluck("length",r)),function(){for(var e=0,u=r.length;e<u;){if(!r[e].apply(this,arguments))return!1;e+=1}return!0})});
},{"./curryN":43,"./internal/_curry1":103,"./max":192,"./pluck":231,"./reduce":242}],11:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return function(){return r}});
},{"./internal/_curry1":103}],12:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r&&u});
},{"./internal/_curry2":104}],13:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xany=require("./internal/_xany");module.exports=_curry2(_dispatchable(["any"],_xany,function(r,e){for(var a=0;a<e.length;){if(r(e[a]))return!0;a+=1}return!1}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xany":141}],14:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),curryN=require("./curryN"),max=require("./max"),pluck=require("./pluck"),reduce=require("./reduce");module.exports=_curry1(function(r){return curryN(reduce(max,0,pluck("length",r)),function(){for(var e=0,u=r.length;e<u;){if(r[e].apply(this,arguments))return!0;e+=1}return!1})});
},{"./curryN":43,"./internal/_curry1":103,"./max":192,"./pluck":231,"./reduce":242}],15:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry2=require("./internal/_curry2"),_reduce=require("./internal/_reduce"),map=require("./map");module.exports=_curry2(function(r,e){return"function"==typeof r.ap?r.ap(e):"function"==typeof r?function(n){return r(n)(e(n))}:_reduce(function(r,n){return _concat(r,map(n,e))},[],r)});
},{"./internal/_concat":99,"./internal/_curry2":104,"./internal/_reduce":135,"./map":186}],16:[function(require,module,exports){
var _aperture=require("./internal/_aperture"),_curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xaperture=require("./internal/_xaperture");module.exports=_curry2(_dispatchable([],_xaperture,_aperture));
},{"./internal/_aperture":91,"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xaperture":142}],17:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,c){return _concat(c,[r])});
},{"./internal/_concat":99,"./internal/_curry2":104}],18:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r.apply(this,u)});
},{"./internal/_curry2":104}],19:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),apply=require("./apply"),curryN=require("./curryN"),map=require("./map"),max=require("./max"),pluck=require("./pluck"),reduce=require("./reduce"),values=require("./values");module.exports=_curry1(function r(e){return e=map(function(e){return"function"==typeof e?e:r(e)},e),curryN(reduce(max,0,pluck("length",values(e))),function(){var r=arguments;return map(function(e){return apply(e,r)},e)})});
},{"./apply":18,"./curryN":43,"./internal/_curry1":103,"./map":186,"./max":192,"./pluck":231,"./reduce":242,"./values":300}],20:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){var n=r(u),c=r(e);return n<c?-1:n>c?1:0});
},{"./internal/_curry3":105}],21:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){var n={};for(var a in e)n[a]=e[a];return n[r]=u,n});
},{"./internal/_curry3":105}],22:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),_has=require("./internal/_has"),_isArray=require("./internal/_isArray"),_isInteger=require("./internal/_isInteger"),assoc=require("./assoc");module.exports=_curry3(function r(e,i,a){if(0===e.length)return i;var n=e[0];if(e.length>1){var s=_has(n,a)?a[n]:_isInteger(e[1])?[]:{};i=r(Array.prototype.slice.call(e,1),i,s)}if(_isInteger(n)&&_isArray(a)){var t=[].concat(a);return t[n]=i,t}return assoc(n,i,a)});
},{"./assoc":21,"./internal/_curry3":105,"./internal/_has":115,"./internal/_isArray":119,"./internal/_isInteger":121}],23:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),nAry=require("./nAry");module.exports=_curry1(function(r){return nAry(2,r)});
},{"./internal/_curry1":103,"./nAry":205}],24:[function(require,module,exports){
var _arity=require("./internal/_arity"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){return _arity(r.length,function(){return r.apply(e,arguments)})});
},{"./internal/_arity":92,"./internal/_curry2":104}],25:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isFunction=require("./internal/_isFunction"),and=require("./and"),lift=require("./lift");module.exports=_curry2(function(r,i){return _isFunction(r)?function(){return r.apply(this,arguments)&&i.apply(this,arguments)}:lift(and)(r,i)});
},{"./and":12,"./internal/_curry2":104,"./internal/_isFunction":120,"./lift":182}],26:[function(require,module,exports){
var curry=require("./curry");module.exports=curry(function(r){return r.apply(this,Array.prototype.slice.call(arguments,1))});
},{"./curry":42}],27:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_makeFlat=require("./internal/_makeFlat"),_xchain=require("./internal/_xchain"),map=require("./map");module.exports=_curry2(_dispatchable(["chain"],_xchain,function(r,e){return"function"==typeof e?function(a){return r(e(a))(a)}:_makeFlat(!1)(map(r,e))}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_makeFlat":128,"./internal/_xchain":143,"./map":186}],28:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,n){if(r>e)throw new Error("min must not be greater than max in clamp(min, max, value)");return n<r?r:n>e?e:n});
},{"./internal/_curry3":105}],29:[function(require,module,exports){
var _clone=require("./internal/_clone"),_curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return null!=r&&"function"==typeof r.clone?r.clone():_clone(r,[],[],!0)});
},{"./internal/_clone":96,"./internal/_curry1":103}],30:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return function(u,n){return r(u,n)?-1:r(n,u)?1:0}});
},{"./internal/_curry1":103}],31:[function(require,module,exports){
var lift=require("./lift"),not=require("./not");module.exports=lift(not);
},{"./lift":182,"./not":208}],32:[function(require,module,exports){
var pipe=require("./pipe"),reverse=require("./reverse");module.exports=function(){if(0===arguments.length)throw new Error("compose requires at least one argument");return pipe.apply(this,reverse(arguments))};
},{"./pipe":228,"./reverse":251}],33:[function(require,module,exports){
var chain=require("./chain"),compose=require("./compose"),map=require("./map");module.exports=function(){if(0===arguments.length)throw new Error("composeK requires at least one argument");var e=Array.prototype.slice.call(arguments),r=e.pop();return compose(compose.apply(this,map(chain,e)),r)};
},{"./chain":27,"./compose":32,"./map":186}],34:[function(require,module,exports){
var pipeP=require("./pipeP"),reverse=require("./reverse");module.exports=function(){if(0===arguments.length)throw new Error("composeP requires at least one argument");return pipeP.apply(this,reverse(arguments))};
},{"./pipeP":230,"./reverse":251}],35:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isArray=require("./internal/_isArray"),_isFunction=require("./internal/_isFunction"),toString=require("./toString");module.exports=_curry2(function(r,n){if(null==r||!_isFunction(r.concat))throw new TypeError(toString(r)+' does not have a method named "concat"');if(_isArray(r)&&!_isArray(n))throw new TypeError(toString(n)+" is not an array");return r.concat(n)});
},{"./internal/_curry2":104,"./internal/_isArray":119,"./internal/_isFunction":120,"./toString":278}],36:[function(require,module,exports){
var _arity=require("./internal/_arity"),_curry1=require("./internal/_curry1"),map=require("./map"),max=require("./max"),reduce=require("./reduce");module.exports=_curry1(function(r){var e=reduce(max,0,map(function(r){return r[0].length},r));return _arity(e,function(){for(var e=0;e<r.length;){if(r[e][0].apply(this,arguments))return r[e][1].apply(this,arguments);e+=1}})});
},{"./internal/_arity":92,"./internal/_curry1":103,"./map":186,"./max":192,"./reduce":242}],37:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),constructN=require("./constructN");module.exports=_curry1(function(r){return constructN(r.length,r)});
},{"./constructN":38,"./internal/_curry1":103}],38:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),curry=require("./curry"),nAry=require("./nAry");module.exports=_curry2(function(r,e){if(r>10)throw new Error("Constructor with greater than ten arguments");return 0===r?function(){return new e}:curry(nAry(r,function(r,n,t,u,c,a,w,s,i,o){switch(arguments.length){case 1:return new e(r);case 2:return new e(r,n);case 3:return new e(r,n,t);case 4:return new e(r,n,t,u);case 5:return new e(r,n,t,u,c);case 6:return new e(r,n,t,u,c,a);case 7:return new e(r,n,t,u,c,a,w);case 8:return new e(r,n,t,u,c,a,w,s);case 9:return new e(r,n,t,u,c,a,w,s,i);case 10:return new e(r,n,t,u,c,a,w,s,i,o)}}))});
},{"./curry":42,"./internal/_curry2":104,"./nAry":205}],39:[function(require,module,exports){
var _contains=require("./internal/_contains"),_curry2=require("./internal/_curry2");module.exports=_curry2(_contains);
},{"./internal/_contains":100,"./internal/_curry2":104}],40:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_map=require("./internal/_map"),curryN=require("./curryN"),max=require("./max"),pluck=require("./pluck"),reduce=require("./reduce");module.exports=_curry2(function(r,e){return curryN(reduce(max,0,pluck("length",e)),function(){var u=arguments,c=this;return r.apply(c,_map(function(r){return r.apply(c,u)},e))})});
},{"./curryN":43,"./internal/_curry2":104,"./internal/_map":129,"./max":192,"./pluck":231,"./reduce":242}],41:[function(require,module,exports){
var reduceBy=require("./reduceBy");module.exports=reduceBy(function(e,r){return e+1},0);
},{"./reduceBy":243}],42:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),curryN=require("./curryN");module.exports=_curry1(function(r){return curryN(r.length,r)});
},{"./curryN":43,"./internal/_curry1":103}],43:[function(require,module,exports){
var _arity=require("./internal/_arity"),_curry1=require("./internal/_curry1"),_curry2=require("./internal/_curry2"),_curryN=require("./internal/_curryN");module.exports=_curry2(function(r,u){return 1===r?_curry1(u):_arity(r,_curryN(r,[],u))});
},{"./internal/_arity":92,"./internal/_curry1":103,"./internal/_curry2":104,"./internal/_curryN":106}],44:[function(require,module,exports){
var add=require("./add");module.exports=add(-1);
},{"./add":6}],45:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return null==u||u!==u?r:u});
},{"./internal/_curry2":104}],46:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){var n=r(u),c=r(e);return n>c?-1:n<c?1:0});
},{"./internal/_curry3":105}],47:[function(require,module,exports){
var _contains=require("./internal/_contains"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,n){for(var e=[],t=0,i=r.length;t<i;)_contains(r[t],n)||_contains(r[t],e)||(e[e.length]=r[t]),t+=1;return e});
},{"./internal/_contains":100,"./internal/_curry2":104}],48:[function(require,module,exports){
var _containsWith=require("./internal/_containsWith"),_curry3=require("./internal/_curry3");module.exports=_curry3(function(r,n,t){for(var i=[],e=0,u=n.length;e<u;)_containsWith(r,n[e],t)||_containsWith(r,n[e],i)||i.push(n[e]),e+=1;return i});
},{"./internal/_containsWith":101,"./internal/_curry3":105}],49:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){var u={};for(var n in e)u[n]=e[n];return delete u[r],u});
},{"./internal/_curry2":104}],50:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),assoc=require("./assoc"),dissoc=require("./dissoc");module.exports=_curry2(function r(e,s){switch(e.length){case 0:return s;case 1:return dissoc(e[0],s);default:var c=e[0],u=Array.prototype.slice.call(e,1);return null==s[c]?s:assoc(c,r(u,s[c]),s)}});
},{"./assoc":21,"./dissoc":49,"./internal/_curry2":104}],51:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r/u});
},{"./internal/_curry2":104}],52:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xdrop=require("./internal/_xdrop"),slice=require("./slice");module.exports=_curry2(_dispatchable(["drop"],_xdrop,function(r,e){return slice(Math.max(0,r),1/0,e)}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xdrop":144,"./slice":255}],53:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_dropLast=require("./internal/_dropLast"),_xdropLast=require("./internal/_xdropLast");module.exports=_curry2(_dispatchable([],_xdropLast,_dropLast));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_dropLast":108,"./internal/_xdropLast":145}],54:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_dropLastWhile=require("./internal/_dropLastWhile"),_xdropLastWhile=require("./internal/_xdropLastWhile");module.exports=_curry2(_dispatchable([],_xdropLastWhile,_dropLastWhile));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_dropLastWhile":109,"./internal/_xdropLastWhile":146}],55:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_dispatchable=require("./internal/_dispatchable"),_xdropRepeatsWith=require("./internal/_xdropRepeatsWith"),dropRepeatsWith=require("./dropRepeatsWith"),equals=require("./equals");module.exports=_curry1(_dispatchable([],_xdropRepeatsWith(equals),dropRepeatsWith(equals)));
},{"./dropRepeatsWith":56,"./equals":62,"./internal/_curry1":103,"./internal/_dispatchable":107,"./internal/_xdropRepeatsWith":147}],56:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xdropRepeatsWith=require("./internal/_xdropRepeatsWith"),last=require("./last");module.exports=_curry2(_dispatchable([],_xdropRepeatsWith,function(r,e){var t=[],a=1,i=e.length;if(0!==i)for(t[0]=e[0];a<i;)r(last(t),e[a])||(t[t.length]=e[a]),a+=1;return t}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xdropRepeatsWith":147,"./last":175}],57:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xdropWhile=require("./internal/_xdropWhile");module.exports=_curry2(_dispatchable(["dropWhile"],_xdropWhile,function(r,e){for(var i=0,l=e.length;i<l&&r(e[i]);)i+=1;return Array.prototype.slice.call(e,i)}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xdropWhile":148}],58:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isFunction=require("./internal/_isFunction"),lift=require("./lift"),or=require("./or");module.exports=_curry2(function(r,i){return _isFunction(r)?function(){return r.apply(this,arguments)||i.apply(this,arguments)}:lift(or)(r,i)});
},{"./internal/_curry2":104,"./internal/_isFunction":120,"./lift":182,"./or":215}],59:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_isArguments=require("./internal/_isArguments"),_isArray=require("./internal/_isArray"),_isObject=require("./internal/_isObject"),_isString=require("./internal/_isString");module.exports=_curry1(function(r){return null!=r&&"function"==typeof r.empty?r.empty():null!=r&&null!=r.constructor&&"function"==typeof r.constructor.empty?r.constructor.empty():_isArray(r)?[]:_isString(r)?"":_isObject(r)?{}:_isArguments(r)?function(){return arguments}():void 0});
},{"./internal/_curry1":103,"./internal/_isArguments":118,"./internal/_isArray":119,"./internal/_isObject":123,"./internal/_isString":126}],60:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),equals=require("./equals");module.exports=_curry3(function(r,e,u){return equals(r(e),r(u))});
},{"./equals":62,"./internal/_curry3":105}],61:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),equals=require("./equals");module.exports=_curry3(function(r,e,u){return equals(e[r],u[r])});
},{"./equals":62,"./internal/_curry3":105}],62:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_equals=require("./internal/_equals");module.exports=_curry2(function(r,e){return _equals(r,e,[],[])});
},{"./internal/_curry2":104,"./internal/_equals":110}],63:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function r(e,n){var u,o,t,c={};for(o in n)u=e[o],t=typeof u,c[o]="function"===t?u(n[o]):u&&"object"===t?r(u,n[o]):n[o];return c});
},{"./internal/_curry2":104}],64:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_filter=require("./internal/_filter"),_isObject=require("./internal/_isObject"),_reduce=require("./internal/_reduce"),_xfilter=require("./internal/_xfilter"),keys=require("./keys");module.exports=_curry2(_dispatchable(["filter"],_xfilter,function(e,r){return _isObject(r)?_reduce(function(i,t){return e(r[t])&&(i[t]=r[t]),i},{},keys(r)):_filter(e,r)}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_filter":111,"./internal/_isObject":123,"./internal/_reduce":135,"./internal/_xfilter":150,"./keys":173}],65:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xfind=require("./internal/_xfind");module.exports=_curry2(_dispatchable(["find"],_xfind,function(r,e){for(var i=0,n=e.length;i<n;){if(r(e[i]))return e[i];i+=1}}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfind":151}],66:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xfindIndex=require("./internal/_xfindIndex");module.exports=_curry2(_dispatchable([],_xfindIndex,function(r,e){for(var n=0,i=e.length;n<i;){if(r(e[n]))return n;n+=1}return-1}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfindIndex":152}],67:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xfindLast=require("./internal/_xfindLast");module.exports=_curry2(_dispatchable([],_xfindLast,function(r,e){for(var a=e.length-1;a>=0;){if(r(e[a]))return e[a];a-=1}}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfindLast":153}],68:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xfindLastIndex=require("./internal/_xfindLastIndex");module.exports=_curry2(_dispatchable([],_xfindLastIndex,function(r,e){for(var n=e.length-1;n>=0;){if(r(e[n]))return n;n-=1}return-1}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfindLastIndex":154}],69:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_makeFlat=require("./internal/_makeFlat");module.exports=_curry1(_makeFlat(!0));
},{"./internal/_curry1":103,"./internal/_makeFlat":128}],70:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),curry=require("./curry");module.exports=_curry1(function(r){return curry(function(u,e){var c=Array.prototype.slice.call(arguments,0);return c[0]=e,c[1]=u,r.apply(this,c)})});
},{"./curry":42,"./internal/_curry1":103}],71:[function(require,module,exports){
var _checkForMethod=require("./internal/_checkForMethod"),_curry2=require("./internal/_curry2");module.exports=_curry2(_checkForMethod("forEach",function(r,e){for(var c=e.length,o=0;o<c;)r(e[o]),o+=1;return e}));
},{"./internal/_checkForMethod":95,"./internal/_curry2":104}],72:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),keys=require("./keys");module.exports=_curry2(function(r,e){for(var u=keys(e),n=0;n<u.length;){var y=u[n];r(e[y],y,e),n+=1}return e});
},{"./internal/_curry2":104,"./keys":173}],73:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){for(var e={},u=0;u<r.length;)e[r[u][0]]=r[u][1],u+=1;return e});
},{"./internal/_curry1":103}],74:[function(require,module,exports){
var _checkForMethod=require("./internal/_checkForMethod"),_curry2=require("./internal/_curry2"),reduceBy=require("./reduceBy");module.exports=_curry2(_checkForMethod("groupBy",reduceBy(function(r,e){return null==r&&(r=[]),r.push(e),r},null)));
},{"./internal/_checkForMethod":95,"./internal/_curry2":104,"./reduceBy":243}],75:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var u=[],n=0,c=e.length;n<c;){for(var o=n+1;o<c&&r(e[n],e[o]);)o+=1;u.push(e.slice(n,o)),n=o}return u});
},{"./internal/_curry2":104}],76:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r>u});
},{"./internal/_curry2":104}],77:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r>=u});
},{"./internal/_curry2":104}],78:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_has=require("./internal/_has");module.exports=_curry2(_has);
},{"./internal/_curry2":104,"./internal/_has":115}],79:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r in u});
},{"./internal/_curry2":104}],80:[function(require,module,exports){
var nth=require("./nth");module.exports=nth(0);
},{"./nth":209}],81:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r===u?0!==r||1/r==1/u:r!==r&&u!==u});
},{"./internal/_curry2":104}],82:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_identity=require("./internal/_identity");module.exports=_curry1(_identity);
},{"./internal/_curry1":103,"./internal/_identity":116}],83:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),curryN=require("./curryN");module.exports=_curry3(function(r,t,u){return curryN(Math.max(r.length,t.length,u.length),function(){return r.apply(this,arguments)?t.apply(this,arguments):u.apply(this,arguments)})});
},{"./curryN":43,"./internal/_curry3":105}],84:[function(require,module,exports){
var add=require("./add");module.exports=add(1);
},{"./add":6}],85:[function(require,module,exports){
var reduceBy=require("./reduceBy");module.exports=reduceBy(function(e,r){return r},null);
},{"./reduceBy":243}],86:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_indexOf=require("./internal/_indexOf"),_isArray=require("./internal/_isArray");module.exports=_curry2(function(r,e){return"function"!=typeof e.indexOf||_isArray(e)?_indexOf(e,r,0):e.indexOf(r)});
},{"./internal/_curry2":104,"./internal/_indexOf":117,"./internal/_isArray":119}],87:[function(require,module,exports){
var slice=require("./slice");module.exports=slice(0,-1);
},{"./slice":255}],88:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,l){r=r<l.length&&r>=0?r:l.length;var t=Array.prototype.slice.call(l,0);return t.splice(r,0,e),t});
},{"./internal/_curry3":105}],89:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,t){return r=r<t.length&&r>=0?r:t.length,[].concat(Array.prototype.slice.call(t,0,r),e,Array.prototype.slice.call(t,r))});
},{"./internal/_curry3":105}],90:[function(require,module,exports){
var _contains=require("./_contains");module.exports=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}function e(t,e,i){var n,s=typeof t;switch(s){case"string":case"number":return 0===t&&1/t==-1/0?!!i._items["-0"]||(e&&(i._items["-0"]=!0),!1):null!==i._nativeSet?e?(n=i._nativeSet.size,i._nativeSet.add(t),i._nativeSet.size===n):i._nativeSet.has(t):s in i._items?t in i._items[s]||(e&&(i._items[s][t]=!0),!1):(e&&(i._items[s]={},i._items[s][t]=!0),!1);case"boolean":if(s in i._items){var _=t?1:0;return!!i._items[s][_]||(e&&(i._items[s][_]=!0),!1)}return e&&(i._items[s]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==i._nativeSet?e?(n=i._nativeSet.size,i._nativeSet.add(t),i._nativeSet.size===n):i._nativeSet.has(t):s in i._items?!!_contains(t,i._items[s])||(e&&i._items[s].push(t),!1):(e&&(i._items[s]=[t]),!1);case"undefined":return!!i._items[s]||(e&&(i._items[s]=!0),!1);case"object":if(null===t)return!!i._items.null||(e&&(i._items.null=!0),!1);default:return s=Object.prototype.toString.call(t),s in i._items?!!_contains(t,i._items[s])||(e&&i._items[s].push(t),!1):(e&&(i._items[s]=[t]),!1)}}return t.prototype.add=function(t){return!e(t,!0,this)},t.prototype.has=function(t){return e(t,!1,this)},t}();
},{"./_contains":100}],91:[function(require,module,exports){
module.exports=function(r,e){for(var o=0,t=e.length-(r-1),l=new Array(t>=0?t:0);o<t;)l[o]=Array.prototype.slice.call(e,o,o+r),o+=1;return l};
},{}],92:[function(require,module,exports){
module.exports=function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,a){return n.apply(this,arguments)};case 6:return function(t,r,e,u,a,i){return n.apply(this,arguments)};case 7:return function(t,r,e,u,a,i,s){return n.apply(this,arguments)};case 8:return function(t,r,e,u,a,i,s,c){return n.apply(this,arguments)};case 9:return function(t,r,e,u,a,i,s,c,p){return n.apply(this,arguments)};case 10:return function(t,r,e,u,a,i,s,c,p,o){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}};
},{}],93:[function(require,module,exports){
module.exports=function(e){for(var n,o=[];!(n=e.next()).done;)o.push(n.value);return o};
},{}],94:[function(require,module,exports){
var _objectAssign=require("./_objectAssign");module.exports="function"==typeof Object.assign?Object.assign:_objectAssign;
},{"./_objectAssign":130}],95:[function(require,module,exports){
var _isArray=require("./_isArray");module.exports=function(r,t){return function(){var e=arguments.length;if(0===e)return t();var a=arguments[e-1];return _isArray(a)||"function"!=typeof a[r]?t.apply(this,arguments):a[r].apply(a,Array.prototype.slice.call(arguments,0,e-1))}};
},{"./_isArray":119}],96:[function(require,module,exports){
var _cloneRegExp=require("./_cloneRegExp"),type=require("../type");module.exports=function e(r,t,n,u){var a=function(a){for(var c=t.length,o=0;o<c;){if(r===t[o])return n[o];o+=1}t[o+1]=r,n[o+1]=a;for(var p in r)a[p]=u?e(r[p],t,n,!0):r[p];return a};switch(type(r)){case"Object":return a({});case"Array":return a([]);case"Date":return new Date(r.valueOf());case"RegExp":return _cloneRegExp(r);default:return r}};
},{"../type":285,"./_cloneRegExp":97}],97:[function(require,module,exports){
module.exports=function(e){return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""))};
},{}],98:[function(require,module,exports){
module.exports=function(n){return function(){return!n.apply(this,arguments)}};
},{}],99:[function(require,module,exports){
module.exports=function(e,n){e=e||[],n=n||[];var t,r=e.length,l=n.length,o=[];for(t=0;t<r;)o[o.length]=e[t],t+=1;for(t=0;t<l;)o[o.length]=n[t],t+=1;return o};
},{}],100:[function(require,module,exports){
var _indexOf=require("./_indexOf");module.exports=function(e,n){return _indexOf(n,e,0)>=0};
},{"./_indexOf":117}],101:[function(require,module,exports){
module.exports=function(r,e,n){for(var t=0,o=n.length;t<o;){if(r(e,n[t]))return!0;t+=1}return!1};
},{}],102:[function(require,module,exports){
var _arity=require("./_arity"),_curry2=require("./_curry2");module.exports=function(r){return _curry2(function(t,u){return _arity(Math.max(0,t.length-u.length),function(){return t.apply(this,r(u,arguments))})})};
},{"./_arity":92,"./_curry2":104}],103:[function(require,module,exports){
var _isPlaceholder=require("./_isPlaceholder");module.exports=function(e){return function r(l){return 0===arguments.length||_isPlaceholder(l)?r:e.apply(this,arguments)}};
},{"./_isPlaceholder":124}],104:[function(require,module,exports){
var _curry1=require("./_curry1"),_isPlaceholder=require("./_isPlaceholder");module.exports=function(r){return function e(u,c){switch(arguments.length){case 0:return e;case 1:return _isPlaceholder(u)?e:_curry1(function(e){return r(u,e)});default:return _isPlaceholder(u)&&_isPlaceholder(c)?e:_isPlaceholder(u)?_curry1(function(e){return r(e,c)}):_isPlaceholder(c)?_curry1(function(e){return r(u,e)}):r(u,c)}}};
},{"./_curry1":103,"./_isPlaceholder":124}],105:[function(require,module,exports){
var _curry1=require("./_curry1"),_curry2=require("./_curry2"),_isPlaceholder=require("./_isPlaceholder");module.exports=function(r){return function e(c,u,l){switch(arguments.length){case 0:return e;case 1:return _isPlaceholder(c)?e:_curry2(function(e,u){return r(c,e,u)});case 2:return _isPlaceholder(c)&&_isPlaceholder(u)?e:_isPlaceholder(c)?_curry2(function(e,c){return r(e,u,c)}):_isPlaceholder(u)?_curry2(function(e,u){return r(c,e,u)}):_curry1(function(e){return r(c,u,e)});default:return _isPlaceholder(c)&&_isPlaceholder(u)&&_isPlaceholder(l)?e:_isPlaceholder(c)&&_isPlaceholder(u)?_curry2(function(e,c){return r(e,c,l)}):_isPlaceholder(c)&&_isPlaceholder(l)?_curry2(function(e,c){return r(e,u,c)}):_isPlaceholder(u)&&_isPlaceholder(l)?_curry2(function(e,u){return r(c,e,u)}):_isPlaceholder(c)?_curry1(function(e){return r(e,u,l)}):_isPlaceholder(u)?_curry1(function(e){return r(c,e,l)}):_isPlaceholder(l)?_curry1(function(e){return r(c,u,e)}):r(c,u,l)}}};
},{"./_curry1":103,"./_curry2":104,"./_isPlaceholder":124}],106:[function(require,module,exports){
var _arity=require("./_arity"),_isPlaceholder=require("./_isPlaceholder");module.exports=function e(r,l,t){return function(){for(var i=[],a=0,n=r,h=0;h<l.length||a<arguments.length;){var o;h<l.length&&(!_isPlaceholder(l[h])||a>=arguments.length)?o=l[h]:(o=arguments[a],a+=1),i[h]=o,_isPlaceholder(o)||(n-=1),h+=1}return n<=0?t.apply(this,i):_arity(n,e(r,i,t))}};
},{"./_arity":92,"./_isPlaceholder":124}],107:[function(require,module,exports){
var _isArray=require("./_isArray"),_isTransformer=require("./_isTransformer");module.exports=function(r,e,i){return function(){if(0===arguments.length)return i();var n=Array.prototype.slice.call(arguments,0),t=n.pop();if(!_isArray(t)){for(var a=0;a<r.length;){if("function"==typeof t[r[a]])return t[r[a]].apply(t,n);a+=1}if(_isTransformer(t)){return e.apply(null,n)(t)}}return i.apply(this,arguments)}};
},{"./_isArray":119,"./_isTransformer":127}],108:[function(require,module,exports){
var take=require("../take");module.exports=function(e,t){return take(e<t.length?t.length-e:0,t)};
},{"../take":268}],109:[function(require,module,exports){
module.exports=function(r,e){for(var o=e.length-1;o>=0&&r(e[o]);)o-=1;return Array.prototype.slice.call(e,0,o+1)};
},{}],110:[function(require,module,exports){
var _arrayFromIterator=require("./_arrayFromIterator"),_functionName=require("./_functionName"),_has=require("./_has"),identical=require("../identical"),keys=require("../keys"),type=require("../type");module.exports=function e(r,a,t,n){if(identical(r,a))return!0;if(type(r)!==type(a))return!1;if(null==r||null==a)return!1;if("function"==typeof r.equals||"function"==typeof a.equals)return"function"==typeof r.equals&&r.equals(a)&&"function"==typeof a.equals&&a.equals(r);switch(type(r)){case"Arguments":case"Array":case"Object":if("function"==typeof r.constructor&&"Promise"===_functionName(r.constructor))return r===a;break;case"Boolean":case"Number":case"String":if(typeof r!=typeof a||!identical(r.valueOf(),a.valueOf()))return!1;break;case"Date":if(!identical(r.valueOf(),a.valueOf()))return!1;break;case"Error":return r.name===a.name&&r.message===a.message;case"RegExp":if(r.source!==a.source||r.global!==a.global||r.ignoreCase!==a.ignoreCase||r.multiline!==a.multiline||r.sticky!==a.sticky||r.unicode!==a.unicode)return!1;break;case"Map":case"Set":if(!e(_arrayFromIterator(r.entries()),_arrayFromIterator(a.entries()),t,n))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var u=keys(r);if(u.length!==keys(a).length)return!1;for(var i=t.length-1;i>=0;){if(t[i]===r)return n[i]===a;i-=1}for(t.push(r),n.push(a),i=u.length-1;i>=0;){var s=u[i];if(!_has(s,a)||!e(a[s],r[s],t,n))return!1;i-=1}return t.pop(),n.pop(),!0};
},{"../identical":81,"../keys":173,"../type":285,"./_arrayFromIterator":93,"./_functionName":114,"./_has":115}],111:[function(require,module,exports){
module.exports=function(e,n){for(var r=0,t=n.length,o=[];r<t;)e(n[r])&&(o[o.length]=n[r]),r+=1;return o};
},{}],112:[function(require,module,exports){
var _forceReduced=require("./_forceReduced"),_reduce=require("./_reduce"),_xfBase=require("./_xfBase"),isArrayLike=require("../isArrayLike");module.exports=function(){var r=function(r){return{"@@transducer/init":_xfBase.init,"@@transducer/result":function(e){return r["@@transducer/result"](e)},"@@transducer/step":function(e,u){var t=r["@@transducer/step"](e,u);return t["@@transducer/reduced"]?_forceReduced(t):t}}};return function(e){var u=r(e);return{"@@transducer/init":_xfBase.init,"@@transducer/result":function(r){return u["@@transducer/result"](r)},"@@transducer/step":function(r,e){return isArrayLike(e)?_reduce(u,r,e):_reduce(u,r,[e])}}}}();
},{"../isArrayLike":168,"./_forceReduced":113,"./_reduce":135,"./_xfBase":149}],113:[function(require,module,exports){
module.exports=function(e){return{"@@transducer/value":e,"@@transducer/reduced":!0}};
},{}],114:[function(require,module,exports){
module.exports=function(n){var t=String(n).match(/^function (\w*)/);return null==t?"":t[1]};
},{}],115:[function(require,module,exports){
module.exports=function(t,e){return Object.prototype.hasOwnProperty.call(e,t)};
},{}],116:[function(require,module,exports){
module.exports=function(e){return e};
},{}],117:[function(require,module,exports){
var equals=require("../equals");module.exports=function(e,n,r){var t,f;if("function"==typeof e.indexOf)switch(typeof n){case"number":if(0===n){for(t=1/n;r<e.length;){if(0===(f=e[r])&&1/f===t)return r;r+=1}return-1}if(n!==n){for(;r<e.length;){if("number"==typeof(f=e[r])&&f!==f)return r;r+=1}return-1}return e.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return e.indexOf(n,r);case"object":if(null===n)return e.indexOf(n,r)}for(;r<e.length;){if(equals(e[r],n))return r;r+=1}return-1};
},{"../equals":62}],118:[function(require,module,exports){
var _has=require("./_has");module.exports=function(){var t=Object.prototype.toString;return"[object Arguments]"===t.call(arguments)?function(e){return"[object Arguments]"===t.call(e)}:function(t){return _has("callee",t)}}();
},{"./_has":115}],119:[function(require,module,exports){
module.exports=Array.isArray||function(r){return null!=r&&r.length>=0&&"[object Array]"===Object.prototype.toString.call(r)};
},{}],120:[function(require,module,exports){
module.exports=function(t){return"[object Function]"===Object.prototype.toString.call(t)};
},{}],121:[function(require,module,exports){
module.exports=Number.isInteger||function(e){return e<<0===e};
},{}],122:[function(require,module,exports){
module.exports=function(t){return"[object Number]"===Object.prototype.toString.call(t)};
},{}],123:[function(require,module,exports){
module.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)};
},{}],124:[function(require,module,exports){
module.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]};
},{}],125:[function(require,module,exports){
module.exports=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)};
},{}],126:[function(require,module,exports){
module.exports=function(t){return"[object String]"===Object.prototype.toString.call(t)};
},{}],127:[function(require,module,exports){
module.exports=function(t){return"function"==typeof t["@@transducer/step"]};
},{}],128:[function(require,module,exports){
var isArrayLike=require("../isArrayLike");module.exports=function(r){return function e(i){for(var n,t,l,o=[],u=0,a=i.length;u<a;){if(isArrayLike(i[u]))for(n=r?e(i[u]):i[u],l=0,t=n.length;l<t;)o[o.length]=n[l],l+=1;else o[o.length]=i[u];u+=1}return o}};
},{"../isArrayLike":168}],129:[function(require,module,exports){
module.exports=function(r,e){for(var n=0,o=e.length,t=Array(o);n<o;)t[n]=r(e[n]),n+=1;return t};
},{}],130:[function(require,module,exports){
var _has=require("./_has");module.exports=function(r){if(null==r)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(r),e=1,o=arguments.length;e<o;){var t=arguments[e];if(null!=t)for(var a in t)_has(a,t)&&(n[a]=t[a]);e+=1}return n};
},{"./_has":115}],131:[function(require,module,exports){
module.exports=function(e){return[e]};
},{}],132:[function(require,module,exports){
module.exports=function(t,n){return function(){return n.call(this,t.apply(this,arguments))}};
},{}],133:[function(require,module,exports){
module.exports=function(n,t){return function(){var r=this;return n.apply(r,arguments).then(function(n){return t.call(r,n)})}};
},{}],134:[function(require,module,exports){
module.exports=function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'};
},{}],135:[function(require,module,exports){
var _xwrap=require("./_xwrap"),bind=require("../bind"),isArrayLike=require("../isArrayLike");module.exports=function(){function r(r,e,t){for(var n=0,u=t.length;n<u;){if((e=r["@@transducer/step"](e,t[n]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n+=1}return r["@@transducer/result"](e)}function e(r,e,t){for(var n=t.next();!n.done;){if((e=r["@@transducer/step"](e,n.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n=t.next()}return r["@@transducer/result"](e)}function t(r,e,t){return r["@@transducer/result"](t.reduce(bind(r["@@transducer/step"],r),e))}var n="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(u,i,a){if("function"==typeof u&&(u=_xwrap(u)),isArrayLike(a))return r(u,i,a);if("function"==typeof a.reduce)return t(u,i,a);if(null!=a[n])return e(u,i,a[n]());if("function"==typeof a.next)return e(u,i,a);throw new TypeError("reduce: list must be array or iterable")}}();
},{"../bind":24,"../isArrayLike":168,"./_xwrap":159}],136:[function(require,module,exports){
module.exports=function(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}};
},{}],137:[function(require,module,exports){
var _assign=require("./_assign"),_identity=require("./_identity"),_isTransformer=require("./_isTransformer"),isArrayLike=require("../isArrayLike"),objOf=require("../objOf");module.exports=function(){var r={"@@transducer/init":Array,"@@transducer/step":function(r,e){return r.push(e),r},"@@transducer/result":_identity},e={"@@transducer/init":String,"@@transducer/step":function(r,e){return r+e},"@@transducer/result":_identity},t={"@@transducer/init":Object,"@@transducer/step":function(r,e){return _assign(r,isArrayLike(e)?objOf(e[0],e[1]):e)},"@@transducer/result":_identity};return function(n){if(_isTransformer(n))return n;if(isArrayLike(n))return r;if("string"==typeof n)return e;if("object"==typeof n)return t;throw new Error("Cannot create transformer for "+n)}}();
},{"../isArrayLike":168,"../objOf":211,"./_assign":94,"./_identity":116,"./_isTransformer":127}],138:[function(require,module,exports){
module.exports=function(){var t=function(t){return(t<10?"0":"")+t};return"function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(e){return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}();
},{}],139:[function(require,module,exports){
var _contains=require("./_contains"),_map=require("./_map"),_quote=require("./_quote"),_toISOString=require("./_toISOString"),keys=require("../keys"),reject=require("../reject");module.exports=function e(t,r){var n=function(n){var o=r.concat([t]);return _contains(n,o)?"<Circular>":e(n,o)},o=function(e,t){return _map(function(t){return _quote(t)+": "+n(e[t])},t.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+_map(n,t).join(", ")+"))";case"[object Array]":return"["+_map(n,t).concat(o(t,reject(function(e){return/^\d+$/.test(e)},keys(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+n(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?n(NaN):_quote(_toISOString(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+n(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+n(t.valueOf())+")":_quote(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var u=t.toString();if("[object Object]"!==u)return u}return"{"+o(t,keys(t)).join(", ")+"}"}};
},{"../keys":173,"../reject":247,"./_contains":100,"./_map":129,"./_quote":134,"./_toISOString":138}],140:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduced=require("./_reduced"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r,this.all=!0}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=function(r){return this.all&&(r=this.xf["@@transducer/step"](r,!0)),this.xf["@@transducer/result"](r)},r.prototype["@@transducer/step"]=function(r,t){return this.f(t)||(this.all=!1,r=_reduced(this.xf["@@transducer/step"](r,!1))),r},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],141:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduced=require("./_reduced"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r,this.any=!1}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=function(r){return this.any||(r=this.xf["@@transducer/step"](r,!1)),this.xf["@@transducer/result"](r)},r.prototype["@@transducer/step"]=function(r,t){return this.f(t)&&(this.any=!0,r=_reduced(this.xf["@@transducer/step"](r,!0))),r},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],142:[function(require,module,exports){
var _concat=require("./_concat"),_curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,r){this.xf=r,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,r){return this.store(r),this.full?this.xf["@@transducer/step"](t,this.getCopy()):t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},t.prototype.getCopy=function(){return _concat(Array.prototype.slice.call(this.acc,this.pos),Array.prototype.slice.call(this.acc,0,this.pos))},_curry2(function(r,s){return new t(r,s)})}();
},{"./_concat":99,"./_curry2":104,"./_xfBase":149}],143:[function(require,module,exports){
var _curry2=require("./_curry2"),_flatCat=require("./_flatCat"),map=require("../map");module.exports=_curry2(function(r,a){return map(r,_flatCat(a))});
},{"../map":186,"./_curry2":104,"./_flatCat":112}],144:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.n=r}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=_xfBase.result,r.prototype["@@transducer/step"]=function(r,t){return this.n>0?(this.n-=1,r):this.xf["@@transducer/step"](r,t)},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_xfBase":149}],145:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,r){this.xf=r,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,r){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(r),t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},_curry2(function(r,s){return new t(r,s)})}();
},{"./_curry2":104,"./_xfBase":149}],146:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduce=require("./_reduce"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,r){this.f=t,this.retained=[],this.xf=r}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){return this.retained=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,r){return this.f(r)?this.retain(t,r):this.flush(t,r)},t.prototype.flush=function(t,r){return t=_reduce(this.xf["@@transducer/step"],t,this.retained),this.retained=[],this.xf["@@transducer/step"](t,r)},t.prototype.retain=function(t,r){return this.retained.push(r),t},_curry2(function(r,e){return new t(r,e)})}();
},{"./_curry2":104,"./_reduce":135,"./_xfBase":149}],147:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,e){this.xf=e,this.pred=t,this.lastValue=void 0,this.seenFirstValue=!1}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=_xfBase.result,t.prototype["@@transducer/step"]=function(t,e){var r=!1;return this.seenFirstValue?this.pred(this.lastValue,e)&&(r=!0):this.seenFirstValue=!0,this.lastValue=e,r?t:this.xf["@@transducer/step"](t,e)},_curry2(function(e,r){return new t(e,r)})}();
},{"./_curry2":104,"./_xfBase":149}],148:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=_xfBase.result,r.prototype["@@transducer/step"]=function(r,t){if(this.f){if(this.f(t))return r;this.f=null}return this.xf["@@transducer/step"](r,t)},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_xfBase":149}],149:[function(require,module,exports){
module.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};
},{}],150:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=_xfBase.result,r.prototype["@@transducer/step"]=function(r,t){return this.f(t)?this.xf["@@transducer/step"](r,t):r},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_xfBase":149}],151:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduced=require("./_reduced"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r,this.found=!1}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=function(r){return this.found||(r=this.xf["@@transducer/step"](r,void 0)),this.xf["@@transducer/result"](r)},r.prototype["@@transducer/step"]=function(r,t){return this.f(t)&&(this.found=!0,r=_reduced(this.xf["@@transducer/step"](r,t))),r},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],152:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduced=require("./_reduced"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r,this.idx=-1,this.found=!1}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=function(r){return this.found||(r=this.xf["@@transducer/step"](r,-1)),this.xf["@@transducer/result"](r)},r.prototype["@@transducer/step"]=function(r,t){return this.idx+=1,this.f(t)&&(this.found=!0,r=_reduced(this.xf["@@transducer/step"](r,this.idx))),r},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],153:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,r){this.xf=r,this.f=t}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.last))},t.prototype["@@transducer/step"]=function(t,r){return this.f(r)&&(this.last=r),t},_curry2(function(r,e){return new t(r,e)})}();
},{"./_curry2":104,"./_xfBase":149}],154:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,r){this.xf=r,this.f=t,this.idx=-1,this.lastIdx=-1}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.lastIdx))},t.prototype["@@transducer/step"]=function(t,r){return this.idx+=1,this.f(r)&&(this.lastIdx=this.idx),t},_curry2(function(r,s){return new t(r,s)})}();
},{"./_curry2":104,"./_xfBase":149}],155:[function(require,module,exports){
var _curry2=require("./_curry2"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,t){this.xf=t,this.f=r}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=_xfBase.result,r.prototype["@@transducer/step"]=function(r,t){return this.xf["@@transducer/step"](r,this.f(t))},_curry2(function(t,e){return new r(t,e)})}();
},{"./_curry2":104,"./_xfBase":149}],156:[function(require,module,exports){
var _curryN=require("./_curryN"),_has=require("./_has"),_xfBase=require("./_xfBase");module.exports=function(){function t(t,r,s,i){this.valueFn=t,this.valueAcc=r,this.keyFn=s,this.xf=i,this.inputs={}}return t.prototype["@@transducer/init"]=_xfBase.init,t.prototype["@@transducer/result"]=function(t){var r;for(r in this.inputs)if(_has(r,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[r]),t["@@transducer/reduced"])){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,r){var s=this.keyFn(r);return this.inputs[s]=this.inputs[s]||[s,this.valueAcc],this.inputs[s][1]=this.valueFn(this.inputs[s][1],r),t},_curryN(4,[],function(r,s,i,u){return new t(r,s,i,u)})}();
},{"./_curryN":106,"./_has":115,"./_xfBase":149}],157:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduced=require("./_reduced"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,e){this.xf=e,this.n=r,this.i=0}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=_xfBase.result,r.prototype["@@transducer/step"]=function(r,e){this.i+=1;var t=0===this.n?r:this.xf["@@transducer/step"](r,e);return this.i>=this.n?_reduced(t):t},_curry2(function(e,t){return new r(e,t)})}();
},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],158:[function(require,module,exports){
var _curry2=require("./_curry2"),_reduced=require("./_reduced"),_xfBase=require("./_xfBase");module.exports=function(){function r(r,e){this.xf=e,this.f=r}return r.prototype["@@transducer/init"]=_xfBase.init,r.prototype["@@transducer/result"]=_xfBase.result,r.prototype["@@transducer/step"]=function(r,e){return this.f(e)?this.xf["@@transducer/step"](r,e):_reduced(r)},_curry2(function(e,t){return new r(e,t)})}();
},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],159:[function(require,module,exports){
module.exports=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},function(n){return new t(n)}}();
},{}],160:[function(require,module,exports){
var _contains=require("./internal/_contains"),_curry2=require("./internal/_curry2"),_filter=require("./internal/_filter"),flip=require("./flip"),uniq=require("./uniq");module.exports=_curry2(function(r,e){var i,n;return r.length>e.length?(i=r,n=e):(i=e,n=r),uniq(_filter(flip(_contains)(i),n))});
},{"./flip":70,"./internal/_contains":100,"./internal/_curry2":104,"./internal/_filter":111,"./uniq":292}],161:[function(require,module,exports){
var _containsWith=require("./internal/_containsWith"),_curry3=require("./internal/_curry3"),uniqWith=require("./uniqWith");module.exports=_curry3(function(r,n,i){var t,e;n.length>i.length?(t=n,e=i):(t=i,e=n);for(var u=[],h=0;h<e.length;)_containsWith(r,e[h],t)&&(u[u.length]=e[h]),h+=1;return uniqWith(r,u)});
},{"./internal/_containsWith":101,"./internal/_curry3":105,"./uniqWith":294}],162:[function(require,module,exports){
var _checkForMethod=require("./internal/_checkForMethod"),_curry2=require("./internal/_curry2");module.exports=_curry2(_checkForMethod("intersperse",function(r,e){for(var c=[],o=0,t=e.length;o<t;)o===t-1?c.push(e[o]):c.push(e[o],r),o+=1;return c}));
},{"./internal/_checkForMethod":95,"./internal/_curry2":104}],163:[function(require,module,exports){
var _clone=require("./internal/_clone"),_curry3=require("./internal/_curry3"),_isTransformer=require("./internal/_isTransformer"),_reduce=require("./internal/_reduce"),_stepCat=require("./internal/_stepCat");module.exports=_curry3(function(r,e,n){return _isTransformer(r)?_reduce(e(r),r["@@transducer/init"](),n):_reduce(e(_stepCat(r)),_clone(r,[],[],!1),n)});
},{"./internal/_clone":96,"./internal/_curry3":105,"./internal/_isTransformer":127,"./internal/_reduce":135,"./internal/_stepCat":137}],164:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_has=require("./internal/_has"),keys=require("./keys");module.exports=_curry1(function(r){for(var e=keys(r),n=e.length,u=0,a={};u<n;){var s=e[u],t=r[s],i=_has(t,a)?a[t]:a[t]=[];i[i.length]=s,u+=1}return a});
},{"./internal/_curry1":103,"./internal/_has":115,"./keys":173}],165:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),keys=require("./keys");module.exports=_curry1(function(r){for(var e=keys(r),u=e.length,n=0,y={};n<u;){var t=e[n];y[r[t]]=t,n+=1}return y});
},{"./internal/_curry1":103,"./keys":173}],166:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isFunction=require("./internal/_isFunction"),curryN=require("./curryN"),toString=require("./toString");module.exports=_curry2(function(r,n){return curryN(r+1,function(){var e=arguments[r];if(null!=e&&_isFunction(e[n]))return e[n].apply(e,Array.prototype.slice.call(arguments,0,r));throw new TypeError(toString(e)+' does not have a method named "'+n+'"')})});
},{"./curryN":43,"./internal/_curry2":104,"./internal/_isFunction":120,"./toString":278}],167:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,n){return null!=n&&n.constructor===r||n instanceof r});
},{"./internal/_curry2":104}],168:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_isArray=require("./internal/_isArray"),_isString=require("./internal/_isString");module.exports=_curry1(function(r){return!!_isArray(r)||!!r&&("object"==typeof r&&(!_isString(r)&&(1===r.nodeType?!!r.length:0===r.length||r.length>0&&(r.hasOwnProperty(0)&&r.hasOwnProperty(r.length-1)))))});
},{"./internal/_curry1":103,"./internal/_isArray":119,"./internal/_isString":126}],169:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),empty=require("./empty"),equals=require("./equals");module.exports=_curry1(function(r){return null!=r&&equals(r,empty(r))});
},{"./empty":59,"./equals":62,"./internal/_curry1":103}],170:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return null==r});
},{"./internal/_curry1":103}],171:[function(require,module,exports){
var invoker=require("./invoker");module.exports=invoker(1,"join");
},{"./invoker":166}],172:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),converge=require("./converge");module.exports=_curry1(function(r){return converge(function(){return Array.prototype.slice.call(arguments,0)},r)});
},{"./converge":40,"./internal/_curry1":103}],173:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_has=require("./internal/_has"),_isArguments=require("./internal/_isArguments");module.exports=function(){var r=!{toString:null}.propertyIsEnumerable("toString"),t=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],e=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),n=function(r,t){for(var e=0;e<r.length;){if(r[e]===t)return!0;e+=1}return!1};return _curry1("function"!=typeof Object.keys||e?function(u){if(Object(u)!==u)return[];var i,o,s=[],a=e&&_isArguments(u);for(i in u)!_has(i,u)||a&&"length"===i||(s[s.length]=i);if(r)for(o=t.length-1;o>=0;)i=t[o],_has(i,u)&&!n(s,i)&&(s[s.length]=i),o-=1;return s}:function(r){return Object(r)!==r?[]:Object.keys(r)})}();
},{"./internal/_curry1":103,"./internal/_has":115,"./internal/_isArguments":118}],174:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){var e,n=[];for(e in r)n[n.length]=e;return n});
},{"./internal/_curry1":103}],175:[function(require,module,exports){
var nth=require("./nth");module.exports=nth(-1);
},{"./nth":209}],176:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isArray=require("./internal/_isArray"),equals=require("./equals");module.exports=_curry2(function(r,e){if("function"!=typeof e.lastIndexOf||_isArray(e)){for(var u=e.length-1;u>=0;){if(equals(e[u],r))return u;u-=1}return-1}return e.lastIndexOf(r)});
},{"./equals":62,"./internal/_curry2":104,"./internal/_isArray":119}],177:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_isNumber=require("./internal/_isNumber");module.exports=_curry1(function(r){return null!=r&&_isNumber(r.length)?r.length:NaN});
},{"./internal/_curry1":103,"./internal/_isNumber":122}],178:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),map=require("./map");module.exports=_curry2(function(r,n){return function(u){return function(e){return map(function(r){return n(r,e)},u(r(e)))}}});
},{"./internal/_curry2":104,"./map":186}],179:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),lens=require("./lens"),nth=require("./nth"),update=require("./update");module.exports=_curry1(function(r){return lens(nth(r),update(r))});
},{"./internal/_curry1":103,"./lens":178,"./nth":209,"./update":298}],180:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),assocPath=require("./assocPath"),lens=require("./lens"),path=require("./path");module.exports=_curry1(function(r){return lens(path(r),assocPath(r))});
},{"./assocPath":22,"./internal/_curry1":103,"./lens":178,"./path":221}],181:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),assoc=require("./assoc"),lens=require("./lens"),prop=require("./prop");module.exports=_curry1(function(r){return lens(prop(r),assoc(r))});
},{"./assoc":21,"./internal/_curry1":103,"./lens":178,"./prop":235}],182:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),liftN=require("./liftN");module.exports=_curry1(function(r){return liftN(r.length,r)});
},{"./internal/_curry1":103,"./liftN":183}],183:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_reduce=require("./internal/_reduce"),ap=require("./ap"),curryN=require("./curryN"),map=require("./map");module.exports=_curry2(function(r,e){var u=curryN(r,e);return curryN(r,function(){return _reduce(ap,map(u,arguments[0]),Array.prototype.slice.call(arguments,1))})});
},{"./ap":15,"./curryN":43,"./internal/_curry2":104,"./internal/_reduce":135,"./map":186}],184:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r<u});
},{"./internal/_curry2":104}],185:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r<=u});
},{"./internal/_curry2":104}],186:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_map=require("./internal/_map"),_reduce=require("./internal/_reduce"),_xmap=require("./internal/_xmap"),curryN=require("./curryN"),keys=require("./keys");module.exports=_curry2(_dispatchable(["map"],_xmap,function(r,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return curryN(e.length,function(){return r.call(this,e.apply(this,arguments))});case"[object Object]":return _reduce(function(t,u){return t[u]=r(e[u]),t},{},keys(e));default:return _map(r,e)}}));
},{"./curryN":43,"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_map":129,"./internal/_reduce":135,"./internal/_xmap":155,"./keys":173}],187:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,u){for(var n=0,t=u.length,c=[],o=[e];n<t;)o=r(o[0],u[n]),c[n]=o[1],n+=1;return[o[0],c]});
},{"./internal/_curry3":105}],188:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,u){for(var n=u.length-1,t=[],c=[e];n>=0;)c=r(u[n],c[0]),t[n]=c[1],n-=1;return[t,c[0]]});
},{"./internal/_curry3":105}],189:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_reduce=require("./internal/_reduce"),keys=require("./keys");module.exports=_curry2(function(r,e){return _reduce(function(u,n){return u[n]=r(e[n],n,e),u},{},keys(e))});
},{"./internal/_curry2":104,"./internal/_reduce":135,"./keys":173}],190:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return u.match(r)||[]});
},{"./internal/_curry2":104}],191:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isInteger=require("./internal/_isInteger");module.exports=_curry2(function(r,e){return _isInteger(r)?!_isInteger(e)||e<1?NaN:(r%e+e)%e:NaN});
},{"./internal/_curry2":104,"./internal/_isInteger":121}],192:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return u>r?u:r});
},{"./internal/_curry2":104}],193:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){return r(e)>r(u)?e:u});
},{"./internal/_curry3":105}],194:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),sum=require("./sum");module.exports=_curry1(function(r){return sum(r)/r.length});
},{"./internal/_curry1":103,"./sum":264}],195:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),mean=require("./mean");module.exports=_curry1(function(r){var e=r.length;if(0===e)return NaN;var n=2-e%2,t=(e-n)/2;return mean(Array.prototype.slice.call(r,0).sort(function(r,e){return r<e?-1:r>e?1:0}).slice(t,t+n))});
},{"./internal/_curry1":103,"./mean":194}],196:[function(require,module,exports){
var _arity=require("./internal/_arity"),_curry1=require("./internal/_curry1"),_has=require("./internal/_has"),toString=require("./toString");module.exports=_curry1(function(r){var t={};return _arity(r.length,function(){var e=toString(arguments);return _has(e,t)||(t[e]=r.apply(this,arguments)),t[e]})});
},{"./internal/_arity":92,"./internal/_curry1":103,"./internal/_has":115,"./toString":278}],197:[function(require,module,exports){
var _assign=require("./internal/_assign"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,n){return _assign({},r,n)});
},{"./internal/_assign":94,"./internal/_curry2":104}],198:[function(require,module,exports){
var _assign=require("./internal/_assign"),_curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return _assign.apply(null,[{}].concat(r))});
},{"./internal/_assign":94,"./internal/_curry1":103}],199:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),mergeWithKey=require("./mergeWithKey");module.exports=_curry3(function(r,e,u){return mergeWithKey(function(e,u,t){return r(u,t)},e,u)});
},{"./internal/_curry3":105,"./mergeWithKey":200}],200:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),_has=require("./internal/_has");module.exports=_curry3(function(r,a,e){var n,_={};for(n in a)_has(n,a)&&(_[n]=_has(n,e)?r(n,a[n],e[n]):a[n]);for(n in e)_has(n,e)&&!_has(n,_)&&(_[n]=e[n]);return _});
},{"./internal/_curry3":105,"./internal/_has":115}],201:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return u<r?u:r});
},{"./internal/_curry2":104}],202:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){return r(e)<r(u)?e:u});
},{"./internal/_curry3":105}],203:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r%u});
},{"./internal/_curry2":104}],204:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r*u});
},{"./internal/_curry2":104}],205:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,t){switch(r){case 0:return function(){return t.call(this)};case 1:return function(r){return t.call(this,r)};case 2:return function(r,n){return t.call(this,r,n)};case 3:return function(r,n,e){return t.call(this,r,n,e)};case 4:return function(r,n,e,u){return t.call(this,r,n,e,u)};case 5:return function(r,n,e,u,c){return t.call(this,r,n,e,u,c)};case 6:return function(r,n,e,u,c,a){return t.call(this,r,n,e,u,c,a)};case 7:return function(r,n,e,u,c,a,i){return t.call(this,r,n,e,u,c,a,i)};case 8:return function(r,n,e,u,c,a,i,s){return t.call(this,r,n,e,u,c,a,i,s)};case 9:return function(r,n,e,u,c,a,i,s,l){return t.call(this,r,n,e,u,c,a,i,s,l)};case 10:return function(r,n,e,u,c,a,i,s,l,o){return t.call(this,r,n,e,u,c,a,i,s,l,o)};default:throw new Error("First argument to nAry must be a non-negative integer no greater than ten")}});
},{"./internal/_curry2":104}],206:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return-r});
},{"./internal/_curry1":103}],207:[function(require,module,exports){
var _complement=require("./internal/_complement"),_curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xany=require("./internal/_xany"),any=require("./any");module.exports=_curry2(_complement(_dispatchable(["any"],_xany,any)));
},{"./any":13,"./internal/_complement":98,"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xany":141}],208:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return!r});
},{"./internal/_curry1":103}],209:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isString=require("./internal/_isString");module.exports=_curry2(function(r,i){var n=r<0?i.length+r:r;return _isString(i)?i.charAt(n):i[n]});
},{"./internal/_curry2":104,"./internal/_isString":126}],210:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),curryN=require("./curryN"),nth=require("./nth");module.exports=_curry1(function(r){return curryN(r<0?1:r+1,function(){return nth(r,arguments)})});
},{"./curryN":43,"./internal/_curry1":103,"./nth":209}],211:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){var e={};return e[r]=u,e});
},{"./internal/_curry2":104}],212:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_of=require("./internal/_of");module.exports=_curry1(_of);
},{"./internal/_curry1":103,"./internal/_of":131}],213:[function(require,module,exports){
var _contains=require("./internal/_contains"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,n){var e={};for(var i in n)_contains(i,r)||(e[i]=n[i]);return e});
},{"./internal/_contains":100,"./internal/_curry2":104}],214:[function(require,module,exports){
var _arity=require("./internal/_arity"),_curry1=require("./internal/_curry1");module.exports=_curry1(function(r){var t,e=!1;return _arity(r.length,function(){return e?t:(e=!0,t=r.apply(this,arguments))})});
},{"./internal/_arity":92,"./internal/_curry1":103}],215:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r||u});
},{"./internal/_curry2":104}],216:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=function(){var r=function(n){return{value:n,map:function(u){return r(u(n))}}};return _curry3(function(n,u,e){return n(function(n){return r(u(n))})(e).value})}();
},{"./internal/_curry3":105}],217:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return[r,u]});
},{"./internal/_curry2":104}],218:[function(require,module,exports){
var _concat=require("./internal/_concat"),_createPartialApplicator=require("./internal/_createPartialApplicator");module.exports=_createPartialApplicator(_concat);
},{"./internal/_concat":99,"./internal/_createPartialApplicator":102}],219:[function(require,module,exports){
var _concat=require("./internal/_concat"),_createPartialApplicator=require("./internal/_createPartialApplicator"),flip=require("./flip");module.exports=_createPartialApplicator(flip(_concat));
},{"./flip":70,"./internal/_concat":99,"./internal/_createPartialApplicator":102}],220:[function(require,module,exports){
var filter=require("./filter"),juxt=require("./juxt"),reject=require("./reject");module.exports=juxt([filter,reject]);
},{"./filter":64,"./juxt":172,"./reject":247}],221:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){for(var e=u,n=0;n<r.length;){if(null==e)return;e=e[r[n]],n+=1}return e});
},{"./internal/_curry2":104}],222:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),equals=require("./equals"),path=require("./path");module.exports=_curry3(function(r,e,u){return equals(path(r,u),e)});
},{"./equals":62,"./internal/_curry3":105,"./path":221}],223:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),defaultTo=require("./defaultTo"),path=require("./path");module.exports=_curry3(function(r,e,u){return defaultTo(r,path(e,u))});
},{"./defaultTo":45,"./internal/_curry3":105,"./path":221}],224:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),path=require("./path");module.exports=_curry3(function(r,e,t){return e.length>0&&r(path(e,t))});
},{"./internal/_curry3":105,"./path":221}],225:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var n={},u=0;u<r.length;)r[u]in e&&(n[r[u]]=e[r[u]]),u+=1;return n});
},{"./internal/_curry2":104}],226:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var u={},n=0,t=r.length;n<t;){var a=r[n];u[a]=e[a],n+=1}return u});
},{"./internal/_curry2":104}],227:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){var e={};for(var n in u)r(u[n],n,u)&&(e[n]=u[n]);return e});
},{"./internal/_curry2":104}],228:[function(require,module,exports){
var _arity=require("./internal/_arity"),_pipe=require("./internal/_pipe"),reduce=require("./reduce"),tail=require("./tail");module.exports=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return _arity(arguments[0].length,reduce(_pipe,arguments[0],tail(arguments)))};
},{"./internal/_arity":92,"./internal/_pipe":132,"./reduce":242,"./tail":267}],229:[function(require,module,exports){
var composeK=require("./composeK"),reverse=require("./reverse");module.exports=function(){if(0===arguments.length)throw new Error("pipeK requires at least one argument");return composeK.apply(this,reverse(arguments))};
},{"./composeK":33,"./reverse":251}],230:[function(require,module,exports){
var _arity=require("./internal/_arity"),_pipeP=require("./internal/_pipeP"),reduce=require("./reduce"),tail=require("./tail");module.exports=function(){if(0===arguments.length)throw new Error("pipeP requires at least one argument");return _arity(arguments[0].length,reduce(_pipeP,arguments[0],tail(arguments)))};
},{"./internal/_arity":92,"./internal/_pipeP":133,"./reduce":242,"./tail":267}],231:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),map=require("./map"),prop=require("./prop");module.exports=_curry2(function(r,e){return map(prop(r),e)});
},{"./internal/_curry2":104,"./map":186,"./prop":235}],232:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,c){return _concat([r],c)});
},{"./internal/_concat":99,"./internal/_curry2":104}],233:[function(require,module,exports){
var multiply=require("./multiply"),reduce=require("./reduce");module.exports=reduce(multiply,1);
},{"./multiply":204,"./reduce":242}],234:[function(require,module,exports){
var _map=require("./internal/_map"),identity=require("./identity"),pickAll=require("./pickAll"),useWith=require("./useWith");module.exports=useWith(_map,[pickAll,identity]);
},{"./identity":82,"./internal/_map":129,"./pickAll":226,"./useWith":299}],235:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return u[r]});
},{"./internal/_curry2":104}],236:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),equals=require("./equals");module.exports=_curry3(function(r,e,u){return equals(e,u[r])});
},{"./equals":62,"./internal/_curry3":105}],237:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),is=require("./is");module.exports=_curry3(function(r,e,u){return is(r,u[e])});
},{"./internal/_curry3":105,"./is":167}],238:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),_has=require("./internal/_has");module.exports=_curry3(function(r,e,u){return null!=u&&_has(e,u)?u[e]:r});
},{"./internal/_curry3":105,"./internal/_has":115}],239:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){return r(e[u])});
},{"./internal/_curry3":105}],240:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var u=r.length,n=[],t=0;t<u;)n[t]=e[r[t]],t+=1;return n});
},{"./internal/_curry2":104}],241:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_isNumber=require("./internal/_isNumber");module.exports=_curry2(function(r,e){if(!_isNumber(r)||!_isNumber(e))throw new TypeError("Both arguments to range must be numbers");for(var u=[],n=r;n<e;)u.push(n),n+=1;return u});
},{"./internal/_curry2":104,"./internal/_isNumber":122}],242:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),_reduce=require("./internal/_reduce");module.exports=_curry3(_reduce);
},{"./internal/_curry3":105,"./internal/_reduce":135}],243:[function(require,module,exports){
var _curryN=require("./internal/_curryN"),_dispatchable=require("./internal/_dispatchable"),_has=require("./internal/_has"),_reduce=require("./internal/_reduce"),_xreduceBy=require("./internal/_xreduceBy");module.exports=_curryN(4,[],_dispatchable([],_xreduceBy,function(e,r,u,a){return _reduce(function(a,n){var i=u(n);return a[i]=e(_has(i,a)?a[i]:r,n),a},{},a)}));
},{"./internal/_curryN":106,"./internal/_dispatchable":107,"./internal/_has":115,"./internal/_reduce":135,"./internal/_xreduceBy":156}],244:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,u){for(var n=u.length-1;n>=0;)e=r(u[n],e),n-=1;return e});
},{"./internal/_curry3":105}],245:[function(require,module,exports){
var _curryN=require("./internal/_curryN"),_reduce=require("./internal/_reduce"),_reduced=require("./internal/_reduced");module.exports=_curryN(4,[],function(r,e,u,n){return _reduce(function(u,n){return r(u,n)?e(u,n):_reduced(u)},u,n)});
},{"./internal/_curryN":106,"./internal/_reduce":135,"./internal/_reduced":136}],246:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_reduced=require("./internal/_reduced");module.exports=_curry1(_reduced);
},{"./internal/_curry1":103,"./internal/_reduced":136}],247:[function(require,module,exports){
var _complement=require("./internal/_complement"),_curry2=require("./internal/_curry2"),filter=require("./filter");module.exports=_curry2(function(r,e){return filter(_complement(r),e)});
},{"./filter":64,"./internal/_complement":98,"./internal/_curry2":104}],248:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,c){var u=Array.prototype.slice.call(c,0);return u.splice(r,e),u});
},{"./internal/_curry3":105}],249:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),always=require("./always"),times=require("./times");module.exports=_curry2(function(r,e){return times(always(r),e)});
},{"./always":11,"./internal/_curry2":104,"./times":274}],250:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,u){return u.replace(r,e)});
},{"./internal/_curry3":105}],251:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_isString=require("./internal/_isString");module.exports=_curry1(function(r){return _isString(r)?r.split("").reverse().join(""):Array.prototype.slice.call(r,0).reverse()});
},{"./internal/_curry1":103,"./internal/_isString":126}],252:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,u){for(var n=0,t=u.length,c=[e];n<t;)e=r(e,u[n]),c[n+1]=e,n+=1;return c});
},{"./internal/_curry3":105}],253:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),ap=require("./ap"),map=require("./map"),prepend=require("./prepend"),reduceRight=require("./reduceRight");module.exports=_curry2(function(e,r){return"function"==typeof r.sequence?r.sequence(e):reduceRight(function(e,r){return ap(map(prepend,e),r)},e([]),r)});
},{"./ap":15,"./internal/_curry2":104,"./map":186,"./prepend":232,"./reduceRight":244}],254:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),always=require("./always"),over=require("./over");module.exports=_curry3(function(r,e,u){return over(r,always(e),u)});
},{"./always":11,"./internal/_curry3":105,"./over":216}],255:[function(require,module,exports){
var _checkForMethod=require("./internal/_checkForMethod"),_curry3=require("./internal/_curry3");module.exports=_curry3(_checkForMethod("slice",function(r,e,c){return Array.prototype.slice.call(c,r,e)}));
},{"./internal/_checkForMethod":95,"./internal/_curry3":105}],256:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){return Array.prototype.slice.call(e,0).sort(r)});
},{"./internal/_curry2":104}],257:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){return Array.prototype.slice.call(e,0).sort(function(e,t){var u=r(e),n=r(t);return u<n?-1:u>n?1:0})});
},{"./internal/_curry2":104}],258:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){return Array.prototype.slice.call(e,0).sort(function(e,t){for(var n=0,u=0;0===n&&u<r.length;)n=r[u](e,t),u+=1;return n})});
},{"./internal/_curry2":104}],259:[function(require,module,exports){
var invoker=require("./invoker");module.exports=invoker(1,"split");
},{"./invoker":166}],260:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),length=require("./length"),slice=require("./slice");module.exports=_curry2(function(e,r){return[slice(0,e,r),slice(e,length(r),r)]});
},{"./internal/_curry2":104,"./length":177,"./slice":255}],261:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),slice=require("./slice");module.exports=_curry2(function(r,e){if(r<=0)throw new Error("First argument to splitEvery must be a positive integer");for(var i=[],t=0;t<e.length;)i.push(slice(t,t+=r,e));return i});
},{"./internal/_curry2":104,"./slice":255}],262:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var u=0,t=e.length,c=[];u<t&&!r(e[u]);)c.push(e[u]),u+=1;return[c,Array.prototype.slice.call(e,u)]});
},{"./internal/_curry2":104}],263:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return Number(r)-Number(u)});
},{"./internal/_curry2":104}],264:[function(require,module,exports){
var add=require("./add"),reduce=require("./reduce");module.exports=reduce(add,0);
},{"./add":6,"./reduce":242}],265:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),concat=require("./concat"),difference=require("./difference");module.exports=_curry2(function(e,r){return concat(difference(e,r),difference(r,e))});
},{"./concat":35,"./difference":47,"./internal/_curry2":104}],266:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),concat=require("./concat"),differenceWith=require("./differenceWith");module.exports=_curry3(function(e,r,c){return concat(differenceWith(e,r,c),differenceWith(e,c,r))});
},{"./concat":35,"./differenceWith":48,"./internal/_curry3":105}],267:[function(require,module,exports){
var _checkForMethod=require("./internal/_checkForMethod"),_curry1=require("./internal/_curry1"),slice=require("./slice");module.exports=_curry1(_checkForMethod("tail",slice(1,1/0)));
},{"./internal/_checkForMethod":95,"./internal/_curry1":103,"./slice":255}],268:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xtake=require("./internal/_xtake"),slice=require("./slice");module.exports=_curry2(_dispatchable(["take"],_xtake,function(e,r){return slice(0,e<0?1/0:e,r)}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xtake":157,"./slice":255}],269:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),drop=require("./drop");module.exports=_curry2(function(r,e){return drop(r>=0?e.length-r:0,e)});
},{"./drop":52,"./internal/_curry2":104}],270:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var t=e.length-1;t>=0&&r(e[t]);)t-=1;return Array.prototype.slice.call(e,t+1)});
},{"./internal/_curry2":104}],271:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_dispatchable=require("./internal/_dispatchable"),_xtakeWhile=require("./internal/_xtakeWhile");module.exports=_curry2(_dispatchable(["takeWhile"],_xtakeWhile,function(e,r){for(var a=0,t=r.length;a<t&&e(r[a]);)a+=1;return Array.prototype.slice.call(r,0,a)}));
},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xtakeWhile":158}],272:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,u){return r(u),u});
},{"./internal/_curry2":104}],273:[function(require,module,exports){
var _cloneRegExp=require("./internal/_cloneRegExp"),_curry2=require("./internal/_curry2"),_isRegExp=require("./internal/_isRegExp"),toString=require("./toString");module.exports=_curry2(function(e,r){if(!_isRegExp(e))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+toString(e));return _cloneRegExp(e).test(r)});
},{"./internal/_cloneRegExp":97,"./internal/_curry2":104,"./internal/_isRegExp":125,"./toString":278}],274:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){var n,u=Number(e),a=0;if(u<0||isNaN(u))throw new RangeError("n must be a non-negative number");for(n=new Array(u);a<u;)n[a]=r(a),a+=1;return n});
},{"./internal/_curry2":104}],275:[function(require,module,exports){
var invoker=require("./invoker");module.exports=invoker(0,"toLowerCase");
},{"./invoker":166}],276:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_has=require("./internal/_has");module.exports=_curry1(function(r){var e=[];for(var n in r)_has(n,r)&&(e[e.length]=[n,r[n]]);return e});
},{"./internal/_curry1":103,"./internal/_has":115}],277:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){var e=[];for(var n in r)e[e.length]=[n,r[n]];return e});
},{"./internal/_curry1":103}],278:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),_toString=require("./internal/_toString");module.exports=_curry1(function(r){return _toString(r,[])});
},{"./internal/_curry1":103,"./internal/_toString":139}],279:[function(require,module,exports){
var invoker=require("./invoker");module.exports=invoker(0,"toUpperCase");
},{"./invoker":166}],280:[function(require,module,exports){
var _reduce=require("./internal/_reduce"),_xwrap=require("./internal/_xwrap"),curryN=require("./curryN");module.exports=curryN(4,function(r,e,u,n){return _reduce(r("function"==typeof e?_xwrap(e):e),u,n)});
},{"./curryN":43,"./internal/_reduce":135,"./internal/_xwrap":159}],281:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){for(var e=0,u=[];e<r.length;){for(var n=r[e],o=0;o<n.length;)void 0===u[o]&&(u[o]=[]),u[o].push(n[o]),o+=1;e+=1}return u});
},{"./internal/_curry1":103}],282:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),map=require("./map"),sequence=require("./sequence");module.exports=_curry3(function(e,r,u){return sequence(e,map(r,u))});
},{"./internal/_curry3":105,"./map":186,"./sequence":253}],283:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=function(){var r="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",e="function"==typeof String.prototype.trim;return _curry1(e&&!r.trim()&&"​".trim()?function(r){return r.trim()}:function(e){var t=new RegExp("^["+r+"]["+r+"]*"),n=new RegExp("["+r+"]["+r+"]*$");return e.replace(t,"").replace(n,"")})}();
},{"./internal/_curry1":103}],284:[function(require,module,exports){
var _arity=require("./internal/_arity"),_concat=require("./internal/_concat"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,t){return _arity(r.length,function(){try{return r.apply(this,arguments)}catch(r){return t.apply(this,_concat([r],arguments))}})});
},{"./internal/_arity":92,"./internal/_concat":99,"./internal/_curry2":104}],285:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return null===r?"Null":void 0===r?"Undefined":Object.prototype.toString.call(r).slice(8,-1)});
},{"./internal/_curry1":103}],286:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){return function(){return r(Array.prototype.slice.call(arguments,0))}});
},{"./internal/_curry1":103}],287:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),nAry=require("./nAry");module.exports=_curry1(function(r){return nAry(1,r)});
},{"./internal/_curry1":103,"./nAry":205}],288:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),curryN=require("./curryN");module.exports=_curry2(function(r,e){return curryN(r,function(){for(var u,t=1,n=e,c=0;t<=r&&"function"==typeof n;)u=t===r?arguments.length:c+n.length,n=n.apply(this,Array.prototype.slice.call(arguments,c,u)),t+=1,c=u;return n})});
},{"./curryN":43,"./internal/_curry2":104}],289:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var n=r(e),u=[];n&&n.length;)u[u.length]=n[0],n=r(n[1]);return u});
},{"./internal/_curry2":104}],290:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry2=require("./internal/_curry2"),compose=require("./compose"),uniq=require("./uniq");module.exports=_curry2(compose(uniq,_concat));
},{"./compose":32,"./internal/_concat":99,"./internal/_curry2":104,"./uniq":292}],291:[function(require,module,exports){
var _concat=require("./internal/_concat"),_curry3=require("./internal/_curry3"),uniqWith=require("./uniqWith");module.exports=_curry3(function(r,n,i){return uniqWith(r,_concat(n,i))});
},{"./internal/_concat":99,"./internal/_curry3":105,"./uniqWith":294}],292:[function(require,module,exports){
var identity=require("./identity"),uniqBy=require("./uniqBy");module.exports=uniqBy(identity);
},{"./identity":82,"./uniqBy":293}],293:[function(require,module,exports){
var _Set=require("./internal/_Set"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var n,t,u=new _Set,_=[],a=0;a<e.length;)t=e[a],n=r(t),u.add(n)&&_.push(t),a+=1;return _});
},{"./internal/_Set":90,"./internal/_curry2":104}],294:[function(require,module,exports){
var _containsWith=require("./internal/_containsWith"),_curry2=require("./internal/_curry2");module.exports=_curry2(function(r,n){for(var t,e=0,i=n.length,u=[];e<i;)t=n[e],_containsWith(r,t,u)||(u[u.length]=t),e+=1;return u});
},{"./internal/_containsWith":101,"./internal/_curry2":104}],295:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){return r(e)?e:u(e)});
},{"./internal/_curry3":105}],296:[function(require,module,exports){
var _identity=require("./internal/_identity"),chain=require("./chain");module.exports=chain(_identity);
},{"./chain":27,"./internal/_identity":116}],297:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){for(var n=e;!r(n);)n=u(n);return n});
},{"./internal/_curry3":105}],298:[function(require,module,exports){
var _curry3=require("./internal/_curry3"),adjust=require("./adjust"),always=require("./always");module.exports=_curry3(function(r,u,a){return adjust(always(u),r,a)});
},{"./adjust":8,"./always":11,"./internal/_curry3":105}],299:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),curryN=require("./curryN");module.exports=_curry2(function(r,e){return curryN(e.length,function(){for(var t=[],u=0;u<e.length;)t.push(e[u].call(this,arguments[u])),u+=1;return r.apply(this,t.concat(Array.prototype.slice.call(arguments,e.length)))})});
},{"./curryN":43,"./internal/_curry2":104}],300:[function(require,module,exports){
var _curry1=require("./internal/_curry1"),keys=require("./keys");module.exports=_curry1(function(r){for(var e=keys(r),u=e.length,n=[],y=0;y<u;)n[y]=r[e[y]],y+=1;return n});
},{"./internal/_curry1":103,"./keys":173}],301:[function(require,module,exports){
var _curry1=require("./internal/_curry1");module.exports=_curry1(function(r){var e,n=[];for(e in r)n[n.length]=r[e];return n});
},{"./internal/_curry1":103}],302:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=function(){var r=function(r){return{value:r,map:function(){return this}}};return _curry2(function(u,n){return u(r)(n).value})}();
},{"./internal/_curry2":104}],303:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,u,e){return r(e)?u(e):e});
},{"./internal/_curry3":105}],304:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),_has=require("./internal/_has");module.exports=_curry2(function(r,e){for(var n in r)if(_has(n,r)&&!r[n](e[n]))return!1;return!0});
},{"./internal/_curry2":104,"./internal/_has":115}],305:[function(require,module,exports){
var _curry2=require("./internal/_curry2"),equals=require("./equals"),map=require("./map"),where=require("./where");module.exports=_curry2(function(r,e){return where(map(equals,r),e)});
},{"./equals":62,"./internal/_curry2":104,"./map":186,"./where":304}],306:[function(require,module,exports){
var _contains=require("./internal/_contains"),_curry2=require("./internal/_curry2"),flip=require("./flip"),reject=require("./reject");module.exports=_curry2(function(r,e){return reject(flip(_contains)(r),e)});
},{"./flip":70,"./internal/_contains":100,"./internal/_curry2":104,"./reject":247}],307:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var n,t=0,u=r.length,l=e.length,o=[];t<u;){for(n=0;n<l;)o[o.length]=[r[t],e[n]],n+=1;t+=1}return o});
},{"./internal/_curry2":104}],308:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var n=[],t=0,u=Math.min(r.length,e.length);t<u;)n[t]=[r[t],e[t]],t+=1;return n});
},{"./internal/_curry2":104}],309:[function(require,module,exports){
var _curry2=require("./internal/_curry2");module.exports=_curry2(function(r,e){for(var n=0,t=Math.min(r.length,e.length),u={};n<t;)u[r[n]]=e[n],n+=1;return u});
},{"./internal/_curry2":104}],310:[function(require,module,exports){
var _curry3=require("./internal/_curry3");module.exports=_curry3(function(r,e,n){for(var t=[],u=0,a=Math.min(e.length,n.length);u<a;)t[u]=r(e[u],n[u]),u+=1;return t});
},{"./internal/_curry3":105}]},{},[1])


//# sourceMappingURL=bundle.js.map