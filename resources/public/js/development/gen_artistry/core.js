// Compiled by ClojureScript 1.10.520 {}
goog.provide('gen_artistry.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
gen_artistry.core.setup = (function gen_artistry$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
gen_artistry.core.update_state = (function gen_artistry$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
gen_artistry.core.draw_state = (function gen_artistry$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__2249__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__2249__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
gen_artistry.core.run_sketch = (function gen_artistry$core$run_sketch(){
gen_artistry.core.gen_artistry = (function gen_artistry$core$run_sketch_$_gen_artistry(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"gen-artistry",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,gen_artistry.core.update_state))?(function() { 
var G__2354__delegate = function (args){
return cljs.core.apply.call(null,gen_artistry.core.update_state,args);
};
var G__2354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2355__i = 0, G__2355__a = new Array(arguments.length -  0);
while (G__2355__i < G__2355__a.length) {G__2355__a[G__2355__i] = arguments[G__2355__i + 0]; ++G__2355__i;}
  args = new cljs.core.IndexedSeq(G__2355__a,0,null);
} 
return G__2354__delegate.call(this,args);};
G__2354.cljs$lang$maxFixedArity = 0;
G__2354.cljs$lang$applyTo = (function (arglist__2356){
var args = cljs.core.seq(arglist__2356);
return G__2354__delegate(args);
});
G__2354.cljs$core$IFn$_invoke$arity$variadic = G__2354__delegate;
return G__2354;
})()
:gen_artistry.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,gen_artistry.core.setup))?(function() { 
var G__2357__delegate = function (args){
return cljs.core.apply.call(null,gen_artistry.core.setup,args);
};
var G__2357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2358__i = 0, G__2358__a = new Array(arguments.length -  0);
while (G__2358__i < G__2358__a.length) {G__2358__a[G__2358__i] = arguments[G__2358__i + 0]; ++G__2358__i;}
  args = new cljs.core.IndexedSeq(G__2358__a,0,null);
} 
return G__2357__delegate.call(this,args);};
G__2357.cljs$lang$maxFixedArity = 0;
G__2357.cljs$lang$applyTo = (function (arglist__2359){
var args = cljs.core.seq(arglist__2359);
return G__2357__delegate(args);
});
G__2357.cljs$core$IFn$_invoke$arity$variadic = G__2357__delegate;
return G__2357;
})()
:gen_artistry.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,gen_artistry.core.draw_state))?(function() { 
var G__2360__delegate = function (args){
return cljs.core.apply.call(null,gen_artistry.core.draw_state,args);
};
var G__2360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2361__i = 0, G__2361__a = new Array(arguments.length -  0);
while (G__2361__i < G__2361__a.length) {G__2361__a[G__2361__i] = arguments[G__2361__i + 0]; ++G__2361__i;}
  args = new cljs.core.IndexedSeq(G__2361__a,0,null);
} 
return G__2360__delegate.call(this,args);};
G__2360.cljs$lang$maxFixedArity = 0;
G__2360.cljs$lang$applyTo = (function (arglist__2362){
var args = cljs.core.seq(arglist__2362);
return G__2360__delegate(args);
});
G__2360.cljs$core$IFn$_invoke$arity$variadic = G__2360__delegate;
return G__2360;
})()
:gen_artistry.core.draw_state));
});
goog.exportSymbol('gen_artistry.core.gen_artistry', gen_artistry.core.gen_artistry);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1394__1395__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1394__1395__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),gen_artistry.core.gen_artistry,new cljs.core.Keyword(null,"host-id","host-id",742376279),"gen-artistry"], null));
}
});
goog.exportSymbol('gen_artistry.core.run_sketch', gen_artistry.core.run_sketch);

//# sourceMappingURL=core.js.map
