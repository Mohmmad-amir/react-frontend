import React, { Component } from 'react';
import AboutSection from './AboutSection';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/style.css'


class Home extends Component {



    state = {
        homeProject: [],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/home-project');
        // console.log(res);
        if (res.data.status === 200) {
            this.setState({
                homeProject: res.data.homeProject,
                loading: false,
            });
        }
    }


    render() {
        var project_for_home = "";
        if (this.state.loading) {
            project_for_home = <div className='card'><div className="card-header"><h4>loading......</h4></div></div>
        } else {
            project_for_home =
                this.state.homeProject.map((item) => {
                    return (
                        <div key={item.id} className='col-md-2  mb-4 col-ms-6'>
                            <div className="card shadow">
                                <img className='card-img-top home--card--image' src={`http://127.0.0.1:8000${item.image}`} alt={item.name} />
                                <div className="card-body">
                                    <h5 className='card-title'>
                                        {item.name}
                                    </h5>

                                    <p className="card-text narrow--text">
                                        {item.short_desc}
                                    </p>
                                    <div className="text-center">
                                        <Link to={`show-project/${item.id}`} className='btn btn-sm btn-success px-4 py-2'>More.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                });
        }

        return (
            <div>
                <div className="container-fluid">

                    {/* for about section */}
                    <div className='margin--top--100'></div>
                    <AboutSection />
                    {/* for portfolio project */}
                    <div className="row">
                        {project_for_home}


                    </div>
                    {/* services card */}
                    <ServiceCard />
                </div>
            </div>
        );
    }
}

export default Home;