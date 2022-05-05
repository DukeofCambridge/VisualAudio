// 导入axios实例
import httpRequest from '@/request/index'

// 获取用户信息
export function apiGetUserInfo(param: UserInfoParam) {
    return httpRequest({
		url: 'your api url',
		method: 'post',
		data: param,
	})
}
