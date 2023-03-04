import react from 'react';
import "./style.css"
import Navbar from '../Navigation/Navbar'

export default function Main() {
    return (
        <div>
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
            <div className='mainSectionInfo bg-white border-t-[3px]'>
                {/* <div className='infoSection grid sm:max-2xl:grid-cols-4 sm:grid-cols-2 gap-4 h-full'> */}
                <div className='infoSection grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 h-full'>
                {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 */}
                    <div className='InfoPart text-center col-span-1 m-auto'>{/* change it later for a component! */}
                        <div className='infoImageSection h-32 flex justify-center items-center py-1'>
                            <div className='infoImage rounded-full border-black border bg-red-500 h-full w-2/5 imgLogging'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Weight Logging</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                    <div className='InfoPart text-center col-span-1 m-auto'>{/* change it later for a component! */}
                        <div className='infoImageSection h-32 flex justify-center items-center py-1'>
                            <div className='infoImage rounded-full border-black border bg-red-500 h-full w-2/5 imgDietLogging'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Nutrition Tracking/Planing</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                    <div className='InfoPart text-center col-span-1 m-auto'>{/* change it later for a component! */}
                        <div className='infoImageSection h-32 flex justify-center items-center py-1'>
                            <div className='infoImage rounded-full border-black border bg-red-500 h-full w-2/5 imgPersonalTrainig'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Personal Training</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                    <div className='InfoPart text-center col-span-1 m-auto'>{/* change it later for a component! */}
                        <div className='infoImageSection h-32 flex justify-center items-center py-1'>
                            <div className='infoImage rounded-full border-black border h-full w-2/5 imgOpenTwentyFourSeven'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Open 24/7</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subMainSectionInfo bg-slate-300 border-t-[3px]'>
                <div className='w-1/2 mt-[40px]'>
                    <div className='w-3/4 m-auto font-bold'>Title</div>
                </div>
                <div className='subMainSectionHeader w-1/2 float-left'>
                    <div className=''>
                        <div className='w-3/4 m-auto mt-2'>ext ever sier took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</div>
                    </div>
                </div>
                <div className='subMainSectionHeader w-1/2 float-right'>
                    <div className='imgSubHeaderInfo'></div>
                </div>
            </div>
        </div>
        
    )
}