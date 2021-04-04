<template>
	<div>
		<a v-on:click="logout">Выйти</a>
	</div>
</template>


<script>
	module.exports={
		methods:{
			logout: function () {
				this.$auth.logOut();
				this.$router.push("/");
			}
		}
	}
</script>