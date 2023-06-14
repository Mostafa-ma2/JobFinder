import React, { memo } from 'react'

function NavbarItemComponent() {
    return (
        <div className='heder-item d-flex align-self-center w-60 justify-end'>
            <div className='item ml-15 transition'>
                <a href="">صفحه اصلی</a>
            </div>
            <div className='item ml-15 transition'>
                <a href="">شغل ها</a>
            </div>
            <div className='item ml-15 transition'>
                <a href="">بلاگ</a>
            </div>
            <div className='item ml-15 transition'>
                <a href="">درباره ما</a>
            </div>
            <div className='item ml-15 transition'>
                <a href="">ارتباط با ما</a>
            </div>
        </div>
    )
}

export default  NavbarItemComponent;