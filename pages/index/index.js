var app = getApp()

Page({
  data: {
    platform: '',
    list: [],
    ptime: 1
  },
  onPullDownRefresh: function () {
    // 模拟数据加载
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 2000);
  },
  onReachBottom: function() {
    var list = this.getList()
    var newList = this.data.list
    var ptime = this.data.ptime

    newList.push(...list)

    this.setData({
      ptime: ptime++,
      list: newList
    })
    console.log('bottom')
  },
  getList: function() {
    var list = [
      {
        date: '2017年8月9日',
        listData: [
          {
            id: 1,
            trade_type: 1,
            type: 1,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 1,
          },
          {
            id: 2,
            trade_type: 1,
            type: 2,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 2,
          }
        ]
      },
      {
        date: '2017年8月10日',
        listData: [
          {
            id: 1,
            trade_type: 1,
            type: 1,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 3,
          },
          {
            id: 2,
            trade_type: 1,
            type: 2,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 4,
          }
        ]
      },
      {
        date: '2017年8月11日',
        listData: [
          {
            id: 1,
            trade_type: 2,
            type: 1,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 5,
          },
          {
            id: 2,
            trade_type: 1,
            type: 2,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 1,
          }
        ]
      },
      {
        date: '2017年8月12日',
        listData: [
          {
            id: 1,
            trade_type: 2,
            type: 1,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 5,
          },
          {
            id: 2,
            trade_type: 1,
            type: 2,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 1,
          }
        ]
      },
      {
        date: '2017年8月13日',
        listData: [
          {
            id: 1,
            trade_type: 2,
            type: 1,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 5,
          },
          {
            id: 2,
            trade_type: 1,
            type: 2,
            product_name: '甲苯',
            price: 5200,
            num: 500,
            time: '2017-08 下',
            place: '江阴',
            status: 1,
          }
        ]
      }
    ]

    return list
  },
  onLoad: function () {

    var that = this

    var list = this.getList()
    this.setData({
      list
    })

    this.setData({
      platform: app.globalData.platform
    })

    this.getList();

    console.log('onLoad');

  }
})
