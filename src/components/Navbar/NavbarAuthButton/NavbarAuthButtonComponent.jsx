import React, { memo } from 'react'

function NavbarAuthButtonComponent() {
    return (
        <div className='header-auth w-40 text-center'>
            <a href="#" className='ml-15 button-login transition position-relative' >
                <span className='position-relative'>
                    ورود
                </span>
            </a>
            <a href="#" className='button-register transition position-relative'>
                <span className='position-relative'>
                    ثبت نام
                </span>
            </a>
        </div>
    )
}

export default NavbarAuthButtonComponent;