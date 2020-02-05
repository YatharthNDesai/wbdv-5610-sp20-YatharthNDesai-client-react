import React from "react";

class CourseRowComponent extends React.Component {

    state = {
        edit: false
    }
    render() {
        return(
            <tr className="my-row">
                <td className="wbdv-row wbdv-title">
                    <i className="fas fa-file wbdv-row wbdv-icon m-2"></i>
                    {!this.state.edit && <a onClick={this.props.showEditor} href="#">
                        {this.props.course.title}
                    </a>}
                    {this.state.editing && <input/>}
                </td>

                <td className="wbdv-row wbdv-owner">{this.props.course.owner}</td>
                <td className="wbdv-row wbdv-last-modified">{this.props.course.lastModified}</td>
                <td style={{width: "7%"}}>
                    {!this.state.editing && <button onClick={() => {
                        this.setState({
                                          editing: true
                                      })
                    }} className="btn form-control" type="btn">
                        <i className="fas fa-edit"></i>
                    </button>}
                </td>
                <td style={{width: "7%"}}>
                    {this.state.editing && <button onClick={
                        this.setState({
                                          editing: false
                                      })
                    }

                                                   className="btn form-control">
                        <i className="fa fa-save"></i>
                    </button>}
                </td>
                <td className="wbdv-row wbdv-button wbdv-delete">
                    {!this.state.editing && <button
                        onClick={() => this.props.deleteCourse(this.props.course)} className="btn"
                        type="button">
                        <label>X</label>
                    </button>}


                    </td>
            </tr>
        )
    }

}

export default CourseRowComponent
