import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paginate extends Component {


    render() {
        const { postsPerPage, totalPosts, pagination, nextPage, prevPage, } = this.props;
        const pageNumber = []

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumber.push(i);

        }



        return (
            <div>
                <nav >
                    <ul className="pagination justify-content-center">

                        <li className='page-item '>
                            <Link onClick={() => prevPage()} to={'#'} className="page-link">Previous</Link>
                        </li>
                        {pageNumber.map(num => (
                            <li className='page-item' key={num}>
                                <Link onClick={() => pagination(num)} to={'#'} className="page-link">{num}</Link>
                            </li>
                        ))}
                        <li className='page-item'>
                            <Link onClick={() => nextPage()} to={'#'} className="page-link">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Paginate;