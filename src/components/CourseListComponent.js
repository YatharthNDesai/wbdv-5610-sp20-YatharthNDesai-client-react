import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";

const CourseListComponent =
    ({
        toggle,
        updateForm,
        newCourseTitle,
        addCourse,
        layout,
        showEditor,
        deleteCourse,
        courses
    }) =>


    <div>
        <div className="container-fluid">

            <div className="fixed-action-btn">
                <button className="btn btn-danger fab-container">
                    <i className="fa fa-plus"></i>
                </button>
            </div>

            <nav className="navbar navbar-dark bg-primary row">

                <button
                    className="btn wbdv-field wbdv-hamburger btn-primary col-1 col-md-1"
                    type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>

                <div className="wbdv-course-manager col-0 col-md-3 ">
                    <a className="navbar-brand wbdv-label wbdv-course-manager" href="#">Course
                        Manager</a>
                </div>
                <div className="col-11 col-md-8 form-inline">
                    <form style={{width: "80%"}}>

                        <div>

                            <input className="form-control wbdv-field wbdv-new-course"
                                   style={{width: "100%"}} type="text"
                                   onChange={(e) => updateForm({
                                                                        newCourseTitle: e.target.value
                                                                    })}
                                   value={newCourseTitle}
                                   aria-label="Search"/>
                        </div>
                    </form>

                    <div style={{width: "20%"}} className="p-2">
                        <button onClick={addCourse}
                                className="btn btn-danger wbdv-button wbdv-add-course"
                        >
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>

                </div>


            </nav>
            <div className="container ">
                {layout === 'table' &&
                 <CourseTableComponent
                     showEditor={showEditor}
                     deleteCourse={deleteCourse}
                     courses={courses}
                     toggle={toggle}/>}
                {layout === 'grid' && <CourseGridComponent
                    showEditor={showEditor}
                    deleteCourse={deleteCourse}
                    courses={courses}
                    toggle={toggle}/>}
            </div>
        </div>
    </div>

export default CourseListComponent