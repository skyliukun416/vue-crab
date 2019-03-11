<template>
  <div id="main" v-cloak>
    <div class="title">EY Blockchain Crab Traceability Demo</div>
    <div id="content">
      <div id="events"><events></events></div>

      <div id="collapse">
       <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-for='(location, index) of locations' :name="index+1" :title="location.name">
          <!--
            <div class="crab-row">
            <div class="crab" v-for='crab of location.assets.crab'><img style="height:40px;width:40px;" src="../assets/crab.png"></div> 
          </div>
          <div class="pack-row">
            <div class="pack" v-for='pack of location.assets.pack'><img style="height:40px;width:40px;" src="../assets/pack.png"></div>
          </div>
          -->
          <div style="">
            <div id="cblock" v-if='location.assets.crab.length!=0'>
               <div> 
                    <div class="tit">
                    <el-badge :value="location.assets.crab.length">
                      <el-button size="small">Cacbs</el-button>
                      </el-badge>
                      
                    </div>
                   
                  <div class="item">ID</div>
                  <div class="item">Weight</div>
                  <div class="item">Gender</div>
                  <div class="item">Date</div>
                  <div class="item">Code</div>
                </div>
              
              <div v-for='crab in location.assets.crab'>
                <div class="tit"><img style="width:30px;height:30px;" src='../assets/crab.png'></div>
                <div class="item">{{crab.id}}</div>
                <div class="item">{{crab.weight}}</div>
                <div class="item">{{crab.gender}}</div>
                <div class="item">{{crab.birth}}</div>
                <div class="item">{{crab.code}}</div>

              </div>
              
            </div>
            <div id="pblock" v-if='location.assets.pack.length!=0'>
              <div class=''>
               <div>
                 
                    <div class="tit">
                    <el-badge :value="location.assets.pack.length">
                      <el-button size="small">Packs</el-button>
                      </el-badge>
                      
                    </div>
                   
                  <div class="item">ID</div>
                  <div class="item">Tempreture</div>
                  <div class="item">Humidity</div>
                  <div class="item">Date</div>
                  
                </div>
              </div>
              <div v-for='pack in location.assets.pack'>
                <div class="tit"><img style="width:30px;height:30px;" src='../assets/pack.png'></div>
                <div class="item">{{pack.id}}</div>
                <div class="item">{{pack.tempreture}}</div>
                <div class="item">{{pack.humidity}}</div>
                <div class="item">{{pack.date}}</div>

              </div>
            </div>
            <div id="oblock" v-if='location.assets.order.length!=0'>
              <div class=''>
               <div>
                 
                    <div class="tit">
                    <el-badge :value="location.assets.order.length">
                      <el-button size="small">Orders</el-button>
                      </el-badge>
                      
                    </div>
                   
                  <div class="item">Order ID</div>
                  <div class="item">Date</div>
                  <div class="item">Carrier</div>
                  <div class="item">Tracking Number</div>
                  
                </div>
              </div>
              <div v-for='order in location.assets.order'>
                <div class="tit"><img style="width:30px;height:30px;" src='../assets/pack2.png'></div>
                <div class="item">{{order.orderID}}</div>
                <div class="item">{{order.date}}</div>
                <div class="item">{{order.carrier}}</div>
                <div class="item">{{order.tracking_number}}</div>

              </div>
            </div>

          
          
          </div>
          

        
          
        </el-collapse-item>
      </el-collapse>

    </div>
   
    </div>
  <div class="fuceng_bg" v-bind:style="{display:dc.fuceng_bg}">

    <div class="animation"></div>
    <img :class="dc.fuceng_class" src='../assets/crab.jpg'>
  </div>
  
  </div>
</template>

<script>
import { mapState } from 'vuex'
import events from './events.vue'

