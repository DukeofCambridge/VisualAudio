// 导入axios实例
import httpRequest from './axios'

//根据关键词搜索歌曲id
export async function searchByKey(params) {
    return await httpRequest.get("/search",{params})
}

//根据歌曲id查找具体信息
export function searchById(params) {
    return httpRequest.get("/song/url",{params})
}