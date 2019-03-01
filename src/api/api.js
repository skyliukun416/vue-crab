import axios from 'axios';

//let prefix = 'http://10.172.13.245:3002';
let prefix = 'http://localhost:3002';

let API = {}

API.login = async (param)=>{
    let url  = prefix + '/accounts/login';
    try {
            let res = await axios.post(url, param);
            if (res.status =='200') return res;
        }
    catch(err){console.log(err)}   

    }

API.getLocations = async ()=>{
    let url  = prefix + '/settlement/locationWithDetails';
    try {
            let res = await axios.get(url);
            if (res.status =='200') return res;
        }
    catch(err){console.log(err)} 

}

API.getLocationDetails = async (each, param)=>{
    let url  = prefix + '/aggregate/location/' + each;
    try {
            let res = await axios.get(url, param);
            if (res.status =='200') return res;
        }
    catch(err){console.log(err)} 

}
    
API.catchCrab = async (param)=>{
    let url  = prefix + '/aggregate/crab/asset';
    try {
            let res = await axios.post(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("catch success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.packCrab = async (param)=>{
    let url  = prefix + '/aggregate/crab/asset1';
    try {
            let res = await axios.post(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert(" pack success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}


API.mergeCrab = async (param)=>{
    let url  = prefix + '/aggregate/location/transfer/SZCrabFarm/SHCrabAgency';
    try {
            let res = await axios.get(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("merge success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.custom = async (param)=>{
    let url  = prefix + '/aggregate/location/transfer/SHCrabAgency/SHCustom';
    try {
            let res = await axios.get(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("custom success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.distributionCenter = async (param)=>{
    let url  = prefix + '/aggregate/location/transfer/SHCustom/SGDistributionCentre';
    try {
            let res = await axios.get(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("distribution success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.retail = async (param)=>{
    let url  = prefix + '/aggregate/location/transfer/SGDistributionCentre/SGRetailer';
    try {
            let res = await axios.get(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("retail success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.unpackCrab = async (param)=>{
    let url  = prefix + '/aggregate/crab/asset3/SGRetailer';
    try {
            let res = await axios.post(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("unpack success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.purchase = async (param)=>{
    let url  = prefix + '/aggregate/crab/transfer/SGRetailer/SGCustomer';
    try {
            let res = await axios.get(url, param);
            if (res.status =='200') {
                localStorage.setItem("refreshPage", true);
                alert("purchase success");
                return res;
            }
        }
    catch(err){console.log(err)} 

}

API.getAssetsDetail = async (param)=>{
    let url  = prefix + '/assets-swarm/asset/'+param;
    try {
            let res = await axios.get(url);
            if (res.status =='200') {
                return res;
            }
        }
    catch(err){console.log(err)} 

}
export default API