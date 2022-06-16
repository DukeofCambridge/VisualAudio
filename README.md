# Visual Audio

用户交互技术课程设计报告

# 项目结构

```
./src/views  -- Start	       开始界面（网站入口界面）
	     -- Index          基页面（作为其他组件的容器，放公共组件）
             -- Main           主界面（VISUAL AUDIO），基页面默认放置Main.vue
             -- TagSelect      标签选择界面（从Start首次进入默认转至该界面）
             -- Emotion        情绪分析界面
             -- MusicSquare    音乐广场界面

./src/components  		组件
./src/apis    			请求外部接口
./scr/assets  			图片等静态资源
./src/router  			路由
./src/store   			状态管理
```



**项目成员**

| 邵国诚 | 时守格 | 吴渭 |
| ------ | ------ | ---- |



**指导教师**

梁爽



# 一、项目背景及目标

音乐可视化是近年来影音乐界和互联网行业中如火如荼的一大话题，它以视觉为核心、音乐为载体，借助多媒体技术和影视化手段展现音乐，丰富了用户的视听体验和音乐作品的表现结构，在音乐、游戏和影视等领域得到了广泛应用。

音乐个性化推荐也是近年来各主流音乐软件企业的竞争发力点，好的音乐推荐能大大改善用户体验，同时增强用户粘性，提高企业收益。目前市场上主要的推荐技术是基于相关性的推荐算法，在感知用户情绪、增强交互性方面还有较大空白。

因此，我们针对需求痛点，结合团队成员兴趣和能力，提出了针对性的解决方案：

项目主要涵盖四个功能点：海量音乐资源播放、动态旋律展示、人脸情绪识别和标签化歌曲风格推荐。与传统音乐播放器不同的是，我们的播放器重在用户交互，没有登录注册，用户进入网页即可直接选择推荐的音乐播放，这种类似开盲盒的方式更能吸引受众，我们对接网易云及qq音乐的曲库，利用人脸情绪识别技术和用户喜好标签选择，智能地为用户推荐音乐曲目，同时实现可视化的动态音乐效果，提供区别于传统音乐播放器的新颖视听体验。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=MzU4Y2Q0YTI2MGJiOTYzYjNmODhiZDFlODQxYzE1ZWVfaVpjMHhLa2V5dGVXUjVERllTcU1YUlZ6WnMwSjZpa0NfVG9rZW46Ym94Y241UGRXTmRvbkVxWmZHVDA4bEFtaGlkXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)





# 二、竞品分析

竞品分析主要围绕五个层级，从宏观的企业战略、到具体的产品呈现。目前市场上已经有很多成熟的音乐软件，对于它们的分析于我们而言大有裨益。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjFmZWQ0YzJjMWY0NWVkM2JjNGQ4YzMxMTAyOWE2NjdfUGI3RFp5Nkw1VURxRHlKOUxKTkNCcjByVElKY3h4VkZfVG9rZW46Ym94Y251ZmNmTVhKdjBXWGNDbUhqUUlSeEZnXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

首先是使用用户，主要集中在20-39岁，男生搜索占比比女生搜索占比高，QQ音乐搜索热度最高。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NjRkZjg5YThlZTZiNDYzMzk5OGQ5Y2M3YjVlNDBlYTlfSUxhZkVOSk1WZWg0a0xRYjJQMm5ONDhkTVBybks4WGZfVG9rZW46Ym94Y24wczRLVFdFcEtjcDZiTTY1Z25DblBmXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

以下为详细对比分析：

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NmFjNmI1NjdkOGFiNWQ3Y2ExMjUxM2NkOGI3MzQ2ZTRfdVRaaXQ4N0R2MmtUa0sybHFqV0d5dGVmOW1YVUxySk1fVG9rZW46Ym94Y25XRmdWeEZ2aUpLVE5BUWZONk1ocUxnXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWNmZjk3NmFjM2MxZDM1NmIwN2RiMTUxZWVjNjc1Y2FfaWRKMktKb0JzdzhnNDVTTlFEN1VsbVRJOEdaUlNOODdfVG9rZW46Ym94Y25NZzE0OHlFT2FaR1hRWDdpb1N3VWVnXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

