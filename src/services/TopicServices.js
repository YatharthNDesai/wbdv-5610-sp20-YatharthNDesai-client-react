
export const createTopic = (lessonId, topic) =>
    // console.log(moduleId)
    fetch(`https://secret-beach-98864.herokuapp.com/api/lessons/${lessonId}/topics`,{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    })
        .then(response => response.json())

export const findTopicsForLesson =  (lessonId) =>
    fetch(`https://secret-beach-98864.herokuapp.com/api/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const findAllTopics =  () =>
    fetch("https://secret-beach-98864.herokuapp.com/api/topics")
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`https://secret-beach-98864.herokuapp.com/api/topics/${topicId}`,{
        method: "DELETE"
    }).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`https://secret-beach-98864.herokuapp.com/api/topics/${topicId}`,{
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }

    }).then(response => response.json())



export default {
    findAllTopics,
    deleteTopic,
    findTopicsForLesson,
    createTopic,
    updateTopic

}