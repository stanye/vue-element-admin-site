(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{304:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("当打包构建应用时，Javascript 包会变得非常大，影响页面加载速度。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。")]),t._v(" "),s("p",[t._v("结合 Vue 的"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步组件"),s("OutboundLink")],1),t._v("和 Webpack 的"),s("a",{attrs:{href:"https://doc.webpack-china.org/guides/code-splitting",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码分割功能"),s("OutboundLink")],1),t._v("，轻松实现路由组件的懒加载。如：")]),t._v(" "),t._m(1),s("br"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[s("strong",[t._v("这里注意一下该写法只支持 "),s("code",[t._v("vue-loader at least v13.0.0+")]),t._v("理由 "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/231",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin/issues/231"),s("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("当然这样写会有一些副作用。由于")]),t._v(" "),t._m(10),t._v(" "),s("p",[s("code",[t._v("@/views/下的 .vue")]),t._v(" 文件都会被打包。不管你是否被依赖。所以这样就产生了一个副作用，就是会多打包一些可能永远都用不到 js 代码。当然这只会增加 dist 文件的大小，但不会对线上代码产生任何的副作用。"),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/292",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关 issue"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("babel")]),t._v(" 的 "),s("code",[t._v("plugins")]),t._v(" "),s("a",{attrs:{href:"https://github.com/airbnb/babel-plugin-dynamic-import-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-dynamic-import-node"),s("OutboundLink")],1),t._v("。它只做一件事就是将所有的"),s("code",[t._v("import()")]),t._v("转化为"),s("code",[t._v("require()")]),t._v("，这样就可以用这个插件将所有异步组件都用同步的方式引入，并结合 "),s("a",{attrs:{href:"https://babeljs.io/docs/usage/babelrc/#env-option",target:"_blank",rel:"noopener noreferrer"}},[t._v("BABEL_ENV"),s("OutboundLink")],1),t._v(" 这个"),s("code",[t._v("babel")]),t._v("环境变量，让它只作用于开发环境下，在开发环境中将所有"),s("code",[t._v("import()")]),t._v("转化为"),s("code",[t._v("require()")]),t._v("，这种方案解决了之前重复打包的问题，同时对代码的侵入性也很小，你平时写路由的时候只需要按照官方"),s("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1),t._v("路由懒加载的方式就可以了，其它的都交给"),s("code",[t._v("babel")]),t._v("来处理，当你不想用这个方案的时候，也只要将它从"),s("code",[t._v("babel")]),t._v(" 的 "),s("code",[t._v("plugins")]),t._v("中移除就可以了。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),s("p",[t._v("之后就大功告成了，路由只要像平时一样写就可以了。")]),t._v(" "),t._m(18),s("p",[s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/727",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关代码改动"),s("OutboundLink")],1)]),t._v(" "),t._m(19),t._v(" "),s("p",[s("code",[t._v("vue-element-admin@4")]),t._v(" 在新版本中已修改为基于 "),s("code",[t._v("vue-cli")]),t._v("来进行构建。所以在新版本中你只要在"),s("code",[t._v(".env.development")]),t._v("环境变量配置文件中设置"),s("code",[t._v("VUE_CLI_BABEL_TRANSPILE_MODULES:true")]),t._v("就可以了，具体"),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/.env.development",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("它的实现逻辑和原理与之前还是一样的，还是基于"),s("code",[t._v("babel-plugin-dynamic-import-node")]),t._v("来实现的。之所以在"),s("code",[t._v("vue-cli")]),t._v("中只需要设置一个变量就可以了，是借用了"),s("code",[t._v("vue-cli")]),t._v("它的默认配置，它帮你代码都写好了。通过阅读"),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/babel-preset-app/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("可知，"),s("code",[t._v("vue-cli")]),t._v("会通过"),s("code",[t._v("VUE_CLI_BABEL_TRANSPILE_MODULES")]),t._v("这个环境变量来区分是否使用"),s("code",[t._v("babel-plugin-dynamic-import-node")]),t._v("，所以我们只要开启它就可以。虽然它的初衷是为了单元测试的，但正好满足了我们的需求。")]),t._v(" "),t._m(20),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"路由懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 路由懒加载")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("当你觉得你的页面热更新速度慢的时候，才需要往下看 ↓")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"区分开发与生产环境-该方案已淘汰"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区分开发与生产环境-该方案已淘汰","aria-hidden":"true"}},[this._v("#")]),this._v(" 区分开发与生产环境 [该方案已淘汰]")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当你的项目页面越来越多之后，在开发环境之中使用 "),e("code",[this._v("lazy-loading")]),this._v(" 会变得不太合适，每次更改代码触发热更新都会变得非常的慢。所以建议只在生产环境之中使用路由懒加载功能。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("开发环境：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue-loader at least v13.0.0+")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("生产环境：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"淘汰原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#淘汰原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 淘汰原因")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Every module that could potentially be requested on an import() call is included. For example, import(./locale/${language}.json) will cause every .json file in the ./locale directory to be bundled into the new chunk. At run time, when the variable language has been computed, any file like english.json or german.json will be available for consumption.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("用户自己可以根据业务情况来衡量一下是否采用本方案，如果你的项目页面不超过几十个，本地开发热更新速度你还能接受的话，可以直接所有环境下都是用懒加载避免此副作用。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"新方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 新方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("具体代码：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先在"),e("code",[this._v("package.json")]),this._v("中增加"),e("code",[this._v("BABEL_ENV")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"')]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("接着在"),s("code",[t._v(".babelrc")]),t._v("只能加入"),s("code",[t._v("babel-plugin-dynamic-import-node")]),t._v("这个"),s("code",[t._v("plugins")]),t._v("，并让它只有在"),s("code",[t._v("development")]),t._v("模式中才生效。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"development"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic-import-node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/login/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-cli-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli@3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"改进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改进","aria-hidden":"true"}},[this._v("#")]),this._v(" 改进")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("webpack5")]),this._v(" 即将发布，大幅提高了打包和编译速度，之后可能完全不需要搞这么复杂了，再多的页面热更新，都能很快，完全就不需要前面提到的解决方案了。")])}],!1,null,null,null);e.default=n.exports}}]);