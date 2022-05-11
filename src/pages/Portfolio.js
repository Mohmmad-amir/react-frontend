import React, { Component } from 'react';
import PortfolioSection from './PortfolioSection';
import axios from 'axios';
import Paginate from './Paginate';

class Portfolio extends Component {

    state = {
        posts: [],
        loading: false,
        currentPage: 1,
        postsPerPage: 1
    }

    componentDidMount() {
        const getPosts = async () => {

            this.setState({ loading: true });
            const results = await axios.get('http://127.0.0.1:8000/api/portfolio-project');
            this.setState({ posts: results.data.post })
            this.setState({ loading: false })
            // console.log(results.data)
        };
        getPosts();
    }

    render() {

        const { currentPage, postsPerPage, posts, loading } = this.state;


        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

        const pagination = pageNum => this.setState({ currentPage: pageNum });
        const nextPage = () => this.setState({ currentPage: currentPage + 1 });
        const prevPage = () => this.setState({ currentPage: currentPage - 1 });

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className='component--heading'>
                                <span>portfolio</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4"></div>
                    {/* about section */}
                    <PortfolioSection posts={currentPost} loading={loading} />
                    <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} pagination={pagination} nextPage={nextPage} prevPage={prevPage} />
                </div>
            </div>
        );
    }
}

export default Portfolio;