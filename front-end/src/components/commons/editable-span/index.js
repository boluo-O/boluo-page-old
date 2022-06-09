import { useState } from 'react'

import './style.less'

const EditableSpan = (props) => {
    const {
        value = '请输入文本'
    } = props

    const [text, setText] = useState(value)

    // 回车事件监听
    const enterEvent = (event) => {
        if (event.keyCode === 13) {
            let target = event.target
            let text = target.innerText
            log({text})
            target.blur()
            event.preventDefault()
        }
    }

    return (
        <div className='editableSpan'
            contentEditable={true}
            onKeyDown={(e) => enterEvent(e)}
            suppressContentEditableWarning={true}
        >
            {text}    
        </div>
    )
}

export default EditableSpan