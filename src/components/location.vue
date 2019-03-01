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
          <div style="display:flex">


          
          <div id="table-c" style="width: 50%">
              <el-table :data="location.assets.crab" style="">
                <el-table-column
                  
                  width="60">
                  <template slot-scope="scope">            
                    <img src="../assets/crab.png"  min-width="30" height="30" />
                 </template> 
                </el-table-column>
           
                <el-table-column
                  prop="id"
                  label="ID"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="birth"
                  label="Date"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="weight"
                  label="Weight"
                  width="100">
                </el-table-column>
                <!--
                <el-table-column label="Operation" width="100">
                  
                  
                    <template slot-scope="scope">
                    <el-button
                      size="mini"
                      >Pack</el-button>
                  </template>
                 
                </el-table-column>
                <template slot="empty">
                  <span class="el-table__empty-text">No Dta</span>
                </template>
                 -->
            </el-table>
          </div>
          <div id="table-p" style="width: 50%">
              <el-table :data="location.assets.pack" >
            
                <el-table-column
                  
                  width="60">
                  <template   slot-scope="scope">            
                    <img src="../assets/pack.png"  min-width="30" height="30" />
                 </template> 
                </el-table-column>
                <el-table-column
                  prop="assetName"
                  label="ID"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="tempreture"
                  label="Tempreture"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="humidity"
                  label="Humidity"
                  width="100">
                </el-table-column>
                <!--
                <el-table-column label="Operation" width="100">
                  
                    <template slot-scope="scope">
                    <el-button
                      size="mini"
                      >Transfer</el-button>
                  </template>
                   
                </el-table-column>
                <template slot="empty">
                  <span class="el-table__empty-text">No Data</span>
                </template>
                -->
            </el-table>
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

#table-c, #table-p{
  //display:flex
}
.crab-row, .pack-row{
  display:flex;

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
