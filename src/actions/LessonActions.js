export const CREATE_LESSON = "CREATE_LESSON"

export const DELETE_LESSON = "DELETE_LESSON"

export const UPDATE_LESSON = "UPDATE_LESSON"

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const createLesson = (newLesson) => ({
    type: CREATE_LESSON,
    newLesson: newLesson
})

export const updateLesson = (lessonId, title) => ({
    type: UPDATE_LESSON,
    lessonId: lessonId,
    title: title
})