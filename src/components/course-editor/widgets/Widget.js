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
                        updateWidget={this.props.updateWidget}
                        topicId={this.props.topicId}
                        index={this.props.index}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        length={this.props.length}
                        widget={this.props.widget}/>

                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        save={this.props.save}
                        editing={this.props.editing}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        index={this.props.index}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        length={this.props.length}
                        widget={this.props.widget}/>
                }
            </div>
        )
    }
}