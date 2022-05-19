# visual-audio

Overall Structure
./src/views  -- Index         基页面（作为其他组件的容器，放公共组件）
             -- Start         开始界面（网站入口界面）
             -- Main          主界面（VISUAL AUDIO），基页面默认放置Main.vue
             -- TagSelect     标签选择界面（从Start首次进入默认转至该界面）
             -- Emotion       情绪分析界面
             -- MusicSquare   音乐广场界面

./src/components  组件

./scr/assets  图片等静态资源
./src/router  路由
./src/store   状态管理（如有需要）

PS: 设置css宽高、距离屏幕上下左右距离均使用 vh、vw单位! (100vh是屏幕高度、100vw是屏幕宽度,每个人屏幕大小不一样,设置px大多数时候只是在给自己调)



