import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import "../stylesheets/CourseGridComponent.css"

const CourseGridComponent = ({courses, deleteCourse, showEditor}) =>
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

export default CourseGridComponent