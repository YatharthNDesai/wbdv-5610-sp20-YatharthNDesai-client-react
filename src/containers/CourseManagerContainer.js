import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import "../stylesheets/CourseTableComponent.css"
import CourseEditorComponent from "../components/course-editor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: "",
        courses: []
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
                          courses: courses
                      })

    }

    deleteCourse = (course) =>
        deleteCourse(course._id)
            .then(status => {

                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function (crs) {
                                return crs._id !== course._id
                            })
                    })
                })

            })

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
    addCourse = () =>
        createCourse({
                         title: this.state.newCourseTitle,
                         owner: 'Me',
                         lastModified: new Date().getHours() + ":" + new Date().getMinutes()
                     }).then(actualCourse => this.setState(prevState => {
            return ({
                courses: [...prevState.courses, actualCourse
                ]
            })
        }))

    showEditor = () =>
        this.setState({
                          showEditor: true
                      }
        )
    showList = () =>
        this.setState({
                          showEditor: false
                      })

    updateForm = (newSate) => {
        this.setState(newSate)
    }

    render() {
        return (
            <div>
                {
                    this.state.showEditor &&
                    <CourseEditorComponent
                        showList={this.showList}
                    />
                }
                {
                    !this.state.showEditor &&
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
                                               onChange={(e) => this.updateForm({
                                                                                    newCourseTitle: e.target.value
                                                                                })}
                                               value={this.state.newCourseTitle}
                                               aria-label="Search"/>
                                    </div>
                                </form>

                                <div style={{width: "20%"}} className="p-2">
                                    <button onClick={this.addCourse}
                                            className="btn btn-danger wbdv-button wbdv-add-course"
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

                                    <th className="wbdv-header wbdv-last-modified" scope="col">Last
                                        Modified
                                    </th>

                                    <th onClick={this.toggle}
                                        className="wbdv-button wbdv-grid-layout" scope="col">
                                        <button className="btn wbdv-button wbdv-grid-layout "
                                                type="button">
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
                                 showEditor={this.showEditor}
                                 deleteCourse={this.deleteCourse}
                                 courses={this.state.courses}/>}
                            {this.state.layout === 'grid' && <CourseGridComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>}
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default CourseManagerContainer

