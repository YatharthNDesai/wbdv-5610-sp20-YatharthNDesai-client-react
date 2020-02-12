 import React from "react";
 import {Link} from "react-router-dom";
 import {findLessonsForModule} from "./LessonsListComponent";

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        newModuleTitle: "",
        moduleTitle: ""
    }

    render() {
        return (
            <button key={this.props.module._id} type="button"
                    className="btn btn-secondary  m-4 container-fluid wbdv-module-item">
                {!this.state.editing && <Link onClick={() => this.props.findLessonsForModule(this.props.module._id)} to={`/course-editor/${this.props.courseId}/${this.props.title}/${this.props.module._id}`}

                >
                    {this.props.module.title}
                </Link>}
                {this.state.editing && <input
                     onChange={(e) =>
                         // console.log(e.target.value)
                     this.setState({
                         moduleTitle: e.target.value
                                   })                      }
                    value={this.state.moduleTitle}
                />
                }
                {this.state.editing && <button className="btn" onClick={(e) => {

                    this.props.updateModule(this.props.module._id, this.state.moduleTitle)
                    this.setState({
                                      editing: false
                                  })
                }}><i className="fa fa-save"/></button>}
                {this.state.editing && <a onClick={() =>

                    this.props.deleteModule(this.props.module._id)
                    }
                                          className="wbdv-module-item-delete-btn">
                    X
                </a>}
                {!this.state.editing &&<button className="btn" style={{float:"right"}} onClick={() => {
                    this.setState({
                                      editing: true,
                        moduleTitle: this.props.module.title
                                  })
                }}>
                    <i className="fa fa-edit"/>
                </button>}
            </button>
        )
    }

}

export default ModuleListItem