// Modal组件
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './style.less'
import { createPortal } from 'react-dom'

class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            node: undefined
        }
    }

    static getDerivedStateFromProps(props, state) {
        const document = window.document
        if (props.visible) { // visible 为true时，body中新增div，为createPortal提供一个挂载节点。
            const node = document.createElement('div')
            document.body.appendChild(node)
            return {
                node // 将挂载的Dom节点存储起来，方便移除时使用
            };
        }
        if (state.node) { // visible为false时，移除对应的dom
            document.body.removeChild(state.node)
        }
        return null
    }

    render() {
        const { visible, title, onOk, onCancel } = this.props
        if (!visible) {
            return null;
        }
        return createPortal( //第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。
            <div className='modal'>
                <div className='modal-mask'></div>
                <div className='modal-wrapper'>
                    {
                        title && (
                            <div className='modalTitle'>
                                {title}
                            </div>
                        )
                    }
                    {this.props.children}
                    <div className='modalFooter'>
                        <button onClick={onCancel}>取消</button>
                        <button onClick={onOk}>确认</button>
                    </div>
                </div>
            </div>,
            this.state.node
        )
    }
}
// Modal.propTypes = {
//     visible: PropTypes.bool
// }
// Modal.defaultProps = {
//     visible: true
// }
export default Modal
