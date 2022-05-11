import React, { Component } from 'react';
import AboutSection from './AboutSection';

class About extends Component {

    render() {

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className='component--heading'>
                                <span>About</span>
                            </div>
                        </div>
                    </div>
                    {/* about section */}
                    <AboutSection />
                </div>
            </div>
        );
    }
}

export default About;