import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

export default class Widget extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        save={this.props.save}
                        editing={this.props.editing}
                        deleteWidget={this.props.deleteWidget}
                        widget={this.props.widget}/>

                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        save={this.props.save}
                        editing={this.props.editing}
                        deleteWidget={this.props.deleteWidget}
                        widget={this.props.widget}/>
                }
            </div>
        )
    }
}