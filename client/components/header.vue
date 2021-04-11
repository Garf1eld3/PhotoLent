<style scoped>
	#header{
		background: lightgray;
		width: 100%;
		height: 80px;
		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		display: flex;
		align-items: center;
		z-index: 1;
	}
	a{
	margin: 20px;
	}
	*{
		font-size: 25px;
	}
</style>

<template>
	<div id="header">
		<a v-on:click="main">Фотолента</a>
		<a v-on:click="upload">Загрузить</a>
		<a v-on:click="logout">Выйти</a>
	</div>
</template>

<script>
	module.exports={
		methods:{
			logout: function () {
				this.$auth.logOut();
				this.$router.push("/");
			},
			main: function () {
				this.$router.push("/");
			},
			upload: function () {
				this.$router.push("/upload");
			}
		}
	}
</script>