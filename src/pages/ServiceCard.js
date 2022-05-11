import React, { Component } from 'react';

class ServiceCard extends Component {
    render() {
        return (
            <div>
                <section className="service-card-bg">
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="card">
                                <div className='service--icon'>
                                    <i className="fab fa-html5"></i>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className='card-text'>Web Designer</h4>
                                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, velit possimus. Perferendis repellat modi nemo rerum pariatur voluptatibus obcaecati aliquid?</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card">
                                <div className='service--icon'>
                                    <i className="fab fa-react"></i>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className='card-text'>Front-end Developer</h4>
                                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, velit possimus. Perferendis repellat modi nemo rerum pariatur voluptatibus obcaecati aliquid?</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card">
                                <div className='service--icon'>
                                    <i className="fab fa-php"></i>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className='card-text'>PHP Developer</h4>
                                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, velit possimus. Perferendis repellat modi nemo rerum pariatur voluptatibus obcaecati aliquid?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ServiceCard;