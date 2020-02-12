import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import "../stylesheets/CourseTableComponent.css"
import CourseEditorComponent from "../components/course-editor/CourseEditorComponent";
import CourseListComponent from "../components/CourseListComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

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
                <Router>
                    <Route path="/course-editor/:courseId/:title"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   courseId={props.match.params.courseId}
                                   title={props.match.params.title}
                                   showList={this.showList}
                               />}/>
                    <Route path="/course-editor/:courseId/:title/:moduleId/"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   title={props.match.params.title}
                               />
                           }/>
                    <Route path="/course-editor/:courseId/:title/:moduleId/:lessonId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   lessonId={props.match.params.lessonId}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   title={props.match.params.title}/>

                           }/>
                    <Route path="/"
                           exact={true}
                           render={() =>
                               <CourseListComponent
                                   toggle={this.toggle}
                                   updateForm={this.updateForm}
                                   newCourseTitle={this.state.newCourseTitle}
                                   addCourse={this.addCourse}
                                   layout={this.state.layout}
                                   showEditor={this.showEditor}
                                   courses={this.state.courses}
                                   deleteCourse={this.deleteCourse}
                               />}/>
                </Router>

            </div>
        )
    }
}

export default CourseManagerContainer

