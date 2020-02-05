import React from "react";
// import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    state = {
        editing: false
    }
    render() {
        return(
            <tr className="my-row">
                <td className="wbdv-row wbdv-title">
                    <i className="m-2 fas fa-file wbdv-row wbdv-icon"></i>
                {
                    !this.state.editing &&
                    <a href="#">
                        {this.props.course.title}
                    </a>
                }
                    {this.state.editing && <input/>}
                </td>
                <td className="wbdv-row wbdv-owner">{this.props.course.owner}</td>
                <td className="wbdv-row wbdv-last-modified">{this.props.course.lastModified}</td>

                <td>
                    {!this.state.editing && <button className="btn" onClick={() => {
                    this.setState({
                                      editing: true
                                  })
                }}><i className="fa fa-edit"/></button>}
                </td>
                <td>
                    {this.state.editing && <button className="btn" onClick={() => {
                        this.setState({
                                          editing: false
                                      })
                    }}><i className="fa fa-save"/> </button>}
                </td>
                <td>

                    {!this.state.editing &&  <button className="btn" onClick={() => this.props.deleteCourse(this.props.course)}>X</button>}</td>
                {/*<button onClick={() => this.props.deleteCourse(this.props.course)} className="btn" type="button">*/}
                {/*    <label>X</label>*/}
                {/*</button>*/}

            {/*</li>*/}
            </tr>
        )
    }
}

export default CourseRowComponent