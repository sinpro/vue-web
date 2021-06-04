<template>
	<div>
    <transition name="fadeIn">
      <router-view></router-view>
<!--      <template v-if="$route.meta.keepAlive">-->
<!--        <keep-alive >-->
<!--          <router-view></router-view>-->
<!--        </keep-alive>-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        <router-view></router-view>-->
<!--      </template>-->
    </transition>
	</div>
</template>
<script>
export default {
	data(){
		return {

		}
	},
  components:{

  },
	mounted(){
		if(process.env.NODE_ENV==='development'){
			window.app=this;
		}
		console.log(process.env.NODE_ENV)
		console.log(ENV_CONFIG)
	},
}
</script>
<style lang="scss" scoped>

</style>
