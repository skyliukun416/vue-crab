<template>
  <div id="main" v-cloak>
    <div class="title">EY Blockchain Crab Traceability Demo</div>
    <div id="content">
      <!--
        <div id="ld">
        <el-badge :value="2" class="item">
          <el-button size="small">Crabs</el-button>
        </el-badge>
        <el-badge :value="12" class="item">
          <el-button size="small">Packs</el-button>
        </el-badge>
      </div>
      -->
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
                <div class="item">{{crab.weight}}3.5</div>
                <div class="item">{{crab.gender}}M</div>
                <div class="item">{{crab.birth}}</div>
                <div class="item">{{crab.code}}978792434</div>

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
                <div class="item">{{pack.id}}12323123</div>
                <div class="item">{{pack.tempreture}}</div>
                <div class="item">{{pack.humidity}}</div>
                <div class="item">{{pack.date}}2019.2.2</div>

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
                  <div class="item">Location</div>
                  <div class="item">Destination</div>
                  
                </div>
              </div>
              <div v-for='order in location.assets.order'>
                <div class="tit"><img style="width:30px;height:30px;" src='../assets/pack2.png'></div>
                <div class="item">{{order.id}}12323123</div>
                <div class="item">{{order.date}}2019.2.2</div>
                <div class="item">{{order.location}}Shanghai</div>
                <div class="item">{{order.destination}}Singapore Distributor</div>

              </div>
            </div>

          
          
          </div>
          

        
          
        </el-collapse-item>
      </el-collapse>

    </div>
   
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Location',
  data () {
    return {
      locations: [],
      activeNames: [1]
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
     this.activeNames = data.action;
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
                    res.weight = "3.5";//fake data
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
                    each.assets.pack.push(res);
                    //this.$set(each.assets.pack,0,res);
                  }
                  if (res.assetType == 'order'){
                    each.assets.order.push(res);
                    //this.$set(each.assets.order,0,res);
                  }
              })         
          })
          });
        })
        this.locations = temp_locations;
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

}
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

  padding-left:15px;
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





</style>
