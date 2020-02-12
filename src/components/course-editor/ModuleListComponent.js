import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule, updateModule} from "../../actions/ModuleActions";
import ModuleServices, {findAllModules} from "../../services/ModuleServices";
import {updateCourse} from "../../services/CourseService";
import ModuleListItem from "./ModuleListItem";
import LessonServices from "../../services/LessonServices";

class ModuleListComponent extends React.Component {

    constructor(props) {

        super(props);
    }

    // state = {
    //     editing: false,
    //     module: this.props.module
    // }

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return (
            <div className="col-3 container-fluid wbdv-module-list">
                {this.props.modules && this.props.modules.map((module) => {
                                                                  return <ModuleListItem
                                                                      module={module}
                                                                      courseId={this.props.courseId}
                                                                      title={this.props.title}
                                                                      updateModule={this.props.updateModule}
                                                                      deleteModule={this.props.deleteModule}
                                                                      findLessonsForModule={this.props.findLessonsForModule}
                                                                      selected={this.props.selected}
                                                                  />
                                                              }
                )
                }

                <button onClick={() => this.props.createModule(this.props.courseId)}
                        type="button"
                        className="btn m-4 container-fluid wbdv-module-item-add-btn">
                    <i className="fa fa-plus" style={{color: "white"}}></i>
                </button>
            </div>

        )
    }

}

// ({modules, createModule, deleteModule})

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) =>


            LessonServices.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch({
                                                    type: "FIND_ALL_LESSONS",
                                                    lessons: actualLessons
                                                })),
        findModulesForCourse: (courseId) =>
            ModuleServices.findModulesForCourse(courseId)
                .then(actualModules => dispatch({
                                                    type: "FIND_ALL_MODULES",
                                                    modules: actualModules
                                                }))
        ,
        deleteModule: (moduleId) =>
            // console.log(moduleId)
            ModuleServices.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId)))

        ,
        createModule: (courseId) => {
            ModuleServices.createModule(courseId, {
                title: 'New Module'
            })
                .then(actualModule =>
                          dispatch(createModule(actualModule)))
        },
        updateModule: (moduleId, title) => {
            // console.log(title)
            ModuleServices.updateModule(moduleId, {
                title: title
                                        }
            )
                .then(actualModule => {
                    dispatch(updateModule(moduleId, title))
                })
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)