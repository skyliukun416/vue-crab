<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    
  // LOGIN 
      let param  = {
            //email: account.accountName,
            email: 'owner',
            password: '',
          };
      this.$api.login(param).then(res=>{
          localStorage.setItem('token', res.data.data.user.token);
          localStorage.setItem('role', res.data.data.user.role);
          localStorage.setItem('address',res.data.data.user.address);
          localStorage.setItem('name',res.data.data.user.name);
      })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
  display: flex;
  justify-content: center;
}


body{
    
margin:0;
padding:0;

}
</style>
