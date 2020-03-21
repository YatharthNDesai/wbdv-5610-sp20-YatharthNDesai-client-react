import {CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/TopicActions";

const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FIND_ALL_TOPICS":
            return {
                topics: action.topics
            }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }

        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }

        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map((topic) => {
                    if (topic.id === action.topicId) {
                        topic.title = action.title
                    }
                    return topic;
                })
            }
        case "SET_TOPICS":
            return {
                topics: action.topics
            }

        default:
            return state

    }
}

export default topicReducer