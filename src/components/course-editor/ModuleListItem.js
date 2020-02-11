 import React from "react";

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        newModuleTitle: ""
    }

    render() {
        return (
            <button key={this.props.module._id} type="button"
                    className="btn btn-secondary  m-4 container-fluid wbdv-module-item">
                {!this.state.editing && <label className="wbdv-module-item-title">{this.props.module.title}
                </label>}
                {this.state.editing && <input
                     onChange={(e) =>
                         // console.log(e.target.value)
                          this.state.newModuleTitle = e.target.value
                                                    }
                    // value={this.props.module.title}
                />
                }
                {this.state.editing && <button className="btn" onClick={(e) => {

                    this.props.updateModule(this.props.module._id, this.state.newModuleTitle)
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
                                      editing: true
                                  })
                }}>
                    <i className="fa fa-edit"/>
                </button>}
            </button>
        )
    }

}

export default ModuleListItem