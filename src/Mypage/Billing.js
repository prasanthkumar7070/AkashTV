import React from 'react'
import './MediaQuery.css'
const Billing = () => {
    return (
        <div className='profile-section bill'>
            <div className='d-flex justify-content-between ctable'>
                <div className='acc-details'>
                    <p>Account Balance :$989.00</p>
                    <p>Billing Cycles</p>
                </div>
                <div className='recent'>
                    <button>
                        Recent Transactions
                    </button>
                </div>
            </div>
            <div className='mt-3 list'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Subscription</th>
                            <th>TV/STB Number</th>
                            <th>Pakage</th>
                            <th>Subscription Fee</th>
                            <th>Subscription Status</th>
                            <th>Expiry Date</th>
                            <th>Recharge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Akash Standard</td>
                            <td>Connection 1</td>
                            <td> </td>
                            <td>৳1375</td>
                            <td>Active <span></span></td>
                            <td>08 May 2024</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Akash Lite</td>
                            <td>Connection 2</td>
                            <td>Main Subscription</td>
                            <td>৳1275</td>
                            <td>Active
                                <span></span>
                            </td>
                            <td>08 May 2024</td>
                            <td>
                                <button className='recharge'>
                                    Recharge
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>Akash Lite Plus</td>
                            <td>Connection 3</td>
                            <td> </td>
                            <td>৳1175</td>
                            <td>Active <span></span></td>
                            <td>08 May 2024</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p className='faq'>FAQ & Tutorial</p>
            </div>
        </div>
    )
}

export default Billing