export default {
  name: 'Location',
  data () {
    return {
      locations: [],
      activeNames: [1],
      dc:{
        fuceng_bg:"none",
        fuceng_class:""
      }
     // refreshLocation:false,
      
    }
  },
   created() {
    window.$location = this;
    //this.refreshLocation();
    this.login();
    this.getLocations();
  },

  sockets: {
   connect(){
     console.log("Client from location page connect server success!");

     this.$socket.emit('client-locationpage', "connection from location page......"); 
   },
   padaction(data){
     console.log("Data from server:" + data.action);
     if(data.action=="1"){
       this.activeNames = [1];
     }else if(data.action=="2"){
       this.activeNames = [1];
     }else if(data.action=="3"){
       this.dc.fuceng_bg = "block";
       this.dc.fuceng_class = "crab1";
       setTimeout(()=>{ 
         this.dc.fuceng_bg = "none"; 
         }, 10000);
       this.activeNames = [1,2];
     }
     else if(data.action=="4"){
       this.dc.fuceng_bg = "block";
       this.dc.fuceng_class = "crab2";
       setTimeout(()=>{ 
         this.dc.fuceng_bg = "none"; 
         }, 10000);
       this.activeNames = [2,3];
     }
     else if(data.action=="5"){
       this.dc.fuceng_bg = "block";
       this.dc.fuceng_class = "crab3";
       setTimeout(()=>{ 
         this.dc.fuceng_bg = "none"; 
         }, 10000);
       this.activeNames = [3,4];
     }
     else if(data.action=="6"){
       this.dc.fuceng_bg = "block";
       this.dc.fuceng_class = "crab4";
       setTimeout(()=>{ 
         this.dc.fuceng_bg = "none"; 
         }, 10000);
       this.activeNames = [4,5];
     }
     else if(data.action=="7"){
       this.activeNames = [4,5];
     }
     else if(data.action=="8"){
       this.dc.fuceng_bg = "block";
       this.dc.fuceng_class = "crab5";
       setTimeout(()=>{ 
         this.dc.fuceng_bg = "none"; 
         }, 10000);
       this.activeNames = [5,6];
     }
    
     
     this.getLocations();
   }
}, 

  methods: {
    
    handleChange(val) {
        console.log(val);
      }
    ,


     refreshLocation: function(){
      window.addEventListener('storage', (e) => {
        if(e.key == 'refreshPage'){
          this.getLocations();
          localStorage.refreshPage = false;
        }
      })
    },

    getLocations(){
      this.$api.getLocations().then(res=>{
        //.log(res);
        // array of 6 locations [address, balance, name]
        let temp_locations = res.data.data.res;
        temp_locations.map(each=>{
          each.assets = {
            crab: [],
            pack: [],
            order: [],
          }
          this.$api.getLocationDetails(each.name).then(res=>{
            res.data.data.assetsList.map(res=>{
              this.$api.getAssetsDetail(res.assetAddress).then(r=>{
                  if (res.assetType == 'crab'){
                    
                    var result = r.data[res.assetAddress].asset.filter(e=>{
                        if(e.length!= 0)return e;
                     })
                    //res.img = "../assets/crab.png";
                    res.birth = result[0].birth;
                    res.id = result[0].id;
                    res.gender = result[0].gender;
                    res.weight = result[0].weight;//fake data
                    res.code = result[0].code;
                    each.assets.crab.push(res);
                    //this.$set(each.assets.crab,0,res);
                  }
                  if (res.assetType == 'pack'){
                    var result = r.data[res.assetAddress].asset.filter(e=>{
                      if (e.type == 'pack')return e;
                    })
                    //res.img = "../assets/pack.png";
                    res.tempreture = result[0].tempreture;
                    res.humidity = result[0].humidity;
                    res.empty = result[0].empty;
                    res.id = result[0].ID;
                    each.assets.pack.push(res);
                    //this.$set(each.assets.pack,0,res);
                  }
                  if (res.assetType == 'order'){
                    var result = r.data[res.assetAddress].asset.filter(e=>{
                      if (e.type == 'order')return e;
                    })
                    res.tracking_number = result[0].tracking_number;
                    res.carrier = result[0].carrier;
                    res.orderID = result[0].orderID;
                    each.assets.order.push(res);
                    //this.$set(each.assets.order,0,res);
                  }
              })         
          })
          });
        })
        temp_locations.map(loc=>{
          if(loc.name == "SZCrabFarm"){
            //this.locations[0] = loc;
            this.$set(this.locations, 0, loc); 
            this.locations[0].name = "Yangcheng Lake Crab Farm"
          }
          else if(loc.name == "SHCrabAgency"){
            //this.locations[1] = loc;
            this.$set(this.locations, 1, loc);
            this.locations[1].name = "Shanghai Crab Agency"
          }
          else if(loc.name == "SHCustom"){
            //this.locations[2] = loc;
            this.$set(this.locations, 2, loc);
            this.locations[2].name = "Shanghai Custom"
          }
          else if(loc.name == "SGDistributionCentre"){
            //this.locations[3] = loc;
            this.$set(this.locations, 3, loc);
            this.locations[3].name = "Singapore Distribution Centre"
          }
          else if(loc.name == "SGRetailer"){
            //this.locations[4] = loc;
            this.$set(this.locations, 4, loc);
            this.locations[4].name = "Singapore Retailer"
          }
          else if(loc.name == "SGCustomer"){
            //this.locations[5] = loc;
            this.$set(this.locations, 5, loc);
            this.locations[5].name = "Singapore Customer"
          }
        })
      }).then(()=>{
        //console.log(this.locations);
         //this.$store.commit('changeLocationsMutation', this.locations);
        

      })
    },

    login(account) {

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
  },

  getLocationDetails(each){
    let param = {};
    param.workerAddress = 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311;
    this.$api.getLocationDetails(each, param).then(res=>{
        //log(res);
        //this.locations = res.data.data.res;
      })
  }

},
components:{events}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 40px;
    display: flex;
    width: 100%;
    justify-content: center;
}

