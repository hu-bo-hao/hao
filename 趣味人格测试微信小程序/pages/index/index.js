const { getTestList } = require('../../utils/data.js')

Page({
  data: {
    testList: []
  },

  onLoad() {
    const testList = getTestList()
    this.setData({ testList })
  },

  onTapCard(e) {
    const testId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/quiz/quiz?testId=${testId}`
    })
  }
})
