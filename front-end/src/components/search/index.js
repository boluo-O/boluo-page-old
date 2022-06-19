import { useState, useEffect } from 'react'

import './style.less'
const Search = () => {
    const [isFocus, setIsFocus] = useState(false)
    const focusClass = isFocus ? 'focus' : ''
    const [inputValue, setInputValue] = useState('')
    const [activeEngineIndex, setActiveEngineIndex] = useState(0)

    const searchEngineList = [
        {
            name: '百度',
            searchUrl: 'https://www.baidu.com/s?ie=UTF-8&wd=',
            img: 'baidu.jpg',
        },
        {
            name: '谷歌',
            searchUrl: 'https://www.google.com/search?q=',
            img: 'google.jpg',
        },
        {
            name: '必应',
            searchUrl: 'https://cn.bing.com/search?q=',
            img: 'bing.jpg',
        },
        {
            name: 'stackoverflow',
            searchUrl: 'https://stackoverflow.com/search?q=',
            img: 'stackoverflow.ico',
        },
        {
            name: '知乎',
            searchUrl: 'https://www.zhihu.com/search?type=content&q=',
            img: 'zhihu.ico',
        },
        {
            name: '掘金',
            searchUrl: 'https://juejin.cn/search?query=',
            img: 'juejin.ico',
        },
    ]
    const searchEngineNum = searchEngineList.length

    const onEnter = (e) => {
        const url = searchEngineList[activeEngineIndex]['searchUrl'] + inputValue
        window.open(url)
    }

    const onTab = (e, isShift = false) => {
        e.preventDefault()
        // 在0到searchEngineNum 循环递增(减)
        const step = isShift ? -1 : 1
        const _activeEngineIndex = (activeEngineIndex + step + searchEngineNum) % searchEngineNum
        setActiveEngineIndex(_activeEngineIndex)
    }

    const keyDownEvents = {
        'Tab': onTab,
        'shiftTab': (e) => onTab(e, true),
        'Enter': onEnter,
        'F1': (e) => {
            e.preventDefault()
            if (document.querySelector('.todo-box').classList.contains('hide')) {
                document.querySelector('.todo-box').classList.remove('hide')
            } else {
                document.querySelector('.todo-box').classList.add('hide')
            }
        }
    }

    const runKeyDownEvent = (e) => {
        const key = e.shiftKey ? ('shift' + e.key) : e.key  // 兼容shift + tab
        keyDownEvents[key] && keyDownEvents[key](e)
    }

    useEffect(() => {
        document.addEventListener('keydown', runKeyDownEvent)
        return () => {
            document.removeEventListener('keydown', runKeyDownEvent)
        }
    }, [activeEngineIndex, inputValue])

    return (
        <div className='search'>
            <div className='search-engine-list'>
                {
                    searchEngineList.map((item, index) => (
                        // <div className={`search-engine-item ${activeEngineIndex === index ? 'active' : ''}`} key={index}>{item.name}</div>
                        <div className={`search-engine-item ${activeEngineIndex === index ? 'active' : ''}`} key={index}>
                            <div><img onClick={() => setActiveEngineIndex(index)} src={require(`@Assets/images/${item.img}`)} /></div>
                        </div>
                    ))
                }
            </div>
            <div className={`search-input ${focusClass}`}>
                <div className='img-search'><img src='public/img/search.jpg' /></div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
            </div>
        </div>
    )
}

export default Search