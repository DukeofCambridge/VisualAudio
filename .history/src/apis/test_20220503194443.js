// 导入axios实例
import httpRequest from '@/request/index'

//根据关键词搜索歌曲id
/
export function apiGetUserInfo(param: UserInfoParam) {
    return httpRequest({
		url: 'your api url',
		method: 'post',
		data: param,
	})
}