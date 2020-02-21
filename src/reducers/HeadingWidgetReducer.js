const widgets = [
]

const HeadingWidgetReducer = (state = {widgets: widgets}, action) => {
    console.log("Reached Reducer")
    switch (action.type) {
        case "CREATE_WIDGET":
            console.log("Create")
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            console.log("Delete")
            return {
                widgets: state.widgets.filter(widget =>
                                                  widget.id !== action.widgetId
                )
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            // console.log(console.log("Reducer" + action.wid + " " + action.title + " " +
            // action.type + " " + action.size))
            return {

                ...state,
                widgets: state.widgets.map((widget) => {
                    if (widget.id === action.widgetId) {
                        widget.title = action.title
                        widget.type = action.typ
                        widget.size = action.size
                        widget.paragraph = action.paragraph
                    }
                    return widget;
                })
            }
        case "MOVE_UP":

                let movingItem = state.widgets[action.index]
                state.widgets.splice(action.index, 1)
                state.widgets.splice(action.index - 1, 0, movingItem)
        case "MOVE_DOWN":

            let moving = state.widgets[action.index]
            state.widgets.splice(action.index, 1)
            state.widgets.splice(action.index + 1, 0, moving)


        // widgets[action.index] = widgets[action.index-1]
        // widgets[action.index-1] = widgets[tempWidget]

        default:
            console.log("Reached Default")
            return state
    }
}

export default HeadingWidgetReducer