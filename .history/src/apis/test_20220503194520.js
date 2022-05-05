// 导入axios实例
import httpRequest from '@/request/index'

//根据关键词搜索歌曲id
/* export function searchByKey (str) {
    httpRequest
        .get(`http://101.43.31.168:3000/search?keywords=${str}`)
        .then((res) => {
            res.data.songs.array.forEach(element => {
                console.log(element.name);
            });
          //id = `https://music.163.com/song/media/outer/url?id=${res.data.result.songs[0].id}.mp3`;
        });
} */
export function searchByKey(str) {
    return httpRequest({
		url: '101.43.31',
		method: 'post',
		data: str,
	})
}