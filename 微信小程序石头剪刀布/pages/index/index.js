//index.js
//获取应用实例
var app = getApp()
let timer = null;
let nums = 0;
let strs = '';
Page({
  data: {
    imgarr:[
      '../../img/bu.png',
      '../../img/shitou.png',
      '../../img/jiandao.png'
    ],
    aiimg: '../../img/bu.png',
    woimg:'../../img/wo.png',
    num:0,
    str:'',
    state:true
  },
  onLoad: function () {
   this.imgrandom();
   let old = wx.getStorageSync('num')
   if(old != null && old != ''){
     this.setData({
       num: old
     })
   }
  },
  imgrandom:function(){
      timer = setInterval(this.timerfn,100);
  },
  timerfn:function(){
      let num = Math.floor(Math.random() * 3);
      this.setData({
        aiimg: this.data.imgarr[num]
      })
  },
  stop:function(e){
    if (this.data.state == false){
       return;
    }
   clearInterval(timer);
   this.setData({
     woimg: this.data.imgarr[e.currentTarget.id]
   })
   if (this.data.woimg == '../../img/bu.png' && this.data.aiimg == '../../img/shitou.png'){
     nums++;
     strs = '我赢了'
   } else if (this.data.woimg == '../../img/shitou.png' && this.data.aiimg == '../../img/jiandao.png'){
     nums++;
     strs = '我赢了'
   } else if (this.data.woimg == '../../img/jiandaoshitou.png' && this.data.aiimg == '../../img/bu.png') {
     nums++;
     strs = '我赢了'
   } else if (this.data.woimg == this.data.aiimg){
     strs = '打平'
   }
   this.setData({
     num: nums,
     str: strs,
     state: false
   })
  },
  again:function(){
    timer = setInterval(this.timerfn, 100);
    this.setData({
      state: true
    })
  }
})
