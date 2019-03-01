<template>
<div>
    <div>this is pad</div>
     <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
    <a href="#" @click="catchCrab()">catch</a>
    <a href="#" @click="packCrab()">pack</a>
    <a href="#" @click="mergeCrab()">merge</a>
    <a href="#" @click="custom()">custom</a>
    <a href="#" @click="distributionCenter()">distributionCenter</a>
    <a href="#" @click="retail()">retail</a>
    <a href="#" @click="unpack()">unpack</a>
    <a href="#" @click="purchase()">purchase</a>

  </div>
</template>

<script>
import '@/assets/js/socket.io';
import io from 'socket.io-client';
export default {
  name: 'Pad',
  data () {
    return {
      
    }
  },

  created(){
    window.$pad = this;
    var socket = io.connect('http://localhost:3009');
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

    catchCrab(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      this.$api.catchCrab(param);

      this.$socket.emit('pad-stage', {stage: "catch"});
      // this.$store.commit('refreshMutation', true);
    },

    packCrab(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      this.$api.packCrab(param);
      
      this.$socket.emit('pad-stage', {stage: "pack"});
    },

    mergeCrab(){
      let param = {
       
      }
      this.$api.mergeCrab(param);
      
      this.$socket.emit('pad-stage', {stage: "merge"});
    },

    custom(){
      let param = {
       
      }
      this.$api.custom(param);
      
      this.$socket.emit('pad-stage', {stage: "custom"});
    },

    distributionCenter(){
      let param = {
       
      }
      this.$api.distributionCenter();
      
      this.$socket.emit('pad-stage', {stage: "distribution"});
    },

    retail(){
      let param = {
       
      }
      this.$api.retail();
      
      this.$socket.emit('pad-stage', {stage: "retail"});
    },

    unpack(){
      let param = {
        workerAddress:0xf4665b4ba89b4ab65de30be362af9bd0ba1ed311
      }
      this.$api.unpackCrab();
      
      this.$socket.emit('pad-stage', {stage: "unpack"});
    },

    purchase(){
      let param = {
       
      }
      this.$api.purchase();
      
      this.$socket.emit('pad-stage', {stage: "purchase"});
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
