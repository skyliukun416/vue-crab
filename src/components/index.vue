<template>
    <div style="margin-top:20%;font-size:32px;">
    <router-link to="/pad">PAD</router-link>
    <router-link to="/location">LOCATION</router-link>
    <router-link to="/m/summary">SUMMARY</router-link>
   
    <router-view></router-view> 
    </div>
</template>

<script>
export default {
  name: 'Pad',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  ,
  created(){

  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
            margin: 0;
            padding:0;
        }
        #div{
            width:900px;
            height:400px;
            border:2px solid black;
            margin: 100px auto;
        }
        #span{
            float:left;
            display: block;
            font-size: 100px;
            width: 100px;
            height: 100px;
            line-height: 80px;
            text-align: center;
            border-radius: 50%;
            background: radial-gradient(blue,green);
            animation: move 10s ease 0s infinite alternate;
        }
        @keyframes move {
            0%{
                transform: translate(0px,0px);
            }
            25%{
                transform: translate(200px,300px);
            }
            50%{
                transform: translate(400px,0px);
            }
            75%{
                transform: translate(600px,300px);
            }
            100%{
                transform: translate(800px,0px);
            }
        }
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

.animation{
  height: 600px;
    
    width: 1100px;
    background: cadetblue;
   
   
    left: 0;
    top: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    margin:  auto;
}
</style>
