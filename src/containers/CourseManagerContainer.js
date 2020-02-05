import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import "../stylesheets/CourseTableComponent.css"
import CourseEditorComponent from "../components/course-editor/CourseEditorComponent";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        
        courses: [
            {id: '123', title: 'Course A', owner:'Me', lastModified:'6:45'},
            {id: '234', title: 'Course B', owner:'Me', lastModified:'6:45'},
            {id: '345', title: 'Course C', owner:'Me', lastModified:'6:45'},
            {id: '456', title: 'Course D', owner:'Me', lastModified:'6:45'},
            {id: '567', title: 'Course E', owner:'Me', lastModified:'6:45'},

        ]
    }
    deleteCourse = (course) => {
        this.setState(prevState => {
            return ({
                courses: prevState
                    .courses
                    .filter(function (crs) {
                        return crs.id !== course.id
                    })
            })
        })
    }
    toggle = () => {
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })
    }
    addCourse = () => {
        this.setState(prevState => {
            return({
                courses: [...prevState.courses, {
                    id: (new Date().getTime()),
                    title: 'Course E',
                    owner:'Me',
                    lastModified:'6:45'
                }]
            })
        })
    }

    render() {
        return(
            <div>
            <CourseEditorComponent/>
            <div className="container-fluid">

                <div className="fixed-action-btn">
                    <button className="btn btn-danger fab-container">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>

                <nav className="navbar navbar-dark bg-primary row">

                    <button className="btn wbdv-field wbdv-hamburger btn-primary col-1 col-md-1"
                            type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
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
                                       placeholder="New Course Title" aria-label="Search"/>
                            </div>
                        </form>

                            <div style={{width: "20%"}} className="p-2">
                                <button onClick={this.addCourse} className="btn btn-danger wbdv-button wbdv-add-course"
                                        >
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>

                    </div>


                </nav>
                <div className="container ">

                    <table className="table table-hover">
                        <thead>
                        <tr className="my-head">

                            <th className="wbdv-header wbdv-title" scope="col">
                                Title
                            </th>

                            <th className="wbdv-header wbdv-owner" scope="col">Owned by</th>

                            <th className="wbdv-header wbdv-last-modified" scope="col">Last Modified by</th>

                            <th onClick={this.toggle} className="wbdv-button wbdv-grid-layout" scope="col">
                                <button className="btn wbdv-button wbdv-grid-layout " type="button">
                                    <i className="fas fa-th"></i>
                                </button>
                            </th>

                            {/*<th className="wbdv-button wbdv-list-layout" scope="col">*/}
                            {/*    <button className="btn wbdv-button wbdv-list-layout " type="button">*/}
                            {/*        <i className="fas fa-columns"></i>*/}
                            {/*    </button>*/}
                            {/*</th>*/}

                            <th className="wbdv-header wbdv-sort" scope="col">
                                <button className="btn" type="button">
                                    <i className="fa fa-sort-alpha-down"></i>
                                </button>
                            </th>
                        </tr>
                        </thead>

                    </table>

                {this.state.layout === 'table' &&
                 <CourseTableComponent
                     deleteCourse= {this.deleteCourse}
                    courses={this.state.courses}/>}
                {this.state.layout === 'grid' && <CourseGridComponent courses={this.state.courses}/>}
            </div>
            </div>
            </div>
        )
    }
}
export default CourseManagerContainer