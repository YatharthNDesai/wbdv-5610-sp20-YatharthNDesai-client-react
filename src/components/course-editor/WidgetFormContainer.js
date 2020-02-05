import React from "react";

const WidgetFormContainer = () =>

        <div className="p-4">

            <form className="container-fluid" style={ {borderStyle: "outset"}}>
                <div>
                    <div className="row">
                        <div className="col-6">
                            <h3> Heading Widget</h3>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-danger m-1"
                                    style={{float: "right"}}>
                                <i> X</i>
                            </button>
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
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control " type="text"
                               placeholder="Heading text"/>
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option>
                                Header 1
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text"
                               placeholder="Widget name"/>
                    </div>
                </div>
                <h4> Preview</h4>
                <h1>Heading text</h1>
            </form>
        </div>


export default WidgetFormContainer