| **软件名称** | **产品定位**                                                 | **用户定位**                                                 | **主界面对比**                                               |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 酷狗音乐     | 功能最全的音乐产品工具在线视屏演艺互动平台唱吧的社区平台     | 18~40岁的大众用户，唱歌艺人                                  | 顶部tab分为“音乐，视屏，音频，小说”四个分类，功能区分明显。界面分布简洁，视觉黄金区功能模块设计贴合用户的行为习惯。 |
| QQ音乐       | 中国最大的网络音乐平台海量无损高品质的正版音乐走在音乐潮流最前端，主打流行音乐打造音乐社区 | QQ音乐在各个年龄段都有相应用户，QQ音乐的定位在于服务最大的用户群体。 | 主色调为灰白色，以“推荐”作为主页。QQ音乐的逻辑应该是大部分用户直接会播放本地歌曲，相比其他功能“我的音乐”是一种刚需。经典绿色的UI设计没有特别大的感觉只能说作为QQ音乐的品牌颜色，便于记忆。 |
| 酷我音乐     | 以音乐为核心的数字娱乐服务                                   | 一切喜欢听音乐的人群                                         | 以“发现音乐”作为首页，而首页内容根据用户个人口味生成，这一特点成为广受用户好评的一大特色。也就是说模块设计都是一样的模块，但每个人的页面歌曲又都是不同的。网易云音乐改版后将导航移到了底部，顶部留了搜索框，听歌识曲和播放入口。底部tab相较顶部tab的好处是可见性好，操作方便。 |
| 网易云音乐   | 一款专注于发现和分享的音乐产品主打移动端，定位音乐社交个性化推荐，主打小众音乐 | 85后及90后年轻人为主要用户，绝大数为男性用户                 | 也是一款下载量颇大的音乐软件，有一种夜间模式的感觉。推荐歌单部分无法掌握每个用户的口味偏好，反而因元素过多造成混乱，臃肿的感觉。页面布局没有突出核心功能，用户体验较差。 |
| 汽水音乐     | 主推单曲的内容形态，而算法推荐作为核心武器。                 | 喜欢音乐热爱尝鲜的年轻群体。让用户不带重复的听你喜欢的歌     | 页面简介，一级页面上只有三个tab，没有太多干扰元素，UI，交互挺不错的，播放页的交互确实很大胆，没有上一首，但感觉这类交互的改变可能是为了给算法做服务，不喜欢就划走，喜欢就点封面，也可能更好的承接抖音用户习惯。 |

# 三、概念设计

## 3.1 用户分析

我们预设了三种主要使用人群，结合随访以及专业评估的方式制定了用户画像，以指导我们的产品设计。

| **照片**     | ![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NTEzYjdkOTNhNzgyMmVhYTU2ZDNlYjkzYzhjZTIzN2JfTVBIMzRJUXlyd1A2c0RkVDdvNE10cFlBaVNXMUEybDVfVG9rZW46Ym94Y24xT0traW5ZajE1eFUweU04dHFRaUxjXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA) | ![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=N2NhYWJlMWU4N2Q5YTQ3YmRlMmE2ODliM2YyZGZiZmRfS0NUNm1XU1hRdlA1TWlhbXdMTmJzYU1QeGJXdnJKbGNfVG9rZW46Ym94Y25nOWk1SVFCVFBtd3cycEpLOUVUSFBiXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA) | ![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=Mjg0MGVlMzRiMDliMmYzYjQzNzM5MTNmZjE0MGI0Y2NfUTJETWdOQkZEYngzNHhWem43TWN2ZUtpcWdsdm1SaWNfVG9rZW46Ym94Y25Zb21nMThubmtHMEg3cUpJZlVWbFJkXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA) |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **姓名**     | 吴守诚                                                       | 李开放                                                       | 戴浏                                                         |
| **年龄**     | 21                                                           | 56                                                           | 24                                                           |
| **所在地**   | 上海嘉定                                                     | 山西运城                                                     | 上海闵行                                                     |
| **身份**     | 学生                                                         | 退休职工                                                     | 创业青年                                                     |
| **用户故事** | 整天戴着耳机，各种主流音乐软件都使用，但认为它们趋于同质化，无法做出大胆的、创新性的尝试，想要一款美观、吸引人眼球、“即开即用”的音乐软件，提供一些有意思的特殊功能，比如自拍播放音乐等。 | 不太会用智能手机，浏览网页倒还可以，不想费工夫注册账号，就想闲下来听听音乐放松一下，同时还能获得视觉上的享受。 | 想要制作一款音乐软件，但个人在技术上并不精通，想找一款不封装源码、逻辑清晰、不商用的制作精良的音乐软件作为学习对象。 |

