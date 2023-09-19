(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{317:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),s("p",[t._v('最近学习python时遇到了需要把项目打包的问题。百度搜到的方法是使用setuptools，但是在使用过程中发现它提示了"SetuptoolsDeprecationWarning: setup.py install is deprecated. Use build and pip and other standards-based tools.')]),t._v(" "),s("p",[t._v("没想到setuptools已经被淘汰了，于是想到python应该和php和java相同，有社区制定规范和标准。于是找到了"),s("a",{attrs:{href:"https://peps.python.org/pep-0000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pep"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://www.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pypa"),s("OutboundLink")],1),t._v('。pep是"Python Enhancement Proposal"的缩写，负责语言方面的提案。pypa则是"The Python Packaging Authority"的缩写，负责打包规范。')]),t._v(" "),s("p",[t._v("在介绍新的打包流程之前，先回顾一下setuptools的缺陷，它为什么会被淘汰。")]),t._v(" "),s("h2",{attrs:{id:"setuptools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setuptools"}},[t._v("#")]),t._v(" setuptools")]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"https://peps.python.org/pep-0517/#abstract",target:"_blank",rel:"noopener noreferrer"}},[t._v("pep-517"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://peps.python.org/pep-0518/#rationale",target:"_blank",rel:"noopener noreferrer"}},[t._v("pep-518"),s("OutboundLink")],1),t._v("中总结了setuptools存在的问题。")]),t._v(" "),s("p",[t._v("517中提出了以下3点：")]),t._v(" "),s("ol",[s("li",[t._v("功能缺失，如构建时和运行时依赖声明不一致、自动配置、版本号管理重复。")]),t._v(" "),s("li",[t._v("扩展困难，成本高。")]),t._v(" "),s("li",[t._v("兼容性差，难以使用其他包管理工具，因为它是社区标准。")])]),t._v(" "),s("p",[t._v("setuptools在迭代过程中试图解决1和2，517提案则是要解决3。")]),t._v(" "),s("p",[t._v("518中提出了setuptools的一个问题，即难以在不执行setup.py文件的情况下了解其依赖关系，这导致了一个循环依赖问题，因为要运行文件以了解其依赖关系，但不能运行文件以了解其依赖关系。")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("517和518提出了一套新的配置文件，即pyproject.toml，实现了项目元数据和构建工具配置的分离，跨构建工具的兼容性，依赖项声明的一致性，构建系统插件支持。")]),t._v(" "),s("h2",{attrs:{id:"打包流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包流程"}},[t._v("#")]),t._v(" 打包流程")]),t._v(" "),s("h3",{attrs:{id:"配置pyproject-toml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置pyproject-toml"}},[t._v("#")]),t._v(" 配置pyproject.toml")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("build-system")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("requires")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hatchling"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("build-backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hatchling.build"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_package_YOUR_USERNAME_HERE"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("version")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("authors")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Author"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author@example.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A small example package"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("readme")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"README.md"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("requires-python")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=3.7"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("classifiers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Programming Language :: Python :: 3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"License :: OSI Approved :: MIT License"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Operating System :: OS Independent"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("project.urls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v('"Homepage"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/pypa/sampleproject"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v('"Bug Tracker"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/pypa/sampleproject/issues"')]),t._v("\n")])])]),s("h3",{attrs:{id:"安装build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装build"}},[t._v("#")]),t._v(" 安装build")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--upgrade")]),t._v(" build\n")])])]),s("p",[t._v("如果需要指定安装目录，可以使用--target参数。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--upgrade")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--target")]),t._v(" D:/Python/Lib/site-packages\n")])])]),s("h3",{attrs:{id:"打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),s("p",[t._v("执行以下命令默认会在dist目录下生成whl和tar.gz文件。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("python "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" build\n")])])]),s("p",[t._v("更加详细的步骤可以参考"),s("a",{attrs:{href:"https://packaging.python.org/en/latest/tutorials/packaging-projects/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"本地安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地安装"}},[t._v("#")]),t._v(" 本地安装")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xxx.whl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--target")]),t._v(" D:/Python/Lib/site-packages\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);