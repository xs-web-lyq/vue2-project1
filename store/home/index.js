import {reqCategoryList} from '@/api/index'

// home小仓库
const state = {
    // 在设置数据初始化时，要根据实际数据的类型一定要保持一直与服务器返回值一致
    categoryList:[]
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        }
    }
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}