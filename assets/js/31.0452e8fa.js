(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{385:function(t,e,s){},389:function(t,e,s){"use strict";s.r(e);var n={name:"ModuleTransition",props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"}},methods:{setStyle(t){t.style.transition=`all ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity=0},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity=1}}},a=(s(402),s(1)),l=Object(a.a)(n,(function(){return(0,this._self._c)("transition",{attrs:{name:"module"},on:{enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.default=l.exports},402:function(t,e,s){"use strict";s(385)}}]);