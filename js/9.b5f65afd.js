(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{3340:function(t,e,a){"use strict";(function(t){a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d");var i=a("967e"),r=a.n(i),n=a("c47a"),s=a.n(n),o=(a("96cf"),a("fa84")),c=a.n(o),l=a("780a"),u=a("731b"),p=a("25f1"),d=a("f2ec");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={name:"AddPeminjaman",data:function(){return{item:{varietas:"membramo"},loading:!1,kriteria:[],kriteria_data:[],varietas_options:["inpari 6 jete","inpago 8","membramo","ciherang"]}},methods:{load_kriteria:function(){var t=c()(r.a.mark((function t(){var e;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["b"].get("/kriteria",{params:{keyword:""}});case 2:e=t.sent,this.kriteria=e.data.map((function(t){return v({id:t._id,type:t._type},t)})),this.kriteria_data=e.data.map((function(t){var e={column_name:t.column_name,value:t.default_value};return e}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),check_invalid_kd:function(){var e=c()(r.a.mark((function e(){var a,i,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=this.kriteria_data,e.next=3,Object(u["a"])(new p["a"](t));case 3:return i=e.sent,e.next=6,i.kd_invalid({kriteria_data:a});case 6:return n=e.sent,d["a"].terminate(i),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),save:function(){var t=c()(r.a.mark((function t(){var e,a;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.check_invalid_kd();case 3:if(e=t.sent,!e){t.next=10;break}return this.loading=!1,this.$store.set("appGlobal/notification@type","negative"),this.$store.set("appGlobal/notification@message",e.message),this.$store.set("appGlobal/notification@show",!0),t.abrupt("return");case 10:return a=v({},this.item,{kriteria_data:this.kriteria_data}),t.next=13,l["b"].post("/alternative",a);case 13:this.loading=!1,this.$emit("update"),this.$store.set("appGlobal/notification@type","positive"),this.$store.set("appGlobal/notification@message","Sukses menambah data alternative"),this.$store.set("appGlobal/notification@show",!0);case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.load_kriteria()}}}).call(this,a("33ef"))},"33ef":function(t,e,a){t.exports=a.p+"js/2.46e2202d.worker.js"},d46f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:!0,persistent:"",id:"edit-peminjaman"}},[a("q-card",{staticStyle:{"min-width":"500px"}},[a("q-toolbar",[a("q-toolbar-title",[t._v("Input Data Peminjaman")])],1),a("q-separator"),a("q-card-section",[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"text-body2"},[t._v("Varietas")])]),a("div",{staticClass:"col-8"},[a("q-select",{staticStyle:{width:"200px"},attrs:{options:t.varietas_options,label:"Pilih Varietas",dense:"",outlined:""},model:{value:t.item.varietas,callback:function(e){t.$set(t.item,"varietas",e)},expression:"item.varietas"}})],1)]),a("q-separator",{staticClass:"q-my-lg"}),t._l(t.kriteria,(function(e,i){return[a("div",{key:e.id,staticClass:"row items-center q-mt-lg"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"text-body2"},[t._v(t._s(e.label))])]),a("div",{staticClass:"col-8"},["kategorial"===e.type?a("q-select",{attrs:{dense:"",outlined:"",options:e.options.map((function(t){return t.label}))},model:{value:t.kriteria_data[i].value,callback:function(e){t.$set(t.kriteria_data[i],"value",e)},expression:"kriteria_data[index].value"}}):t._e(),"numerik"===e.type?a("q-input",{attrs:{dense:"",outlined:"",type:"number"},model:{value:t.kriteria_data[i].value,callback:function(e){t.$set(t.kriteria_data[i],"value",t._n(e))},expression:"kriteria_data[index].value"}}):t._e()],1)])]}))],2),a("q-card-actions",[a("q-btn",{attrs:{label:"Simpan",dark:"",color:"primary",unelevated:"",loading:t.loading},on:{click:t.save}})],1)],1)],1)},r=[],n=a("3340"),s=n["a"],o=a("2877"),c=Object(o["a"])(s,i,r,!1,null,null,null);e["default"]=c.exports}}]);