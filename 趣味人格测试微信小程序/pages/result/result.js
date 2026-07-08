const { getResultByScore, getTestData } = require('../../utils/data.js')

Page({
  data: {
    testId: null,
    totalScore: 0,
    result: {
      title: '',
      emoji: '',
      desc: ''
    },
    testTitle: ''
  },

  onLoad(options) {
    const testId = options.testId
    const totalScore = parseInt(options.totalScore)

    if (!testId || isNaN(totalScore)) {
      wx.showToast({
        title: '数据异常',
        icon: 'error'
      })
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/index/index'
        })
      }, 1500)
      return
    }

    const testData = getTestData(testId)
    const result = getResultByScore(testId, totalScore)

    this.setData({
      testId: testId,
      totalScore: totalScore,
      result: result,
      testTitle: testData ? testData.title : ''
    })

    wx.setNavigationBarTitle({
      title: '测试结果'
    })
  },

  onRetake() {
    wx.redirectTo({
      url: `/pages/quiz/quiz?testId=${this.data.testId}`
    })
  },

  onGoHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  onSaveShare() {
    this.drawShareImage()
  },

  drawShareImage() {
    const ctx = wx.createCanvasContext('shareCanvas')
    const { result, testTitle } = this.data

    const canvasWidth = 600
    const canvasHeight = 800

    ctx.setFillStyle('#F8F0FF')
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    const gradient = ctx.createLinearGradient(0, 0, canvasWidth, 200)
    gradient.addColorStop(0, '#7C3AED')
    gradient.addColorStop(1, '#A855F7')
    ctx.setFillStyle(gradient)
    ctx.fillRect(0, 0, canvasWidth, 200)

    ctx.setFillStyle('#FFFFFF')
    ctx.setFontSize(28)
    ctx.setTextAlign('center')
    ctx.fillText(testTitle, canvasWidth / 2, 60)

    ctx.setFontSize(100)
    ctx.fillText(result.emoji, canvasWidth / 2, 160)

    ctx.setFillStyle('#1E1B2C')
    ctx.setFontSize(40)
    ctx.fillText(result.title, canvasWidth / 2, 260)

    ctx.setFillStyle('#6C5A7A')
    ctx.setFontSize(26)
    ctx.setTextAlign('left')
    
    const desc = result.desc
    const lineHeight = 40
    const maxWidth = 560
    const startX = 20
    const startY = 320
    
    let currentY = startY
    const words = desc.split('')
    let line = ''
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i]
      const metrics = ctx.measureText(testLine)
      if (metrics.width > maxWidth && line) {
        ctx.fillText(line, startX, currentY)
        line = words[i]
        currentY += lineHeight
        if (currentY > canvasHeight - 100) break
      } else {
        line = testLine
      }
    }
    if (line && currentY <= canvasHeight - 100) {
      ctx.fillText(line, startX, currentY)
    }

    ctx.setFillStyle('#7C3AED')
    ctx.setFontSize(24)
    ctx.setTextAlign('center')
    ctx.fillText('趣味人格测试', canvasWidth / 2, canvasHeight - 60)
    ctx.setFillStyle('#9CA3AF')
    ctx.setFontSize(20)
    ctx.fillText('长按识别二维码开始测试', canvasWidth / 2, canvasHeight - 30)

    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: 'shareCanvas',
        success: (res) => {
          this.saveImage(res.tempFilePath)
        },
        fail: (err) => {
          console.error('canvasToTempFilePath failed:', err)
          wx.showToast({
            title: '生成图片失败',
            icon: 'error'
          })
        }
      })
    })
  },

  saveImage(filePath) {
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success: () => {
        wx.saveImageToPhotosAlbum({
          filePath: filePath,
          success: () => {
            wx.showToast({
              title: '保存成功',
              icon: 'success'
            })
          },
          fail: (err) => {
            console.error('saveImageToPhotosAlbum failed:', err)
            wx.showToast({
              title: '保存失败',
              icon: 'error'
            })
          }
        })
      },
      fail: () => {
        wx.showModal({
          title: '提示',
          content: '请先授权保存图片权限',
          showCancel: false,
          success: () => {
            wx.openSetting({
              success: (res) => {
                if (res.authSetting['scope.writePhotosAlbum']) {
                  this.saveImage(filePath)
                }
              }
            })
          }
        })
      }
    })
  },

  onShareAppMessage() {
    const { result, testTitle } = this.data
    return {
      title: `我在「${testTitle}」中测出了「${result.title}」，快来测测你是什么类型！`,
      path: '/pages/index/index'
    }
  }
})
