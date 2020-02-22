export const CREATE_WIDGET = "CREATE_WIDGET"

export const DELETE_WIDGET = "DELETE_WIDGET"

export const UPDATE_WIDGET = "UPDATE_WIDGET"

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    wid: widgetId
})

export const createWidget = (newWidget) => ({
    type: CREATE_WIDGET,
    newWidget: newWidget
})

export const updateWidget = (wid,title,type,size,paragraph,order) => ({
    type: UPDATE_WIDGET,
    wid: wid,
    title: title,
    typ:type,
    size:size,
    paragraph:paragraph,
    order:order
})