## 3.2 功能设计

我们的音乐播放器主要有三大功能模块：

**智能推荐功能**：在用户第一次进入系统界面时，我们将会引导用户选择自己偏好的曲风便签，同时通过人脸技术进行情绪分析，推测用户喜好，并为其推荐歌曲。

**音乐广场功能**：如果用户对系统推荐的结果不甚满意，也可以自己去音乐广场中搜索歌曲。我们在音乐广场中放置了许多热门的歌单，用户也可以根据个人偏好输入关键词搜索歌单。

**可视化音乐播放功能**：我们的核心是音乐播放。除了传统的歌曲播放、音量及进度调节，播放模式切换之外，我们创新性地引入了可视化的音乐播放界面，通过解析音频节奏数据，为用户提供悦人的视听体验。

## 3.3 场景设计

**歌曲推荐：**

考虑到功能的紧凑性，我们并未采用传统的登录注册式的用户管理方案。当用户一进入网站主页时，就将通过引导进入标签选择界面，其后将进入情绪识别界面，识别完毕后，即成功推荐曲目，进入歌曲播放界面

备选流：当用户不想使用推荐功能时，可以随时选择跳过某个步骤，或是直接退出推荐环节，自行搜索歌曲

**音乐广场功能：**

用户可以随时打开界面左侧的导航栏，进入音乐广场界面。在该节目，我们可以看到各式各样的热门歌单，也可以自行通过关键词搜索歌单

**可视化音乐播放功能：**

当用户完成推荐环节，或是自行选择歌单后，系统将把对应歌单导入播放器中。用户进入音乐播放主页，即可看到歌曲海报、名称、歌手、歌词等信息。同时，歌单的其他曲目信息也显示在右侧边栏，用户可以随时查看并切歌



## 3.4 交互方式

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NWExYWVmYTE2MDJiOTk1MjQ2NGI2ZGIxN2EyODdlYjlfOE9YdkVtTGppSEkwNXlGUHRwZW56enNJWEprVXk1Q3pfVG9rZW46Ym94Y25jeFR4VjNLNTJXSmtMV2JqUFF3dlhmXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

1. **Instruction：** 

​     在用户首次进入页面时，我们将引导用户进入标签选择和情绪识别的环节，以此换成音乐推荐

1. **Exploring：**
   1.  如果用户对系统推荐的歌曲并不满意，也可以自行到音乐广场中浏览歌单，或自行输入关键词搜索

1. **Visual Audio**
   1.  我们强调**视听**的概念，在基础的音乐播放之上，我们引入了**音乐可视化**和**情绪识别**的概念，突出了视觉化的概念。希望结合音乐推荐和动态效果，真正做到“**看见你内心的声音**”





# 四、物理设计

## 4.1 流程设计

针对概念设计中提出的三大用例，我们在物理设计阶段进一步厘清了用例关系，并绘制了详细的系统功能流程图

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NWY1ZGE0MmMyNTdmZGJhMDZmMzg2MmY4NDcyMjc5NTJfWTVKMmU2S0VWdHdRQ0UyQVR1bHZsUWlvUU1FdDF5OWRfVG9rZW46Ym94Y255ZWdjcE01ajVoRFFTVEE2bHo2ZmpkXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

暂时无法在飞书文档外展示此内容

## 4.2 低保真度原型

