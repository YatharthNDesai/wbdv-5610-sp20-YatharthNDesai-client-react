import React from "react";
import "../stylesheets/CourseGridComponent.css"

class CourseCardComponent extends React.Component {

    render() {
        return (

            <div className="wbdv-card col-xs-11 col-sm-5 col-md-8 col-lg-8 col-xl-2 m-1" style={{position:"relative"}}>
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
        <i className="fas fa-file wbdv-row wbdv-icon m-2"></i></div>
    <div className="col-6">
                <a onClick={this.props.showEditor} href="#">
                    {this.props.course.title}
                </a></div>

                <div className="col-2" style={{ float:"right"}} >
                    <button className="btn" type="btn">
                        <i className="fas fa-edit"></i>
                    </button>
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