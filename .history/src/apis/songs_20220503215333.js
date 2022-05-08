// 导入axios实例
import httpRequest from './axios'

//根据关键词搜索歌曲id
export function searchByKey(params) {
    return httpRequest.get("/search",{params})
}

//根据歌曲id搜索
export function searchByKey(params) {
    return httpRequest.get("/search",{params})
}