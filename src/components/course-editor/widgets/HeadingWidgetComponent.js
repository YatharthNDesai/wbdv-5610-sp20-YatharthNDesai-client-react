import React from "react";

class HeadingWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        preview: false,
        widget: this.props.widget
    }

    render() {
        return (
            <div className="p-4">
                <div>

                    <div className="row">
                        <div className="col-6">
                            <h1>{this.props.widget.type} Widget</h1>
                            {this.props.widget.size === 1 &&
                             <h1>{this.props.widget.title}</h1>
                            }
                            {this.props.widget.size === 2 &&
                             <h2>{this.props.widget.title}</h2>
                            }
                            {this.props.widget.size === 3 &&
                             <h3>{this.props.widget.title}</h3>
                            }
                            {this.props.widget.size === 4 &&
                             <h4>{this.props.widget.title}</h4>
                            }
                            {this.props.widget.size === 5 &&
                             <h5>{this.props.widget.title}</h5>
                            }
                            {this.props.widget.size === 6 &&
                             <h6>{this.props.widget.title}</h6>
                            }
                        </div>
                        <div className="col-6">
                            {this.props.editing &&
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
                                                        this.state.widget.size,
                                                        this.state.widget.paragraph,
                                                        this.state.widget.list,
                                this.state.widget.url)                           }
                            }
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
                            {this.props.index !== this.props.length - 1 &&
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
                                 // let newOrder = this.state.order - 1
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
                                 <i className="fa fa-arrow-up"></i>
                             </button>
                            }
                            <label id="slider" className="switch m-1" style={{float: "right"}}>
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
                            <label className="m-1"
                                   style={{fontWeight: "bolder", float: "right"}}>
                                Preview
                            </label>

    </span>
                            }
                        </div>
                    </div>
                    {this.props.editing &&
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
                             <label style={{fontWeight:"bold"}}>Widget Size</label>
                             <select
                                 onChange={(e) => {
                                     let newSize = e.target.value
                                     newSize = parseInt(newSize)
                                     this.setState(prevState => ({
                                         widget: {
                                             ...prevState.widget,
                                             size: newSize
                                         }
                                     }))
                                 }}
                                 value={this.state.widget.size} className="form-control">
                                 <option value={1}>
                                     Heading 1
                                 </option>
                                 <option value={2}>
                                     Heading 2
                                 </option>
                                 <option value={3}>
                                     Heading 3
                                 </option>
                                 <option value={4}>
                                     Heading 4
                                 </option>
                                 <option value={5}>
                                     Heading 5
                                 </option>
                                 <option value={6}>
                                     Heading 6
                                 </option>
                             </select>
                         </div>

                     </div>
                    }
                </div>
                {this.state.preview && this.props.editing &&
                 <h4> Preview</h4>
                }
                {this.state.preview && this.props.editing && this.state.widget.size === 1 &&
                 <h1>{this.state.widget.title}</h1>

                }
                {this.state.preview && this.props.editing && this.state.widget.size === 2 &&
                 <h2>{this.state.widget.title}</h2>

                }
                {this.state.preview && this.props.editing && this.state.widget.size === 3 &&
                 <h3>{this.state.widget.title}</h3>

                }
                {this.state.preview && this.props.editing && this.state.widget.size === 4 &&
                 <h4>{this.state.widget.title}</h4>

                }
                {this.state.preview && this.props.editing && this.state.widget.size === 5 &&
                 <h5>{this.state.widget.title}</h5>

                }
                {this.state.preview && this.props.editing && this.state.widget.size === 6 &&
                 <h6>{this.state.widget.title}</h6>

                }
            </div>
        )
    }
}

export default HeadingWidgetComponent