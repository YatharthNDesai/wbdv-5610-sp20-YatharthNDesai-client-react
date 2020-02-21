const widgets = [{
    id: "123",
    title: "Widget 1"
}
]

const HeadingWidgetReducer = (state = {widgets: widgets}, action) => {
    console.log("Reached Reducer")
    switch (action.type) {
        case "CREATE_WIDGET":

            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
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
            // console.log(console.log("Reducer" + action.wid + " " + action.title + " " + action.type + " " + action.size))
            return {

                ...state,
                widgets: state.widgets.map((widget) => {
                    if (widget.id === action.widgetId) {
                        widget = action.widget
                    }
                    return widget;
                })
            }
        default:
            console.log("Reached Default")
            return state
    }
}

export default HeadingWidgetReducer