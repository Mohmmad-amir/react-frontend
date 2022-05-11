import React, { Component } from 'react';
import Addmessages from "./Addmessages";
import './css/style.css'
import ServiceCard from './ServiceCard';

class Service extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className='component--heading'>
                                <span>Services</span>
                            </div>
                        </div>
                    </div>
                    <ServiceCard />

                </div>
                <Addmessages />

            </div>
        );
    }
}

export default Service;