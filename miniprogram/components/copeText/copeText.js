// components/copeText/copeText.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    copeText:String
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
    handleCope(){
      wx.setClipboardData({
        data: this.data.copeText,
        success (res) {
         wx.showToast({
           title: '复制成功'
         })
        }
      })
    }
  }
})
