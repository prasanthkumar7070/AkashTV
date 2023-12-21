import React from 'react'
import './Tabs.css'
import './MediaQuery.css'
const TabOne = () => {
    return (
        <div className='carousel'>
            <input type="radio" name="position" />
            <input type="radio" name="position" checked />
            <input type="radio" name="position" />

            <main id="carousel">
                <div class="item">hellow</div>
                <div class="item"></div>
                <div class="item"></div>
            </main>
        </div>
    )
}

export default TabOne