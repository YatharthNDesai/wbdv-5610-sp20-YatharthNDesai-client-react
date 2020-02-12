export const CREATE_MODULE = "CREATE_MODULE"

export const DELETE_MODULE = "DELETE_MODULE"

export const UPDATE_MODULE = "UPDATE_MODULE"

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const createModule = (newModule) => ({
    type: CREATE_MODULE,
    newModule: newModule
})

export const updateModule = (moduleId, title) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId,
    title: title
})