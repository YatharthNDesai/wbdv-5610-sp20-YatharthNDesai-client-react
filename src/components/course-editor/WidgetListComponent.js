import React from "react";
import HeadingWidgetContainer from "./HeadingWidgetContainer";
import {connect} from "react-redux";

export const WidgetListComponent = ({widgets}) =>
    <div>
    <h1>Widget List</h1>
        {
            widgets.map((widget) => {
                return <HeadingWidgetContainer
                    widget={widget}

                />
                {/*<li key={widget.id}>*/
                }
                {/*    {widget.title}*/
                }
                {/*</li>*/
                }
            } )
        }

    </div>

const stateToPropertyMapper = (state) => ({
    widgets: state.headingWidgets.widgets
})

export default connect(stateToPropertyMapper)(WidgetListComponent)
