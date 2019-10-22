// moco 文章摘要数据
/** 
 * 文章类型type
   @param {string} type
   全部：all 旅游:travel 快门：photography 碎碎念：other
 * 
*/
const essay = {
  articleList: [
    {
      title: "一件事没有被记录，就像没有发生过",
      date: "2019.04.11",
      id: 1,
      comment: 7,
      collect: true,
      type: "photography",
      webView: "https://mp.weixin.qq.com/s/AHPnobDTKVzfGUgsXujeAQ",
      imgList: [
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/03J4J2QcyS5H7ZynOkEr0K39x43ZkrBM6Lw460AG8jU!/b/dL8AAAAAAAAA&bo=6wXyAwAAAAARJw8!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/1HQnGRr.9A8fIz1rbGuonDBESH9UUZbxxyBEGfalZLI!/b/dMUAAAAAAAAA&bo=UwY4BAAAAAARJ3k!&rf=viewer_4"
      ],
      summary:
        "同济的樱花，终于没有错过。花开花落，人来人往。这一年，又过去三分之一了。情绪还来不及整理，记忆还很零碎。 微凉的心，总是喜欢暖心的事物。那天，天很蓝，樱花开了。"
    },
    {
      title: "让泰国的记忆停留在阳光沙滩海岸吧",
      date: "2019.06.11",
      id: 2,
      comment: 5,
      collect: false,
      type: "travel",
      webView: "https://mp.weixin.qq.com/s/tmdLA4c31oVe67bzvHDDCA",
      imgList: [
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/WrFGvBje3.OBCZd8G6nrTSEpSJsGCdYB7OLpgrSpAj0!/b/dL8AAAAAAAAA&bo=RQOjAQAAAAARF8Q!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/eNkRVlzgTtoKDzv.puu1UZazh4nalaSXUSDG2hGjWRI!/b/dIMAAAAAAAAA&bo=rQSCAwAAAAARJzg!&rf=viewer_4"
      ],
      summary:
        "生活不是寻找自己，而是塑造自己.到了夏天，我要去海边,就让泰国的记忆停留在阳光沙滩海岸吧~泰国比中国时差晚大概1小时，度假中的人时差慢了不止1小时。有趣的灵魂终会相遇。"
    },
    {
        title: "茫然不知身是客，却道天暖好个春",
        date: "2017.10.11",
        comment: 3,
        id: 3,
        collect: false,
        type: "other",
        webView: "https://mp.weixin.qq.com/s/DS14yFRFtQheZbAYQMra5w",
        imgList: [
            "http://b275.photo.store.qq.com/psb?/V14bWx4d2N6wu4/PBwsgfuEaOTXo.VQZPtdXkt7fb3KWUCor*BeMpDHRb8!/b/dPU866PsJgAA&bo=VwRwAgAAAAABBwE!&rf=viewer_4",
            "http://b275.photo.store.qq.com/psb?/V14bWx4d2N6wu4/1lcFFRk6bfibdM2B3DHFNt8TAL*z25x*J4wTDLZiq*Y!/b/dHlJ66MDJgAA&bo=IAMVAgAAAAABBxQ!&rf=viewer_4"
        ],
        summary: '好多人看似很忙，却都很孤独。手机像装满了整个世界，偶然抬头看四周，一片热闹的人际荒漠，一样沉默不语的低头族。众人皆醉我独醒的感觉。茫然不知身是客，却道天暖好个春。'
    },
    {
      title: "澳门，我和你有个约定",
      date: "2018.04.11",
      comment: 3,
      id: 4,
      collect: false,
      type: "travel",
      webView: "https://mp.weixin.qq.com/s/p2Wjkmabe5gnTNiFuZjf2g",
      imgList: [
        "http://m.qpic.cn/psb?/V14bWx4d2PomPS/syEPdXsIq2azdsR3kR1SciiCyXQvwzirufvQ48EGH88!/b/dL8AAAAAAAAA&bo=1AIfAgAAAAARB*s!&rf=viewer_4",
        "http://m.qpic.cn/psb?/V14bWx4d2PomPS/ZKw9NSILKSh..2qNmL2Hw3YRe3RCDyAG9Xcvcom35xI!/b/dIMAAAAAAAAA&bo=1ALjAQAAAAARFxQ!&rf=viewer_4"
      ],
      summary:
        "旅行，为了短暂逃离兵荒马乱的日子。旅行，从自己呆腻的地方到别人呆腻的地方。多年前的生日愿望去澳门蹦极，我终于来了。毕竟有些事现在不做，也许以后都不会做了。"
    },
    {
      title: "2018末，再说点什么～",
      date: "2018.12.11",
      comment: 3,
      id: 5,
      collect: false,
      type: "photography",
      webView: "https://mp.weixin.qq.com/s/sLifuyNnoBqls3MMwDHlxg",
      imgList: [
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/8fAm0DCeHO1UhlqmKu7NSHqSWxegTAR86p69wyFo474!/b/dAcBAAAAAAAA&bo=1ALjAQAAAAARBwQ!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/0kaxHoxgYlZ3ocyUZ*bIe*smGqkY*XIzqYOhClc9U5k!/b/dLgAAAAAAAAA&bo=1ALjAQAAAAARFxQ!&rf=viewer_4"
      ],
      summary:
        "太没动力经营自己的生活,像雨天淋湿的鞋子没有灵魂，这样的生活有些被动。去一线城市，到底需要多大勇气，当年，我背个背包就来了。我做了那么多改变，只是为了我心中不变."
    },{
      title: "这大概就是年轻的样子",
      date: "2017.09.18",
      id: 6,
      type: "photography",
      comment: 2,
      webView: "https://mp.weixin.qq.com/s/pFJho50XuU19WZKXieXRUQ",
      collect: false,
      imgList: [
          "http://b219.photo.store.qq.com/psb?/V14bWx4d0ilSPl/Jx39cLLj4YztZDo7N5fF15OOHI.RssxGzA8u86KEohY!/b/dNsAAAAAAAAA&bo=gAcABYAHAAURCT4!&rf=viewer_4",
          "http://b365.photo.store.qq.com/psb?/V14bWx4d0ilSPl/tNHKlO4JJIGkvme5cYyldl4ToRExiKs6dRneSXtdJt8!/b/dG0BAAAAAAAA&bo=gAcABYAHAAURGS4!&rf=viewer_4"
      ],
      summary:
        "上海涂鸦圣地M50,也是上海街头文化的地标。城市也许不需要涂鸦，但城市的涂鸦人需要。一个人如果一点野心也没有，他的人生一定很难发生改变。肆意挥洒的色彩，个性鲜明的创作，这大概就是年轻的样子。"
    },{
      title: "我要亲手捧一捧哈尔滨的雪",
      date: "2017.12.11",
      comment: 5,
      id: 10,
      collect: false,
      type: "travel",
      webView: "https://mp.weixin.qq.com/s/9ts0MqU3AWN19fIe2hfD9A",
      imgList: [
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/EF0sQpRzRSkvXtORu7wGhPuSoCs90ZpNQOTI8B.6hSg!/b/dL8AAAAAAAAA&bo=1AIfAgAAAAARB*s!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14bWx4d2PomPS/yeYV8ZSgw7MSLp*7ac763K7SaSuvcBclHaGQXmZdNoo!/b/dLYAAAAAAAAA&bo=1AIfAgAAAAARF.s!&rf=viewer_4"
      ],
      summary:
        "总以为上海的雪很小气，没曾想下那么认真。我要亲手捧一捧哈尔滨的雪，我终于实现了。 旅行总要有点故事，哪怕小事故。 唯有这样，这趟旅行才不会被忽略。"
   },{
      title: "有些事，该翻篇了。",
      date: "2016.10.11",
      id: 7,
      comment: 3,
      collect: false,
      type: "other",
      webView: "https://mp.weixin.qq.com/s/k52LNTiqToFLQlssQfHmHw",
      imgList: [
        "http://m.qpic.cn/psb?/311e7b6c-1c37-434e-ac03-92fbaa51165c/AM11oTD8YOGb0WDq9gXtemmBCRJ4Z89YoCEmSREWpZ4!/b/dB4AAAAAAAAA&bo=sAQgAz8GKgQFGLs!&rf=viewer_4",
        "http://b30.photo.store.qq.com/psb?/311e7b6c-1c37-434e-ac03-92fbaa51165c/B3uUQLymYr2KwmsIKOPC3HQdZQCEAa1x0qmuumwtZZQ!/b/dB4AAAAAAAAA&bo=sAQgAz8GKgQFCKs!&rf=viewer_4"
      ],
      summary:
        "我一直希望能做到果断的跟过去告别，不念过去，不畏将来你的人生是你的，冷暖都是你的。前进，不代表要抹掉所有回忆，你会一直记得，只不过他已不再是乱你心者。"
    },{
      title: "你的人生是你的，冷暖都是。",
      date: "2017.10.21",
      id: 8,      
      comment: 3,
      collect: false,
      type: "other",
      webView: "https://mp.weixin.qq.com/s/xHHymxeTUatn31_nGjcoOw",
      imgList: [
        "http://r.photo.store.qq.com/psb?/311e7b6c-1c37-434e-ac03-92fbaa51165c/FTEB7m4HUw1SGx77jSCBhOm2H44qpn2FZmLvHd1tlBM!/r/dN0AAAAAAAAA",
        "http://r.photo.store.qq.com/psb?/311e7b6c-1c37-434e-ac03-92fbaa51165c/K1b5OrkHGBq..9cQj8VGs.VWvWltae18mCQA3JDAKMw!/r/dGgAAAAAAAAA"
      ],
      summary:
        "让心灵短暂远离兵荒马乱，有勇气有力量，过上自己想要的生活。你是个什么样的人，决定了你在一个城市过什么样的生活。你想不上班但要工资，你想就住在豪华公寓，你想说走就走肆意洒脱，想当逃兵，却也需要资本。"
    },{
      title: "一线生活碎碎念",
      date: "2017.11.18",
      type: "other",
      id: 9,
      comment: 23,
      webView: "https://mp.weixin.qq.com/s/Syz6lXR26pGXrF2ksYpbNA",
      collect: false,
      imgList: [
        "http://m.qpic.cn/psb?/V14bWx4d2PomPS/7KQ1YarPHKdJrBreQJ1w.j5m4FSM*7srzYRDsVuXzaE!/b/dMUAAAAAAAAA&bo=ygLcAQAAAAARFzU!&rf=viewer_4",
        "http://m.qpic.cn/psb?/V14bWx4d2PomPS/.Fqwzhixx8J8kd55WsfQnrXUqBc0eT3Psd5CyuKBDLo!/b/dL8AAAAAAAAA&bo=1ALjAQAAAAARFxQ!&rf=viewer_4"
      ],
      summary:
        "过自己喜欢的生活，喜欢自己过的生活。不念过往，不畏将来。每次登上高层，俯瞰这座城市，没有一块属于我的小小地盘，脆弱的归属感，迷离扑朔。这个城市永远适合年轻人。"
    },{
    title: "总有一天，你会跟自己和解",
    date: "2017.03.18",
    type: "other",
    id: 11,
    comment: 23,
    webView: "https://mp.weixin.qq.com/s/ue_Z6X2Xj2UBnBxBQ0FcYA",
    collect: false,
    imgList: [
      "http://m.qpic.cn/psb?/V14bWx4d2PomPS/Clzn9lRTkL8rvemRNW30bFHa90eI.B22t2SEG1SSoAM!/b/dFMBAAAAAAAA&bo=1ALjAQAAAAARFxQ!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14bWx4d2PomPS/Vq8QjxhF1aLtPzYzzqr5rw*XFx7eUbTDpmO8ungBof4!/b/dDYBAAAAAAAA&bo=1ALjAQAAAAARFxQ!&rf=viewer_4"
    ],
    summary:
      "有人说格局太小，悲伤才会被放大。感觉自己变了，有点陌生，既无奈又觉得必然，而后又释然。慢慢，我也不需要找到同类。每个人都能选择自己的人生轨迹，人生，没有标准答案。"
  }
  ]
};

export default essay;
