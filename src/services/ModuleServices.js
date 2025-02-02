
export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/courses/${courseId}/modules`,{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    })
        .then(response => response.json())

export const findModulesForCourse =  (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/courses/${courseId}/modules`)
        .then(response => response.json())

export const findAllModules =  () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001377543/modules")
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/modules/${moduleId}`,{
        method: "DELETE"
    }).then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/modules/${moduleId}`,{
    method: 'PUT',
        body: JSON.stringify(module),
    headers: {
    'content-type': 'application/json'
}

    }).then(response => response.json())



export default {
    findAllModules,
    deleteModule,
    findModulesForCourse,
    createModule,
    updateModule

}