​                                                             **音乐广场**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=MDUyOGM5ZjQ1MGIzZDhiMjVmMDdlOTNkY2E0YzAwMzRfS1hrMDY3YXNJWndKdHllYnRwcFhIdUE4TjNweUt2SnNfVG9rZW46Ym94Y253Wk1WaHZQWTk1ZGk4YzhNMVVvY2FoXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=YzQ4YTNkYTc4YjJmOGEyMTk3NDliMjUyYThhZWQyZjlfb0pRUmhaVHB2eTViQ2pFVEh1SVVCNEdvUTI3enRLMHBfVG9rZW46Ym94Y243c1NUQzVsMEtTYUxZWTFxcHF5d2hoXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**音乐播放**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NGFiZWM5MDIxYmJhNzY1Y2M4NDU5YzFjNmQ3ZDExOGVfZGtYb3BoNldtQnQ0QWxwcGYzOHpZeEJZRmNKTW9qOVJfVG9rZW46Ym94Y24wS2htUGh4WUp3RmExNWhCeGlKS0xkXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

## 4.3 高保真度原型

为保证后续实现的一致性，我们绘制了针对该系统的高保真度原型如下：

①引导页

该页面主要是给初次使用该网站的用户一个提示作用，页面以淡粉色为基调，适用群体广泛，引导页上的两行字分别表示了该网站的名字和该网站的定义——视觉和听觉结合。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NjdmOTg0MDUxYmFmNmNkMWUxNWM5ZTJmM2IzN2YyMGVfT3dPaTlkODIwZ2NhaDQyOGUzcmNxNWxEWDhHU1hwazBfVG9rZW46Ym94Y25NUEtXQ04ySFl6TGg0QmRYamFBa0VjXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

②标签选择页面

该页面用户可以选择感兴趣的音乐标签，点击图片即可视作选中，每张图片代表一种风格，设计的交互方式是翻转卡片式，初始时卡片背面为风格文字标识，鼠标悬浮后卡片翻转到正面，显示图片。选中后卡片保持翻转不变，用户可选多个标签，系统将根据该标签向用户推荐歌曲。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=OGI0Y2U5MDUxZDM1Mjk0OTUzNzU3ZGZjZTk3YzMzYzlfWGh2aE5uSmU5RUdmUWIwSVhya1VwTGZqV2tYbVJHUTJfVG9rZW46Ym94Y25ScWptaWc5Z1dEVzd5cnU1UDhoNWNkXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

③情绪识别页面

在该页面，用户可以授权开启摄像头，系统将根据识别到的用户面部进行情绪分析，然后依据分析的结果为用户推荐歌曲。若用户不想打开摄像头，也可以点击下面的表情或跳过这一步骤。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ODI0MjA4YTU5MTdmMWZiM2QyNjM0YTE4YjE1YjI1ZTlfUWdJZmF6MURMcGxWaGdaS0lVeXVxeWJTWnN2VWM4R25fVG9rZW46Ym94Y244a2RHQUZraUlLQVMxeWRtMTJ2ZDVmXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

④播放主页

该页面是音乐播放的主页面，左部是歌曲封面，外围是可视化的部分，将随音乐的播放而变化，右侧显示歌词，对应该时间的歌词会高亮显示。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTA0MTA4ZDZiZWEyZjlhOGRlMDVhOTFhOWZjMTUxMmFfVGwxbXVGMTg0RklPUW1ZbE50VlU3RFZpYVFkZm5wUHlfVG9rZW46Ym94Y25EbDBHNXdXdGx2YkZ0RzdQMG1vOHJoXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

⑤音乐广场页面

该页面供用户自由选择歌单，用户可由导航栏进入，上方是热度较高的专辑信息，使用轮播图呈现，下方是精选歌单与精彩推荐及榜单等信息，点击某歌单封面即可将该歌单加入自己的播放列表。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=MmZmYzIzZTdlYjE2OTc5YzcwYWM4ZGFjZmQ1ZmVlNDBfNlJ0QTVXbXZCR2NqZndsb2JkQTgzSjVlY0lybFloczVfVG9rZW46Ym94Y25UUXgwOHd1U3VUZG5VRXZyNm00b0dmXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)



# 五、技术方案

## **5.1 人脸识别**

