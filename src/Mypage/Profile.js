import React from 'react'
import './MediaQuery.css'
const Profile = () => {
    return (
        <div className='container'>
            <div className='profile-section'>

                <div className='row profile-content'>
                    <div className='col-md-2 col-sm-4 col-xs-12'>
                        <div className='profile-pic'>
                            <img src='../assets/Images/profile.jpg' alt='profile' />
                        </div>
                    </div>
                    <div className='col-md-7 col-sm-8 col-xs-12'>
                        <div className='subscribe'>
                            <h4>Subscriber ID:10556366647|Account Balance:৳25</h4>
                            <h4><i className='bx bxs-phone'></i>Register Mobile Number: 01680903806</h4>
                            <h4><i className='bx bxs-phone'></i>Secondary Mobile Number: 01880203825</h4>
                            <h4><i className='bx bx-envelope'></i>Email: john123@gmail.com </h4>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 col-xs-12 password-Btn'>
                        <button><i className='bx bxs-key'></i>Change Password</button>
                    </div>
                </div>

                <div className='track row'>
                    <div className='d-flex map-section'>
                        <span className='bx bxs-map'></span>
                        <h1>Address</h1>
                    </div>
                    <div className='details'>
                        <p>Street Name : ALLAUDIN TOUWER #House#17</p>
                        <p>Street Number : 113/A</p>
                        <p>Area</p>
                        <p>District</p>
                        <p>Postal Code: 1212</p>
                    </div>
                </div>

                <div className='note'>
                    <p>Note: if any of your account imformation is wrong, please immediatly contact 16442 to update..</p>
                   <p className='faq'>FAQ & Tutorial</p>
                </div>
            </div>
        </div>
    )
}

export default Profile