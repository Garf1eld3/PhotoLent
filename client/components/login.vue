<style scoped>
	#reg{
		background: blue;
		width: 100%;
		border-color: grey;
	}
	input, #reg{
		box-shadow:  0 0 10px rgba(0,0,0,0.5);
	}
	form{
		width: 700px;
	}
	*{
		font-size: 25px;
	}
</style>






<template>
	<div>
	<form id="login_form">
	<div class="mb-3">
    <label for="login" class="form-label">Логин</label>
    <input type="text" class="form-control" id="login">
  </div>
  <div class="mb-3">
    <label for="password1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="password">
  </div>
  <button type="submit" class="btn btn-primary" id="reg" v-on:click="login">Войти</button>
  <center><a href="https://localhost:8080/#/register" class="form-link">Регистрация</a></center>
</form>
</div>
</template>


<script>
	module.exports={
		methods:{
			login: function () {
				console.log("login");
				event.preventDefault();
				let form = document.getElementById("login_form");
					let promise = this.$auth.logIn(form.login.value, form.password.value);
					promise.then(function(response){
						console.log("Login success!");
						this.$router.push("/feed");
					}).catch(function(response){
						console.log("Error!");
						console.log(response);
					});
			}
		}
	}
</script>