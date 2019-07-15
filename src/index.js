// 程序的主入口文件

// 此处需要注意引入自定义模块和引入本地模块的区别
import  React from 'react'
import ReactDom from 'react-dom'

// 引入自定义模块就算是在当前路径下也需要加 . 
import App from './App'

// 将App组件渲染到index页面的div上面
ReactDom.render(<App/>,document.getElementById('root'))