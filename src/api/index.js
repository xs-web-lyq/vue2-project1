// 当前模块：API进行统一管理
import requests from  './request'
import mockRequests from  './mockAjax'

// 三级联动接口
// api/product/getBaseCategoryList  get请求 无参数

// 发请求：axios发送请求返回结果Promise对象

export const reqCategoryList = ()=>{
    // 发请求 //需要返回
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}
export const reqGetBannerList =()=>mockRequests({url:'/banner',method:'get'})

// 获取floor数据
export const reqFloorList = ()=>mockRequests({url:'/floor',method:'get'})

// 获取搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数

// 当前这个函数需不需要接收外部传递参数
// 当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】

export const reqGetSearchInfo = (params) =>{ return requests({url:'/list',method:'post',data:params})}