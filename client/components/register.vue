<style scoped>
	#reg{
		background: red;
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
  <div class="mb-3">
    <label for="password2" class="form-label">Повторите пароль</label>
    <input type="password" class="form-control" id="password2">
  </div>
  <button type="submit" class="btn btn-primary" id="reg">Зарегистрироваться</button>
</form>
</template>