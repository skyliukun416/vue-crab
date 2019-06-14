<template>
  <div id="trace-home" v-cloak>
    <navtop></navtop>
    <div  class="kv">
      <img src="../../assets/crabkv.jpeg">
    </div>
    
    <div class="location">
      <div class="location1">
       
        <div class="block">
          <div style="    font-size: .5rem;">Chinese mitten crab</div>
          <div class="description">
            The Chinese mitten crab, also known as the Shanghai hairy crab, is a medium-sized burrowing crab that is named for its furry claws, which resemble mittens. It is native to rivers, estuaries and other coastal habitats of eastern Asia from Korea in the north to the Fujian province of China in the south. It has also been introduced to Europe and North America where it is considered an invasive species.</div>
        
          </div>
          <div class="btn"> 
            <router-link :to="{ path: '/m/trace/details'}">View in Blockchain</router-link>
          </div>
         
    
       
      </div>
    </div>
    <footbot></footbot>
    
    
   
  </div>
</template>

<script>
import '../../assets/js/rem.js'
import navtop from './nav.vue'
import footbot from './foot.vue'
export default {
  name: 'trace-home',
  data () {
    return {
      
      src:"",
      location:"",
      title:"",
      crabs:[],
      history:[],
      locationsToken:[],
      assetDetails:[]
       
    }
  },

  
  
  mounted(){
    

  },
 
  methods:{
    
  back(){
      this.$router.go(-1);
    },

 
 


  },
  components:{navtop,footbot}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#trace-home{
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




.location{
  display:flex;
  width:96%;
  flex-direction: column;
      background-color:white;
      min-height:708px;

}

.location1{
  display: flex;
      align-items: center;
      flex-direction: column;
  
}

.block{
      margin-top: .4rem;
    width:100%;
        
    
}



.detail{
      content: "";
    display: block;
    margin: 0 auto;
    width: 90%;
    border-bottom: 1px solid #ddd;
}
.kv{
  width: 100%;
}

.tit{
  width: 50%;
    font-size: .4rem;
    font-weight: 600;

}
.kv img{
      width: 100%;
    
}



p{
  
  font-size: .32rem;
  padding:0;
  margin: 4px 0 3px 10px;
    font-family: 'EYInterstate',sans-serif;
  text-align: left;
}

.btn a{
  font-size: .3rem;
  font-weight: 400;
    margin-top: 60px;
    padding: 15px 23px;
    /* min-width: 204px; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    padding: 15px 26px;
    background-color: white;
    color: #2e2e38;
    border: 1px solid #2e2e38;
    font-size: .3rem;
    font-weight: 700;
    line-height: 24px;
    -webkit-transition: color 0.3s,background 0.3s;
    transition: color 0.3s,background 0.3s;

}
</style>
<style>

.el-timeline{

      font-size: .32rem;
}
.el-timeline-item__wrapper {
    text-align: left;
}




.description{
      color: #747480;
  line-height: 24px;
        padding: .5rem;
    font-size: .3rem;
   
    padding: .3rem;
    margin-top: .1rem;
    
}
    
</style>