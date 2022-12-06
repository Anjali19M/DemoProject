import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination/Pagination";
import { getCurrentPage, getPostPerPage} from "../Redux/Action/Action";

export default function History() {
    const historyReducer = useSelector((state) => state.nameReducer);
    var { historyData,currentPage,postPerPage } = historyReducer;
    var dispatch=useDispatch()
    const [filteredData,setFilteredData]=useState(historyData)

    const paginate = (pageNumber) => {
        dispatch(getCurrentPage(pageNumber))
    };
    const postPerPageUpdate = (event) => {
        dispatch(getPostPerPage(event.target.value))
    };
    let currentPosts = null;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    currentPosts =
    filteredData !== null
            ? filteredData?.slice(indexOfFirstPost, indexOfLastPost)
            : filteredData;


    const handleFilter = (e) => {
        var filterDate = historyData
        console.log(filterDate,"filterDate")
        var searchText = e.target.value
        if (searchText !== "") {
            filterDate = historyData.filter((ele) => ele.first_name.toLowerCase().includes(searchText.toLowerCase())
            || ele.email.toLowerCase().includes(searchText.toLowerCase())
            || ele.last_name.toLowerCase().includes(searchText.toLowerCase())
            || ele.ip_address.toLowerCase().includes(searchText.toLowerCase())
            )
            dispatch(getCurrentPage(1))
        }
        setFilteredData(filterDate)
    }
    return (
        <div className='history_container'>
            <div className="search_bar_container">
                <i className="fa fa-search search_icon" aria-hidden="true"></i>
                <input type="text" id="search_bar" className="searchBar" placeholder='Search Program Code'
                    onChange={(e) => handleFilter(e)}
                />
            </div>
            <div className='table_container'>
                <table className="historyTable" id="historyTable">
                    <thead className="row displayUnset">
                        <tr>
                            <th className="col-2">ID</th>
                            <th className="col-2">First Name</th>
                            <th className="col-2">Last Name</th>
                            <th className="col-2">Email</th>
                            <th className="col-2">Gender</th>
                            <th className="col-2">IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts !== null && currentPosts.length ? (
                             currentPosts.map((ele, ind) => 
                            (
                                <tr key={ind}>
                                    <td>{ele.id}</td>
                                    <td>{ele.first_name}</td>
                                    <td>{ele.last_name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.gender}</td>
                                    <td>{ele.ip_address}</td>
                                </tr>

                            ))
                        )
                        : (
                            <tr>
                                <td colSpan={12}>
                                    <p>No Data Found !</p>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
            {currentPosts?.length > 0 && (
                <div className="customPagination">
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="pageItems">
                            <span>Rows per page</span>
                            <select
                                id="inputState"
                                className="form-control"
                                onChange={(e) => postPerPageUpdate(e)}
                            >
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                        </div>
                        <div className="paginationDiv">
                            <Pagination
                                postsPerPage={postPerPage}
                                totalPosts={filteredData !== null ? filteredData.length : 0}
                                paginateNumber={paginate}
                                openedPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}