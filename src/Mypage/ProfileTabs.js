import React from 'react'
import '../Components/Tabs.css'
import Profile from './Profile'
import Subscribe from './Subscribe'
import Billing from './Billing'
import './MediaQuery.css'
const ProfileTabs = () => {
    return (
        <div>
            <div className='container p-ct'>
                <center className='header'>
                    <h1>Dear Johanan You, Welcome To Self-Care</h1>
                    <p>Member Since September 2022</p>
                </center>
                <ul className="nav nav-tabs Tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Account Imformation</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Subscription Details</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            Billing Information
                        </button>
                    </li>
                </ul><br />
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <Profile />
                    </div>
                    <div className="tab-pane " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <Subscribe />
                    </div>
                    <div className="tab-pane " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <Billing />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTabs