import React, { memo } from 'react'
import '../../../assets/css/HomePage/siteTitle.css'
import SearchBoxComponent from './SearchBoxComponent';
import IconComponent from './IconComponent';
import { SiTelegram,SiTwitter,SiLinkedin,SiAdobephotoshop,SiReact } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'




function SiteTitileComponent() {
    const desc = "شروع به جستجوی بهترین فرصت‌های شغلی که به زندگی شما تغییر می‌دهد، از اینجا در مناطق انتخابی خود با راحتی شروع کنید و به سرعت استخدام شوید";
    const title = "جستجو کنید، درخواست بدهید و شغل رویایی خود را بگیرید";

    return (
        <div className='site-title container position-relative'>
            <div className='title w-100 text-center'>
                <h1 className='w-45' title={title}>جستجو کنید، درخواست بدهید و شغل رویایی <br />خود را بگیرید</h1>
                <p className='mt-20' title={desc}>شروع به جستجوی بهترین فرصت‌های شغلی که به زندگی شما تغییر می‌دهد، از اینجا در مناطق انتخابی خود <br /> با راحتی شروع کنید و به سرعت استخدام شوی</p>
            </div>
            <SearchBoxComponent />
            <IconComponent top="-15%" left="92%" color="#0088cc">
                <SiTelegram  className='animation2'/>
            </IconComponent>
            <IconComponent top="25%" left="82%" color="#833AB4">
                <RiInstagramFill  className='animation2' />
            </IconComponent>
            <IconComponent top="65%" left="92%" color="#0088cc">
                <SiTwitter   className='animation1'/>
            </IconComponent>
            <IconComponent top="-15%" left="0%" color="#0088cc">
                <SiLinkedin  className='animation1' />
            </IconComponent>
            <IconComponent top="15%" left="10%" color=" rgb(255, 215, 0)">
                <SiAdobephotoshop  className='animation2' />
            </IconComponent>
            <IconComponent top="45%" left="0%" color="#7BCBCB">
                <SiReact  className='animation2' />
            </IconComponent>

        </div>
    )
}

export default SiteTitileComponent;