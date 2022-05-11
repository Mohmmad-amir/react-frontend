import React, { Component } from 'react';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import MainImg from './img/MainImg.png'

class AboutSection extends Component {
    render() {
        const wDesigner = {
            percent: 80,
            speed: 50,
            fontColor: "#000",
            colorCircle: "#636e72",
            colorSlice: "#18dcff",
            // linearGradient: ["#2c3e50", "#bdc3c7  "]
            textPosition: "0.35em",
            fill: "#fff",
            unit: "%",
            size: 200,
            Number: true,
        }
        const css = {
            percent: 70,
            speed: 50,
            fontColor: "#000",
            colorCircle: "#636e72",
            colorSlice: "#18dcff",
            // linearGradient: ["#2c3e50", "#bdc3c7  "]
            textPosition: "0.35em",
            fill: "#fff",
            unit: "%",
            size: 200,
        }
        const laravel = {
            percent: 50,
            speed: 50,
            fontColor: "#000",
            colorCircle: "#636e72",
            colorSlice: "#18dcff",
            // linearGradient: ["#2c3e50", "#bdc3c7  "]
            textPosition: "0.35em",
            fill: "#fff",
            unit: "%",
            size: 200,
        }
        const react = {
            percent: 60,
            speed: 50,
            fontColor: "#000",
            colorCircle: "#636e72",
            colorSlice: "#18dcff",
            // linearGradient: ["#2c3e50", "#bdc3c7  "]
            textPosition: "0.35em",
            fill: "#fff",
            unit: "%",
            size: 200,
        }
        return (
            <div>
                <div className="about--img--bg">
                    <div className="row">
                        <div className="col-md-5">
                            <img className='about--img' src={MainImg} alt="" />
                        </div>
                        <div className='col-md-7'>
                            <div className="about--text">
                                <h5>hello everybody, i'm</h5>
                                <h2>mohmmad amir</h2>
                                <p>junior web designer/developer</p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate tempora possimus nesciunt laboriosam harum reprehenderit laudantium dolorum animi magnam! Perspiciatis hic necessitatibus eius perferendis minima eos atque earum excepturi.</span>
                                <div className="about--contact--list">
                                    <li>
                                        <i className='far fa-calendar-alt'></i>
                                        <span>15 january 96</span>
                                    </li>
                                    <li>
                                        <i className='fas fa-phone'></i>
                                        <span>+880-170-0000000</span>
                                    </li>
                                    <li>
                                        <i className='fas fa-envelope'></i>
                                        <span>mohmmad@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className='fas fa-home'></i>
                                        <span>Rajshahi, Bangladesh</span>
                                    </li>
                                </div>
                                <div className="about--social--list">
                                    <li>
                                        <i className='fab fa-facebook'></i>
                                    </li>
                                    <li>
                                        <i className='fab fa-github'></i>
                                    </li>
                                    <li>
                                        <i className='fab fa-linkedin'></i>
                                    </li>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className="col-md-6">
                        <div className='about--welcome--text'>
                            <h3>About Myself</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, exercitationem. Distinctio quae aliquam dolor tempora odio. Quas repellat consequuntur quam possimus hic necessitatibus ipsa eos. Autem reprehenderit delectus exercitationem ipsa. Quos, quas dolore fuga doloribus labore temporibus quo ipsum tempore impedit, repellat, aperiam alias eaque aut nobis omnis libero consectetur.</p>
                        </div>
                        <div className='about--welcome--item'>
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='about--welcome--item--card--item'>
                                                <i className='fas fa-database'></i>
                                                <p>$0.00</p>
                                                <span>total donation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='about--welcome--item--card--item'>
                                                <i className='fas fa-book'></i>
                                                <p>00</p>
                                                <span>total project</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='about--welcome--item--card--item'>
                                                <i className='fas fa-users'></i>
                                                <p>00</p>
                                                <span>happy client</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* skill */}
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 mt-1">
                                <div className="skill--item">
                                    <CircularProgressBar key={'index'} id={1} {...wDesigner}>
                                    </CircularProgressBar>
                                    <span className='skill--bar--label--web'> 
                                    <i className='fab fa-html5 skill--bar--label--icon'></i>
                                        Web Designer</span>
                                </div>
                            </div>
                            <div className="col-md-6 mt-1">
                                <div className="skill--item">
                                    <CircularProgressBar key={'index'} id={2} {...css}>
                                    </CircularProgressBar>
                                    <span className='skill--bar--label--css'>
                                    <i className='fab fa-css3-alt skill--bar--label--icon'></i>
                                        Css</span>
                                </div>
                            </div>
                            <div className="col-md-6 mt-1">
                                <div className="skill--item">
                                    <CircularProgressBar key={'index'} id={3} {...laravel}>
                                    </CircularProgressBar>
                                    <span className='skill--bar--label--laravel'>
                                    <i className='fab fa-laravel skill--bar--label--icon'></i>
                                        Laravel</span>
                                </div>
                            </div>
                            <div className="col-md-6 mt-1">
                                <div className="skill--item">
                                    <CircularProgressBar key={'index'} id={4} {...react}>
                                    </CircularProgressBar>
                                    <span className='skill--bar--label--react'>
                                    <i className='fab fa-react skill--bar--label--icon'></i>
                                        React</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSection;