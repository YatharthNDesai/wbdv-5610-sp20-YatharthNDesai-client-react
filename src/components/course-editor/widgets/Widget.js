import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

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
                        findWidgetsForTopic={this.props.findWidgetsForTopic}
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
                        topicId={this.props.topicId}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        findWidgetsForTopic={this.props.findWidgetsForTopic}
                        index={this.props.index}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        length={this.props.length}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "LIST" &&
                    <ListWidgetComponent
                        save={this.props.save}
                        editing={this.props.editing}
                        topicId={this.props.topicId}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        findWidgetsForTopic={this.props.findWidgetsForTopic}
                        index={this.props.index}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        length={this.props.length}
                        widget={this.props.widget}
                    />
                }
                {
                    this.props.widget.type === "IMAGE" &&
                    <ImageWidgetComponent
                        save={this.props.save}
                        editing={this.props.editing}
                        topicId={this.props.topicId}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        findWidgetsForTopic={this.props.findWidgetsForTopic}
                        index={this.props.index}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        length={this.props.length}
                        widget={this.props.widget}
                    />
                }
            </div>
        )
    }
}