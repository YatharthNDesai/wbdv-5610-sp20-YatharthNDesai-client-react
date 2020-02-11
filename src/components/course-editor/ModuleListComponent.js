import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule, updateModule} from "../../actions/ModuleActions";
import ModuleServices, {findAllModules} from "../../services/ModuleServices";
import {updateCourse} from "../../services/CourseService";


class ModuleListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        module: this.props.module
    }

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return (
            <div className="col-3 container-fluid wbdv-module-list">
                {this.props.modules && this.props.modules.map(
                    module => <button key={module._id} type="button"
                                      className="btn btn-secondary  m-4 container-fluid wbdv-module-item">
                        {!this.state.editing && <label className="wbdv-module-item-title">{module.title}
                        </label>}
                        {this.state.editing && <input
                           //  onChange={(e) =>
                           //      // console.log(e.target.value)
                           //       this.props.updateModule()
                           //                                 }
                           // value={module.title}
                        />
                        }
                        {this.state.editing && <button className="btn" onClick={(e) => {
                            this.props.updateModule(module._id, e.target.value)
                            this.setState({
                                              editing: false
                                          })
                        }}><i className="fa fa-save"/></button>}
                        {this.state.editing && <a onClick={() => this.props.deleteModule(module._id)}
                           className="wbdv-module-item-delete-btn" href="#">
                            X
                        </a>}
                        {!this.state.editing &&<button className="btn" style={{float:"right"}} onClick={() => {
                            this.setState({
                                              editing: true
                                          })
                        }}>
                            <i className="fa fa-edit"/>
                        </button>}
                    </button>)}
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
        modules: state.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) =>
            ModuleServices.findModulesForCourse(courseId)
                .then(actualModules => dispatch({
                                                    type: "FIND_ALL_MODULES",
                                                    modules: actualModules
                                                }))
        ,
        deleteModule: (moduleId) =>
            ModuleServices.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId)))

        ,
        createModule: (courseId) => {
            ModuleServices.createModule(courseId,{
                title: 'New Module'
            })
                .then(actualModule =>
                          dispatch(createModule(actualModule)))
        },
        updateModule: (moduleId, title) => {
            ModuleServices.updateModule(moduleId,title
            )
                .then(actualModule => dispatch(updateModule(actualModule)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)