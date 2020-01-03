<template>
  <div class="pad">
    <navtop></navtop>
    <!--
    <div class="block">
      <el-row>
        <el-col :span="8">
          <el-button type="primary" plain size="small" @click="catchCrab()">Production</el-button>
          </el-col>
        
        <!--<el-button type="primary" plain size="small" @click="packCrab()">Packing</el-button>
        <el-col :span="8"><el-button type="primary" plain size="small" @click="orderCrab()">Ordering</el-button></el-col>
        <el-col :span="8"><el-button type="primary" plain size="small" @click="unpack()">Unpack</el-button></el-col>
        
      </el-row>
    </div>
     <div class="block">
      <el-row>
        <el-button v-for="x in (1, parties.length-1)" type="info" plain size="small" @click="transferProduct(x)">To {{parties[x].name}}</el-button>
        
      </el-row>
     </div>
    <div class="block">
      <el-row>
        <el-button type="warning" plain size="small" @click="stopSwitch()">stop switch</el-button>
        <el-button type="warning" plain size="small" @click="startSwitch()">start switch</el-button>
        <el-button type="warning" plain size="small" @click="buyCoins()">buy Coins</el-button>
      </el-row>
    </div>
    -->

    <div class="blockDiv">
      <el-row>
        <el-col :span="8">
          <div class="cir" @click="catchCrab()">production</div>
        </el-col>
        <el-col :span="8">
          <div class="cir" @click="orderCrab()">Ordering</div>
        </el-col>
        <el-col :span="8">
          <div class="cir" @click="unpack()">Unpack</div>
        </el-col>
      </el-row>
      <el-row style="margin-top:10%">
        <el-col :span="8" v-for="x in (1, parties.length-1)" style="margin:3px auto">
          <div class="cir" style="background-color:#806b20" @click="transferProduct(x)">To {{parties[x].name}}</div>
        </el-col>
      </el-row>
      <el-row style="margin-top:10%">
        <el-col :span="8">
          <div class="cir" @click="stopSwitch()">stop switch</div>
        </el-col>
        <el-col :span="8">
          <div class="cir" @click="startSwitch()">start switch</div>
        </el-col>
        <el-col :span="8">
          <div class="cir" @click="buyCoins()">buy Coins</div>
        </el-col>
      </el-row>
    </div>
    <footbot></footbot>
  </div>
</template>

