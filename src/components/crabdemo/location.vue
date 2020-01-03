<template>
  <div id="main" v-cloak>
    <!--<div class="title">EY Blockchain Crab Traceability Demo</div>
    <div class="subtitle">安永大闸蟹区块链之旅</div>-->
    <div class="title">{{title}}</div>
    <div class="subtitle">{{subtitle}}</div>
    <div id="content">
      <div id="collapse">
        <el-collapse v-model="activeNames">
          <el-collapse-item v-for="(location, index) of locations" :name="index+1">
            <template slot="title">
              <span>{{location.name}}</span>
              <span v-show="enableSettlement" style="position: absolute;;right:50px;">{{location.balance | balance}}</span>
            </template>
            <div style>
              <div id="cblock" v-if="location.assets.crab.length!=0">
                <div class="br">
                  <el-badge :value="location.assets.crab.length">
                    <el-button size="small">Crabs</el-button>
                  </el-badge>
                </div>
                <div v-for="item in location.assets.crab">
                  <div class="tit">
                    <img style="width:30px;height:30px;" src="@/assets/product_f.jpg">
                  </div>
                  <div v-for="(v,k) in item">
                    <div class="item" v-if="k!='type'&&k!='class'">{{v}}</div>
                  </div>
                </div>
              </div>
              <div id="pblock" v-if="location.assets.pack.length!=0">
                <div class="br">
                  <el-badge :value="location.assets.pack.length">
                    <el-button size="small">Packs</el-button>
                  </el-badge>
                </div>
                <div v-for="item in location.assets.pack">
                  <div class="tit">
                    <img style="width:30px;height:30px;" src="@/assets/pack2.png">
                  </div>
                  <div v-for="(v,k) in item">
                    <div class="item" v-if="k!='type'&&k!='class'">{{v}}</div>
                  </div>
                </div>
              </div>
              <div id="oblock" v-if="location.assets.order.length!=0">
                <div class="br">
                  <el-badge :value="location.assets.order.length">
                    <el-button size="small">Orders</el-button>
                  </el-badge>
                </div>
                <div v-for="item in location.assets.order">
                  <div class="tit">
                    <img style="width:30px;height:30px;" src="@/assets/order_f.jpg">
                  </div>
                  <div v-for="(v,k) in item">
                    <div class="item" v-if="k!='type'&&k!='class'">{{v}}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div id="events">
        <events ref="ev"></events>
      </div>
    </div>
    <div class="fuceng_bg" v-bind:style="{display:dc.fuceng_bg}">
      <div class="animation">
        <img :class="dc.fuceng_class" class="ccrab" src="@/assets/crab-gif.gif">
      </div>
    </div>
  </div>
</template>

<script>
import events from "./events.vue";

export default {
  name: "Location",
  data() {
    return {
      title:"",
      subtitle:"",
      enableSettlement:"",
      locations: [],
      activeNames: [1],
      dc: {
        fuceng_bg: "none",
        fuceng_class: ""
      },
      refreshEvent: true
    };
  },
  created() {
    window.$location = this;
    //this.refreshLocation();
    this.login();
    this.getLocations();
    //this.buycoins();
    this.getPartiesFromFile();
    this.getAssetsFromFile();
  },
  filters: {
    balance(val) {
      if (val != 0 && val.length < 10) {
        return " ¥" + val;
      }
    }
  },
  sockets: {
    connect() {
      console.log("Client from location page connect server success!");

      this.$socket.emit(
        "client-locationpage",
        "connection from location page......"
      );
    },
    padaction(data) {
      
      console.log("Data from server:" + data.action);
      if (data.action == "0") {
        this.activeNames = [1];
      }
      if (data.action == "00") {
        // unpack
        this.activeNames = [5];
      }  else if (data.action == "1") {

        this.dc.fuceng_bg = "block";
        this.dc.fuceng_class = "crab1";
        setTimeout(() => {
          this.dc.fuceng_bg = "none";
        }, 10000);
        this.activeNames = [2];

      } else if (data.action == "2") {
        
        this.dc.fuceng_bg = "block";
        this.dc.fuceng_class = "crab2";
        setTimeout(() => {
          this.dc.fuceng_bg = "none";
        }, 10000);
        this.activeNames = [3];

      } else if (data.action == "3") {
        this.dc.fuceng_bg = "block";
        this.dc.fuceng_class = "crab3";
        setTimeout(() => {
          this.dc.fuceng_bg = "none";
        }, 10000);
        this.activeNames = [4];
      } else if (data.action == "4") {
        this.dc.fuceng_bg = "block";
        this.dc.fuceng_class = "crab4";
        setTimeout(() => {
          this.dc.fuceng_bg = "none";
        }, 10000);
        this.activeNames = [5];
      } else if (data.action == "5") {
        this.dc.fuceng_bg = "block";
        this.dc.fuceng_class = "crab5";
        setTimeout(() => {
          this.dc.fuceng_bg = "none";
        }, 10000);
        this.activeNames = [6];
      } 
      this.getLocations();
      this.$refs.ev.getAllEvents();
       
    }
   
  },

  methods: {

    getLocations() {
      this.$api
        .getLocations()
        .then(res => {

          let temp_locations = res.data.data.res;

          temp_locations.map(each => {
            each.assets = {
              crab: [],
              pack: [],
              order: []
            };
            this.$api.getLocationDetails(each.name).then(res => {
              res.data.data.assetsList.map(res => {
                let asset = Object.values(res.assetDetail)[0].asset[1];
                if (asset.type == "product") {
                  each.assets.crab.push(asset);
                } else if (asset.type == "pack") {
                  each.assets.pack.push(asset);
                } else if (asset.type == "order") {
                  each.assets.order.push(asset);
                }  
              });
            });
          });
          temp_locations.sort((a, b) => {
            let v1 = a.index;
            let v2 = b.index;
            return v1 - v2;
          });
          this.locations = temp_locations;
        })
        .then(() => {});
    },

    login() {
      let param = {

        email: "owner",
        password: ""
      };
      this.$api.login(param).then(res => {

      });
    },

    getLocationDetails(each) {
      let param = {};
      param.workerAddress = 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311;
      this.$api.getLocationDetails(each, param).then(res => {
        //log(res);
        //this.locations = res.data.data.res;
        console.log(res.data.data.res);
      });
    },

    getPartiesFromFile() {
      let param = {};
      param.workerAddress = 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311;
      this.$api.getPartiesFromFile(param).then(res => {
        this.title = res.data.data.data.title;
        this.subtitle = res.data.data.data.subtitle;
        this.enableSettlement = res.data.data.data.enableSettlement;
      });
    },

    getAssetsFromFile() {
      let param = {};
      param.workerAddress = 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311;
      this.$api.getAssetsFromFile(param).then(res => {
        //log(res);
        //this.locations = res.data.data.res;
        console.log(res.data.data.res);
      });
    },

    buycoins() {
      this.$api.buycoins({ coins: 1000, location: "SGCustomer" });
    }
  },
  components: { events }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 36px;
  font-weight: 600;
  display: flex;
  width: 100%;
  margin-top: 25px;
  justify-content: center;
}

