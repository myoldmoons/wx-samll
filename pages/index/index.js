//index.js
import {fetch} from '../../utils/http';
Page({
  data: {
    banner:[],
    news_list:[],
    column_1_data:[],
    column_2_data:[],
    news_type:['top','shehui','guonei','yule','tiyu','junshi','keji','caijing','shishang']
  },
  split_array(data){
    let x=[],y=[],z=[];
    data.forEach((item,index)=>{
      if(index%2===0){
        x.push(item);
      }else{
        y.push(item);
      }
      if(index<30&&index>26){
        z.push(item)
      }
    })
    return [x,y,z]
  },
  get_news_list(refresh){
    let type_index=parseInt(Math.random()*10);
    fetch('/toutiao/index','get',{
      key:'bb88e25a5b1b727d6bbef1aaf01216cb',
      type:this.data.news_type[type_index||1],
    }).then(res=>{
      console.log(res);
      wx.setStorageSync('home_news_list', JSON.stringify(res.data.result.data));
      this.setData({
        news_list:res.data.result.data,
        column_1_data:this.split_array(res.data.result.data)[0],
        column_2_data:this.split_array(res.data.result.data)[1],
        banner:this.split_array(res.data.result.data)[2],
      });
      if(refresh)wx.stopPullDownRefresh();
    
      console.log(this.data.news_list)
    })
  },
  render_News_list(){
    if(wx.getStorageSync('home_news_list')){
      this.setData({
        news_list:JSON.parse(wx.getStorageSync('home_news_list')),
        column_1_data:this.split_array(JSON.parse(wx.getStorageSync('home_news_list')))[0],
        column_2_data:this.split_array(JSON.parse(wx.getStorageSync('home_news_list')))[1],
        banner:this.split_array(JSON.parse(wx.getStorageSync('home_news_list')))[2]
      })
    }else{
      this.get_news_list();
    }
  },
  onLoad: function () {
      this.render_News_list();
  },
  onPullDownRefresh:function(){
    this.get_news_list(true)
  }
})