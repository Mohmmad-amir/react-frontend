import React, { Component } from 'react';
import axios from "axios";

class Addmessages extends Component {

    state = {
        name: '',
        phoneNumber: '',
        email: '',
        messages: '',
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    AddMessage = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-message', this.state)
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name: '',
                phoneNumber: '',
                email: '',
                messages: '',
            });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card mt-3">
                            <div className="card-header">
                                <h3>Address</h3>
                            </div>
                            <div className="card-body">
                                <div className='contact--items'>
                                    <div className='d-flex'>
                                        <i className='fas fa-home'></i>
                                        <span>Rajshahi, Bangladesh</span>
                                    </div>
                                </div>
                                <div className='contact--items'>
                                    <div className='d-flex'>
                                        <i className='fas fa-envelope'></i>
                                        <span>Amir@gmail.com</span>
                                    </div>
                                </div>
                                <div className='contact--items'>
                                    <div className='d-flex'>
                                        <i class="fas fa-mobile-alt"></i>
                                        <span>+880-1000-000000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mb-3">
                        <div className="card mt-3">
                            <div className="card-header">
                                <h4>Send message</h4>
                                <div className="card-body">
                                    <form onSubmit={this.AddMessage}>
                                        <div className='row'>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Name</label>
                                                    <input onChange={this.handleInput} value={this.state.name} type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Phone Number</label>
                                                    <input onChange={this.handleInput} value={this.state.phoneNumber} type="text" name="phoneNumber" className="form-control" id="phone-number" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input onChange={this.handleInput} value={this.state.email} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">


                                                <div className="form-floating mb-3">
                                                    <textarea onChange={this.handleInput} value={this.state.messages} className="form-control" name="messages" placeholder="Leave a comment here" id="message"></textarea>
                                                    <label >Message</label>
                                                </div>


                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Addmessages;