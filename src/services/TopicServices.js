
export const createTopic = (lessonId, topic) =>
    // console.log(moduleId)
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/lessons/${lessonId}/topics`,{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    })
        .then(response => response.json())

export const findTopicsForModule =  (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const findAllTopics =  () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001377543/topics")
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/topics/${topicId}`,{
        method: "DELETE"
    }).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/topics/${topicId}`,{
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }

    }).then(response => response.json())



export default {
    findAllTopics,
    deleteTopic,
    findTopicsForModule,
    createTopic,
    updateTopic

}