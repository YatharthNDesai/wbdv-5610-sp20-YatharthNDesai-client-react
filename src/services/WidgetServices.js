
export const createWidget = (tid, widget) =>
    // console.log(moduleId)
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({
                                 id: (new Date()).getTime() + "",
                                 title: "New Widget"
                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findWidgetsForTopic =  (tid) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const findAllWidgets =  () =>
    fetch("http://localhost:8080/api/widgets")
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateWidget = (tid, wid, title, type, size, paragraph, order) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify({
                                 id: wid,
                                 topicId: tid,
                                 title: title,
                                 type: type,
                                 size: size,
                                 paragraph: paragraph,
                                 order: order
                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())



export default {
    findAllWidgets,
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget

}