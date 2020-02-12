
export const createLesson = (moduleId, lesson) =>
    // console.log(moduleId)
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/modules/${moduleId}/lessons`,{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    })
        .then(response => response.json())

export const findLessonsForModule =  (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const findAllLessons =  () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001377543/lessons")
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/lessons/${lessonId}`,{
        method: "DELETE"
    }).then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/lessons/${lessonId}`,{
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }

    }).then(response => response.json())



export default {
    findAllLessons,
    deleteLesson,
    findLessonsForModule,
    createLesson,
    updateLesson

}