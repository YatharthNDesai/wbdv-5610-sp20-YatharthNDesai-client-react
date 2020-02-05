import React from "react";
import "../stylesheets/CourseTableComponent.css"
import CourseRowComponent from "./CourseRowComponent"

const CourseTableComponent = ({courses, deleteCourse, showEditor, toggle}) =>
    <div className="container-fluid">
        <table className="table table-hover">
            <thead>
            <tr className="my-head">

                <th className="wbdv-header wbdv-title" scope="col">
                    Title
                </th>

                <th className="wbdv-header wbdv-owner" scope="col">Owned by</th>

                <th className="wbdv-header wbdv-last-modified" scope="col">Last
                    Modified
                </th>

                <th onClick={toggle}
                    className="wbdv-button wbdv-grid-layout" scope="col">
                    <button className="btn wbdv-button wbdv-grid-layout "
                            type="button">
                        <i className="fas fa-th"></i>
                    </button>
                </th>

                <th className="wbdv-header wbdv-sort" scope="col">
                    <button className="btn" type="button">
                        <i className="fa fa-sort-alpha-down"></i>
                    </button>
                </th>
            </tr>
            </thead>

        </table>
        <table className="table table-hover">
            <tbody>
            {
                courses.map(function (course, index) {
                    return (
                        <CourseRowComponent
                            course={course}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}/>
                    )
                })
            }

            </tbody>
        </table>
    </div>

export default CourseTableComponent