import React, { Component } from 'react'
import "./Tour.css"
//import jaigarhfort from "../.././public/.img/jaigarhfort.jpg"
export class Tour extends Component {
    state={
        showInfo:false
    };
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    }
    render() {
        const {id,city,img,name,info}=this.props.tour;
        const {removeTour}=this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img className="img-style" src={img} alt="" />
                    <span className="close-btn" onClick={() => {removeTour(id)}}>
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>City:-{city}</h3>
                    <h4>Name:-{name}</h4>
                    <h5>Info <span onClick={this.handleInfo}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></span></h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}

export default Tour
