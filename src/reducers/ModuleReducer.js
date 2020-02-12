import {CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE} from "../actions/ModuleActions";

const initialState = {
    modules: [],
    selected: "abc"
}

const moduleReducer = (state = initialState, action) => {


    switch (action.type) {
        case "FIND_ALL_MODULES":
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }

        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map((module) => {
                    if (module._id === action.moduleId) {
                        module.title = action.title
                    }
                    return module;
                })
            }

        default:
            return state

    }
}

export default moduleReducer