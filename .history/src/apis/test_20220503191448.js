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
function searchByKey = (str, idList)=>{
    axios
        .get(`http://${host}:3000/search?keywords=${str}`)
        .then((res) => {
            res.data.songs.array.forEach(element => {
                console.log(element.name);
            });
          //id = `https://music.163.com/song/media/outer/url?id=${res.data.result.songs[0].id}.mp3`;
        });
}