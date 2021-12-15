
const axios = require('axios')

function getWeather(city){
  return new Promise((resolve,reject) =>{
    axios.get(`http://api2.jirengu.com/city.php?callback=${encodeURI(city)}`)
    .then( response =>{
      resolve(response.data)
    }).catch(e =>{
      reject('网络异常')
    })
  })
}

module.exports = getWeather