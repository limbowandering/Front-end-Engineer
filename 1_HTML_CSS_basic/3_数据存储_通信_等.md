## DAY4-DAY7

最近考试+休息一天 导致4天才写一次.

摘要:

web存储, 离线应用, XMLHttpRequest, Web Socket, Geolocation, Web Worker, 历史管理

材料:

<<HTML5秘籍>>

## Chapter10 数据存储

#### web存储:

- localStorage: 本地存储. 长期.
- sessionStorage: 回话存储. 

##### localStorage和sessionStorage的一些方法:

`setItem();  getItem; removeItem(); `

注意点: 数据会被自动转换为文本字符串; 读取的时候要手动转换为数值.

##### 以JSON格式保存对象. 

`JSON.stringify(), JSON.parse()` 

##### 响应存储变化

`window.addEventListener("storage", storageChanged, false);`

#### 读取文件

File API 

`<input>` 读取, 可是太丑, 用`<button>` 做界面, 实际操作调用`input.click()`

FileReader基本方法:

`readAsText(), readAsBinaryString(), readAsDataURL(), readAsArraryBuffer()`

拖拽Drag:

事件: `onDragEnter, onDragOver, onDrop` 

#### IndexedDB

基本使用场景: 离线应用; 优化性能; 改进本地存储;

indexedDB是异步的;

写代码时候都要处理处理onSuccess, onError类似的情况.

基本的操作; 创建, 连接, 查询;

事务. 

## Chapter11: 离线应用

在适用的场景下考虑离线应用;

##### 描述文件

创建一个描述文件

```
CACHE MANIFEST
#这是注释

NETWORK:
#联网就从web服务器下载, 离线就直接忽略

FALLBACK:
#后背内容: 
```

使用描述文件: 自己网页里头的`<html> `元素添加`manifest` 属性.

##### 检测连接

利用后备区块, 让浏览器根据应用是否在线加载相通JavaScript函数的不同版本. 写一个函数`isSiteOnline()` 一个`return true;` 一个`return false;`

更微观的事件: 

`onUpdateReady()`	等;

## Chapter12: 与web服务器通信

#### XMLHTTPRequest对象

异步加载; 服务器推; 轮询;

#### Web Socket

长时间双向通信

## Chapter13: 地理位置, Web Worker和历史管理

#### 地理位置:

`navigator.geolocation` 对象的三个方法: 

`getCurrentPositoin()` `watchPosition()` `clearWatch()` 

记得要处理错误, 写代码记得handle exception.

#### Web Worker:

将费时任务放到后台执行;

安全问题: 网页之前, web worker之间不共享数据.

使用`postMessage()` 通信.

#### 历史管理:

对于仅仅变更网页部分内容的页面 改变URL以得到一个URL唯一定位网页内容.

但是需要创造额外的页面了. 

## 总结

这四章节的内容只能算是入门级, 告诉你使用这种方法可以完成某项功能, 有这么个API, 具体实现起来, 还有很多要做的, 而且实现了也仅仅是第一步, 还有很多要做的. 

(这学习总结写得很粗糙, 算是自己一个记忆梳理… 下面小项目做好的时候回写成详细的说明文档)

这本书主要针对的是H5更新的部分, 感觉简洁明了, 这么多功能的更新, 因为浏览器使用的方便性, 前端才会这么火吧. 而且感觉前端还会更刺激. 

下面一周的计划:

一方面: 学习Sass, CSS揭秘, 这本书浏览过, 感觉很好, 但是不是很快都能记住每一个例子, 慢慢来, 每天敲一敲, 记住基本的实现方式; 

另一方面: 一直看书也不好, 看了HTML5秘籍这一本之后就感觉能做的很多, 目前先选择三个想做的,能做的出来, 下一周做一做.

#### 1: Canvas的避障游戏

很简单: 有一个小人和许多小秋. 躲避小球. 分数为存活时间. 难度等级按照球的数量和移动速度设置.

#### 2. 原生的Todo List应用

不用框架先写一个. 并且试一试对于每一个item加入到web存储中去.

再试一试将这个先放到服务器上, 然后简单做个后台, 试一下做成离线应用. 

#### 3. 你画我猜

用web socket 同步canvas上的画内容. 做一个你画我猜.

