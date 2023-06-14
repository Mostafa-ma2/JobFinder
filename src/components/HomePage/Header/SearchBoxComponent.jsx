import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineMyLocation } from 'react-icons/md'

export default function SearchBoxComponent() {
    return (
        <div className='searchBox d-flex mt-30'>
            <div className='search-job position-relative w-40'>
                <input type="text" placeholder='شغل مورد نظر خود را وارد کنید'  />
                <BiSearchAlt className='search-icon position-absolute' />
            </div>
            <div className='search-location position-relative w-40'>
                <input type="text" placeholder='شهر مورد نظر خود را وارد کنید'  />
                <MdOutlineMyLocation className='search-icon position-absolute' />
            </div>
            <div className='search-button position-relative w-20'>
                <button className='button-register w-100 h-100 transition'>
                    <span className='position-relative'>
                        پیدا کنید
                    </span>
                </button>
            </div>
        </div>
    )
}
