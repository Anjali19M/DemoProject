import React, { Component } from 'react';
import { Pagination as Pagination1 } from 'semantic-ui-react';
import "./Pagination.scss";

export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
        }
    }
    paginate = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        })
        this.props.paginateNumber(pageNumber)
    }
    render() {

        const pageNumbers = [];
        for (let index = 1; index <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); index++) {
            pageNumbers.push(index);
        }
        return (
            <React.Fragment>
                {
                    pageNumbers.length > 1 ?
                        <Pagination1
                            className="paginate"
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            prevItem={pageNumbers.length > 1 && this.state.activePage !== 1 ? "<" : null}
                            nextItem={pageNumbers.length > 1 && this.state.activePage !== pageNumbers.length ? ">" : null}
                            pointing
                            //secondary
                            firstItem={pageNumbers.length >= 5 && this.state.activePage !== 1 ? "First Page" : null}
                            lastItem={pageNumbers.length >= 5 && this.state.activePage !== pageNumbers.length ? "Last Page" : null}
                            totalPages={pageNumbers.length}
                            siblingRange={4}
                            onPageChange={(event, data) => this.paginate(data.activePage)}
                        />
                        :
                        null
                }
            </React.Fragment>
        );
    }
}