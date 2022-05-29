// 导入axios实例
import httpRequest from './axios'

/**
 * 根据关键词搜索歌曲id
 * @param {*} keywords
 * @returns 
 */
export async function searchByKey(params) {
    return await httpRequest.get("/search",{params})
}

/**
 * 根据歌曲id查找具体信息
 * @param {*} id
 * @returns 
 */
export async function searchById(params) {
    return await httpRequest.get("/song/url",{params})
}

/**
 * 根据专辑id查找具体信息
 * @param {*} id
 * @returns 
 */
export async function searchAlbumById(params) {
    return await httpRequest.get("/album",{params})
}

/**
 * 根据歌曲id查找歌词
 * @param {*} id
 * @returns 
 */
 export async function searchLyricById(params) {
    return await httpRequest.get("/lyric",{params})
}

/**
 * 根据类别id查找歌单
 * @param {*} id
 * @returns 
 */
 export async function searchListById(params) {
    return await httpRequest.get("/playlist/detail",{params})
}