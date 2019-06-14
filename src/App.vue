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
  /*font-family: "Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;*/
      font-family: 'EYInterstate',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
  display: flex;
  justify-content: center;
}


body{
    background-color: #f5f5f5;    
    margin:0;
    padding:0;

}
ul{
  margin: 0;
}
li{
    list-style-type:none;
}

.fl{
  float:left
}
</style>
