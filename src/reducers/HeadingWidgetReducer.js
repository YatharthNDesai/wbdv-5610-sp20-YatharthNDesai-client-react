const widgets=[{id:"123",
    title:"Widget 1"}
]

const HeadingWidgetReducer = (state = {widgets:widgets},action) => {
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
        default:
            return state
    }
}

export default HeadingWidgetReducer