import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/LessonActions";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_LESSONS":
            return {
                lessons: action.lessons
            }
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }

        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map((lesson) => {
                    if (lesson._id === action.lessonId) {
                        lesson.title = action.title
                    }
                    return lesson;
                })
            }

        default:
            return state

    }
}

export default lessonReducer