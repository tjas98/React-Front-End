import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";


const Main = () => {

    const navigate = useNavigate()

    const fetchAPI = () => {
        var result = [];
        for (var i = 17; i < 23; i++) {
            if (Math.random() < 0.5) {
                result.push(i + ':00')
            }
        }
        return result;
    }

    const initialState = {availableTimes: fetchAPI()}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes() {
        return {availableTimes: fetchAPI()}
    }

    const submitAPI = function(formData) {
        return true;
    }

    function submitForm(formData) {
        navigate('/confirmed')
    }

    

    return (
        
       <main>
            <Routes>
                <Route path="/" element={<Header />}/>
                <Route path="/book" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path="/confirmed" element={<ConfirmedBooking />}/>
            </Routes>
       </main>
    )
};

export default Main;