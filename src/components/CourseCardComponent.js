import React from "react";
import "../stylesheets/CourseGridComponent.css"
import {updateCourse} from "../services/CourseService";

class CourseCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return (

            <div className="wbdv-card col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                 style={{position: "relative"}}>
                <div className="col-3" style={{position: "absolute", right: 0}}>
                    <button onClick={() => this.props.deleteCourse(this.props.course)}
                            className="btn"
                            type="button">
                        X
                    </button>
                </div>
                <p className="m-2 p-1" style={{border: "solid", height: "25vh"}}>
                    This is a generic Description. Might be replaced by actual content in the
                    future
                </p>

                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-file wbdv-row wbdv-icon m-1"></i></div>

                    <div className="col-4">
                        {!this.state.editing && <a onClick={this.props.showEditor} href="#">
                            {this.state.course.title}
                        </a>}
                        {this.state.editing && <input
                            onChange={(e) => this.setState({
                                                               course: {
                                                                   ...this.state.course,
                                                                   title: e.target.value
                                                               }
                                                           })}
                            style={{width: "100px"}} value={this.state.course.title}/>}</div>

                    <div className="col-2" style={{float: "right"}}>
                        {!this.state.editing &&
                         <button className="btn" type="btn"
                                 onClick={() => {
                                     this.setState({
                                                       editing: true
                                                   })
                                 }}>
                             <i className="fas fa-edit"></i>
                         </button>}
                    </div>
                    <div className="col-2">
                        {this.state.editing && <button className="btn" onClick={() => {
                            updateCourse(this.state.course._id, this.state.course).then(status => {
                            })
                            this.setState({
                                              editing: false,
                                              lastModified: new Date().getHours() + ":"
                                                            + new Date().getMinutes()

                                          })
                        }}><i className="fa fa-save"/></button>}
                    </div>
                </div>
                <div style={{position: "absolute", bottom: 2}}>
                    <div className="col-3">Modified:{this.state.course.lastModified}</div>


                </div>
            </div>

        );
    }
}

export default CourseCardComponent