<script>
import "@/assets/js/socket.io";
import io from "socket.io-client";
import API from "@/api/api.js";
import { setInterval } from "timers";
import navtop from '@/components/mobile/nav.vue'
import footbot from '@/components/mobile/foot.vue'
export default {
  name: "pad",
  data() {
    return {
      parties: [],
      file: {}
    };
  },

  mounted() {
    //this.getLocationDetails();
    this.getPartiesFromFile();
  },

  created() {
    window.$pad = this;
    //var socket = io.connect('http://localhost:3009');
    var socket = io.connect(process.env.WS_PREFIX);
    console.log("PAD socket connecting" + process.env.WS_PREFIX);
    socket.on("connect", () => {
      console.log("client connect server");
      this.$socket.emit("client-padpage", "connection from pad page......");
    });
    socket.on("disconnect", () => {
      console.log("client disconnect");
    });
  },

  methods: {
    async getPartiesFromFile() {
      let res = await this.$api.getPartiesFromFile();
      this.file = res.data.data.data;
      this.$api.getLocations().then(res => {
        res.data.data.res.sort((a, b) => {
          let v1 = a.index;
          let v2 = b.index;
          return v1 - v2;
        });
        this.parties = res.data.data.res;
      });
    },

    async buyCoins() {
      //await this.$api.buycoins({coins:1000, location: "SGCustomer"})
      await this.$api.buycoins({
        coins: 1000,
        location: this.parties[this.parties.length - 1].name
      });
    },

    async stopSwitch() {
      await this.$socket.emit("demoswitch", { switcher: false });
    },

    async startSwitch() {
      await this.$socket.emit("demoswitch", { switcher: true });
    },

    async catchCrab() {
      let param = {
        workerAddress: 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      };
      let res = await this.$api.catchCrab(param);
      if (res.data.status.statusCode == "200") {
        this.$notify({
          title: "成功",
          message: "Catch success.",
          type: "success",
          position: 'bottom-right'
        });
        this.$api.booth.catchcrab();
        await this.$socket.emit("pad-stage", { stage: "0" });
      }

      // this.$store.commit('refreshMutation', true);
    },

    async packCrab() {
      let param = {
        workerAddress: 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      };
      let res = await this.$api.packCrab(param);
      if (res.data.status.statusCode == "200") {
        this.$notify({
          title: "成功",
          message: "Pack success.",
          type: "success",
          position: 'bottom-right'
        });
        this.$api.booth.packcrab();
        await this.$socket.emit("pad-stage", { stage: "0" });
      }
    },

    async orderCrab() {
      let param = {
        workerAddress: 0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      };
      let res = await this.$api.orderCrab(param);
      if (res.data.status.statusCode == "200") {
        this.$notify({
          title: "成功",
          message: "Order success.",
          type: "success",
          position: 'bottom-right'
        });
        this.$api.booth.ordercrab();
        await this.$socket.emit("pad-stage", { stage: "0" });
      }
    },

    async transferProduct(index) {
      let param = "";
      if (index != this.parties.length) {
        param = this.parties[index - 1].name + "/" + this.parties[index].name;
      }

      console.log(param);
      let res = await this.$api.transferProduct(param);
      if (res.data.status.statusCode == "200") {
        this.$notify({
          title: "成功",
          message: "Product transferred successully.",
          type: "success",
          position: 'bottom-right'
        });
        //this.$api.booth.toAgency();
        await this.$socket.emit("pad-stage", { stage: index });
        // settlement
        if (
          index == this.parties.length - 1 &&
          this.file.enableSettlement == true
        ) {
          this.purchase();
        }
      }
    },

    async unpack() {
      let param = this.parties[this.parties.length - 2].name;
      let res = await this.$api.unpackCrab(param);
      if (res.data.status.statusCode == "200") {
        this.$notify({
          title: "成功",
          message: "Unpack success.",
          type: "success",
          position: 'bottom-right'
        });

        await this.$socket.emit("pad-stage", { stage: "00" });
      }
    },

    async purchase() {
      let p = {
        transactionId: 10,

        to: this.parties[0].address,
        from: this.parties[this.parties.length - 1].address,
        amount: this.parties[0].settlement
      };
      let p1 = {
        transactionId: 11,

        to: this.parties[1].address,
        from: this.parties[this.parties.length - 1].address,
        amount: this.parties[1].settlement
      };
      let p2 = {
        transactionId: 12,

        to: this.parties[3].address,
        from: this.parties[this.parties.length - 1].address,
        amount: this.parties[3].settlement
      };

      let p3 = {
        transactionId: 13,

        to: this.parties[4].address,
        from: this.parties[this.parties.length - 1].address,
        amount: this.parties[4].settlement
      };
      console.log(p);
      this.$api.directTransfer(p);
      this.$api.directTransfer(p1);
      this.$api.directTransfer(p2);
      this.$api.directTransfer(p3);
    }
  },
  components:{
    navtop,
    footbot
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.blockDiv{
 min-height:712px;
 margin-top: 100px
}
.pad {
  display: flex;
  flex-direction: column;
  margin: 4%;
  width: 100%;
  background: #3c3b3a;
 
}

.el-row {
  width: 100%;
}

.cir {
    background-color: #efc11c;
    height: 60px;
    border-radius: 50px;
    font-size: 10px;
    width: 60px;
    margin: 2px;
    margin: 0 auto;
    text-align: center;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor:pointer
}
</style>
