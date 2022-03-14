import { useState, useEffect } from 'react'

import './index.less'
const SearchInput = () => {
    const [isFocus, setIsFocus] = useState(false)

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('e.target.value', e.target.value)
        }
    }
    useEffect(() => {

    }, [])
    return (
        <div className='box'>
            <div className='search-choose'>
                <form>
                    <input type='radio' tabIndex='1' name='1' />
                    <input type='radio' tabIndex='1' name='1' />
                </form>
            </div>
            <div className={isFocus ? 'input-search focus' : 'input-search'}>
                <div className='img-search'>
                    <img src='public/img/search.jpg' />
                </div>
                <input
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onKeyDown={onEnter}
                />
            </div>
        </div>
    )
}

export default SearchInput