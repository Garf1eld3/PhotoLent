let Vue 		= require("vue");
let VueRouter 	= require("vue-router");
let VueResource = require("vue-resource");
let vjm 		= require("vue-jwt-mongo");


let app = require("./components/app.vue");
let register = require("./components/register.vue");
let login = require("./components/login.vue");

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vjm.Client);



let router = new VueRouter({
	routes:[
	{path:"/register", component: register},
	{path:"/login", component: login}
	]
});

let vm = new Vue({
	el: "#app",
	router: router,
	render: function (createElements) {
		return createElements(app);
	}
});