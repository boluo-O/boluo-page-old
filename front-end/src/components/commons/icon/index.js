import React from "react";

const Icon = ({ name, color, size }) => {
    const getHref = () => {
        return require(`@Assets/images/${name}.svg`)
    }
    console.log('getHref()', getHref())
    return (
        <svg className={`icon icon-${name}`} fill={'red'} width={size} height={size}>
            <feImage href={getHref()} />
            {/* <use href={`#${name}.svg`} /> */}
            {/* <use href={`@Assets/images/${name}.svg`} /> */}
        </svg>
    )
}
export default Icon