**基于 VGG19 和 Resnet18 的表情识别** VGG19 和 ResNet 都是非常经典的卷积神经网络结构，在多方面被证明在图像分类问题上有较好的效果。VGG(Visual Geometry Group)的出现证明了增加网络的深度能够在一定程度上影响网络最终的性能，从而掀起了提高网络深度研究的热潮。其中VGG19 中包含了 19 个隐藏层 (16 个卷积层和 3 个全连接层)。而 ResNet 网络参考了 VGG19，在其基础上进行了修改，并引入残差学习（Residual     Learning）机制，既保证了网络层的复杂度，也缓解了深层网络带来的梯度消失或者爆炸问题。下图展示了VGG 和ResNet 的网络结构对比情况。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWI5YWYzN2QxNDFiNjBlN2IzNjJkMTA4MDU2NjE5NzhfdjRPQmIzS1NybkI4aDBadEViS2gxYzBESWJ3MXZOTkpfVG9rZW46Ym94Y254Z3ZkT3BudWNZSnJIMmZpa2JON0lnXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

我们对 ResNet18 和 VGG19 网络进行简化，以支持低计算资源的训练任务。**总体设计**如下：

- 采用卷积神经网络CNN 来提取人脸表情特征并将其分为 7 类：快乐，气愤，惊讶，害怕， 厌恶、悲伤和中性。

- VGG19 的每一个小块是有一个卷积层，一个 BatchNorm 层，一个 ReLU 层和一个平均池化层来构成的。而ResNet 是由两个卷积层，两个BatchNorm 层组成，而且每个ResNet 模块输入输出端还有快捷链接。

- 在全连接层之前加入了Dropout 策略，增加了模型鲁棒性；

- 我们都去掉了传统 VGG19 与 Resnet18 中的多个全连接层，直接在一个全连接层后直接分为 7类去识别。

**损失函数**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmFkMmJjNjJjNDFhMzc4ZWM2MDVkYTFhMTcyMmZjZWNfVE0xNTVuZ1hlRnkyck90U3F1U3ljZ0MzbGNHZVpzcTZfVG9rZW46Ym94Y25INmlFYWxwcHc4VzZZZ1FwQ1puUmRoXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**数据集：**

**FER2013 数据集**

Fer2013 包含大约 30000 张不同表情的面部 RGB 图像，大小限制为 48Œ48，其主要标签可分为 7 种类型：0= 愤怒，1= 厌恶，2= 恐惧，3= 快乐，4= 悲伤，5= 惊喜，6= 中性。厌恶表达式的图像数量最少–600 张，而其他标签每个标签有近 5000 个样本。

**实验结果**

| Model                    | Public Accuracy | Private Accuracy |
| ------------------------ | --------------- | ---------------- |
| VGG19+softmax            | 68.821%         | 70.995%          |
| VGG19+dropout+softmax    | 69.490%         | 71.441%          |
| ResNet18+softmax         | 70.413%         | 71.703%          |
| ResNet18+dropout+softmax | 71.371%         | 72.538%          |

## 5.2 **音乐可视化**

> Web Audio 是 Web 端处理和分析音频的一套 API 。它可以设置不同的音频来源（包括`<audio>`节点、 ArrayBuffer 、用户设备等），对音频添加音效，生成可视化图形等。

我们使用html5原生的Web Audio API去对音频文件进行解析。先创建Audio上下文和分析器，关联音频文件，对其进行解码，获取到频率数据和时域数据，再通过canvas进行绘图 

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTYxMjE0Y2E0ZmYzYzVjNDRlNDM1ZTVhZTdjNDA2OTdfeGk4V0tZMXRBZVVsV1ZBSmZpdXQ3Rkt0YmxnQkRZWUVfVG9rZW46Ym94Y244aUdFVDRDdmI5cGlWQ3ZLYnJGWnJoXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

