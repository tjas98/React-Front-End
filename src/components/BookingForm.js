import React, { useEffect, useState } from "react";

const BookingForm = (props) => {

    var curr = new Date();
    curr.setDate(curr.getDate());
    var datum = curr.toISOString().substring(0,10);

    const [occasion, setOccasion] = useState("")
    const [guests, setGuests] = useState(2)
    const [date, setDate] = useState(datum)
    const [times, setTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleDate = (e) => {
        setDate(e)
        props.dispatch();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="book-date">Choose date:</label>
                    <input value={date} onChange={(e) => handleDate(e.target.value)} id="book-date" type="date" required></input>
                </div>

                <div>
                    <label htmlFor="book-time">Choose time:</label>
                    <select id="book-time"  required>
                        <option value={time} onChange={(e) => setTime(e.target.value)}>Select a time</option>
                        {times.map(e => 
                        <option 
                                disabled={!props.availableTimes.availableTimes.includes(e)}
                                >{e}
                                </option>
                        )}
                    </select>
                </div>
                
                <div>
                    <label htmlFor="boog-guests">Number of guests: </label>
                    <input value={guests} onChange={(e) => setGuests(e.target.value)} id="book-guests" type="number" min="1" max="10"/>
                </div>

                <div>
                    <label htmlFor="book-occasion">Choose occasion:</label>
                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)} id="book-occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <div className="btnReceive">
                    <input type="submit" value="Make reservation"/> 
                </div>



            </form>

        </div>
    )
}

export default BookingForm;