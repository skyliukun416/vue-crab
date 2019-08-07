import axios from 'axios';

//let prefix = 'http://10.172.13.245:3002';
//let SERVER_PREFIX = 'http://10.172.13.245:3009';
//let prefix = 'http://localhost:3002';
//let prefix = '/crabapi';

//let SERVER_PREFIX = 'http://localhost:3009';
//let SERVER_PREFIX = '/crabapi';
let prefix = process.env.prefix;
let SERVER_PREFIX = process.env.SERVER_PREFIX;
let API = {}

API.server_prefix = SERVER_PREFIX;
API.prd_prefix = prefix;

API.login = async (param) => {
  let url = prefix + '/accounts/login';
  try {
    let res = await axios.post(url, param);
    if (res.status == '200') return res;
  } catch (err) {
    console.log(err)
  }

}

API.getLocations = async () => {
  let url = prefix + '/settlement/locationWithDetails';
  try {
    let res = await axios.get(url);
    if (res.status == '200') return res;
  } catch (err) {
    console.log(err)
  }

}

API.getLocationsToken = async () => {
  let url = prefix + '/asset-blockchain/tokenHolderWithAddress';
  try {
    let res = await axios.get(url);
    if (res.status == '200') return res;
  } catch (err) {
    console.log(err)
  }

}

API.getLocationDetails = async (each, param) => {
  let url = prefix + '/demo/location/' + each;
  try {
    let res = await axios.get(url, param);
    if (res.status == '200') return res;
  } catch (err) {
    console.log(err)
  }

}

API.getPartiesFromFile = async (each, param) => {
  let url = prefix + '/demo/getPartiesFromFile';
  try {
    let res = await axios.get(url, param);
    if (res.status == '200') return res;
  } catch (err) {
    console.log(err)
  }

}

API.getAssetsFromFile = async (each, param) => {
  let url = prefix + '/demo/getAssetsFromFile';
  try {
    let res = await axios.get(url, param);
    if (res.status == '200') return res;
  } catch (err) {
    console.log(err)
  }

}

API.catchCrab = async (param) => {
  let url = prefix + '/demo/crab/asset';
  try {
    let res = await axios.post(url, param);
    if (res.status == '200') {

      //alert("catch success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.packCrab = async (param) => {
  let url = prefix + '/demo/crab/asset1';
  try {
    let res = await axios.post(url, param);
    if (res.status == '200') {

      //alert(" pack success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.orderCrab = async (param) => {
  let url = prefix + '/demo/crab/asset2';
  try {
    let res = await axios.post(url, param);
    if (res.status == '200') {

      //alert(" pack success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}


API.transferProduct = async (param) => {
  let url = prefix + '/demo/location/transfer/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {

      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.mergeCrab = async (param) => {
  let url = prefix + '/demo/location/transfer/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {

      //alert("merge success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.custom = async (param) => {
  let url = prefix + '/demo/location/transfer/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {

      //alert("custom success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.distributionCenter = async (param) => {
  let url = prefix + '/demo/location/transfer/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {

      //alert("distribution success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.retail = async (param) => {
  let url = prefix + '/demo/location/transfer/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {

      //alert("retail success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.unpackCrab = async (param) => {
  let url = prefix + '/demo/crab/asset3/' + param;
  try {
    let res = await axios.post(url);
    if (res.status == '200') {

      //alert("unpack success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.purchase = async (param) => {
  let url = prefix + '/demo/crab/transfer/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {

      //alert("purchase success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.buycoins = async (param) => {
  let url = prefix + '/settlement/buyCoin/';
  try {
    let res = await axios.post(url, param);
    if (res.status == '200') {

      //alert("purchase success");
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.directTransfer = async (param) => {
  let url = prefix + '/settlement/direct-transfer/' + param.transactionId;
  let headers = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') ? localStorage.getItem('token') : '',
    }
  }

  try {
    let res = await axios.put(url, param, headers);
    if (res.status == '200') {
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.multipleTransfer = async (param) => {
  let url = prefix + '/settlement/multiple-transfer/' + param.transactionId;
  let headers = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') ? localStorage.getItem('token') : '',
    }
  }

  try {
    let res = await axios.put(url, param, headers);
    if (res.status == '200') {
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.getAssetsDetail = async (param) => {
  let url = prefix + '/assets-swarm/asset/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.getAllEvents = async (param) => {
  let url = prefix + '/asset-blockchain/events/Assets/0/allEvents';
  try {
    let res = await axios.get(url);
    if (res.status == '200') {
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.trackAssets = async (param) => {
  let url = prefix + '/asset-blockchain/getAssetHistory/' + param;
  try {
    let res = await axios.get(url);
    if (res.status == '200') {
      return res;
    }
  } catch (err) {
    console.log(err)
  }

}

API.booth = {
  catchcrab: async () => {
    return axios.get("https://ops.chain.eco/s/l/1/1")
  },
  packcrab: async () => {
    return axios.get("https://ops.chain.eco/s/t/1")
  },
  ordercrab: async () => {
    return axios.get("https://ops.chain.eco/s/t/1")
  },
  toAgency: async () => {

    return axios.all([axios.get("https://ops.chain.eco/s/t/2"), axios.get("https://ops.chain.eco/s/l/2/1")]);
  },
  toCustom: async () => {
    return axios.all([axios.get("https://ops.chain.eco/s/t/3"), axios.get("https://ops.chain.eco/s/l/3/1")]);
  },
  toDistributor: async () => {
    return axios.all([axios.get("https://ops.chain.eco/s/t/4"), axios.get("https://ops.chain.eco/s/l/4/1")]);
  },
  toRetailer: async () => {
    return axios.get("https://ops.chain.eco/s/l/5/1")
  },
  buy: async () => {
    return axios.all([axios.get("https://ops.chain.eco/s/t/4"), axios.get("https://ops.chain.eco/s/l/4/1")]);
  },
  reset: async () => {
    return axios.all([axios.get("https://ops.chain.eco/s/t/0"), axios.get("https://ops.chain.eco/s/l/1/0")]);
  },


}

API.dashboard = {
  weather: async () => {
    return axios.get("/api-weather/weather_mini?city=苏州")
  },
  map: async () => {
    return '31.42320047131183,120.81808 北纬N31°25′23.52″ 东经E120°49′5.09″'
  },



}
export default API
