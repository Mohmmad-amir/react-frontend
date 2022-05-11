import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css'



class PortfolioSection extends Component {



    render() {




        const { posts, loading } = this.props;

        if (loading) {
            <h2>loading....</h2>
        }


        return (
            <div>
                <div className="container-fluid">
                    {/* for portfolio project */}
                    <div className="row">
                        {/* {project_for_portfolio} */}
                        {posts.map(post => (
                            <div key={post.id} className='col-md-2  mb-4 col-ms-6'>
                                <div className="card shadow">
                                    <img className='card-img-top home--card--image' src={`http://127.0.0.1:8000${post.image}`} alt={post.name} />
                                    <div className="card-body">
                                        <h5 className='card-title'>
                                            {post.name}
                                        </h5>

                                        <p className="card-text narrow--text">
                                            {post.short_desc}
                                        </p>
                                        <div className="text-center">
                                            <Link to={`show-project/${post.id}`} className='btn btn-sm btn-success px-4 py-2'>More.</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioSection;