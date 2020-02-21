import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import {connect} from "react-redux";
import Widget from "./widgets/Widget";

class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findAllWidgets()
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {}
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
                {/*<h1>Widget List</h1>*/}
                {
                    this.props.widgets.map(widget =>
                                               <div key={widget.id}>

                                                   <div>

                                                       <Widget
                                                           save={this.save}
                                                           editing={widget === this.state.widget}
                                                           deleteWidget={this.props.deleteWidget}
                                                           updateWidget={this.props.updateWidget}
                                                           topicId={this.props.topicId}
                                                           widget={widget}/>
                                                       {widget !== this.state.editing &&
                                                        <button onClick={() => this.setState({
                                                                                                 widget: widget
                                                                                             })}>
                                                            <i className="fa fa-edit btn-secondary m-1"/>
                                                        </button>
                                                       }
                                                   </div>
                                               </div>
                    )
                }

            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (tid) =>
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
            .then(actualWidget => dispatch({
                                               type: "CREATE_WIDGET",
                                               widget: actualWidget
                                           }))
    ,
    updateWidget: (tid, wid, title, type, size, paragraph) => {


        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: 'PUT',
            body: JSON.stringify({
                                     id: (new Date()).getTime() + "",
                                     topicId: tid,
                                     title: title,
                                     type: type,
                                     size: size,
                                     paragraph:paragraph
                                 }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualWidget => {
            dispatch({
                         type: "UPDATE_WIDGET",
                         widget: actualWidget
                     })
        })
    },
    deleteWidget: (wid) => {
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(status => dispatch({
                                         type: "DELETE_WIDGET",
                                         widgetId: wid
                                     }))
    },
    findAllWidgets: () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())
            .then(widgets => dispatch({
                                          type: "FIND_ALL_WIDGETS",
                                          widgets: widgets
                                      })),
    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(widgets => dispatch({
                                          type: "FIND_WIDGETS_FOR_TOPIC",
                                          widgets: widgets
                                      }))
})

const stateToPropertyMapper = (state) => ({
    widgets: state.headingWidgets.widgets
})

export default connect(stateToPropertyMapper,
                       dispatchToPropertyMapper)
(WidgetListComponent)


