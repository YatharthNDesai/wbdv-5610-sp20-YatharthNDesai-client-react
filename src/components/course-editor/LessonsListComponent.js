import React from "react";

const LessonsListComponent = ({lessons}) =>




    <div className="wbdv-topic-pill-list">
        {lessons.map(lesson =>
                        <button type="button"
                                className="btn btn-secondary  m-3 container-fluid wbdv-topic-pill">
                            {lesson.title}
                        </button>)}
        <button type="button"
                className="btn btn-secondary m-3 container-fluid wbdv-topic-add-btn">
            <i className="fa fa-plus"></i>
        </button>
    </div>


export default LessonsListComponent