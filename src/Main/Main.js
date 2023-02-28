import react from 'react';
import "./style.css"
import Navbar from '../Navigation/Navbar'

export default function Main() {
    return (
        <div className='headerImage'>
            <Navbar />
            <div className="bottomHeaderInfo">
                <div>
                    <div className="font-bold">Web Services</div>
                    <p>some text with a header like achieve greatness with out app some motivation sort pf</p>
                </div>
            </div>
            {/* <div className='aboutInfo bg-white h-2/6'>

            </div> */}
        </div>
    )
}