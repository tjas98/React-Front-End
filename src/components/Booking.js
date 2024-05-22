import React, { useEffect } from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {

    return (
        <div className="booking-div">
            
           
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
            
            
        </div>



    )
}

export default Booking;