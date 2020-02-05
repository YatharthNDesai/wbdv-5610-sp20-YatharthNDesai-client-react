import React from "react";


class courseRowComponent extends React.Component {
    render() {
        return(
            <tr className="my-row">
                <td className="wbdv-row wbdv-title">
                    <i className="fas fa-file wbdv-row wbdv-icon"></i>
                    <a onClick={this.props.showEditor} href="#">
                        {this.props.course.title}
                    </a>
                </td>

                <td className="wbdv-row wbdv-owner">{this.props.course.owner}</td>
                <td className="wbdv-row wbdv-last-modified">{this.props.course.lastModified}</td>
                <td className="wbdv-empty"></td>
                <td className="wbdv-row wbdv-button wbdv-delete">
                    <button onClick={() => this.props.deleteCourse(this.props.course)} className="btn" type="button">
                        <label>X</label>
                    </button>
                </td>
            </tr>
        )
    }

}


export default courseRowComponent