import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import {connect} from "react-redux";
import Widget from "./widgets/Widget";
import {Button} from "react-bootstrap";

class WidgetListComponent extends React.Component {
    componentDidMount() {
        // this.props.findAllWidgets()
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {},

    }

    save = () => {
        this.setState({
                          widget: {}
                      })
    }

    render() {
        return (
            <div>
                <div style={{overflow: "hidden"}}>
                    <div className="fixed-action-btn">
                        <button onClick={() =>
                            this.props.createWidget(this.props.topicId)}
                                className="btn btn-danger fab-container">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        // onClick={() => {
                        //     this.props.updateAll(this.props.topicId, this.props.widgets)
                        // }}
                        className="btn btn-success">Save Order
                    </button>
                </div>
                {/*<h1>Widget List</h1>*/}
                {this.props.widgets &&
                 this.props.widgets.map((widget, index) =>
                                            <div key={widget.id}>

                                                <div className="m-4">
                                                    <form className="container-fluid"
                                                          style={{borderStyle: "outset"}}>

                                                        <Widget
                                                            save={this.save}
                                                            editing={widget === this.state.widget}
                                                            deleteWidget={this.props.deleteWidget}
                                                            updateWidget={this.props.updateWidget}
                                                            findWidgetsForTopic={this.props.findWidgetsForTopic}
                                                            topicId={this.props.topicId}
                                                            widget={widget}
                                                            index={index}
                                                            moveUp={this.props.moveUp}
                                                            moveDown={this.props.moveDown}
                                                            length={this.props.widgets.length}
                                                        />
                                                    </form>
                                                    {widget !== this.state.editing &&
                                                     <button onClick={() => this.setState({
                                                                                              widget: widget
                                                                                          })}
                                                             className="btn-secondary btn m-1"
                                                     >
                                                         <i className="fa fa-edit"/>
                                                     </button>
                                                    }
                                                    {/*</form>*/}
                                                </div>
                                            </div>
                 )
                }

            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    moveUp: (index) => {
        dispatch({
                     type: "MOVE_UP",
                     index: index
                 })
    },
    moveDown: (index) => {
        dispatch({
                     type: "MOVE_DOWN",
                     index: index
                 })
    },
    createWidget: (tid) =>
        fetch(`https://secret-beach-98864.herokuapp.com//api/topics/${tid}/widgets`, {
            method: "POST",
            body: JSON.stringify({
                                     id: (new Date()).getTime() + "",
                                     title: "New Widget"
                                 }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualWidget => dispatch({
                                               type: "CREATE_WIDGET",
                                               widget: actualWidget
                                           }))
    ,
//     updateAll: (tid, widgets) => {
//         console.log(widgets,tid)
//         widgets.map((widget) => {
//             fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
//                 method: 'PUT',
//                 body: JSON.stringify({
//                                          widget:widget
//                                      }),
//
//
//                 headers: {
//                     'content-type': 'application/json'
//                 }
//             }).then(response => response.json())
//                 .then(actualWidgets => {
//                     dispatch({
//                                  type: "UPDATE_ALL",
//                                  widgets: actualWidgets,
//                              })
//                 })
//
//         })
// } ,
    updateWidget: (tid, wid, title, type, size, paragraph, order) => {

        fetch(`https://secret-beach-98864.herokuapp.com/api/widgets/${wid}`, {
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
            .then(actualWidget => {
                dispatch({
                             type: "UPDATE_WIDGET",
                             widget: actualWidget,
                             widgetId: wid,
                             title: title,
                             typ: type,
                             size: size,
                             paragraph: paragraph
                         })
            })
    },
    deleteWidget: (wid) => {
        fetch(`https://secret-beach-98864.herokuapp.com/api/widgets/${wid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(status => dispatch({
                                         type: "DELETE_WIDGET",
                                         widgetId: wid
                                     }))
    },
    findAllWidgets: () =>
        fetch("https://secret-beach-98864.herokuapp.com/api/widgets")
            .then(response => response.json())
            .then(widgets => dispatch({
                                          type: "FIND_ALL_WIDGETS",
                                          widgets: widgets
                                      })),
    findWidgetsForTopic: (tid) =>
        fetch(`https://secret-beach-98864.herokuapp.com/api/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(widgets => dispatch({
                                          type: "FIND_WIDGETS_FOR_TOPIC",
                                          widgets: widgets
                                      }))
})

const stateToPropertyMapper = (state) => ({
    widgets: state.headingWidgets.widgets,
    length: state.headingWidgets.widgets.length

})

export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)
(WidgetListComponent)