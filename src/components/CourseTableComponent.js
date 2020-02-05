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
                                shoeEditor={showEditor}
                                deleteCourse={deleteCourse}/>
                        )
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