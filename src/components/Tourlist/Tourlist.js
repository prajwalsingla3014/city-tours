import React, { Component } from 'react'
import "./Tourlist.css"
import Tour from "../Tour/Tour"
import tourdata from "./tourdata"
export default class Tourlist extends Component {
    state={
        tours:tourdata
    };
    removeTour = id => {
        const {tours}=this.state;
        const sortedTour=tours.filter(tour => tour.id !== id)
        this.setState({
            tours:sortedTour
        })
    }
    render() {
        const {tours}=this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}
