import React from 'react'
import "./roomreservation.css";



function roomreservation() {
  return (
    <div>
        <div>
        {/* start of rooms */}
            <div className="check">
                <div className="checklb">
                    <label>Check In</label>
                    <input type="date" name="check-in" className="checkinp" id="check-in" />
                </div>
            <div className="checklb">
                    <label>Check Out</label>
                    <input type="date" name="check-out" className="checkinp" id="check-out" />
                </div>
            <div className="checklb">
                    <label className="checklb">Rooms</label>
                    <select className="secroom" name="rooms" id="rooms">
                        <option className="optroom" value="royal room">Royal Room</option>
                        <option className="optroom" value="deluxe room">Deluxe Room</option>
                        <option className="optroom" value="double room">Double Room</option>
                        <option className="optroom" value="single room">Single Room</option>
                    </select>
                
            </div>
            <input type="button" value="SEARCH" id="sbtn" />
        </div>

        <div className="rooms">
        <h1>OUR ROOMS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit!</p>

        <div className="roomimages">

            <span className="innerimg">
                <img src="https://bit.ly/49ZinMm" className="img2" alt="Room 1" />
                <p className="h11">Double Room</p>
                <p className="pricetag">89$ / Night</p>
            </span>

            <span className="innerimg">
                <img src="https://bit.ly/3UD6zLF" className="img2" alt="Room 2" />
                <p className="h11">Single Room</p>
                <p className="pricetag">99$ / Night</p>
            </span>
            {/* Add similar spans for other rooms */}

            <span className="innerimg">
                <img src="https://bit.ly/3WmOEdd" className="img2" alt="Room 3" />
                <p className="h11">Deluxe Room</p>
                <p className="pricetag">109$ / Night</p>
            </span>

            <span className="innerimg">
                <img src="https://bit.ly/3Uk5IxT" className="img2" alt="Room 4" />
                <p className="h11">Royal Room</p>
                <p className="pricetag">129$ / Night</p>
            </span>

            </div>

        </div>
      {/* end of rooms */}
      
    </div>
      
</div>
  )
}

export default roomreservation