我们选用了Three.js去做更具体地图像绘制。简要来说，我们将音频数组作为 uniforms 的一个属性，传到着色器中。而着色器再将uniforms地属性映射为屏幕上的顶点和颜色。

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTdkOGQ5Njk1ZmI5NmFlOTZmZDkyODJlOGUxZDI4NDRfbk8xQVdKSmJFVW9lR25BWlF0YXQ2VE9ZZ2JsRnRQUmxfVG9rZW46Ym94Y24zbTBIbEFYZ3VocUE0dzRvYXo3OVllXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**效果图**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=MTg4YWQyNjZmMjRhMDY2ZDk3NTk4ZGNjYWRiZjZkZmRfcXdIb3JsajFwcGI5VFAwUEN3eEQ0cWVTTDNhdG5TTmtfVG9rZW46Ym94Y250ZjhzdE1KT2lUa2J2aWRzcmlVbW9kXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)



# 六、项目成果

**欢迎**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=OTIyN2Q1NjcyZTBjOTgxYmY2NjliMDI3NWQ0YmUwZTFfa0ZQSkZNaWpLRDE3ZnFNcUkxWFNKYUNHUWV2M0NaZ0xfVG9rZW46Ym94Y256V2RmRGpUNTZHSDQ2ZVUxZDBVRFNlXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**主页**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NGRiNjU3NGNlOWZmM2I2YjIwNDYxMDZmYjI0YTVmZmFfek1OcEpwVmU4MFZCTlpZT2pCT2hxenR4TEtHVlhIWTRfVG9rZW46Ym94Y25oeTNodFpNV09sbWR2TWZOYmgwdnViXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**标签选择**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=MmI3NDcxNmI0NWI3NzEyOTdlODdmODE2MTk4NGFiODBfV2hBTjMyUDhVd3dod0U4ZG5ISUtLTllLVU5LbGJEZ1FfVG9rZW46Ym94Y25ySkFRb1EyR2xCR0VsZHhBVDczUW1oXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**情绪分析**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=N2Y3ODg4YzllZjBmMWFhOTU2YWVjZjUwM2M2MjA5ZTlfYzZtcWJsVlZVcUQ0RVd0WVhYZkZsUUlUcWdteG5ZbmJfVG9rZW46Ym94Y25ENEdHdnFnY0hwQmRWNkNFeTk3YnRjXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**歌词与旋律**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NTQ4MDFlNDczY2ZlZmViMDA3OTE1ZTBmZTUzYmFhODFfYlUxaXN5Y0JiRHczWG01WlBUMTY2MXhnR3Bjd1RWenBfVG9rZW46Ym94Y240M0FySXFqZ3B5UVhBSW9kWVpWb0toXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**音乐广场**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=MDViMjY0N2JiMjI0MGMwMGE2ZGZmNmNjMDBmNjFiMGJfVkM5eVN3UFdGSlFSc1BiMWplYWo2dVBqOTZkNEs3NXRfVG9rZW46Ym94Y24zRmk3RTlES2w2dmpYRFRwekJBT3BiXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**导航栏**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NzY4Mzg1ZmU0ODgxNGE4MWFhMTI2OWFjMjQ5NWFhMWZfazlJT3RSa01VcU44TDRqNjVoNHhRV29hczZvZHhKZnpfVG9rZW46Ym94Y241SzJBcXgxUmFBeDF0TlhFRWZVclVmXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

**播放列表**

