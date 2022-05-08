// 导入axios实例
import httpRequest from '@/request/index'

//根据关键词搜索歌曲id
export function searchByKey (str) {
    httpRequest
        .get(`http://101.43.31.168:3000/search?keywords=${str}`)
        .then((res) => {
            res.data.songs.array.forEach(element => {
                console.log(element.name);
            });
          //id = `https://music.163.com/song/media/outer/url?id=${res.data.result.songs[0].id}.mp3`;
        });
}
// 获取用户信息
export function apiGetUserInfo(param: UserInfoParam) {
    return httpRequest({
		url: 'your api url',
		method: 'post',
		data: param,
	})
}
————————————————
版权声明：本文为CSDN博主「夏日米米茶」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xjtarzan/article/details/123682618