import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import "../stylesheets/CourseGridComponent.css"

const CourseGridComponent = ({courses, deleteCourse, showEditor, toggle}) =>
    <div>
    <table className="table table-hover">
        <thead>
        <tr className="my-head">

            <th className="wbdv-header wbdv-title" scope="col">
                Recent Documents
            </th>

            <th className="wbdv-header wbdv-owner" scope="col">Owned by me</th>

            <th onClick={toggle}
                className="wbdv-button wbdv-grid-layout" scope="col">
                <button className="btn wbdv-button wbdv-grid-layout "
                        type="button">
                    <i className="fas fa-columns"></i>
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
 <div className="wbdv-gird container-fluid row">
     {
         courses.map(function (course, index) {
             return (
                 <CourseCardComponent
                     course={course}
                     showEditor={showEditor}
                     deleteCourse={deleteCourse}/>
             )
         })
     }
    {/*<div c{
                courses.map(function (course, index) {
                    return (
                        <CourseRowComponent
                            course={course}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}/>
                    )
                })
            }lassName="xs-12 sm-6 md-4 lg-3 col-xl-2">*/}
    {/*</div>*/}
 </div>
    </div>

export default CourseGridComponent