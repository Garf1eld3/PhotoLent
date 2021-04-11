<style scoped>
	*{
		font-size: 25px;
	}
</style>


<template>
	<div>
		<header-m></header-m>
		<div id="upload">
			<img v-bind:src="imageUrl">
			<form v-on:submit="upload">
				<input type="file" accept="image/*" name="picture" v-on:change="preview">
				<button type="submit">Загрузить</button>
			</form>
		</div>
	</div>
</template>


<script>
	let Header = require("./header.vue");
	module.exports={
		components:{
			headerM: Header
		},
		data: function() {
			return {imageUrl: "https://placehold.it/400"}
		},
		methods:{
			preview: function(event){
				let select = event.target.files;
				if(select.length != 1) return;
				let self = this;
				let reader = new FileReader();
				reader.onload = function(event){
					self.imageUrl = event.target.result;
				};
				reader.readAsDataURL(select[0]);
			},
			upload: function(event){
				event.preventDefault();
				let form = event.target;
				let formData = new FormData(form);
				this.$http.post("/upload", formData, {bearer: true}).then(
					function(){
						console.log("Download complete");
					} 
				);
			}
		}	
	}
</script>