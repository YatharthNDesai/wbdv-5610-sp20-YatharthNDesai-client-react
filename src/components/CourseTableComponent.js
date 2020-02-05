import React from "react";
import "../stylesheets/CourseTableComponent.css"
import CourseRowComponent from "./CourseRowComponent"

const CourseTableComponent = ({courses, deleteCourse, showEditor}) =>
    <div className="container-fluid">
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