export const CREATE_TOPIC = "CREATE_TOPIC"

export const DELETE_TOPIC = "DELETE_TOPIC"

export const UPDATE_TOPIC = "UPDATE_TOPIC"

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const createTopic = (newTopic) => ({
    type: CREATE_TOPIC,
    newTopic: newTopic
})

export const updateTopic = (topicId, title) => ({
    type: UPDATE_TOPIC,
    topicId: topicId,
    title: title
})