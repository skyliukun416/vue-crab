<template>
  <div id="">
    <div class="nav">
      <div class="back"><a href="/"><img src='../../assets/shape.png'></a></div>
      <div class="tit">Back to Scan</div>
      <div class="more"><img src='../../assets/dot.png'></div>

    </div>
    <div class="kv"><img src='../../assets/0.jpg'></div>
    <div class="bt"><span><router-link to="/m/summary/locations">START</router-link></span></div>
  </div>
</template>

<script>
import '../../assets/js/rem.js'
export default {
  name: 'summary',
  data () {
    return {
     
    }
  },
  
  created(){
  
  },
 
  methods:{
    
  
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#summary{
    display: flex;
    align-items: center;
    flex-direction: column;
    width:100%;
}

.nav{
 display:flex;
  position: absolute;
width: 100%;
height: .9rem;
    justify-content: space-between;
background: #212121;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);
}

.nav .tit{
  
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-items: center;
   
    display: flex;
    font-size: .4rem;
   
    justify-content: center; 
    color: #FFFFFF;

}

.more{
  display: flex;
  width:50px;
  align-items: center;
  justify-content: center;
}
.back{
  display: flex;
    width: 50px;
    height:100%;
    align-items: center;
    justify-content: center;
}

.back a{
  display:flex;
}
.kv{
  margin-top:2.7rem;
}

.kv img{
  width:6.2rem;
}
.bt{
background: #FFBC39;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;
width:3.6rem;
height:1rem;

font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
    display: flex;
    font-size: .6rem;
    justify-content: center;
    align-items: center;
color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

a:-webkit-any-link {
        color: white;
    text-decoration: none
}
</style>
