<template>
  <div id="navigation">
    <img class="logo" src="../../assets/nav/EY_Logo.png">
    <div class="more navbar-toggle">
             
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
           </div>
  </div>
</template>

<script>

export default {
  name: 'navi',
  data () {
    return {
     
    }
  },
  
  created(){
  
  },
 
  methods:{
    
    back(){
      this.$router.go(-1);
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navigation {
  width: 100%;
  height:60px;
  background:#333;
  display:flex;
      align-items: center;
          justify-content: space-between;
}

.logo{
  width:34px;
  height:34px;
  margin-left:15px;
}

.more{
     width: 52px;
    height: 44px;
    display: flex;
    flex-direction: column;

    justify-content: center;
}


.navbar-toggle .icon-bar {
        display: block;
    margin: 0 auto;
    width: 22px;
    background-color: #fff;
    height: 2px;
    border-radius: 1px;
}

.navbar-toggle .icon-bar+.icon-bar {
    margin-top: 4px
}

.navbar-nav {
    margin: 7.5px -15px
}

.navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px
}

.navbar-form {
    padding: 10px 15px;
    margin-top: 0;
    margin-right: -15px;
    margin-bottom: 0;
    margin-left: -15px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)
}

</style>
