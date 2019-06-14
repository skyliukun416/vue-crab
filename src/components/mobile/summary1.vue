<template>
  <div >
    <div class="nav">
      <div class="back"><a @click='back()'><img src='../../assets/shape.png'></a></div>
      <div class="tit">Back to Start</div>
      <div class="more"><img src='../../assets/dot.png'></div>

    </div>
    <div class="location">
      <div class="location1">
        <div class="kv"><img style="width:3.2rem;height:2rem;" src='../../assets/1.jpg'></div>
        <div class="bt">
          <span><router-link :to="{ name: 'summary2', params: { location: 'farm'}}">1. Farm</router-link></span></div>
      </div>
    
    <div class="location2">
       <div class="kv"><img src='../../assets/2.jpg'></div>
      <div class="bt">
        <span><router-link :to="{ name: 'summary2', params: { location: 'agency'}}">2. Agency</router-link></span>
        </div>
    </div>
    <div class="location3">
       <div class="kv"><img src='../../assets/3.jpg'></div>
      <div class="bt">
        <span><router-link :to="{ name: 'summary2', params: { location: 'custom'}}">3. Custom</router-link></span></div>
    </div>
    <div class="location4">
       <div class="kv"><img src='../../assets/4.jpg'></div>
      <div class="bt"><span><router-link :to="{ name: 'summary2', params: { location: 'distributor'}}">4. Distributor</router-link></span></div>
    </div>
    <div class="location5"> 
       <div class="kv"><img src='../../assets/5.jpg'></div>
      <div class="bt"><span><router-link :to="{ name: 'summary2', params: { location: 'retailer'}}">5. Retailer</router-link></span></div>
    </div>
    

    </div>
    
   
  </div>
</template>

<script>
import '../../assets/js/rem.js'
export default {
  name: 'summary1',
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

#summary{
    display: flex;
    align-items: center;
    flex-direction: column;
    width:100%;
}

.nav{
 display:flex;

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


.location{
  display:flex;
  width:100%;
  flex-direction: column;
}

.location1,.location2,.location3,.location4,.location5{
  display: flex;
      align-items: center;
    flex-direction: column;
    width:50%;
}

.location2, .location4{
  margin-left:50%;
  margin-left: 50%;
    margin-top: -1.6rem;
}

.location3, .location5{
margin-top: -1.6rem;
}
.kv{
  margin-top:.7rem;
}

.kv img{
      width: 3.2rem;
    height: 2rem;
}
.bt{
background: #FFBC39;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
height: 0.5rem;
   
   

font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
    display: flex;
    font-size: .3rem;
    justify-content: center;
    align-items: center;
color: #FFFFFF;

}

.bt span{
  padding:.2rem;
}

a:-webkit-any-link {
        color: white;
    text-decoration: none
}
</style>
