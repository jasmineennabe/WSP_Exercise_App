(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"269f":function(t,e,s){"use strict";s("782b")},"26d3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("div",{staticClass:"setting-header"},[t._v(" Settings ")]),s("div",{staticClass:"settings-list"},[s("div",{staticClass:"setting-item"},[s("button",{on:{click:function(e){return e.preventDefault(),t.toggleMyAccount(e)}}},[t._v("My Account")])]),s("div",{staticClass:"setting-item"},[s("button",{on:{click:function(e){return e.preventDefault(),t.togglePreferences(e)}}},[t._v("Preferences")])]),s("div",{staticClass:"setting-item"},[s("button",{on:{click:function(e){return e.preventDefault(),t.toggleSupport(e)}}},[t._v("Support")])]),1==t.Session.user.isAdmin?s("div",{staticClass:"setting-item"},[s("button",{on:{click:function(e){return e.preventDefault(),t.toggleAdmin(e)}}},[t._v("Admin")])]):t._e()])]),s("div",{staticClass:"column settings-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMyAccount,expression:"showMyAccount"}]},[s("AcctSettings",{attrs:{user:t.user}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showPreferences,expression:"showPreferences"}]},[s("div",{staticClass:"more-to-come"},[t._v(" Check back later to see how you can manage your Profile Preferences ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSupport,expression:"showSupport"}]},[s("div",{staticClass:"more-to-come"},[t._v(" Check back later to see FAQ and get User Support ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showAdmin,expression:"showAdmin"}]},[s("Users")],1)])])])},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"acct-settings"},[s("div",{staticClass:"acct-heading"},[t._v(" Account Information ")]),s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-pair"},[s("p",[t._v("User First and Last Name:")]),t._v(" "),s("p",{staticClass:"info"},[t._v(t._s(t.user.firstName)+" "+t._s(t.user.lastName))])]),s("div",{staticClass:"user-pair"},[s("p",[t._v("User Handle:")]),t._v(" "),s("p",{staticClass:"info"},[t._v(t._s(t.user.handle))])]),s("div",{staticClass:"user-pair"},[s("p",[t._v("User email:")]),t._v(" "),s("p",{staticClass:"info"},[t._v(t._s(t.user.email))])]),s("div",{staticClass:"user-pair"},[s("p",[t._v("User Birthday:")]),t._v(" "),s("p",{staticClass:"info"},[t._v(t._s(t.user.dob))])])])])},i=[],o=(s("96cf"),s("1da1")),u=s("a995"),c=s("f246"),l={data:function(){return{user:{}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["e"])(c["d"].user.handle);case 2:t.user=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},d=l,m=(s("7cb8"),s("2877")),v=Object(m["a"])(d,n,i,!1,null,"a6d6ca1a",null),p=v.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns",attrs:{id:"users"}},[s("div",{staticClass:"column is-one-fifth"},[s("button",{staticClass:"heading",on:{click:function(e){return e.preventDefault(),t.toggleTable(e)}}},[t._v("Users")])]),s("div",{staticClass:"column"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}]},[s("table",{staticClass:"users-tbl"},[t._m(0),t._l(t.users,(function(e){return s("tr",{key:e.handle},[s("td",[t._v(t._s(e.firstName))]),s("td",[t._v(t._s(e.lastName))]),s("td",[s("router-link",{attrs:{to:"user/"+e.handle}},[t._v(t._s(e.handle))])],1),s("td",[t._v(t._s(e.email))]),s("td",[t._v(t._s(e.dob))]),s("td",[t._v(t._s(e.isAdmin))])])}))],2)])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",{staticClass:"tbl-heading"},[t._v("First Name")]),s("th",{staticClass:"tbl-heading"},[t._v("Last Name")]),s("th",{staticClass:"tbl-heading"},[t._v("Handle")]),s("th",{staticClass:"tbl-heading"},[t._v("Email")]),s("th",{staticClass:"tbl-heading"},[t._v("DOB")]),s("th",{staticClass:"tbl-heading"},[t._v("Admin")])])}],b=s("2b0e"),w=b["a"].extend({data:function(){return{users:[],showTable:!0}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["b"])();case 2:t.users=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{toggleTable:function(){this.showTable=!this.showTable}}}),_=w,g=(s("36dc"),Object(m["a"])(_,f,h,!1,null,"0882df8a",null)),C=g.exports,k={data:function(){return{Session:c["d"],showMyAccount:!0,showPreferences:!1,showSupport:!1,showAdmin:!1,user:{}}},methods:{toggleMyAccount:function(){this.showMyAccount=!0,this.showPreferences=!1,this.showSupport=!1,this.showAdmin=!1},togglePreferences:function(){this.showMyAccount=!1,this.showPreferences=!0,this.showSupport=!1,this.showAdmin=!1},toggleSupport:function(){this.showMyAccount=!1,this.showPreferences=!1,this.showSupport=!0,this.showAdmin=!1},toggleAdmin:function(){this.showMyAccount=!1,this.showPreferences=!1,this.showSupport=!1,this.showAdmin=!0}},components:{Users:C,AcctSettings:p}},x=k,y=(s("f241"),Object(m["a"])(x,a,r,!1,null,"2b2eafc3",null));e["default"]=y.exports},"2d36":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n}));var a=s("2bc3");function r(t){return Object(a["a"])("routines/add",t)}function n(){return Object(a["a"])("routines/myRoutines")}},"2f57":function(t,e,s){},3493:function(t,e,s){},"34c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[t._m(0),t._m(1),s("div",{staticClass:"reg-entry"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstName,expression:"user.firstName"}],attrs:{type:"text",placeholder:"John",name:"firstName",required:""},domProps:{value:t.user.firstName},on:{input:function(e){e.target.composing||t.$set(t.user,"firstName",e.target.value)}}})]),s("div",{staticClass:"reg-entry"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastName,expression:"user.lastName"}],attrs:{type:"text",placeholder:"Doe",name:"lastName",required:""},domProps:{value:t.user.lastName},on:{input:function(e){e.target.composing||t.$set(t.user,"lastName",e.target.value)}}})]),s("div",{staticClass:"reg-entry"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.dob,expression:"user.dob"}],attrs:{type:"date",placeholder:"01/02/1993",name:"birthday",required:""},domProps:{value:t.user.dob},on:{input:function(e){e.target.composing||t.$set(t.user,"dob",e.target.value)}}})]),t._m(5),s("div",{staticClass:"reg-entry"},[t._m(6),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.handle,expression:"user.handle"}],attrs:{type:"text",placeholder:"Create a Username",name:"username",required:""},domProps:{value:t.user.handle},on:{input:function(e){e.target.composing||t.$set(t.user,"handle",e.target.value)}}})]),s("div",{staticClass:"reg-entry"},[t._m(7),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"Enter Email",name:"email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"reg-entry"},[t._m(8),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._m(9),t._m(10),t._m(11),s("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[t._v(" Register ")]),s("router-link",{staticClass:"cancel",attrs:{tag:"button",to:"/"}},[t._v(" Cancel ")])],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"welcome"},[s("h1",[t._v("First time here? Welcome!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back-info"},[s("h1",[t._v("Background Information")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"firstName"}},[s("b",[t._v("First Name")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"lastName"}},[s("b",[t._v("Last Name")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"birthday"}},[s("b",[t._v("Date of Birth")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("h1",[t._v("Account Registration")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"username"}},[s("b",[t._v("Username")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"email"}},[s("b",[t._v("Email")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"psw"}},[s("b",[t._v("Password")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"terms-heading"},[s("h4",[t._v("Terms & Conditions")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"terms-container"},[s("h5",[t._v("A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"agree"},[s("input",{attrs:{type:"checkbox",name:"terms",required:""}}),s("label",{attrs:{for:"terms"}},[t._v(" I agree to the Terms & Conditions ")])])}],n=s("a995"),i={data:function(){return{user:{firstName:null,lastName:null,dob:null,handle:null,email:null,password:null,pic:null,isAdmin:!1,friends:[]}}},methods:{register:function(){Object(n["f"])(this.user)}}},o=i,u=(s("269f"),s("2877")),c=Object(u["a"])(o,a,r,!1,null,"4320d222",null);e["default"]=c.exports},"36dc":function(t,e,s){"use strict";s("be8b")},"4b3d":function(t,e,s){},"4bc5":function(t,e,s){"use strict";s("a753")},"52e8":function(t,e,s){"use strict";s("3493")},"533a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myroutines"},[s("div",{staticClass:"body"},[s("div",{staticClass:"header"},[t._v(" My Routines ")]),t._l(t.routines,(function(t,e){return s("div",{key:e,staticClass:"routine"},[s("MyRoutinesBadge",{attrs:{routine:t}})],1)}))],2)])},r=[],n=(s("96cf"),s("1da1")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-routines-badge"},[s("WorkoutButton",{attrs:{routine:t.routine,text:t.showRoutine?"Close":t.routine.title},on:{toggleWorkoutButton:t.toggleWorkoutButton}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showRoutine,expression:"showRoutine"}],staticClass:"show-routine"},[s("Routine",{attrs:{routine:t.routine}})],1)],1)},o=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"workout-button"},[s("button",{attrs:{routine:t.routine},on:{click:function(e){return t.$emit("toggleWorkoutButton")}}},[t._v(t._s(t.text))])])},c=[],l={props:{routine:Object,text:String}},d=l,m=(s("69d2"),s("2877")),v=Object(m["a"])(d,u,c,!1,null,"b4f1e340",null),p=v.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"routine"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Title")]),s("input",{staticClass:"input box",attrs:{type:"text",placeholder:"Give Your Workout a Name"},domProps:{value:t.routine.title}})]),s("div",{staticClass:"field2"},[s("label",{staticClass:"label"},[t._v("Date")]),s("input",{staticClass:"input smaller",attrs:{type:"date"},domProps:{value:t.routine.date}})]),t._m(0),s("div",{staticClass:"field5"},t._l(t.routine.workouts,(function(e,a){return s("RoutineRows",{key:a,attrs:{row:e},on:{"delete-row":function(e){return t.deleteRow(a)}}})})),1)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field3"},[s("label",{staticClass:"label"},[t._v("Workout")]),s("div",{staticClass:"labels"},[s("label",{staticClass:"input-label ex"},[t._v("Exercise")]),s("label",{staticClass:"input-label wg"},[t._v("Weight")]),s("label",{staticClass:"input-label rp"},[t._v("Reps")]),s("label",{staticClass:"input-label st"},[t._v("Sets")]),s("label",{staticClass:"input-label nt"},[t._v("Notes")])])])}],b=(s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"routines-row"},[s("div",{staticClass:"field5"},[s("div",{staticClass:"ex"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"name"},domProps:{value:t.row.name}})]),s("div",{staticClass:"wg"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"weight"},domProps:{value:t.row.weight}})]),s("div",{staticClass:"rp"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"reps"},domProps:{value:t.row.reps}})]),s("div",{staticClass:"st"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"sets"},domProps:{value:t.row.sets}})]),s("div",{staticClass:"nt"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"notes"},domProps:{value:t.row.notes}})]),s("div",{staticClass:"dl"},[s("button",{staticClass:"input",on:{click:function(e){return e.preventDefault(),t.$emit("delete-row")}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])])}),w=[],_={props:{routine:Object,row:Object}},g=_,C=(s("ce78"),Object(m["a"])(g,b,w,!1,null,"9cc9e5a2",null)),k=C.exports,x={methods:{deleteRow:function(t){this.routine.workouts.splice(t,1)}},components:{RoutineRows:k},props:{routine:Object,row:Object}},y=x,A=(s("52e8"),Object(m["a"])(y,f,h,!1,null,"95cf2eec",null)),N=A.exports,$={data:function(){return{showRoutine:!1}},methods:{toggleWorkoutButton:function(){this.showRoutine=!this.showRoutine}},components:{WorkoutButton:p,Routine:N},props:{routine:Object,row:Object,text:String}},R=$,E=Object(m["a"])(R,i,o,!1,null,"c4be4300",null),j=E.exports,O=s("2d36"),P={data:function(){return{routines:[],routine:{}}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["b"])();case 2:t.routines=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{MyRoutinesBadge:j},props:{text:String}},B=P,S=(s("ce35"),Object(m["a"])(B,a,r,!1,null,"0a842bd4",null));e["default"]=S.exports},"53a4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"track"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"empty"}),s("div",{staticClass:"sized"},[s("div",{staticClass:"workouts"},[s("h2",[t._v("My Workouts")]),s("router-link",{attrs:{to:"/createworkout",tag:"a"}},[t._v("+ Add Activity")]),s("br"),s("br"),s("div",{staticClass:"routine-buttons"},[s("div",{staticClass:"button-row"},t._l(t.routines,(function(e,a){return s("TrackRoutineBadge",{key:a,attrs:{routine:e,text:e.title},on:{click:function(s){return s.preventDefault(),t.$emit("thisRoutine",e.title)}}})})),1)])],1),s("div",{staticClass:"track-fitness"},[s("h2",[t._v("Track")]),s("p",[t._v("Weekly Progress")]),s("progress",{staticClass:"progress is-warning",attrs:{max:"7"},domProps:{value:t.progressBar}}),0===t.progressBar?s("caption",{staticClass:"caption"},[s("h3",[t._v("Time to get to work!")]),s("h4",[t._v("You got this")])]):1===t.progressBar?s("caption",{staticClass:"caption"},[s("h3",[t._v("Nice start! "+t._s(t.progressBar)+" day under your belt this week!")]),s("h4",[t._v("Keep it up")])]):t.progressBar>1&&t.progressBar<4?s("caption",{staticClass:"caption"},[s("h3",[t._v("Woohoo! You've worked out "+t._s(t.progressBar)+" days this week so far!")]),s("h4",[t._v("Look at you go")])]):s("caption",{staticClass:"caption"},[s("h3",[t._v(t._s(t.progressBar)+" days this week, you're a machine!")]),s("h4",[t._v("There's no stopping you")])])])]),s("div",{staticClass:"empty"})])])},r=[],n=(s("96cf"),s("1da1")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"routine-badge"},[s("router-link",{staticClass:"routine-button",attrs:{to:"/MyRoutines"}},[s("button",[s("h1",[t._v("View Workout")]),s("h2",[t._v('"'+t._s(t.text)+'"')]),s("i",{staticClass:"fas fa-dumbbell"})])])],1)},o=[],u={props:{text:String,routine:Object}},c=u,l=(s("4bc5"),s("2877")),d=Object(l["a"])(c,i,o,!1,null,"f4a7ef08",null),m=d.exports,v=s("2d36"),p={data:function(){return{routines:[],progressBar:null}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["b"])();case 2:t.routines=e.sent,t.progressBar=t.routines.length;case 4:case"end":return e.stop()}}),e)})))()},components:{TrackRoutineBadge:m}},f=p,h=(s("bbf4"),Object(l["a"])(f,a,r,!1,null,null,null));e["default"]=h.exports},"698d":function(t,e,s){"use strict";s("f393")},"69d2":function(t,e,s){"use strict";s("6fae")},"6f86":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"create-workout"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createRoutine(e)}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input box",attrs:{type:"text",placeholder:"Give Your Workout a Name",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"field2"},[s("label",{staticClass:"label"},[t._v("Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"input smaller",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._m(0),s("div",{staticClass:"field4"},[s("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addRow(e)}}},[t._v("Add Exercise")])]),s("div",{staticClass:"field5"},t._l(t.workouts,(function(e,a){return s("AddRow",{key:a,attrs:{row:e},on:{"delete-row":function(e){return t.deleteRow(a)}}})})),1),s("div",{staticClass:"field6"},[t._m(1),s("div",{staticClass:"cancel"},[s("router-link",{attrs:{tag:"button",to:"/track"}},[t._v("Cancel Workout")])],1)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field3"},[s("label",{staticClass:"label"},[t._v("Workout")]),s("div",{staticClass:"labels"},[s("label",{staticClass:"input-label ex"},[t._v("Exercise")]),s("label",{staticClass:"input-label wg"},[t._v("Weight")]),s("label",{staticClass:"input-label rp"},[t._v("Reps")]),s("label",{staticClass:"input-label st"},[t._v("Sets")]),s("label",{staticClass:"input-label nt"},[t._v("Notes")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"complete"},[s("button",{attrs:{type:"submit"}},[t._v("Complete Workout")])])}],n=(s("a434"),s("5530")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-row"},[s("div",{staticClass:"field5"},[s("div",{staticClass:"ex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.row.name,expression:"row.name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.row.name},on:{input:function(e){e.target.composing||t.$set(t.row,"name",e.target.value)}}})]),s("div",{staticClass:"wg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.row.weight,expression:"row.weight"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.row.weight},on:{input:function(e){e.target.composing||t.$set(t.row,"weight",e.target.value)}}})]),s("div",{staticClass:"rp"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.row.reps,expression:"row.reps"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.row.reps},on:{input:function(e){e.target.composing||t.$set(t.row,"reps",e.target.value)}}})]),s("div",{staticClass:"st"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.row.sets,expression:"row.sets"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.row.sets},on:{input:function(e){e.target.composing||t.$set(t.row,"sets",e.target.value)}}})]),s("div",{staticClass:"nt"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.row.notes,expression:"row.notes"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.row.notes},on:{input:function(e){e.target.composing||t.$set(t.row,"notes",e.target.value)}}})]),s("div",{staticClass:"dl"},[s("button",{staticClass:"input",on:{click:function(e){return e.preventDefault(),t.$emit("delete-row")}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])])},o=[],u={props:{row:Object}},c=u,l=(s("c3cc"),s("2877")),d=Object(l["a"])(c,i,o,!1,null,"76f0a3b4",null),m=d.exports,v=s("2d36"),p={data:function(){return{rId:0,wId:1,title:"",date:"",row:{id:"",name:"",weight:"",reps:"",sets:"",notes:""},workouts:[],routines:[]}},methods:{addRow:function(){this.row.id=this.rId++,this.workouts.push(Object(n["a"])({},this.row))},deleteRow:function(t){this.workouts.splice(t,1)},cancelWorkout:function(){window.history.back()},createRoutine:function(){this.routines.push({routine_id:this.wId++,title:this.title,date:this.date,workouts:this.workouts}),this.title=null,this.date=null,this.workouts=[],Object(v["a"])(this.routines),this.$router.push("/track")}},components:{AddRow:m}},f=p,h=(s("f9d5"),Object(l["a"])(f,a,r,!1,null,"c8b8ec6a",null));e["default"]=h.exports},"6fae":function(t,e,s){},"782b":function(t,e,s){},"7cb8":function(t,e,s){"use strict";s("b6ee")},"8cc8":function(t,e,s){},9350:function(t,e,s){},a753:function(t,e,s){},b567:function(t,e,s){},b6ee:function(t,e,s){},bbf4:function(t,e,s){"use strict";s("4b3d")},be8b:function(t,e,s){},c3cc:function(t,e,s){"use strict";s("ef5a")},ce35:function(t,e,s){"use strict";s("9350")},ce78:function(t,e,s){"use strict";s("2f57")},ef5a:function(t,e,s){},f241:function(t,e,s){"use strict";s("8cc8")},f393:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h2",[t._v("Welcome to Runtime Fitness!")]),s("p",[t._v("We hope you're ready to take on the fitness journey of a lifetime. Here you can upload your fitness #Goals, #Gains, #Tips and #Journey!")]),s("br")])}],n={},i=n,o=(s("698d"),s("2877")),u=Object(o["a"])(i,a,r,!1,null,"7cb17786",null);e["default"]=u.exports},f9d5:function(t,e,s){"use strict";s("b567")}}]);
//# sourceMappingURL=about.539c807d.js.map