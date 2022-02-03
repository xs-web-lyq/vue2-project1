// 当前模块：API进行统一管理
import requests from  './request'

// 三级联动接口
// api/product/getBaseCategoryList  get请求 无参数

// 发请求：axios发送请求返回结果Promise对象

export const reqCategoryList = ()=>{
    // 发请求 //需要返回
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}