![img](https://m0v099apt4.feishu.cn/space/api/box/stream/download/asynccode/?code=NDVmYWI2MDkzNjFlOWZlNWMxZjk5ZWIyY2JhNDcyOTlfQmF3dVpJNWE4ZWpOQzU3WkFDUEVVcFB6SE5SNU5VbVdfVG9rZW46Ym94Y25UTUh6MFFiV0pQYjBERVVCYWlTTW1nXzE2NTUzNjcwMjQ6MTY1NTM3MDYyNF9WNA)

# 七、项目评估

## 7.1 评估目标

### 7.1.1 功能性目标

**（1）目标用户角色分析**

该系统面向的目标用户主要是年轻群体：现今的播放软件趋于同质化，功能大体类似，仍是传统类型的音乐播放器，且播放音乐需要下载客户端或注册登录，对用户来说很不方便，因此该群体希望能有方便快捷，“即开即用”，创新体验的音乐播放器。并提供一些有意思的特殊功能，比如自拍播放音乐，“盲盒式”听歌。

**（2）系统功能目标**

实现一款无需注册登录，将视觉与听觉结合在一起的音乐可视化的播放器，主要功能如下：

①标签选择：实现开“盲盒”式听歌，让用户体验更为新奇。

②情绪识别：对用户进行人脸数据采集并识别情绪，随后根据分析结果推荐歌曲，实现尽可能地对用户精准性推荐。

③音乐可视化：将听觉元素转化为视觉元素，提高用户的使用体验。

④音乐广场：若用户不想听系统自动推荐的歌曲，也可以进入广场自行搜索并浏览，提供将歌单加入播放列表等功能。

### 7.1.2 非功能性目标

**（1）界面架构和导航**

- 采用用户熟悉或容易理解的结构

- 用户能识别当前在网站中的位置

- 能清晰表达页面之间的结构

- 当前页面的结构和布局清晰

**（2）布局和设计**

- 采用用户熟悉的界面元素和控件

- 界面元素、控件的文字，位置，布局，大小，颜色，形状合理，风格统一容易识别

- 主要阅读区域视线流畅

**（3）内容和可读性**

- 重要内容处于显著位置

- 内容表达含义一致

**（4）行为和互动**

- 必要时有引导行为

- 提供输入提示

## 7.2 评估内容

### 7.2.1 功能性评估

已实现目标用户需求的功能与计划功能。

| 功能                           | 评估内容                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| 根据标签推荐歌曲               | 已实现，但标签数量较少                                       |
| 情绪识别，推荐歌曲             | 已实现                                                       |
| 音乐可视化，歌词动态化         | 已实现，可视化部分采用圆形围绕歌曲封面转动的形式，播放歌曲时对应歌词动态高亮 |
| 搜索歌单                       | 已实现                                                       |
| 浏览精选歌单/精彩推荐/当季榜单 | 已实现，可点击左右箭头切换歌单                               |

### 7.2.2 非功能性评估

| 模块                                                         | 内容                                                         | 评估内容                                                     | 评估结果 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| 界面架构和导航                                               | 采用用户熟悉或容易理解的结构                                 | 采用右侧收缩式导航栏，并在图标旁边加以文字说明，提示性强     | 通过     |
| 用户能识别当前在网站中的位置                                 | 网站功能精简，不同页面风格类似但内容大不相同，用户可以轻松识别 | 通过                                                         |          |
| 能清晰表达页面之间的结构                                     | 导航栏对应的界面均是同级界面                                 | 通过                                                         |          |
| 当前页面的结构和布局清晰                                     | 页面内容较精简，采用极简主义风格，以功能为主                 | 通过                                                         |          |
| 布局和设计                                                   | 采用用户熟悉的界面元素和控件                                 | 播放，上一首，下一首等小图标均采用符合用户习惯的样式         | 通过     |
| 界面元素、控件的文字，位置，布局，大小，颜色，形状合理，风格统一容易识别 | 系统使用淡粉色作为基调，配色和谐，控件元素大小合适。         | 通过                                                         |          |
| 主要阅读区域视线流畅                                         | 无不相干元素阻挡                                             | 通过                                                         |          |
| 内容和可读性                                                 | 重要内容处于显著位置                                         | 标题等内容居中显示，可提醒用户                               | 通过     |
| 内容表达含义一致                                             | 同一界面（例如标签推荐）的多个卡片样式一致，内容种类一致     | 通过                                                         |          |
| 行为和互动                                                   | 必要时有引导行为                                             | 软件有引导页，对初次使用的用户有由标签选择到音乐播放的引导功能 | 通过     |
| 提供输入提示                                                 | 搜索提供输入提示                                             | 通过                                                         |          |

## 7.3 评估结果

从用户需求与功能角度来看，目标用户的需求及其对应的功能均已实现，系统功能较为精简，强调重点突出，功能集中性强。美中不足的是标签选择时提供标签数量有限，后续可改进该部分。

从非功能角度来看，该系统设计风格一致，易用性强，页面元素设计隐喻性强，从界面架构和功能，布局和设计，内容和可读性，行为和互动四方面来看效果均很好。
