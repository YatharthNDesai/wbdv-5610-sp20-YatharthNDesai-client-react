import React from "react";
import LessonListItem from "./LessonListItem";
import LessonServices from "../../services/LessonServices";
import {createLesson, deleteLesson, updateLesson} from "../../actions/LessonActions";
import {connect} from "react-redux";

class LessonsListComponent extends React.Component {

    constructor(props) {

        super(props);
    }

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }
    
    render() {
        return (

            <div className="wbdv-topic-pill-list">

                {this.props.lessons && this.props.lessons.map((less) => {
                                                                  return <LessonListItem
                                                                      less={less}
                                                                      updateLesson={this.props.updateLesson}
                                                                      deleteLesson={this.props.deleteLesson}
                                                                      moduleId={this.props.moduleId}
                                                                  />
                                                              }
                )}
                <button onClick={() =>

                    this.props.createLesson(this.props.moduleId)}
                    type="button"
                        className="btn btn-secondary m-3 container-fluid wbdv-topic-add-btn">
                    <i className="fa fa-plus"></i>
                </button>

            </div>

        )
    }
}
const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) =>


            LessonServices.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch({
                                                    type: "FIND_ALL_LESSONS",
                                                    lessons: actualLessons
                                                }))
        ,
        deleteLesson: (lessonId) =>
            // console.log(lessonId)
            LessonServices.deleteLesson(lessonId)
                .then(status => dispatch(deleteLesson(lessonId)))

        ,
        createLesson: (moduleId) => {
            LessonServices.createLesson(moduleId, {
                title: 'New Lesson'
            }).then(actualLesson =>
                          dispatch(createLesson({title: 'New Lesson'})))
        },
        updateLesson: (lessonId, title) => {

            LessonServices.updateLesson(lessonId, {
                                            title: title
                                        }
            )
                .then(actualLesson => {
                    dispatch(updateLesson(lessonId, title))
                })
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonsListComponent)