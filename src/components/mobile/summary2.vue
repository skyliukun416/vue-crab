<template>
  <div id="summary">
    <div class="nav">
      <div class="back"><a @click='back()'><img src='../../assets/shape.png'></a></div>
      <div class="tit">Back to Start</div>
      <div class="more"><img src='../../assets/dot.png'></div>

    </div>
    <div class="location">
      <div class="location1">
        <div class="kv"><img style="width:3.2rem;height:2rem;" :src='src'></div>
        <div class="tit">{{title}}<p style="font-size: .4rem;
    text-align: center;">{{location}}</p></div>
       
      </div>
      <div class="d1">
        <p>1.Taging Date: 20th Jan. 2018</p>
        <p>2.Fishing Date: 20th Sep. 2018</p>
        <p>3.Dispatch Date: 21th Sep. 2018</p>
        </div>
        <div class="d2">
        <p>1.Crab ID:  122DF21D </p>
        <p>2.Weight:   250g </p>
        <p>3.Gender:   Male</p>
        <p>4.Status:   Health</p>
        <p>5.Location :   {{location}}</p>
        <p>6.GPS:   31,464503,120,7705092</p>
        <p>7.Updated:   12:30 25 Dec 2018</p>
  
        </div>
    
    
    

    </div>
    
   
  </div>
</template>

<script>
import '../../assets/js/rem.js'
export default {
  name: 'summary2',
  data () {
    return {
      src:"",
      location:"",
      title:""
    }
  },
  
  mounted(){
    this.location = this.$route.params.location;
    if(this.location == 'farm'){
      this.src = require('../../assets/1.jpg');
      this.title = "1st Station";
      this.location = "Farm";

    }
    else if(this.location == 'agency'){
      this.src = require('../../assets/2.jpg');
      this.title = "2nd Station";
      this.location = "Agency";
    }
    else if(this.location == 'custom'){
      this.src = require('../../assets/3.jpg');
      this.title = "3rd Station";
      this.location = "Custom";
    }
    else if(this.location == 'distributor'){
      this.src = require('../../assets/4.jpg');
      this.title = "4th Station";
      this.location = "Distributor";
    }
    else if(this.location == 'retailer'){
      this.src = require('../../assets/5.jpg');
      this.title = "5th Station";
      this.location = "Retailer";
    }

  },
 
  methods:{
    
  back(){
      this.$router.go(-1);
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#summary{
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
    width: 50px;
    height:100%;
    align-items: center;
    justify-content: center;
}

.back a{
  display:flex;
}


.location{
  display:flex;
  width:100%;
  flex-direction: column;
}

.location1{
  display: flex;
      align-items: center;
  
}


.kv{
  margin-top:.7rem;
  width:50%;
  margin-left: .2rem;
}

.tit{
  width: 50%;
    font-size: .4rem;
    font-weight: 600;

}
.kv img{
      width: 3.2rem;
    height: 2rem;
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
  
  font-size: .28rem;
  padding:0;
  margin: 4px 0 3px 10px;
  font-weight: 600;
  text-align: left;
}
a:-webkit-any-link {
        color: white;
    text-decoration: none
}
</style>
