import React from "react";

class ParagraphWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        preview: false,
        widget: this.props.widget
    }

    render() {
        return(
            <div className="p-4">


                    <div>
                        <div className="row">
                            <div className="col-6">
                                <h1> {this.props.widget.type} Widget</h1>
                                <h3> {this.props.widget.title}</h3>

                                <p>{this.props.widget.paragraph}</p>
                            </div>
                            <div className="col-6">
                                {    this.props.editing &&
                                     <span>
                                <button
                                    onClick={() => this.props.deleteWidget(this.props.widget.id)}
                                    type="button" className="btn btn-danger m-1"
                                    style={{float: "right"}}>
                                    <label>X</label>
                                </button>
                                 <button onClick={() => {
                                     this.props.save();
                                     this.props.updateWidget(this.props.topicId,
                                                             this.props.widget.id,
                                                             this.state.widget.title,
                                                             this.state.widget.type,
                                                             this.state.widget.size,this.state.widget.paragraph,this.state.widget.list,
                                                             this.state.widget.url);
                                 }}
                                         type="button" className="btn btn-success m-1"
                                         style={{float: "right"}}>
                                Save
                                </button>
                                <select
                                    onChange={(e) => {
                                        let newType = e.target.value
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                type: newType
                                            }
                                        }))
                                    }} style={{float: "right"}} className="m-1"
                                value={this.state.widget.type}
                                >
                                    <option>
                                        HEADING
                                    </option>
                                    <option>
                                        PARAGRAPH
                                    </option>
                                    <option>
                                        LIST
                                    </option>
                                    <option>
                                        IMAGE
                                    </option>

                                </select>
                                { this.props.index !== this.props.length-1 &&
                                  <button onClick={() => {
                                      this.props.moveDown(this.props.index)
                                      this.props.updateWidget(this.props.topicId,
                                                              this.props.widget.id,
                                                              this.state.widget.title,
                                                              this.state.widget.type,
                                                              this.state.widget.size,
                                                              this.state.widget.paragraph);
                                      // let newOrder = this.state.order + 1
                                      // this.setState(prevState => ({
                                      //     widget: {
                                      //         ...prevState.widget,
                                      //         order:newOrder
                                      //     }
                                      // }))
                                  }

                                  }
                                          type="button" className="btn btn-warning m-1"
                                          style={{float: "right"}}>
                                      <i className="fa fa-arrow-down"></i>
                                  </button>}
                                {this.props.index !== 0 &&
                                 <button onClick={() => {
                                     this.props.moveUp(this.props.index)
                                     this.props.updateWidget(this.props.topicId,
                                                             this.props.widget.id,
                                                             this.state.widget.title,
                                                             this.state.widget.type,
                                                             this.state.widget.size,
                                                             this.state.widget.paragraph);
                                 }

                                 }
                                         type="button" className="btn btn-warning m-1"
                                         style={{float: "right"}}>
                                     <i className="fa fa-arrow-up"></i>
                                 </button>
                                }
                                <label className="switch m-1" style={{float: "right"}}>
                                    <input onFocus={() => {
                                        if (this.state.preview === false) {
                                            this.setState({
                                                              preview: true
                                                          })
                                        }

                                        if (this.state.preview === true) {
                                            this.setState({
                                                              preview: false
                                                          })
                                        }
                                    }}
                                           type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                                <label className="m-1" style={{fontWeight: "bolder", float: "right"}}>
                                    Preview
                                </label>
                                             </span>
                                }
                            </div>
                        </div>
                        { this.props.editing &&
                          <div>
                              <div className="form-group">
                                  <label style={{fontWeight:"bold"}}>Widget Name</label>
                                  <input onChange={(e) => {
                                      const newTitle = e.target.value;
                                      this.setState(prevState => ({
                                                        widget: {
                                                            ...prevState.widget,
                                                            title: newTitle
                                                        }
                                                    })
                                      )
                                  }}

                                         className="form-control " type="text"
                                         value={this.state.widget.title}/>
                              </div>
                              <div className="form-group">
                                  <label style={{fontWeight:"bold"}}>Widget Paragraph</label>
                                  <textarea onChange={(e) => {
                                      const newParagraph = e.target.value;
                                      this.setState(prevState => ({
                                                        widget: {
                                                            ...prevState.widget,
                                                            paragraph: newParagraph
                                                        }
                                                    })
                                      )
                                  }}
                                      className="form-control"
                                  value={this.state.widget.paragraph}></textarea>
                              </div>

                              {/*<div className="form-group">*/}
                              {/*    <select className="form-control">*/}
                              {/*        <option>*/}
                              {/*            Header 1*/}
                              {/*        </option>*/}
                              {/*    </select>*/}
                              {/*</div>*/}
                              {/*<div className="form-group">*/}
                              {/*    <input className="form-control" type="text"*/}
                              {/*           placeholder="Widget name"/>*/}
                              {/*</div>*/}

                          </div>
                        }
                    </div>

                    {

                        this.state.preview && this.props.editing &&
                        <h4> Preview</h4>
                    }
                    {this.state.preview && this.props.editing &&
                     <p>{this.state.widget.paragraph}</p>

                    }
                    {/*{this.state.preview && this.props.editing && this.props.widget.size === 2 &&*/}
                    {/* <h2> Heading text</h2>*/}

                    {/*}*/}
                    {/*{this.state.preview && this.props.editing && this.props.widget.size === 3 &&*/}
                    {/* <h3> Heading text</h3>*/}

                    {/*}*/}
                    {/*{this.state.preview && this.props.editing && this.props.widget.size === 4 &&*/}
                    {/* <h4> Heading text</h4>*/}

                    {/*}*/}
                    {/*{this.state.preview && this.props.editing && this.props.widget.size === 5 &&*/}
                    {/* <h5> Heading text</h5>*/}

                    {/*}*/}
                    {/*{this.state.preview && this.props.editing && this.props.widget.size === 6 &&*/}
                    {/* <h6> Heading text</h6>*/}

                    {/*}*/}
            </div>
        )
    }
}
export default ParagraphWidgetComponent