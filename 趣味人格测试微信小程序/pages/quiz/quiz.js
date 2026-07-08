const { getTestData } = require('../../utils/data.js')

Page({
  data: {
    testId: null,
    testData: null,
    currentIndex: 0,
    totalScore: 0,
    selectedFlag: false,
    questionsList: [],
    currentQuestion: {},
    themeTitle: '',
    progressPercent: 0,
    isAnimating: false
  },

  onLoad(options) {
    const testId = options.testId
    this.setData({
      testId: testId,
      totalScore: 0,
      currentIndex: 0,
      selectedFlag: false
    })
    this.loadTestData(testId)
  },

  loadTestData(testId) {
    const testData = getTestData(testId)
    if (!testData) {
      wx.showToast({
        title: '测试不存在',
        icon: 'error'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
      return
    }

    this.setData({
      testData: testData,
      questionsList: testData.questions,
      themeTitle: testData.title,
      currentQuestion: testData.questions[0],
      progressPercent: (1 / testData.questions.length) * 100
    })

    wx.setNavigationBarTitle({
      title: '答题中'
    })
  },

  renderCurrentQuestion() {
    const { currentIndex, questionsList } = this.data
    const currentQuestion = questionsList[currentIndex]
    const progressPercent = ((currentIndex + 1) / questionsList.length) * 100

    this.setData({
      currentQuestion: currentQuestion,
      progressPercent: progressPercent,
      isAnimating: false
    })
  },

  onTapOption(e) {
    if (this.data.selectedFlag) return

    const score = parseInt(e.currentTarget.dataset.score)
    
    this.setData({
      selectedFlag: true,
      isAnimating: true,
      totalScore: this.data.totalScore + score
    })

    setTimeout(() => {
      const { currentIndex, questionsList } = this.data
      
      if (currentIndex + 1 < questionsList.length) {
        this.setData({
          currentIndex: currentIndex + 1,
          selectedFlag: false
        })
        this.renderCurrentQuestion()
      } else {
        this.goToResult()
      }
    }, 500)
  },

  goToResult() {
    const { testId, totalScore } = this.data
    wx.navigateTo({
      url: `/pages/result/result?testId=${testId}&totalScore=${totalScore}`
    })
  }
})
