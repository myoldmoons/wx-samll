// feature/index/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goView(e){
      let item=e.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/newsDetail/index?item='+JSON.stringify(item),
      })
    }
  }
})
