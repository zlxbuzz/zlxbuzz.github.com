(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{402:function(t,n,a){"use strict";a.r(n);var s=a(10),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),n("p",[t._v("src 核心目录：\ncompiler #编译相关\ncore #核心代码\nplatforms #不同平台的支持\nserver #服务端渲染\nsfc #vue 文件的解析\nshared #公共的方法")]),t._v(" "),n("h4",{attrs:{id:"数据驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动"}},[t._v("#")]),t._v(" 数据驱动")]),t._v(" "),n("p",[t._v("数据初始化： init->initState->proxy->$mount")]),t._v(" "),n("p",[t._v("$mount 关键就是 mountComponent 函数: 先实例化一个渲染 Watcher，在它的回调函数中会调用 updateComponent 方法，在此方法中调用 vm._render 方法先生成虚拟 Node，最终调用 vm._update 更新 DOM")]),t._v(" "),n("p",[t._v("Vue 的 _render 会生成一个 vnode,也就是 virtual dom.\nrender: 参数 vm.$createElement\ntemplate:也会生成 render 函数，最终都会去执行这个 render 函数，他的参数是 vm._c")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initRender")]),t._v("\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_c")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$createElement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"组件化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),n("p",[t._v("createComponent:构造子类构造函数=>安装组件钩子函数=>实例化 vnode\n之后会执行 "),n("code",[t._v("vm.__patch__")]),t._v("(最终会调用 core/vdom/patch 的 createPatchFunction 也就是 src/core/vdom/patch.js 中返回的函数)")]),t._v(" "),n("p",[t._v("patch 流程： createComponent->子组件初始化->子组件 render->子组件 patch\nactiveInstance 为当前激活的 vm 实例；vm.$vnode 为组件的占位 vnode;vm._vnode 为组件的渲染 vnode\n嵌套组件的插入顺序是先子后父")]),t._v(" "),n("p",[t._v("合并配置：new Vue 的时候和子组件初始化")]),t._v(" "),n("p",[t._v("// 合并配置例子\nVue.options->extends->mixins->new Vue 参数 ->子组件")]),t._v(" "),n("p",[t._v("子组件初始化过程通过 initInternalComponent 方式要比外部初始化 Vue 通过 mergeOptions 的过程要快，合并完的结果保留在 vm.$options")]),t._v(" "),n("p",[t._v("// 组件注册")]),t._v(" "),n("p",[t._v("全局注册:src/core/global-api/assets.js 定义了 Vue.component\n局部注册")]),t._v(" "),n("p",[t._v("异步组件：普通函数异步组件，Promise 异步组件,高级异步组件")]),t._v(" "),n("h4",{attrs:{id:"响应式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),n("p",[t._v("响应式对象：Object.defineProperty")]),t._v(" "),n("p",[t._v("Observer: 给对象添加 getter,setter，用于依赖收集(getter)和派发更新(setter),会给响应式数据添加"),n("code",[t._v("__ob__")]),t._v("属性。")])])}),[],!1,null,null,null);n.default=e.exports}}]);