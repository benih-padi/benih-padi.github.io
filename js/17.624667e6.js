(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"35ba":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:!0,persistent:""}},[a("q-card",{staticClass:"relative-position",attrs:{flat:""}},[a("q-toolbar",[a("q-toolbar-title",[t._v("\n        Label -- "+t._s(t.nama)+"\n      ")])],1),a("q-card-section",[a("q-input",{staticClass:"q-mb-d",attrs:{label:"Label"},model:{value:t.item.label,callback:function(e){t.$set(t.item,"label",e)},expression:"item.label"}})],1),a("q-card-actions",[a("q-btn",{attrs:{flat:"",dark:"",color:"primary",label:"Simpan"},on:{click:t.save}}),a("q-btn",{attrs:{flat:"",dark:"",color:"negative",label:"Batal"},on:{click:function(e){return t.$router.back()}}})],1),a("q-inner-loading",{attrs:{showing:t.loading}},[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)],1)},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(i),o=a("967e"),s=a.n(o),l=(a("96cf"),a("fa84")),u=a.n(l),p=a("780a");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={props:{id:String},data:function(){return{loading:!0,item:{label:""},nama:""}},methods:{load_data:function(){var t=u()(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,p["b"].get("kriteria/".concat(this.id));case 3:e=t.sent,a=e.data,this.item.label=a.label,this.nama=a.column_name,this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=u()(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["b"].patch("kriteria/".concat(this.id,"/label"),d({},this.item));case 3:this.$emit("update"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:return t.prev=9,this.$router.back(),t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[0,6,9,12]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.load_data()}},h=f,m=a("2877"),v=Object(m["a"])(h,r,n,!1,null,null,null);e["default"]=v.exports}}]);