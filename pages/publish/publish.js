var app = getApp()

Page({
  data: {
    platform: '',
    isBuy: true,
    isSell: false,
    isNow: true,
    isFar: false,
    array: ['甲苯', '二甲苯', '国产异构', '加氢二甲苯'],
    array2: ['99.5', '99.27', '98', '99'],
    array3: ['张家港主流库', '泰州库', '连云港库', '大兴库'],
    index: 0,
    index2: 0,
    index3: 0
  },

  onShow: function (options) {
    console.log('onshow')
    console.log(app.globalData.dnum)
  },

  setType: function(e) {
    var type = e.target.dataset.type
    type == 'isBuy' ?
      this.setData({isBuy: true, isSell: false}) :
      this.setData({ isBuy: false, isSell: true });
  },

  setGood: function (e) {
    var type = e.target.dataset.type
    type == 'isNow' ?
      this.setData({ isNow: true, isFar: false }) :
      this.setData({ isNow: false, isFar: true });
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },

  onLoad: function () {

    console.log('onLoad')

    var that = this
    this.setData({
      platform: app.globalData.platform
    })

  }
})
