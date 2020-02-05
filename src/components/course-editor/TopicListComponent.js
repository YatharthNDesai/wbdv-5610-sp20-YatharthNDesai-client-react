import React from "react";

const TopicListComponent = ({topics}) =>




        <div className="wbdv-topic-pill-list">
            {topics.map(topic =>
                            <button type="button"
                                    className="btn btn-secondary  m-3 container-fluid wbdv-topic-pill">
                                {topic.title}
                            </button>)}
            <button type="button"
                    className="btn btn-secondary m-3 container-fluid wbdv-topic-add-btn">
                <i className="fa fa-plus"></i>
            </button>
        </div>


export default TopicListComponent