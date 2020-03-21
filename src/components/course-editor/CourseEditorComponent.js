import React from "react";
import "../../stylesheets/CourseEditorComponent.css"
import ModuleListComponent from "./ModuleListComponent";
import TopicListComponent from "./TopicListComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/ModuleReducer";
import LessonsListComponent from "./LessonsListComponent";
import lessonReducer from "../../reducers/LessonReducer";
import HeadingWidgetReducer from "../../reducers/HeadingWidgetReducer";
import topicReducer from "../../reducers/TopicReducer";
import WidgetListComponent from "./WidgetListComponent";


const rootReducer = combineReducers({
                                        modules: moduleReducer,
                                        lessons: lessonReducer,
                                        topics: topicReducer,
                                        headingWidgets: HeadingWidgetReducer


                                    })

const store = createStore(rootReducer)

const CourseEditorComponent = ({showList, match, history, courseId, moduleId, lessonId, topicId, title}) =>
    <Provider store={store}>
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button onClick={() => history.push("/")}
                            className="btn wbdv-course-editor wbdv-close">
                        <label style={{color: "white"}}>X</label>
                    </button>
                    <div style={{width: "5%"}}></div>

                    <a className="navbar-brand wbdv-course-title" href="#">{title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto wbdv-page-tab">
                            <li className="nav-item active">
                                <a className="nav-link wbdv-page-tab" href="#">Build <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-page-tab" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-page-tab" href="#">Theme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-page-tab" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                            </li>
                            <li className="nav-item wbdv-page-tab">
                                <a className="nav-link" href="#">Settings</a>
                            </li>
                        </ul>
                        <form className="form-inline ">
                            <button className="btn  my-2 my-sm-0 wbdv-new-page-btn" type="submit">
                                <i className="fa fa-plus" style={{color: "white"}}></i>
                            </button>
                        </form>
                    </div>
                </nav>
                <div className="row container-fluid">
                    <ModuleListComponent
                        courseId={courseId}
                        title={title}
                    />
                    <div className="col-9">
                        <LessonsListComponent
                            moduleId={moduleId}
                            courseId={courseId}
                            title={title}

                        />
                        <TopicListComponent
                            lessonId={lessonId}
                            moduleId={moduleId}
                            courseId={courseId}
                            title={title}
                        />

                        <WidgetListComponent
                            topicId={topicId}/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent