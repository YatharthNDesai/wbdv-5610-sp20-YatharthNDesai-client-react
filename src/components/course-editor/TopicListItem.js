import React from "react";
import {Link} from "react-router-dom";

class TopicListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        topicTitle: ""
    }

    render() {
        return (
            <button type="button"
                    className="btn btn-secondary  m-4  ">
                {!this.state.editing && <Link
                    onClick={() => {
                        this.props.findWidgetsForTopic(this.props.topic._id)}}
                    to={`/course-editor/${this.props.courseId}/${this.props.title}/${this.props.moduleId}/${this.props.lessonId}/${this.props.topic._id}`}

                >
                    {this.props.topic.title}
                </Link>}
                {this.state.editing && <input
                    onChange={(e) =>
                        // console.log(e.target.value)
                        this.setState({
                                          topicTitle: e.target.value
                                      })}
                    value={this.state.topicTitle}
                />
                }
                {this.state.editing && <button className="btn" onClick={(e) => {

                    this.props.updateTopic(this.props.topic._id, this.state.topicTitle)
                    this.setState({
                                      editing: false
                                  })
                }}><i className="fa fa-save"/></button>}
                {this.state.editing && <a onClick={() => {

                    this.props.deleteTopic(this.props.topic._id)
                    this.setState({
                                      editing: false
                                  })
                }}
                                          className="wbdv-module-item-delete-btn">
                    X
                </a>}
                {!this.state.editing && <button className="btn" style={{float: "right"}}
                                                onClick={() => {
                                                    this.setState({
                                                                      editing: true,
                                                                      topicTitle: this.props.topic.title
                                                                  })
                                                }}>
                    <i className="fa fa-edit"/>
                </button>}
            </button>
        );
    }

}

export default TopicListItem