import { useState } from 'react'

import SpanEditable from '../commons/EditableSpan'

import './style.less'

const TodoItem = (props) => {
    const {
        todoType = 'TODO', // TODO ToRead ToBuy ToFix ToTest
        description = '需求', // '需求' 'BUG' '优化'
        todoText = '默认文本'
    } = props


    return (
        <div className='todoItem-box'>
            <div className='todoType'>{todoType}</div>
            <div className='description'>{description}</div>
            <SpanEditable value={todoText} />
            <div>
                <button>完成</button>
                <button>删除</button>
                <button>时钟</button>
            </div>          
        </div>
    )
}

export default TodoItem