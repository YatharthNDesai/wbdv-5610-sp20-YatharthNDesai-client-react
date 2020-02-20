import React from "react";

class ParagraphWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="p-4">

                <form className="container-fluid" style={{borderStyle: "outset"}}>
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <h3> {this.props.widget.title}</h3>
                                <h4> {this.props.widget.type}</h4>
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
                                 <button onClick={() =>
                                     this.props.save()
                                 }
                                         type="button" className="btn btn-success m-1"
                                         style={{float: "right"}}>
                                Save
                                </button>
                                 </span>
                                }
                                <select style={{float: "right"}} className="m-1">
                                    <option>
                                        Heading 1
                                    </option>
                                </select>
                                <button type="button" className="btn btn-warning m-1"
                                        style={{float: "right"}}>
                                    <i className="fa fa-arrow-down"></i>
                                </button>
                                <button type="button" className="btn btn-warning m-1"
                                        style={{float: "right"}}>
                                    <i className="fa fa-arrow-up"></i>
                                </button>
                                <label className="switch m-1" style={{float: "right"}}>
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                                <label className="m-1" style={{fontWeight: "bolder", float: "right"}}>
                                    Preview
                                </label>
                            </div>
                        </div>
                        { this.props.editing &&
                          <div>

                              <div className="form-group">
                                  <textarea></textarea>
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
                    { !this.props.editing &&
                      <h4> Preview</h4>
                    }
                    <h1>Heading text</h1>
                </form>
            </div>
        )
    }
}
export default ParagraphWidgetComponent