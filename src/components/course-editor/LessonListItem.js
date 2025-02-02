import React from "react";
import {Link} from "react-router-dom";


class LessonListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        lessonTitle: ""
}

    render() {
        return (
            <button  type="button"
                    className="btn btn-secondary  m-4  ">
                {!this.state.editing && <Link onClick={() => this.props.findTopicsForLesson(this.props.lesson._id)} to={`/course-editor/${this.props.courseId}/${this.props.title}/${this.props.moduleId}/${this.props.lesson._id}`}

                >
                    {this.props.lesson.title}
                </Link>}
                {this.state.editing && <input
                    onChange={(e) =>
                        // console.log(e.target.value)
                        this.setState({
                                          lessonTitle: e.target.value
                                      })                      }
                    value={this.state.lessonTitle}
                />
                }
                {this.state.editing && <button className="btn" onClick={(e) => {

                    this.props.updateLesson(this.props.lesson._id, this.state.lessonTitle)
                    this.setState({
                                      editing: false
                                  })
                }}><i className="fa fa-save"/></button>}
                {this.state.editing && <a onClick={() =>{

                    this.props.deleteLesson(this.props.lesson._id)
                    this.setState({
                    editing: false
                })
                }}
                                          className="wbdv-module-item-delete-btn">
                    X
                </a>}
                {!this.state.editing &&<button className="btn" style={{float:"right"}} onClick={() => {
                    this.setState({
                                      editing: true,
                                      lessonTitle: this.props.lesson.title
                                  })
                }}>
                    <i className="fa fa-edit"/>
                </button>}
            </button>
        );
    }



}

export default LessonListItem