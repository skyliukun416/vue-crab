<template>
  <div id="trace-detail" v-cloak>
    <navtop></navtop>
    <div  class="kv">
      <img src="@/assets/crabkv.jpeg">
    </div>
    
    <div class="location"  v-loading="loading2">
      <div class="location1">
        <div class="back"><router-link to="/m/trace">&lt;&lt;&nbsp;back</router-link></div>
        <div class="block">
          
        <div class="container">
          <div class="crabblock" v-show="display.content">
    
            <div class="detail">
              <p class="">CRAB</p>
              <p style="    color: #909399;" class="">Date:{{assetDetails.birth}}<br>
              Gender: {{assetDetails.gender}}<br>
              Weight: {{assetDetails.weight}}<br>
              Code: {{assetDetails.code}}</p>
            </div>
             <div class="detail">
              <p class="">
                PACK
              </p>
              <p style="    color: #909399;" class="">
              Temperature: 4°C<br>
              Humidity: 80%RH<br>
              PID: P12594</p>
            </div>
             <div class="detail">
              <p class="">ORDER</p>
              <p style="    color: #909399;" class="">Date:3 November 2018<br>
              Delivery: EMS<br>
              Delivery NO.: 03239826576310</p>
              
            </div>
    
           
          </div>
          <div class="btn" v-show="display.nodata"> 
            <router-link :to="{ path: '/m/trace/details'}">You haven't bought crab yet!</router-link>
          </div>
        </div>
      </div>
      <div class="block" style="margin:0">
        <p style="text-align:center;margin-top:.3rem">View Logistics</p>
         <img @click="display.timeline=!display.timeline,display.downarrow=false,display.uparrow=true" style="    height: 0.3rem;
            margin: 0 auto;
            margin-top: .2rem;
            display: block;"  
    v-show='display.downarrow' src="@/assets/down-arrow.png"> 
    <img @click="display.timeline=!display.timeline,display.downarrow=true,display.uparrow=false" style="    height: 0.3rem;
            margin: 0 auto;
            margin-top: .2rem;
            display: block;"  
    v-show='display.uparrow' src="@/assets/up-arrow.png"> 
      </div>
          <div class="block" v-show="display.timeline">
            <el-timeline>
                <el-timeline-item
                  v-for="(h, index) in history"
                  :key="index"
                  :color="h.icon"
                  :timestamp="h.time">
                  {{h.name}}
                </el-timeline-item>
              </el-timeline>
          </div>
    
       
      </div>
    </div>
    <footbot></footbot>
    
    
    
    

 
    
   
  </div>
</template>

<script>
import '@/assets/js/rem.js'
import navtop from './nav.vue'
import footbot from './foot.vue'
import { setTimeout } from 'timers';
export default {
  name: 'trace-details',
  data () {
    return {
      loading2:true,
      src:"",
      location:"",
      title:"",
      crabs:[],
      history:[],
      locationsToken:[],
      assetDetails:[],
      display:{
        content:true,
        nodata:false,
        timeline:false,
        downarrow:true,
        uparrow:false,
      }
       
    }
  },

  filters:{
    time: function(t){
      let str =  new Date(t * 1000).toString().split(" ");
      return str[2]+'-'+str[1]+'-'+str[3]+' '+str[4];
    },

    location: function(l){
      this.locationsToken.filter(i=>{
        if(i.address == l){
          return i.name
        }
      })
    }

  },
    
  
  
  mounted(){
    setTimeout(()=>{
      this.loading2 = false;
    },2000)
    this.getAssets();
   

  },
 
  methods:{
    
 

  async getAssetDetails(assetHash){
    let res =  await this.$api.getAssetsDetail(assetHash);
    this.assetDetails = res.data[assetHash].asset[1];
  },

  async getAssets(){
    let res1 = await this.$api.getLocationsToken();
    let tokens = res1.data.data;
    let res = await this.$api.getLocationDetails("SGCustomer");
    if  (res.data.data.assetsList.length=='0'){
        this.display.nodata = true;
        this.display.content = false;
    }
    let assetHash = '0x' + res.data.data.assetsList[0].assetAddress;
    await this.getAssetDetails(res.data.data.assetsList[0].assetAddress);
    await this.$api.trackAssets(assetHash).then(res2=>{
      this.history = res2.data.reverse();
      this.history.map((i, index)=>{
      for (let n=0;n<tokens.length;n++){
        let str =  new Date(i.timestamp * 1000).toString().split(" ");
        i.time = str[2]+'-'+str[1]+'-'+str[3]+' '+str[4];
      
        if(i.tokenHolder == tokens[n].address){
          if(index=="1"){
            i.name = tokens[n].name+'(Unpack)';
          }
          else if(index=="9"){
            i.name = tokens[n].name+'(Catch)';
          }
          else if(index=="8"){
            i.name = tokens[n].name+'(Pack)';
          }
          else if(index=="7"){
            i.name = tokens[n].name+'(Order)';
          }else{
            i.name = tokens[n].name;
          }
          
        }
        if(index=="0"){
          i.icon = "#409EFF";
        }else{
          i.icon =  "";
        }
        
      }
    })
    
    })
    
    //console.log(assetHash);
    }


  },
  components:{navtop,footbot}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#trace-detail{
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
      width: 90%;
    font-size: .26rem;
    justify-content: flex-start;
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

.info{
  text-align: left;
  margin-left:1.4rem;

}
.block{
      margin-top: .4rem;
    width:100%;
        
    
}

.container{

      border: 1px solid #DDD;
    margin: 0 auto;
    width: 90%;
}

.crabblock{

  display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: -15px;
}

.detail{
      content: "";
    display: block;
    margin: 0 auto;
    width: 90%;
    border-bottom: 1px solid #ddd;
        padding: .1rem;
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

.d1,.d2{
  width:5.8rem;
  min-height:1rem;
  border: 3px solid #FFBC39;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;
margin: 0 auto;
margin-bottom:.5rem;
}

p{
  
  font-size: .32rem;
  padding:0;
  margin: 4px 0 3px 10px;
    font-family: 'EYInterstate',sans-serif;
  text-align: left;
}
a:-webkit-any-link {
    color: #2e2e38;
    
    text-decoration: none
}

.btn{
      display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;

    justify-content: center;
}

.btn a{
  font-size: .3rem;
  font-weight: 400;

}
</style>
<style>

.el-timeline{

      font-size: .32rem;
}
.el-timeline-item__wrapper {
    text-align: left;
}



    
</style>