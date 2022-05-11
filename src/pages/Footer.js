import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <section className='footer--main mt-4'>
                    <div className="container mt-2">
                        <div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className=' text-white'>
                                        <h4>Information</h4>
                                    </div>
                                    <ul className='nav flex-column'>
                                        <Link className='nav-link text-white' to={'/'}>
                                            <li className='nav-item'>
                                                <i className='fas fa-home'></i>
                                                <span> Home</span>
                                            </li>
                                        </Link>
                                        <Link className='nav-link text-white' to={'/about'}>
                                            <li className='nav-item'>
                                                <i className='fas fa-address-card'> </i>
                                                <span> About</span>

                                            </li>
                                        </Link>
                                        <Link className='nav-link text-white' to={'/portfolio'}>
                                            <li className='nav-item'>
                                                <i className='fas fa-laptop'></i>
                                                <span> Portfolio</span>

                                            </li>
                                        </Link>
                                        <Link className='nav-link text-white' to={'/service'}>
                                            <li className='nav-item'>
                                                <i className='fas fa-cog'></i>
                                                <span> Services</span>

                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <div className=' text-white'>
                                            <h4>Legal</h4>
                                        </div>
                                        <ul className='nav flex-column'>
                                            <Link className='nav-link text-white' to={'/refound-policy'}>
                                                <li className='nav-item'>
                                                    <span> Refound Policy</span>

                                                </li>
                                            </Link>
                                            <Link className='nav-link text-white' to={'/privacy-policy'}>
                                                <li className='nav-item'>
                                                    <span> Privacy Policy</span>
                                                </li>
                                            </Link>
                                            <Link className='nav-link text-white' to={'/terms-of-use'}>
                                                <li className='nav-item'>
                                                    <span> Terms Of Use</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className=' text-white'>
                                        <h4>Follow Me</h4>
                                    </div>
                                    <div>
                                        <ul className='nav'>
                                            <Link className='nav-link text-white' to={'https://www.facebook.com/'}>
                                                <li className='nav-item fs-1'>
                                                    <i className='fab fa-facebook'></i>

                                                </li>
                                            </Link>
                                            <Link className='nav-link text-white' to={'https://www.youtube.com/'}>
                                                <li className='nav-item fs-1'>
                                                    <i className='fab fa-youtube'> </i>
                                                </li>
                                            </Link>
                                            <Link className='nav-link text-white' to={'https://www.linkedin.com/'}>
                                                <li className='nav-item fs-1'>
                                                    <i className='fab fa-linkedin'> </i>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className='footer--reserved'>
                                <span>All reserved by Amir @ 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;