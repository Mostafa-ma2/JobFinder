import React, { memo } from 'react'

function IconComponent(props) {
    return (
        <div className='icon position-absolute' style={{ top: props.top, left: props.left, color: props.color }}>
            {props.children}
        </div>
    )
}


export default  IconComponent;