import config from '../config/index';
console.log(config)
const fetch =(url,method,params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.baseUrl+url,
      method:method==='get'?'GET':'POST',
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res);
      },
      fail(error){
        reject(error);
      }
    })
  })
}

module.exports={
  fetch:fetch
}