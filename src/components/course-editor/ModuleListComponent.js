import React from "react";


const ModuleListComponent = ({modules}) =>

        <div className="col-3 container-fluid wbdv-module-list">
            {modules.map(module => <button key={module.id} type="button"
                                           className="btn btn-secondary  m-4 container-fluid wbdv-module-item">
                <label className="wbdv-module-item-title">{module.title}
                </label>
                <a className="wbdv-module-item-delete-btn" href="#">
                    X
                </a>
            </button>)}
            <button type="button"
                    className="btn m-4 container-fluid wbdv-module-item-add-btn">
                <i className="fa fa-plus" style={{color: "white"}}></i>
            </button>
        </div>

export default ModuleListComponent