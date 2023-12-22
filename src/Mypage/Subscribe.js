import React, { useState } from 'react'
import './MediaQuery.css'
const Subscribe = () => {
    const initialVisibleBoxes = 1;
    const [visibleBoxes, setVisibleBoxes] = useState(initialVisibleBoxes);

    const handleLoadMore = () => {
        setVisibleBoxes((prevVisibleBoxes) => prevVisibleBoxes + 1);
    };

    return (
        <div className='container'>
            <div className='profile-section'>
                <select className='accounts-section'>
                    <option value='one'>Switch Connection</option>
                    <option value='one'>Connection 1</option>
                    <option value='one'>Connection 2</option>
                    <option value='one'>Connection 3</option>
                </select>
                <div className='row connections mb-3'>
                    <div className='col-md-3 col-sm-4 col-xs-12 connect dth-log'>
                        <div className='d-flex justify-content-between rig-clm'>
                            <h1>Connetion 1</h1>
                            <span className='bx bxs-pencil'></span>
                        </div>
                        <p>Set Top Box Serial Number</p>
                        <img src='../assets/images/pack.png' alt='img' />
                    </div>
                    <div className='col-md-6 col-sm-8 col-xs-12 connect'>
                        <h2>DSN:HDSN01230000042 | Akash DTH Standard</h2>
                        <div className='d-flex justify-content-between'>
                            <div className='pack-logo'>
                                <img src='../assets/images/ring.png' alt='img' />
                            </div>
                            <div className='rig-mid'>
                                <p>Expiry Date:02 Jan 2024</p>
                                <p>Monthly Recharge: ৳1375</p>
                                <p>Status: Active <span className='glow'></span></p>
                                <p><i className='bx bx-refresh me-1'></i>Refresh</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12 col-xs-12'>
                        <div className='recharge'>
                            <button>Recharge</button>
                            <button>Change Bill Plan</button>
                        </div>
                    </div>
                </div>

                {/* ----------------------------chanels-list------------------------------------ */}

                <div className="flex">
                    {[...Array(visibleBoxes)].map((_, index) => (
                        <div key={index} className="content">
                            <div className='row chanels'>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/1.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/2.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/3.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/4.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/5.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/12.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/7.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/8.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/9.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/10.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/5.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/5.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/1.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/7.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/11.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/12.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/13.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/14.png' alt='img' />
                                    </div>
                                </div>

                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/15.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/16.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/17.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/2.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/3.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/4.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/8.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/10.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/15.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/16.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/4.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/12.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/8.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/9.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/13.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/17.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/11.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/3.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/2.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/9.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/1.png' alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-1 col-sm-3 col-4'>
                                    <div className='channel-log'>
                                        <img src='../assets/images/10.png' alt='img' />
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>

                <div className='Loadmore'>
                    {visibleBoxes < 2 && (
                        <a href="#" id="loadMore" onClick={handleLoadMore} className='nav-items'>
                            <div className='bottom mt-3'>
                                <div className='view-more'>
                                    <a href='d'>FAQ & Tutorial</a>
                                    <p>View more<i className='bx bx-chevron-right'></i></p>
                                </div>
                            </div>
                        </a>
                    )}

                    {visibleBoxes >= 2 && (
                        <span id="loadMore" className="noContent">
                            <div className='view-more'>
                                <a href='d'>FAQ & Tutorial</a>
                                <p>View more<i className='bx bx-chevron-right'></i></p>
                            </div>
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Subscribe
