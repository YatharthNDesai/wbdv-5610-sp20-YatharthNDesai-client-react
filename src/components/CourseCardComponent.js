import React from "react";
import "../stylesheets/CourseGridComponent.css"

class CourseCardComponent extends React.Component {

    state = {
        editing: false
    }

    render() {
        return (

            <div className="wbdv-card col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2" style={{position:"relative"}}>
                <div className="col-3" style={{position: "absolute", right: 0}}>
                    <button onClick={() => this.props.deleteCourse(this.props.course)} className="btn"
                            type="button">
                        X
                    </button>
                </div>
                    <p className="m-2 p-1" style={{border:"solid", height:"25vh"}}>
                        This is a generic Description. Might be replaced by actual content in the
                        future
                    </p>

<div className="row">
    <div className="col-1">
        <i className="fas fa-file wbdv-row wbdv-icon m-1"></i></div>

    <div className="col-4">
        {!this.state.editing &&  <a onClick={this.props.showEditor} href="#">
                    {this.props.course.title}
                </a>}
        {this.state.editing && <input style={{width:"100px"}}/>}</div>

                <div className="col-2" style={{ float:"right"}} >
                    {!this.state.editing &&
                    <button className="btn" type="btn"
                            onClick={() => {
                                this.setState({
                                                  editing: true
                                              })
                            }}>
                        <i className="fas fa-edit"></i>
                    </button>}
                </div>
    <div className="col-2">
        {this.state.editing && <button className="btn" onClick={() => {
            this.setState({
                              editing: false
                          })
        }}><i className="fa fa-save"/> </button>}
    </div>
</div>
                <div style={{position: "absolute", bottom: 2}}>
                    <div className="col-3">Modified:{this.props.course.lastModified}</div>


                </div>
            </div>

        );
    }
}

export default CourseCardComponent