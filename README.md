# ele_app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 1. 
## 1). 搭建项目
    vue-cli(vue脚手架)
    vue: 基本库
    webpack: 打包工具
    es-lint: 代码检查工具
    ES6 + babel: es6和编译工具
    express: 运行开发时内存中打包的项目
    stylus stylus-loader
    vue-router
    
## 2). header静态组件
    移动端的布局
    图标字体
    flex布局
    1px边框问题
    stiky footer(粘粘布局)

# 2. 
## 1). header动态组件
    1. mock数据
    	设计json数据结构
			结构 + 值
			结构: 类型 | 名称
			mock数据与真实数据之间结构要一致, 变化的只能是值
		提供mock接口
			express: 可以通过浏览器/编译方式请求, 但打包运行不能访问/只能提供静态数据
			mockjs: 只能编码请求,不能通过浏览器请求, 打包运行可以访问/可以提供动态数据
		ajax请求mock接口
			vue-resouce: 包装XMLHttpRequest, pomise风格, 主要用在vue1
			axios: 包装XMLHttpRequest, pomise风格, 浏览器/node都可以, vue2后基本都用axios
			fetch: 浏览器内置的, 不是包装XMLHttpRequest, 本身就是pomise风格, 但老版浏览中没有, 需要使用fetch.js来兼容 
    2. 动态显示数据
	    在data初始化状态: seller={}
		在created()中发送ajax请求, 异步获取数据并更新状态
		父组件: 状态数据通过props传递给子组件
		子组件: 声明接收属性, props配置
		模板展现数据
			{{}}
			v-for
			v-if
			v-show
			:class
			:xxx
    3. 交互
    	@click="xxx"
		methods: xxx()
		动画效果
			<transition name='xxx'>
			.xxx-enter-active, .xxx-leave-active: transition样式
			.xxx-enter, xxx-leave-to: 隐藏时的样式
    
## 2). star组件
	1. 组件的作用
		复用
		简化
	2. 编写使用组件的流程
		创建组件文件: xxx.vue
		定义好props配置: 确定组件接收哪些属性
		使用组件标签, 传入相应的属性
		完成组件内部的编码
			style
			template
			script
	3. 计算属性
## 3). goods组件
	1. 使用第三库better-scroll实现平滑滚动
		下载引入
		API文档
		样例
		使用
			new BScroll(domContainer, {...})
	2. 在界面更新后才处理
		this.$nextTick(function(){})
	3. 标识某个标签
		ref: 得到指定的标签对象

# 3. 
## 1). goods组件
	1. 滑动右侧, 左侧同步变化
		scroll.on('scroll', (event) => {this.scrollY = Math.abs(event.y)})
		_initTops(){}  ==> this.tops = tops
		computed => currentIndex() => tops.findIndex() 
		:class='{currentIndex=currentIndex===index}'
		scroll.on('scrollend', (event) => {this.scrollY = Math.abs(event.y)})
	2. 点击左侧, 右侧同步滑动
		this.scroll.scrollToElement(li, 300)
		this.scrollY = this.tops[index]
## 2). cartcontrol组件
	分析设计组件的props:
		food: Object
		updateFoodCount: Function
	给已经数据绑定的对象添加新的属性
		this.$set(obj, 'xxx', value)
## 3). shopcart组件
	分析设计组件的props:
	如何向路由组件传递数据: <router-view :seller='seller'>
	计算属性
	如何实现单例对象
		1.创建之前: 先判断是否已存在? 如果没有才去创建
        2.创建这后: 将创建的对象保存起来
	scroll对象的创建与刷新
## 4). food组件



# 几个数组中常用的方法?
	1). 几个简单的方法: push(), pop(), forEach(), join(), reverse() -->
	2). 几个非常好用的方法: 数组的声明编程方法
		map() --> 产生一个新的数组
		filter() --> 过滤产生一个新的数组
		find()/findIndex() --> 查找数组元素/元素的下标
		reduce()--> 累加统计结果

# 4. 
## 01). ratingselect组件
	列表过滤显示
		ratings.filter()
		&& 与 || 的使用
## 02). ratings组件
## 03). seller组件
	数据异步显示的问题?
## 04). 小球动画
	利用动画的生命周期函数来实现动画
	小球动画在x和y轴的变化效果不一样--> 需要2个transition-->使用2个嵌套的小球div来分别使用transition
	每个小球的动画都独立的, 每个小球div都有自己的<transition>

# 5. 
## 01). vue-router
## 02). vue相关的插件
	vue-lazyload
	vue-scroller
	mint-ui/element-ui
## 03). 日期插件
	moment--->date-fns
## 04). 优化项目
	缓存路由组件
	路由懒加载
		利用了代码分割(code split)
		优化首屏显示
	使用devtool + sourceMap实现代码调试
## 05). 百度地图API
	注册并登陆
	为你的应用创建一个对应的虚拟应用
	利用api文件和DEMO编写
## 06). 短信验证码
	使用容联云通信平台
	注册/登陆
	进入控制台, 添加测试手机号
	利用API接口编写请求代码



