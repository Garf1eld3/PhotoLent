<template>
	<div>
		<p>Перенаправление...</p>
	</div>
</template>


<script>
	module.exports={
		mounted: function () {
			if(this.$auth.isLoggedIn())
				this.$router.push("/feed");
			else
				this.$router.push("/login");
		}
	}
</script>