import { createStore } from 'vuex'

export default createStore({
  // state: 仓库存储数据
  state: {
    tagRecommendSongsID:[],
    songList:[],
    song:{},
    emo:'',
    loadingShow: false
  },
  // mutations: 修改state的唯一手段
  mutations: {
    loadList(state, info) {
      state.songList = info;
    },
    loadSong(state, info) {
      state.song = info
    },
    pushEmo(state, info){
      state.songList.push(info)
    },
    // 发起请求
    issueRequest(state) {
      state.loadingShow = true
    },
    // 响应请求
    getResponse(state) {
      state.loadingShow = false
    }
  },
  // action: 处理action，可以书写业务逻辑，处理异步
  actions: {
  },
  // getters: 类似计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
  getters: {
    // 当前仓库的state
    songList(state) {
      return state.songList || [];
    },
    song(state) {
      return state.song || {};
    },
    emo(state) {
      return state.emo || '';
    },
    loadingShow(state) {
      return state.loadingShow;
    }
  }
})
