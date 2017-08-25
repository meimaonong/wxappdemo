var app = getApp()

Page({
  data: {
    platform: '',
    imgUrl: ''
  },
  previewAction: function() {
    var imgUrl = this.data.imgUrl
    var imgArr = []
    imgArr.push(imgUrl)
    wx.previewImage({
      current: imgUrl,
      urls: imgArr
    })
  },
  chooseImg: function() {

    var that = this

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imgUrl: tempFilePaths[0]
        })

        wx.uploadFile({
          url: 'https://www.meimaonong.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            console.log(data)
            //do something
          }
        })

      }
    })
  },
  onLoad: function () {

    app.globalData.dnum = 100

    var that = this
    this.setData({
      platform: app.globalData.platform
    })

  }
})
