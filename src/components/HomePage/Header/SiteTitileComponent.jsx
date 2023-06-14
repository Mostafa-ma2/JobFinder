import React from 'react'

export default function SiteTitileComponent() {
    const desc = "شروع به جستجوی بهترین فرصت‌های شغلی که به زندگی شما تغییر می‌دهد، از اینجا در مناطق انتخابی خود با راحتی شروع کنید و به سرعت استخدام شوید";
    return (
        <div className='site-title'>
            <div className='title'>
                <h1>جستجو کنید، درخواست بدهید و شغل رویایی خود را بگیرید</h1>
                <p title={desc}>{desc}</p>
            </div>
        </div>
    )
}
