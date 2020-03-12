# Hybird设计
- 混合开发
- 之前的网站是在浏览器里面运行的（html、css、js）
- native里面可以提供（html、css、js）的运行环境，突破浏览器的限制，用js写业务，用app来体现。
# 优缺点

|-| Native | Html5 | Hybird |
:--:|:--:|:--:|:--:
|图像渲染|本地api渲染|html、canvas、css|混合|
|性能|快|慢|慢|
|原生界面|原生|模仿|模仿|
|发布|app store|web|app store|
# Native与H5的职责
## 界限问题
- H5做业务
- Native提供基础能力
- Native做好必须Native做的业务
# H5与Native通信
## App版本号
- user Agent
## JavaScript Core
## URL Schema
- App主动与H5通信
> 将一组API绑定在WebView的window对象App通过IOS/Android原生方法调用window对象中的js方法
- H5主动与App通信
> App实现对WebView URL的观察者模式，H5通过改变URL的哈希值，App会通过解析哈希值的变化执行对应的操作
