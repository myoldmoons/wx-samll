// feature/index/header/index.js
import {
  getMenuButtonRect
} from '../../../utils/util';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    header_top: null,
    header_height: null,
    main_p_top: null,
    header_right: null
  },
  attached(){
    this.initViewRect()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initViewRect() {
      console.log(getMenuButtonRect().top)
      this.setData({
        header_top: getMenuButtonRect().top,
        header_height: getMenuButtonRect().height,
        main_p_top: getMenuButtonRect().top + getMenuButtonRect().height + 10,
        header_right: getMenuButtonRect().width + 20
      })
    },
    goSearch(){
      wx.navigateTo({
        url: '/pages/search/index',
      })
    }
  }
})
