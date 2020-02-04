import React from "react";
import "../CourseTableComponent.css"

const CourseTableComponent = ({courses, deleteCourse}) =>
    <div className="container-fluid">

        {/*<div className="fixed-action-btn">*/}
        {/*    <button className="btn btn-danger fab-container">*/}
        {/*        <i className="fa fa-plus"></i>*/}
        {/*    </button>*/}
        {/*</div>*/}

        {/*<nav className="navbar navbar-dark bg-primary row">*/}

        {/*    <button className="btn wbdv-field wbdv-hamburger btn-primary col-1 col-md-1"*/}
        {/*            type="button" data-toggle="collapse"*/}
        {/*            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"*/}
        {/*            aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*        <i className="fa fa-bars"></i>*/}
        {/*    </button>*/}

        {/*    <div className="wbdv-course-manager col-0 col-md-3 ">*/}
        {/*        <a className="navbar-brand wbdv-label wbdv-course-manager" href="#">Course*/}
        {/*            Manager</a>*/}
        {/*    </div>*/}
        {/*    <div className="col-11 col-md-8">*/}
        {/*        <form className="form-inline">*/}

        {/*            <div style={{width: "80%"}}>*/}

        {/*                <input className="form-control wbdv-field wbdv-new-course"*/}
        {/*                       style={{width: "100%"}} type="search"*/}
        {/*                       placeholder="New Course Title" aria-label="Search"/>*/}
        {/*            </div>*/}

        {/*            <div style={{width: "20%"}} className="p-2">*/}
        {/*                <button className="btn btn-danger wbdv-button wbdv-add-course"*/}
        {/*                        type="submit">*/}
        {/*                    <i className="fa fa-plus"></i>*/}
        {/*                </button>*/}
        {/*            </div>*/}
        {/*        </form>*/}
        {/*    </div>*/}


        {/*</nav>*/}
        {/*<div className="container ">*/}

        {/*    <table className="table table-hover">*/}
        {/*        <thead>*/}
        {/*        <tr className="my-head">*/}

        {/*            <th className="wbdv-header wbdv-title" scope="col">*/}
        {/*                Title*/}
        {/*            </th>*/}

        {/*            <th className="wbdv-header wbdv-owner" scope="col">Owned by</th>*/}

        {/*            <th className="wbdv-header wbdv-last-modified" scope="col">Last Modified by</th>*/}

        {/*            <th className="wbdv-button wbdv-grid-layout" scope="col">*/}
        {/*                <button className="btn wbdv-button wbdv-grid-layout " type="button">*/}
        {/*                    <i className="fas fa-th"></i>*/}
        {/*                </button>*/}
        {/*            </th>*/}

        {/*            <th className="wbdv-button wbdv-list-layout" scope="col">*/}
        {/*                <button className="btn wbdv-button wbdv-list-layout " type="button">*/}
        {/*                    <i className="fas fa-columns"></i>*/}
        {/*                </button>*/}
        {/*            </th>*/}

        {/*            <th className="wbdv-header wbdv-sort" scope="col">*/}
        {/*                <button className="btn" type="button">*/}
        {/*                    <i className="fa fa-sort-alpha-down"></i>*/}
        {/*                </button>*/}
        {/*            </th>*/}
        {/*        </tr>*/}
        {/*        </thead>*/}

        {/*    </table>*/}
            <table className="table table-hover">
                <tbody>
                {
                    courses.map(function (course, index) {
                        return <tr key={index} className="my-row">
                            <td className="wbdv-row wbdv-title">
                                <i className="fas fa-file wbdv-row wbdv-icon"></i>
                                {course.title}</td>
                            <td className="wbdv-row wbdv-owner">{course.owner}</td>
                            <td className="wbdv-row wbdv-last-modified">{course.lastModified}</td>
                            <td className="wbdv-empty"></td>
                            <td className="wbdv-row wbdv-button wbdv-delete">
                                <button onClick={() => deleteCourse(course)} className="btn" type="button">
                                    <label>X</label>
                                </button>
                            </td>
                        </tr>
                    })
                }

                </tbody>
            </table>

            {/*    <tr className="my-row"*/}
            {/*        onClick={window.location="/course-editor/course-editor.template.client.html"}>*/}
            {/*        <td className="wbdv-row wbdv-title">*/}
            {/*            <i className="fas fa-file"></i>*/}
            {/*            CS5610 Web Dev Graduate*/}
            {/*        </td>*/}
            {/*        <td className="wbdv-row wbdv-owner">Me</td>*/}
            {/*        <td className="wbdv-row wbdv-last-modified">6:45pm</td>*/}
            {/*        <td className="wbdv-row wbdv-empty"></td>*/}
            {/*        <td className="wbdv-row wbdv-button wbdv-delete">*/}
            {/*            <button className="btn" type="button">*/}
            {/*                <i>X</i>*/}
            {/*            </button>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    <tr className="my-row">*/}
            {/*        <td className="wbdv-row wbdv-title">*/}
            {/*            <i className="fas fa-file"></i>*/}
            {/*            CS5200 Database Management System*/}
            {/*        </td>*/}
            {/*        <td className="wbdv-row wbdv-owner">Me</td>*/}
            {/*        <td className="wbdv-row wbdv-last-modified">6:45pm</td>*/}
            {/*        <td className="wbdv-empty"></td>*/}
            {/*        <td className="wbdv-row wbdv-button wbdv-delete">*/}
            {/*            <button className="btn" type="button">*/}
            {/*                <i>X</i>*/}
            {/*            </button>*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        {/*</div>*/}

        {/*<h2>Course Table Component {courses.length}</h2>*/}
    </div>

export default CourseTableComponent