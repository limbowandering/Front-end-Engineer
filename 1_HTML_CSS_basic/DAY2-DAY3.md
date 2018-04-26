## DAY2_DAY3

摘要:

Audio, video, CSS3, canvas.

材料:

<<HTML5秘籍>>Chapter1-Chapter4;(源代码http://prosetech.com/html5/)

## Chapter5: 音频与视频

音频视频 很重要. 

#### Audio

- src啊, Control啊, 预加载啊, 自动播放啊, 循环播放. audio和video都有;
- 关于媒体格式 音频 视频格式.
- 对于一个完备的网站, 面向用户不同 确实需要添加flash后备. 
- 渐进增强与平稳退化 是一个良好网站的素质.
- 可以用JavaScript控制音视频.

JavaScript控制视频:

video: play(), pause(), currentTime, playbackRate.

关于视频字幕, 目前不觉得很实用.

## Chapter6: CSS3

- 透明的两种方式: rgba()的alpha值. opacity.
- 圆角border-radius. Border-top-left-radius.(举个例子, 还可以是其他角, 拉成椭圆)
- 多背景. background-repeat.
- 阴影. box-shadow. text-shadow.
- 渐变. linear-gradient. Radial-gradient. 循环渐变.
- 过渡效果: transition:
- 变换:transform: scale, rotate, skew等.
- 字体

## Chapter7: CSS3与响应式Web设计

响应式的基础:

- 流式布局: 等比缩放;box-sizing,border位于盒子内侧,计算方式的不同.;calc函数;
- 流式图片: max-width: 100%; 相对于所在容器.
- 流式排版: 设置基准文字100%, 其他的用em这个单位;(扩展一个rem, root em)
- 视口: viewport: 
- 媒体查询: @media() 特性有: min-width, max-width等等;(bootstrap应该也是这种原理吧, 源码还没看 下周去看)
- 特定设备. (兼容)

## Chapter8: 基本canvas绘图

- moveTo, lineTo()(直线).stroke.
- lineWidth, strokeStyle等修改笔刷的感觉.
- 绘制曲线 贝塞尔曲线
- 变换 切图
- 透明度

感觉跟列名词似的…其实理解了很自然.

- 保存canvas: getImageDate(); 数据URL: Base-64编码. 把图像转换成长字符串.
- 要考虑Canvas平稳退化. 

## Chapter9: 高级Canvas技术: 交互性和动画

- drawImage绘制图像(CSS的width和height和canvas的width和height不是一回事, 用js来改变宽高); 裁剪 切割 伸缩

- 绘制文本 实心 空心

- 阴影: shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY

- 填充图片 repeat-x, repeat-y. 添加渐变

  交互:

- 碰撞检测: 反向遍历, 因为按照数组顺序绘制对象是后面的叠加在前面的上面. 所以反向遍历.

- 动画: setTimeout(), setInterval(), clearInterval();

- 碰撞检测的第二种方法: 比较像素颜色. getImageDate(). 

## DAY2-DAY3总结

啊, 这个总结要好好写了, 毕竟上面感觉跟列名词似的… 但是还是列了一下, 再熟悉一下.

之前听过但没有用过canvas. 再回头看了下bilibili的H5播放器.

- 播放速度原来是原生API控制的. 
- 播放器各种大小与比例 通过js修改宽高 CSS再配合一下布局
- 洗脑循环就是loop
- 弹幕两种渲染方式 canvas和CSS3. canvas可以用文本绘制与动画解决 但是太多的弹幕能做到不卡不知道怎么做到的. 没那么简单. 活着就是DOM+CSS3的实现.但是DOM成本算上的话 应该会很卡吧..; 我觉得这个可以试一试. GitHub也有开源的Dplayer啊之类的.
- 音量控制也是原生API
- 关于谦谦写的flv.js我只了解知乎上讨论的那么点, 实现了HTML5原生不支持的flv格式. 怎么写的还没看, 好像是ArrayBuffer操作的. 
- 还有这种播放一点 再往前下载一点的机制 应该是视频分段的吧, 以前用安卓下载视频看到一个视频是分成几段的.
- bilibili一个新的BAS弹幕, (https://diygod.me/bas/);  这个感觉有点复杂, 还没细看, 而且如果一个大量的BAS弹幕(超过15MB), 我看博主还写了一个Web Workers去解决的, 也没细看….

…..

之前看那个腾讯斗地主的网页版就是一个canvas. (刚才找 找不到了)

canvas就没有DOM的性能问题了, 这是一个上规模网站的考虑问题. 但是canvas的问题还没有了解.



感觉很多, 但是很兴奋, 因为觉得好多想法, 都能实现.canvas, svg(未实战使用过), 还有第三部分的web应用, 数据存储, 离线应用, 通信, 地理位置, web worker. 就不打算像这样列名词的写总结了.  

下面周四周五周六先把数据存储, 离线应用, 通信, 地理位置, web worker部分看完, 然后就写点什么. 目前有好多想法:

canvas可以做一个游戏, 避障的那种, 小球在运动, 控制人避开, 这样的.

还想用SVG试试.

数据存储之前看到例子, 存储web计算器的历史记录. 于是想如果做一个todolist,可不可以存储list-item的信息. 

通信的话, websocket有一些库, 聊天什么的demo也是不难. 可以做一个web版本的你画我猜, 用canvas画, websocket通信 同步每一步画的东西.

地理位置什么的. web worker.. 再说吧.. 还没看书下半部分..



周六还有期中考试..周四周五进度要放缓了.