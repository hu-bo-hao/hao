const TEST_LIST = [
  {
    id: 'ancient',
    icon: '🏯',
    title: '古代身份测评',
    brief: '穿越回古代，你会是什么身份？'
  },
  {
    id: 'animal',
    icon: '🐾',
    title: '动物系人格测试',
    brief: '探索你的动物属性，发现隐藏特质'
  },
  {
    id: 'brain',
    icon: '🧠',
    title: '脑洞性格大考验',
    brief: '测测你的脑洞有多大？'
  },
  {
    id: 'moments',
    icon: '📱',
    title: '朋友圈人设鉴定',
    brief: '你的朋友圈暴露了什么人设？'
  }
]

const TEST_DATA = {
  ancient: {
    id: 'ancient',
    title: '古代身份测评',
    icon: '🏯',
    questions: [
      {
        text: '你在私塾读书时，最喜欢的科目是？',
        options: [
          { txt: '诗词歌赋，吟风弄月', score: 1 },
          { txt: '兵法谋略，运筹帷幄', score: 2 },
          { txt: '江湖见闻，游侠传记', score: 3 },
          { txt: '治国方略，帝王之术', score: 4 }
        ]
      },
      {
        text: '若得一闲暇午后，你会选择？',
        options: [
          { txt: '归隐山林，垂钓溪边', score: 1 },
          { txt: '书房研读，推演棋局', score: 2 },
          { txt: '策马奔腾，快意江湖', score: 3 },
          { txt: '微服私访，体察民情', score: 4 }
        ]
      },
      {
        text: '面对不义之事，你的态度是？',
        options: [
          { txt: '避而远之，明哲保身', score: 1 },
          { txt: '暗中布局，智取为上', score: 2 },
          { txt: '路见不平，拔刀相助', score: 3 },
          { txt: '雷霆手段，震慑宵小', score: 4 }
        ]
      },
      {
        text: '你最向往的生活是？',
        options: [
          { txt: '采菊东篱下，悠然见南山', score: 1 },
          { txt: '羽扇纶巾，谈笑间樯橹灰飞烟灭', score: 2 },
          { txt: '十步杀一人，千里不留行', score: 3 },
          { txt: '指点江山，一统天下', score: 4 }
        ]
      },
      {
        text: '你更看重以下哪种品质？',
        options: [
          { txt: '淡泊名利，宁静致远', score: 1 },
          { txt: '足智多谋，算无遗策', score: 2 },
          { txt: '重情重义，一诺千金', score: 3 },
          { txt: '胸怀天下，志在四方', score: 4 }
        ]
      },
      {
        text: '若遇乱世，你会？',
        options: [
          { txt: '归隐田园，静待太平', score: 1 },
          { txt: '择主而事，辅佐明君', score: 2 },
          { txt: '揭竿而起，除暴安良', score: 3 },
          { txt: '逐鹿中原，问鼎天下', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 6,
        max: 10,
        title: '山水隐士',
        emoji: '🏞️',
        desc: '你是淡泊宁静的山水隐士。喜欢宁静淡泊的生活，不追名逐利，超然物外。虽身处江湖之远，却心怀天下，是真正的智者。优点：清心寡欲，与世无争；小短板：有时略显消极；趣味评语：采菊东篱下，悠然见南山。'
      },
      {
        min: 11,
        max: 15,
        title: '睿智谋臣',
        emoji: '🎋',
        desc: '你是运筹帷幄的睿智谋臣。智慧超群，善于谋划，是帝王之师，国之栋梁。能在谈笑间决定天下大势，决胜于千里之外。优点：足智多谋，沉稳冷静；小短板：有时过于谨慎；趣味评语：羽扇纶巾，谈笑风生。'
      },
      {
        min: 16,
        max: 20,
        title: '云游侠客',
        emoji: '⚔️',
        desc: '你是豪迈仗义的云游侠客。重情重义，武艺高强，行走江湖，快意恩仇。路见不平拔刀相助，是真正的江湖豪杰。优点：侠肝义胆，自由洒脱；小短板：有时冲动行事；趣味评语：十步杀一人，千里不留行。'
      },
      {
        min: 21,
        max: 24,
        title: '千古一帝',
        emoji: '👑',
        desc: '你是霸气外露的千古一帝。胸怀天下，雄心壮志，有帝王之气概，能号令天下，开创盛世。是天生的领导者，万众瞩目。优点：威严霸气，志向远大；小短板：有时过于强势；趣味评语：普天之下，莫非王土。'
      }
    ]
  },
  animal: {
    id: 'animal',
    title: '动物系人格测试',
    icon: '🐾',
    questions: [
      {
        text: '周末你通常怎么度过？',
        options: [
          { txt: '宅家追剧睡觉', score: 1 },
          { txt: '和朋友聚会聊天', score: 2 },
          { txt: '独自完成一个目标', score: 3 },
          { txt: '到处逛逛吃好吃的', score: 4 }
        ]
      },
      {
        text: '团队合作中你更倾向于？',
        options: [
          { txt: '安静做好自己的事', score: 1 },
          { txt: '协调沟通，促进和谐', score: 2 },
          { txt: '领导大家达成目标', score: 3 },
          { txt: '活跃气氛，带来快乐', score: 4 }
        ]
      },
      {
        text: '遇到困难时你会？',
        options: [
          { txt: '先放一放，等心情好再说', score: 1 },
          { txt: '寻求朋友帮助', score: 2 },
          { txt: '冷静分析，独立解决', score: 3 },
          { txt: '乐观面对，总会有办法', score: 4 }
        ]
      },
      {
        text: '你最喜欢的食物类型是？',
        options: [
          { txt: '软糯香甜的甜点', score: 1 },
          { txt: '新鲜的海鲜', score: 2 },
          { txt: '高蛋白肉类', score: 3 },
          { txt: '鲜嫩的竹笋竹子', score: 4 }
        ]
      },
      {
        text: '朋友评价你最像？',
        options: [
          { txt: '懒懒的小猫咪', score: 1 },
          { txt: '聪明的小精灵', score: 2 },
          { txt: '孤傲的独行侠', score: 3 },
          { txt: '可爱的小团子', score: 4 }
        ]
      },
      {
        text: '你向往的生活环境是？',
        options: [
          { txt: '温暖舒适的树屋', score: 1 },
          { txt: '广阔自由的海洋', score: 2 },
          { txt: '苍茫辽阔的草原', score: 3 },
          { txt: '郁郁葱葱的竹林', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 6,
        max: 10,
        title: '考拉系',
        emoji: '🐨',
        desc: '你是慵懒治愈的考拉系人格。喜欢慢节奏生活，温柔可爱，是大家的治愈小天使。善于倾听，是朋友们的贴心树洞。优点：温和治愈，亲和力强；小短板：有时过于佛系；趣味评语：树袋熊抱抱！'
      },
      {
        min: 11,
        max: 15,
        title: '海豚系',
        emoji: '🐬',
        desc: '你是聪明友善的海豚系人格。智商情商双高，善于沟通，是团队中的润滑剂。乐于助人，总能给身边人带来快乐。优点：聪明伶俐，善解人意；小短板：有时过于在意他人看法；趣味评语：海中精灵，聪慧可人。'
      },
      {
        min: 16,
        max: 20,
        title: '狼系',
        emoji: '🐺',
        desc: '你是独立果决的狼系人格。目标明确，执行力强，是天生的领导者。独立自主，有着不服输的精神。优点：坚韧不拔，果敢决断；小短板：有时显得高冷；趣味评语：孤狼啸月，一往无前。'
      },
      {
        min: 21,
        max: 24,
        title: '熊猫系',
        emoji: '🐼',
        desc: '你是憨厚可爱的熊猫系人格。人见人爱，花见花开，是大家的团宠。性格温和，自带国宝光环，走到哪里都受欢迎。优点：亲和力MAX，乐观开朗；小短板：偶尔有点小迷糊；趣味评语：国宝驾到，萌化全场！'
      }
    ]
  },
  brain: {
    id: 'brain',
    title: '脑洞性格大考验',
    icon: '🧠',
    questions: [
      {
        text: '如果穿越到童话世界，你想成为？',
        options: [
          { txt: '住在糖果屋的小精灵', score: 1 },
          { txt: '能预知未来的预言家', score: 2 },
          { txt: '会说话的魔镜', score: 3 },
          { txt: '四处云游的神仙', score: 4 }
        ]
      },
      {
        text: '你觉得外星人长什么样？',
        options: [
          { txt: '果冻状透明生物', score: 1 },
          { txt: '高度进化的机械体', score: 2 },
          { txt: '能量体形态', score: 3 },
          { txt: '和人类一模一样', score: 4 }
        ]
      },
      {
        text: '如果有超能力，你选？',
        options: [
          { txt: '任意门，想去哪就去哪', score: 1 },
          { txt: '时间暂停，掌控一切', score: 2 },
          { txt: '读心术，看透人心', score: 3 },
          { txt: '什么都不要，顺其自然', score: 4 }
        ]
      },
      {
        text: '如何解决堵车问题？',
        options: [
          { txt: '发明会飞的汽车', score: 1 },
          { txt: '建立智能交通系统', score: 2 },
          { txt: '直接传送到达目的地', score: 3 },
          { txt: '早点出门，佛系出行', score: 4 }
        ]
      },
      {
        text: '你相信平行世界吗？',
        options: [
          { txt: '相信！每个选择都有不同的世界', score: 1 },
          { txt: '需要科学证明', score: 2 },
          { txt: '直觉告诉我存在', score: 3 },
          { txt: '无所谓，过好当下最重要', score: 4 }
        ]
      },
      {
        text: '如果能和动物说话，你想和谁聊天？',
        options: [
          { txt: '猫咪，听它吐槽人类', score: 1 },
          { txt: '鹦鹉，学它说八卦', score: 2 },
          { txt: '章鱼，探索深海秘密', score: 3 },
          { txt: '狗狗，听它说爱我', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 6,
        max: 10,
        title: '白日梦想家',
        emoji: '☁️',
        desc: '你是天马行空的白日梦想家。想象力丰富，创意无限，脑子里总有各种奇思妙想。善于创造，是天生的艺术家。优点：创意满满，浪漫有趣；小短板：有时脱离现实；趣味评语：脑洞突破天际！'
      },
      {
        min: 11,
        max: 15,
        title: '逻辑狂魔',
        emoji: '🔢',
        desc: '你是理性至上的逻辑狂魔。做事有条理，凡事讲证据，是大家信赖的"靠谱担当"。善于分析问题，解决难题。优点：条理清晰，理性客观；小短板：有时过于较真；趣味评语：数据说话，逻辑为王。'
      },
      {
        min: 16,
        max: 20,
        title: '直觉怪杰',
        emoji: '🔮',
        desc: '你是凭感觉走的直觉怪杰。第六感超强，常常能做出惊人的正确判断。相信直觉，从不纠结，活得洒脱自在。优点：直觉敏锐，果断随性；小短板：有时过于冲动；趣味评语：跟着感觉走，风风火火闯九州！'
      },
      {
        min: 21,
        max: 24,
        title: '佛系哲学家',
        emoji: '🧘',
        desc: '你是看淡一切的佛系哲学家。心态平和，与世无争，有着超然物外的境界。懂得享受生活，内心富足。优点：心态豁达，随遇而安；小短板：有时缺乏动力；趣味评语：佛系青年，快乐无边。'
      }
    ]
  },
  moments: {
    id: 'moments',
    title: '朋友圈人设鉴定',
    icon: '📱',
    questions: [
      {
        text: '你发朋友圈的频率是？',
        options: [
          { txt: '想到就发，一天N条', score: 1 },
          { txt: '每周2-3条，生活点滴', score: 2 },
          { txt: '精挑细选，每月几条', score: 3 },
          { txt: '打卡狂魔，一天不落', score: 4 }
        ]
      },
      {
        text: '你最喜欢发什么内容？',
        options: [
          { txt: '搞笑段子和表情包', score: 1 },
          { txt: '风景照和生活感悟', score: 2 },
          { txt: '不经意的"日常"炫耀', score: 3 },
          { txt: '探店打卡和美食', score: 4 }
        ]
      },
      {
        text: '遇到好玩的事情，你会？',
        options: [
          { txt: '第一时间发朋友圈', score: 1 },
          { txt: '先分享给好朋友', score: 2 },
          { txt: '拍照存着，等合适时机发', score: 3 },
          { txt: '立刻发定位打卡', score: 4 }
        ]
      },
      {
        text: '你会怎么处理朋友圈评论？',
        options: [
          { txt: '秒回+表情包三连', score: 1 },
          { txt: '认真回复每一条', score: 2 },
          { txt: '只回复重要的人', score: 3 },
          { txt: '统一回复，保持优雅', score: 4 }
        ]
      },
      {
        text: '朋友圈三天可见对你来说是？',
        options: [
          { txt: '不存在的，全部可见', score: 1 },
          { txt: '保持神秘感', score: 2 },
          { txt: '选择性展示', score: 3 },
          { txt: '记录生活，不留遗憾', score: 4 }
        ]
      },
      {
        text: '你刷朋友圈的习惯是？',
        options: [
          { txt: '评论区段子手，搞笑担当', score: 1 },
          { txt: '默默点赞，偶尔评论', score: 2 },
          { txt: '视奸模式，只看不说', score: 3 },
          { txt: '每条必赞，互动达人', score: 4 }
        ]
      }
    ],
    results: [
      {
        min: 6,
        max: 10,
        title: '段子手',
        emoji: '😂',
        desc: '你是朋友圈的段子手！幽默风趣，是评论区的快乐源泉。总能用搞笑化解尴尬，是大家的开心果。优点：幽默风趣，情商高；小短板：有时过于沙雕；趣味评语：评论区战神，快乐制造机！'
      },
      {
        min: 11,
        max: 15,
        title: '岁月静好',
        emoji: '🌿',
        desc: '你是岁月静好的文艺青年。朋友圈充满生活美学，清新脱俗，让人向往。善于发现生活中的小确幸。优点：文艺清新，品味高雅；小短板：有时略显矫情；趣味评语：生活美学家，人间小清新。'
      },
      {
        min: 16,
        max: 20,
        title: '凡尔赛大师',
        emoji: '👑',
        desc: '你是低调奢华的凡尔赛大师。不动声色地展示生活品质，让人羡慕不已。擅长"不经意"的炫耀。优点：品味高端，气质优雅；小短板：容易拉仇恨；趣味评语：凡学大师，深藏不露。'
      },
      {
        min: 21,
        max: 24,
        title: '打卡狂魔',
        emoji: '📍',
        desc: '你是活力满满的打卡狂魔！生活充实，到处打卡，朋友圈比景点地图还全。是朋友们的探店指南。优点：热爱生活，行动力强；小短板：手机内存告急；趣味评语：打卡达人，足迹遍布天下！'
      }
    ]
  }
}

function getTestList() {
  return TEST_LIST
}

function getTestData(testId) {
  return TEST_DATA[testId] || null
}

function getResultByScore(testId, totalScore) {
  const testData = TEST_DATA[testId]
  if (!testData) return null
  
  const results = testData.results
  for (let i = 0; i < results.length; i++) {
    const result = results[i]
    if (totalScore >= result.min && totalScore <= result.max) {
      return result
    }
  }
  return results[0]
}

module.exports = {
  TEST_LIST,
  TEST_DATA,
  getTestList,
  getTestData,
  getResultByScore
}