#main{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}

#content{
  display: flex;
  justify-content: space-around;
  padding: 0 50px 0 50px;
}
#ld {
  width:20%;
  display: flex;
  justify-content: space-around;
}
#collapse{
  width:1200px;
  float:right;
  
}


.el-collapse-item{

 // padding-left:15px;
}

#cblock, #pblock, #oblock{
  display:flex
}

.title{
  display:flex;
  flex-wrap: wrap;

}

.tit{
  height:50px;
  width:147px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-right:1px solid #ebeef5;

}
.item{
  width:147px;
  height:30px;
  line-height:30px;
  border-right:1px solid #ebeef5;
}

.crab {
    width: 40px;
    height: 40px;
    margin-right: 1px;
}

.cell img{
  margin:0 auto;
  display: flex !important;
}

.el-button {
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}

.el-collapse-item__header {
    font-size: 17px;
}

.el-button--small {
  //font-size:14px;
}

.el-collapse-item__content{
  font-size: 14px;
}


.fuceng_bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
 
}

.animation{

  background-image: url('../assets/routine.jpg');
  height: 600px;   
  width: 1100px;
  left: 0;
  top: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  margin:  auto;
  background-size: 100% auto; 
  background-repeat: no-repeat; 
}


.crab1{
    height: 115px;
    width: 140px;
    position: absolute;
    top: 222px;
    left: 180px;
    animation: move1 8s linear 0s;
    animation-fill-mode: forwards;
}
@keyframes move1 {
            0%{
                transform: translate(10px,0px);
            }
           
            100%{
                transform: translate(20px,140px);
            }
        }

.crab2{
    height: 115px;
    width: 140px;
    position: absolute;
    top: 490px;
    left: 525px;
    animation: move2 8s ease 0s;
    animation-fill-mode: forwards;
}
@keyframes move2 {
            0%{
                transform: translate(0px,0px);
            }
           
            100%{
                transform: translate(50px,-100px);
            }
        }

.crab3{
    height: 115px;
    width: 140px;
    position: absolute;
    top: 285px;
    left: 810px;
    animation: move3 8s linear 0s;
    animation-fill-mode: forwards;
}
@keyframes move3 {
            0%{
                transform: translate(0px,0px);
            }
            25%{
                transform: translate(35px,60px);
            }
            50%{
                transform: translate(45px,60px);
            }
            75%{
                transform: translate(65px,130px);
            }
            100%{
                transform: translate(65px,130px);
            }
        }

.crab4{
    height: 115px;
    width: 140px;
    position: absolute;
    top: 517px;
    left: 955px;
    animation: move4 8s linear 0s;
    animation-fill-mode: forwards;
}
@keyframes move4 {
            0%{
                transform: translate(0px,0px);
            }
            25%{
                transform: translate(25px,-60px);
            }
            50%{
                transform: translate(45px,-160px);
            }
            75%{
                transform: translate(45px,-230px);
            }
            100%{
                transform: translate(25px,-300px);
            }
        }

.crab5{
    height: 115px;
    width: 140px;
    position: absolute;
    top: 105px;
    left: 1080px;
    animation: move5 5s linear 0s;
    animation-fill-mode: forwards;
}
@keyframes move5 {
            0%{
                transform: translate(0px,0px);
            }
           
           25%{
                transform: translate(40px,30px);
            }
            55%{
                transform: translate(55px,60px);
            }
            75%{
                transform: translate(75px,90px);
            }
            100%{
                transform: translate(80px,150px);
            }
        }


</style>
