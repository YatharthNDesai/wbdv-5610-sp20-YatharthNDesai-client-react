import React from "react";
// import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return (
            <tr
                className="my-row">
                <td className="wbdv-row wbdv-title">
                    <i className="m-2 fas fa-file wbdv-row wbdv-icon"></i>
                    {
                        !this.state.editing &&
                        <Link to={`/course-editor/${this.props.course._id}`}>
                            {this.props.course.title}
                        </Link>
                    }
                    {this.state.editing && <input
                        onChange={(e) => this.setState({
                                                           course: {
                                                               ...this.state.course,
                                                               title: e.target.value
                                                           }
                                                       })}
                        value={this.state.course.title}/>}
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
                    {this.state.editing && <button className="btn" onClick={(e) => {
                        updateCourse(this.state.course._id, this.state.course).then(status => {
                        })
                        this.setState({
                                          editing: false
                                      })
                    }}><i className="fa fa-save"/></button>}
                </td>
                <td>

                    {!this.state.editing && <button className="btn"
                                                    onClick={() => this.props.deleteCourse(
                                                        this.state.course)}>X</button>}</td>
            </tr>
        )
    }
}

export default CourseRowComponent