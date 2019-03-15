fnResize();
window.onresize = function () {
  fnResize();
}
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;

  if (deviceWidth >= 1024) {
    //document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    
  }

  else if (deviceWidth >= 750) {
    deviceWidth = 750;
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
  }
  else if (deviceWidth <= 320) {
    deviceWidth = 320;
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
  }
  else{
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
  }
  
  console.log("device width:"+deviceWidth);
  
}