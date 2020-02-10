import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule} from "../../actions/ModuleActions";
import ModuleServices from "../../services/ModuleServices";


class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return (
            <div className="col-3 container-fluid wbdv-module-list">
                {this.props.modules && this.props.modules.map(
                    module => <button key={module._id} type="button"
                                      className="btn btn-secondary  m-4 container-fluid wbdv-module-item">
                        <label className="wbdv-module-item-title">{module.title}
                        </label>
                        <a onClick={() => this.props.deleteModule(module._id)}
                           className="wbdv-module-item-delete-btn" href="#">
                            X
                        </a>
                    </button>)}
                <button onClick={this.props.createModule(this.props.courseId)}
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
                title: 'New Module',
            }).then(actualModule => dispatch(createModule(actualModule)))

        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)