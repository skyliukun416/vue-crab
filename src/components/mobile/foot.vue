<template>
 
  <div class="footer-container">
           
<div class="footer">
  <div class="container">
    <div class="copyright pull-left">The EY Crab Demo is proprietary and confidential. For internal use only. All Rights Reserved.</div>
  
  </div>
</div>


          </div>
</template>

<script>

export default {
  name: 'footbot',
  data () {
    return {
     
    }
  },
  
 
 
  methods:{
    
  
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-container {
    display:flex;
    width: 100%;
    bottom: 0;
    height: 60px;
}

.footer {
  width:100%;
    min-height: 100px;
    background-color: #333;
    border-color: #080808;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.copyright, a.feedback {
    padding: 20px 0;
    font-size: 12px;
    color: silver;
}

.pull-left {
    float: left !important;
}

</style>
