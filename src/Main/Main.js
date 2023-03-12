import react from 'react';
import "./style.css"
import Navbar from '../Navigation/Navbar'

export default function Main() {
    return (
        <div>
            <div className='headerImage inline-block h-full w-full'>
                <Navbar />
                <div className="bottomHeaderInfo w-1/2 m-auto relative">
                    <div className='antonFont text-white text-center'>
                        <div className="text-[30px] sm:text-[40px] md:text-[60px] relative bottomHeaderInfo w-full">NO PAIN NO GAIN</div>
                        <p className='openSansFont text-[17px]'>Having a perfect body requires a lot of training.Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</p>
                    </div>
                    <div className='getStartedDiv'>
                        <div className='getStartedBtn font-bold border-0 w-1/5 text-center m-auto mt-7 rounded-md text-white bg-red-600 py-4 cursor-pointer hover:bg-yellow-400 hover:text-black duration-150 ease-out hover:ease-in'>GET STARTED</div>
                    </div>
                </div>
                {/* <div className='aboutInfo bg-white h-2/6'>

                </div> */}
            </div>
            <div className='newSubMainSection bg-slate-900 h-auto pb-20'> {/* h-[40rem]  */}
                <div className='infoSection w-3/4 m-auto pt-28'>
                    <div className='text-center'>
                        <div className='subMainSectionTitle mb-5 text-white fontPoppins text-2xl'>
                            What We Offer
                        </div>
                        <hr className='sectionSeperator w-[50px] m-auto border-t-2 border-red-500'></hr>
                    </div>
                    <div className='infoSectionTitles mt-28 grid sm:grid-cols-2 xl:grid-cols-4 gap-6'>
                        <div className="image-with-text relative h-60 rounded-lg">
                            <div className="image-overlay absolute inset-0 partInfoSection opacity-50 transition-opacity duration-500 object-cover transition-transform duration-500 hover:scale-105"></div>
                            <div className="text-overlay absolute inset-0 flex justify-center items-center text-white font-bold text-2xl opacity-100 transition-opacity duration-500 text-center">
                            Web Application
                            </div>
                        </div>
                        <div className="image-with-text relative h-60 rounded-lg">
                            <div className="image-overlay absolute inset-0 partInfoSection opacity-50 transition-opacity duration-500 object-cover transition-transform duration-500 hover:scale-105"></div>
                            <div className="text-overlay absolute inset-0 flex justify-center items-center text-white font-bold text-2xl opacity-100 transition-opacity duration-500 text-center">
                            Web Application
                            </div>
                        </div>
                        <div className="image-with-text relative h-60 rounded-lg">
                            <div className="image-overlay absolute inset-0 partInfoSection opacity-50 transition-opacity duration-500 object-cover transition-transform duration-500 hover:scale-105"></div>
                            <div className="text-overlay absolute inset-0 flex justify-center items-center text-white font-bold text-2xl opacity-100 transition-opacity duration-500 text-center">
                            Web Application
                            </div>
                        </div>
                        <div className="image-with-text relative h-60 rounded-lg">
                            <div className="image-overlay absolute inset-0 partInfoSection opacity-50 transition-opacity duration-500 object-cover transition-transform duration-500 hover:scale-105"></div>
                            <div className="text-overlay absolute inset-0 flex justify-center items-center text-white font-bold text-2xl opacity-100 transition-opacity duration-500 text-center">
                            Web Application
                            </div>
                        </div>
                    </div>
                </div>

            </div>
{/*             <div className='mainSectionInfo bg-[#1b1d1f] border-t-[3px] inline-block text-white'>
                <div className='infoSection grid grid-cols-2 md:grid-cols-4 gap-4 py-3'>
                    <div className='InfoPart text-center col-span-1 m-auto'>
                        <div className='infoImageSection flex justify-center items-center py-1 mb-2'>
                            <div className='infoImage rounded-full border-black border bg-red-500 h-full w-2/5 imgLogging'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Weight Logging</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                    <div className='InfoPart text-center col-span-1 m-auto'>
                        <div className='infoImageSection flex justify-center items-center py-1 mb-2'>
                            <div className='infoImage rounded-full border-black border bg-red-500 h-full w-2/5 imgDietLogging'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Nutrition Tracking/Planing</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                    <div className='InfoPart text-center col-span-1 m-auto'>
                        <div className='infoImageSection flex justify-center items-center py-1 mb-2'>
                            <div className='infoImage rounded-full border-black border bg-red-500 h-full w-2/5 imgPersonalTrainig'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Personal Training</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                    <div className='InfoPart text-center col-span-1 m-auto'>
                        <div className='infoImageSection flex justify-center items-center py-1 mb-2'>
                            <div className='infoImage rounded-full border-black border h-full w-2/5 imgOpenTwentyFourSeven'></div>
                        </div>
                        <div className='infoText'>
                            <div className='font-bold'>Open 24/7</div>
                            <div>This app offers extensive weight logging including dates reps etc...</div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='bg-slate-300 border-t-[3px] inline-block'>
                <div className='infoSection w-3/4 m-auto pt-28'>
                    <div className='text-center'>
                        <div className='subMainSectionTitle mb-5 text-black fontPoppins text-2xl'>
                            Why Us?
                        </div>
                        <hr className='sectionSeperator w-[50px] m-auto border-t-2 border-red-500'></hr>
                    </div>
                </div>
                <div className='px-10 SubMainSectionHeaderPart1 grid sm:grid-cols-2 mt-28'>
                    <div className='subMainSectionHeadera'>
                        {/* <div className='font-bold'>Title</div> */}
                        <div className=''>
                            {/* <div className='mt-2'>ext ever sier took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</div> */}
                            <div className='clearfix'>
                                <div className='w-1/6 float-left'>
                                    <div className='firstTitleIcon iconGen w-full float-left '>&#160;</div>
                                </div>
                                <div className='w-5/6 float-right'>
                                    <div className='font-bold'>First Title</div>
                                    <div className=''>Lorem ipsum asdad asd asd asd asd asd as</div>
                                </div>
                            </div>
                            <div className='clearfix mt-[40px]'>
                                <div className='w-1/6 float-left'>
                                    <div className='firstTitleIcon iconGen w-full float-left '>&#160;</div>
                                </div>
                                <div className='w-5/6 float-right'>
                                    <div className='font-bold'>First Title</div>
                                    <div className=''>Lorem ipsum asdad asd asd asd asd asd as</div>
                                </div>
                            </div>
                            <div className='clearfix mt-[40px]'>
                                <div className='w-1/6 float-left'>
                                    <div className='firstTitleIcon iconGen w-full float-left '>&#160;</div>
                                </div>
                                <div className='w-5/6 float-right'>
                                    <div className='font-bold'>First Title</div>
                                    <div className=''>Lorem ipsum asdad asd asd asd asd asd as</div>
                                </div>
                            </div>
                            <div className='clearfix mt-[40px]'>
                                <div className='w-1/6 float-left'>
                                    <div className='firstTitleIcon iconGen w-full float-left'>&#160;</div>
                                </div>
                                <div className='w-5/6 float-right'>
                                    <div className='font-bold'>First Title</div>
                                    <div className=''>Lorem ipsum asdad asd asd asd asd asd as</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='subMainSectionHeader h-3/4 subMainSectionHeaderRight'>
                        <div className='imgSubHeaderInfo'></div>
                    </div>
                </div>
                <div className='reviewSection SubMainSectionHeaderPart2 mt-7 mb-2 clearfix'>
                    <div className='Icon iconGenPartReview w-1/6 float-left'>&#160;</div>
                    <div className='reviewData w-5/6 float-right'>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</div>
                    </div>
                </div>
            </div>
            <div className='footer contactSection relative bg-sky-500 pt-10 pb-2 border-t-[3px]'>
                <div className='flex m-auto mx-20 justify-around'>
                    <div className='contactForm w-1/2 px-4 border-r-2'>
                        <div className='divForm'>
                            <form>
                                <h4 className='text-center'>Contact Us For Anything!</h4>
                                <div className='field flex my-2 space-x-4'>
                                    <div className='w-full'><input className='w-full' placeholder='First Name'/></div>
                                    <div className='w-full'><input className='w-full' placeholder='Last Name'/></div>
                                </div>
                                <div className='field flex my-2 space-x-4'>
                                    <div className='w-full'><input className='w-full' placeholder='Country'/></div>
                                    <div className='w-full'><input className='w-full' placeholder='Title'/></div>
                                </div>
                                <div className='field flex my-2 space-x-4 h-24'>
                                    <div className='w-full h-full'><textarea className='w-full h-full px-2' placeholder='Note'/></div>
                                </div>
                                <div className='submitBtn text-center my-2'>
                                    <input type="submit" placeholder='SUBMIT' className='rounded-lg bg-emerald-400 text-zinc-200 px-9 py-1 w-full'/>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className='addressDiv w-2/5'>
                        <div className='h-full flex flex-col justify-center'>
                            <div className='rowAddress mt-[10px] flex'>
                                <div className='w-1/6'>
                                    <div className='iconPhone iconGen w-full float-left '>&#160;</div>
                                </div>
                                <div className='w-5/6'>
                                    <div className='font-bold'>Phone:</div>
                                    <div className=''>(972+) 547 321 012</div>
                                </div>
                            </div>
                            <div className='rowAddress mt-[10px] flex '>
                                <div className='w-1/6'>
                                    <div className='iconAddress iconGen w-full float-left '>&#160;</div>
                                </div>
                                <div className='w-5/6'>
                                    <div className='font-bold'>Address:</div>
                                    <div className=''>112 Igal Alon st., Space Tower 4, Fl. 15, Tel Aviv, 67878911, Israel</div>
                                </div>
                            </div>
                            <div className='rowAddress mt-[10px] flex'>
                                <div className='w-1/6'>
                                    <div className='iconEmail iconGen w-full float-left'>&#160;</div>
                                </div>
                                <div className='w-5/6'>
                                    <div className='font-bold'>Email:</div>
                                    <div className=''>FitnessWeb@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}