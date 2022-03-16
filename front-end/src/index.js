import React from 'react'
import ReactDOM from 'react-dom'

import App from './project/app.js'
import './assets/css/initStyle.less'

// HMR模块热替换
// if (module.hot) {
//     module.hot.accept()
// }

ReactDOM.render(<App />, document.getElementById('root'))