.subtitle {
  padding-bottom: 40px;
  font-size: 24px;
  font-weight: 600;
}
#main {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

#content {
  display: flex;
  justify-content: space-around;
  padding: 0 50px 0 50px;
}
#ld {
  width: 20%;
  display: flex;
  justify-content: space-around;
}
#collapse {
  width: 900px;
  float: right;
}

.el-collapse-item {
  // padding-left:15px;
}

#cblock,
#pblock,
#oblock {
  display: flex;
  margin-bottom: 5px;
}

.title {
  display: flex;
  flex-wrap: wrap;
}

.br {
  border-right: 1px solid #ebeef5;
  min-width: 120px;
  display: flex;
  justify-content: center;
}
.tit {
  height: 50px;
  width: 155px;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ebeef5;
}
.item {
  width: 155px;
  height: 24px;
  font-weight: 600;
  line-height: 30px;
  border-right: 1px solid #ebeef5;
}

.crab {
  width: 40px;
  height: 40px;
  margin-right: 1px;
}

.cell img {
  margin: 0 auto;
  display: flex !important;
}

.el-button {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.el-collapse-item__header {
  font-size: 17px;
}

.el-button--small {
  //font-size:14px;
}

.el-collapse-item__content {
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

.animation {
  background-image: url("~@/assets/location/location-path.png");
  height: 600px;
  width: 1100px;
  left: 0;
  top: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.ccrab {
  width: 80px;
  height: 60px;
}
.crab1 {
  position: absolute;
  top: 200px;
  left: 85px;
  animation: move1 8s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes move1 {
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(0px, 140px);
  }
}

.crab2 {
  position: absolute;
  top: 439px;
  left: 185px;
  animation: move2 8s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes move2 {
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(210px, -130px);
  }
}

.crab3 {
  position: absolute;
  top: 197px;
  left: 582px;
  animation: move3 8s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes move3 {
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(185px, -121px);
  }
}

.crab4 {
  position: absolute;
  top: 156px;
  left: 882px;
  animation: move4 8s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes move4 {
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(0px, 216px);
  }
}

.crab5 {
  position: absolute;
  top: 474px;
  left: 796px;
  animation: move5 5s linear 0s;
  animation-fill-mode: forwards;
}
@keyframes move5 {
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(-241px, 0px);
  }
}

.el-badge {
  margin-top: 11px;
}
</style>
<style>
.el-collapse-item__header {
  font-size: 16px !important;
  padding-left: 10px;
  position: relative;
  background-color: #e6e6e6;
}

.el-collapse-item__content{
  background-color: #e6e6e6;
}
.el-button--small {
  font-size: 14px !important;
  font-weight: 600 !important;
}

.el-card{
  background-color:#efebeb
}
</style>