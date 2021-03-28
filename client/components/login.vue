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
	<form>
	<div class="mb-3">
    <label for="login" class="form-label">Логин</label>
    <input type="text" class="form-control" id="login">
  </div>
  <div class="mb-3">
    <label for="password1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="password1">
  </div>
  <button type="submit" class="btn btn-primary" id="reg">Войти</button>
  <center><a href="https://localhost:8080/#/register" class="form-link">Регистрация</a></center>
</form>
</template>