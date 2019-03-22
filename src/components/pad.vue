<template>
<div style="margin-top:200px;">
    <el-row>
    <el-button type="primary" @click="catchCrab()">catch</el-button>
    <el-button type="primary" @click="packCrab()">pack</el-button>
    <el-button type="primary" @click="orderCrab()">order</el-button>
    <el-button type="primary" @click="mergeCrab()">agent</el-button>
    <el-button type="primary" @click="custom()">custom</el-button>
    <el-button type="primary" @click="distributionCenter()">distributionCenter</el-button>
    <el-button type="primary" @click="retail()">retail</el-button>
    <el-button type="primary" @click="unpack()">unpack</el-button>
    <el-button type="primary" @click="purchase()">purchase</el-button>
    </el-row>
  </div>
</template>

<script>
import '@/assets/js/socket.io';
import io from 'socket.io-client';
import API from '@/api/api.js';
export default {
  name: 'pad',
  data () {
    return {
      
    }
  },

  created(){
    window.$pad = this;
    //var socket = io.connect('http://localhost:3009');
    var socket = io.connect(API.server_prefix);
    socket.on('connect',  ()=>{
      console.log('client connect server');
      this.$socket.emit('client-padpage', "connection from pad page......"); 
    });
    socket.on('disconnect', ()=>{
      console.log('client disconnect');
    });
    
  },
 
  methods:{
    
    initWorker(){

    },

    async catchCrab(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      let res = await this.$api.catchCrab(param)
      if (res.data.status.statusCode == '200'){
        this.$notify({
                  title: '成功',
                  message: 'Catch success.',
                  type: 'success'
                });

        await this.$socket.emit('pad-stage', {stage: "catch"});
      }
      
      // this.$store.commit('refreshMutation', true);
    },

    async packCrab(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      let res = await this.$api.packCrab(param);
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Pack success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "pack"});
      }
    },

    async orderCrab(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      let res = await this.$api.orderCrab(param);
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Order success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "pack"});
      }
    },

    

    async mergeCrab(){
      let param = {
       
      }
      let res= await this.$api.mergeCrab(param);
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Merge success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "merge"});
      }
    },

    async custom(){
      let param = {
       
      }
      let res = await this.$api.custom(param);
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Custom success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "custom"});
      }
    },

    async distributionCenter(){
      let param = {
       
      }
      let res = await this.$api.distributionCenter();
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Distribution success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "distribution"});
      }
    },

    async retail(){
      let param = {
       
      }
      let res = await this.$api.retail();
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Retail success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "retail"});
      }
    },

    async unpack(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      let res = await this.$api.unpackCrab();
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Unpack success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "unpack"});
      }
    },

    async purchase(){
      let param = {
       
      }
      let res =await this.$api.purchase();
      if (res.data.status.statusCode == '200'){
        this.$notify({
            title: '成功',
            message: 'Purchase success.',
            type: 'success'
          });

        await this.$socket.emit('pad-stage', {stage: "purchase"});
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
