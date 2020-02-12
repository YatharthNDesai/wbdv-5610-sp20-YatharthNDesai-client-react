import React from "react";
import TopicListItem from "./TopicListItem";
import TopicServices from "../../services/TopicServices";
import {createTopic, deleteTopic, updateTopic} from "../../actions/TopicActions";
import {connect} from "react-redux";

class TopicsListComponent extends React.Component {

    constructor(props) {

        super(props);
    }

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    render() {
        return (

            <div className="wbdv-topic-pill-list">

                {this.props.topics && this.props.topics.map((topic) => {
                                                                return <TopicListItem
                                                                    topic={topic}
                                                                    updateTopic={this.props.updateTopic}
                                                                    deleteTopic={this.props.deleteTopic}
                                                                    lessonId={this.props.moduleId}
                                                                />
                                                            }
                )}
                <button onClick={() =>

                    this.props.createTopic(this.props.lessonId)}
                        type="button"
                        className="btn btn-secondary m-3 container-fluid wbdv-topic-add-btn">
                    <i className="fa fa-plus"></i>
                </button>

            </div>

        )
    }
}
const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) =>


            TopicServices.findTopicsForModule(lessonId)
                .then(actualTopics => dispatch({
                                                   type: "FIND_ALL_TOPICS",
                                                   topics: actualTopics
                                               }))
        ,
        deleteTopic: (topicId) =>
            // console.log(topicId)
            TopicServices.deleteTopic(topicId)
                .then(status => dispatch(deleteTopic(topicId)))

        ,
        createTopic: (lessonId) => {
            TopicServices.createTopic(lessonId, {
                title: 'New Topic'
            }).then(actualTopic =>
                        dispatch(createTopic({title: 'New Topic'})))
        },
        updateTopic: (topicId, title) => {

            TopicServices.updateTopic(topicId, {
                                          title: title
                                      }
            )
                .then(actualTopic => {
                    dispatch(updateTopic(topicId, title))
                })
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicsListComponent)