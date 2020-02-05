import React from "react";
import "../../stylesheets/CourseEditorComponent.css"
import ModuleListComponent from "./ModuleListComponent";
import TopicListComponent from "./TopicListComponent";
import WidgetFormContainer from "./WidgetFormContainer";

const CourseEditorComponent = ({showList}) =>
    <div>
        <div className="fixed-action-btn">
            <button className="btn btn-danger fab-container">
                <i className="fa fa-plus"></i>
            </button>
        </div>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button onClick={showList} className="btn wbdv-course-editor wbdv-close">
                    <label style={{color: "white"}}>X</label>
                </button>
                <div style={{width: "5%"}}></div>

                <a className="navbar-brand wbdv-course-title" href="#">CS5610-WebDev</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto wbdv-page-tab">
                        <li className="nav-item active">
                            <a className="nav-link wbdv-page-tab" href="#">Build <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-page-tab" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-page-tab" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-page-tab" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-page-tab" href="#">Apps</a>
                        </li>
                        <li className="nav-item wbdv-page-tab">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                    <form className="form-inline ">
                        <button className="btn  my-2 my-sm-0 wbdv-new-page-btn" type="submit">
                            <i className="fa fa-plus" style={{color: "white"}}></i>
                        </button>
                    </form>
                </div>
            </nav>
            <div className="row container-fluid">
                <ModuleListComponent
                modules={[
                    {id: "123", title: "Module1 - Jquery"},
                    {id: "234", title: "Module2 - React"},
                    {id: "345", title: "Module3 - REDUX"},
                    {id: "456", title: "Module4 - Native"},
                    {id: "567", title: "Module5 - Angular"},
                    {id: "678", title: "Module6 - Node"},
                    {id: "789", title: "Module7 - MongoDB"},


                ]}
                />
                <div className="col-9">
                    <TopicListComponent
                    topics={[
                        {id: "123", title: "Topic 1"},
                        {id: "234", title: "Topic 2"},
                        {id: "345", title: "Topic 3"},
                        {id: "456", title: "Topic 4"},

                    ]}
                    />

                    <div style={{overflow: "hidden"}}>
                        <label className="switch m-1">
                            <input type="checkbox"/>
                                <span className="slider round"></span>
                        </label>
                        <label className="m-1" style={{fontWeight: "bolder", float:"right"}}>
                            Preview
                        </label>
                        <button type="button" className="btn btn-success m-1" style={{float: "right"}}>
                            Save
                        </button>
                    </div>
                    <WidgetFormContainer/>
                </div>
            </div>
        </div>
    </div>

export default CourseEditorComponent