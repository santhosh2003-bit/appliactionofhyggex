import React from 'react'
import hyggexlogo from '../../asserts/hyggexlogo.png'
import './Home.css'
import refresh from '../../asserts/loading.png'
import leftarrow from '../../asserts/leftarrow.png'
import rightarrow from '../../asserts/rightarrow.png'
import plus from '../../asserts/plus.png'
import box from '../../asserts/box.png'
import logo from '../../asserts/logo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Home = () => {
    return (
        <div className='sm:w-fit lg:w-screen h-full bg-truegray-50 pt-6 pb-6 pl-20 pr-20 '>
            <div className='w-full flex flex-col  gap-16 '>
                <div className='flex justify-between items-center gap-5'>
                    <img src={hyggexlogo} alt="hyggexlogo" className='h-10 w-48 cursor-pointer' />
                    <div className='flex space-x-10'>

                        <ul className='text-gray-700 text-[18px] font-[400]  flex items-center gap-10'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Flashcard</li>
                            <li className='cursor-pointer'>Contact</li>
                            <li className='cursor-pointer'>FAQ</li>
                        </ul>
                        <button className='bg-gradient-to-b from-indigo-900 to-blue-800 rounded-[24px] text-xl font-normal text-white min-w-[128px] pr-[35px] pl-[35px] h-[48px] flex flex-row items-center justify-center text-center cursor-pointer' >Login</button>
                    </div>
                </div>

                <div className='flex flex-col items-start w-full gap-16'>

                    <div className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-[30px] h-[30px]' viewBox='0 0 30 30' fill='none'>

                            <path d="M24.5738 11.7175L15.8238 4.06123C15.5958 3.86151 15.3031 3.7514 15 3.7514C14.6969 3.7514 14.4042 3.86151 14.1763 4.06123L5.42625 11.7175C5.29221 11.8349 5.18483 11.9797 5.11132 12.142C5.0378 12.3043 4.99985 12.4805 5 12.6587V23.7487C5 24.0802 5.1317 24.3982 5.36612 24.6326C5.60054 24.867 5.91848 24.9987 6.25 24.9987H11.25C11.5815 24.9987 11.8995 24.867 12.1339 24.6326C12.3683 24.3982 12.5 24.0802 12.5 23.7487V18.7487C12.5 18.4172 12.6317 18.0993 12.8661 17.8648C13.1005 17.6304 13.4185 17.4987 13.75 17.4987H16.25C16.5815 17.4987 16.8995 17.6304 17.1339 17.8648C17.3683 18.0993 17.5 18.4172 17.5 18.7487V23.7487C17.5 24.0802 17.6317 24.3982 17.8661 24.6326C18.1005 24.867 18.4185 24.9987 18.75 24.9987H23.75C24.0815 24.9987 24.3995 24.867 24.6339 24.6326C24.8683 24.3982 25 24.0802 25 23.7487V12.6587C25.0002 12.4805 24.9622 12.3043 24.8887 12.142C24.8152 11.9797 24.7078 11.8349 24.5738 11.7175Z" stroke="#696671" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-[24px] h-[24px]' viewBox='0 0 24 24' fill='none'>

                            <path d="M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z" fill="#06286E"></path>
                        </svg>
                        <p className='text-xl text-gray-500 font-[500]'>Flashcard</p>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-[24px] h-[24px]' viewBox='0 0 24 24' fill='none'>

                            <path d="M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z" fill="#06286E"></path>
                        </svg>
                        <p className='text-xl text-gray-500 font-[500]'>Mathematics</p>
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-[24px] h-[24px]' viewBox='0 0 24 24' fill='none'>

                            <path d="M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z" fill="#06286E"></path>
                        </svg>
                        <p className='text-xl text-indigo-900 font-[600]'>Relation and Function</p>
                    </div>
                    <p className='text-[32px] font-[700] text-gradient'>Relations and Functions ( Mathematics )</p>
                    <div className='mt-11 flex flex-col w-full items-center gap-10 self-center sm-flex-col justify-center'>
                        <div className='flex'>
                            <div className='flex flex-col gap-2 sm:self-stretch sm:p-5 '>
                                <div className='flex px-3'>
                                    <h1 className='font-[700] text-xl text-indigo-900 cursor-pointer' >Study</h1>
                                </div>
                                <div className='h-[2px] bg-indigo-900'></div>
                            </div>

                            <div className='flex  flex-col gap-2 sm:self-stretch sm:p-5'>
                                <div className='flex px-3'>
                                    <h1 className='font-[500] text-xl text-gray-500 cursor-pointer'>Quiz</h1>
                                </div>

                            </div>
                            <div className='flex  flex-col gap-2 sm:self-stretch sm:p-5'>
                                <div className='flex px-3'>
                                    <h1 className='font-[500] text-xl text-gray-500 cursor-pointer'>Test</h1>
                                </div>

                            </div>
                            <div className='flex  flex-col gap-2 sm:self-stretch sm:p-5'>
                                <div className='flex px-3'>
                                    <h1 className='font-[500] text-xl text-gray-500 cursor-pointer'>Game</h1>
                                </div>

                            </div>
                            <div className='flex  flex-col gap-2 sm:self-stretch sm:p-5'>
                                <div className='flex px-3'>
                                    <h1 className='font-[500] text-xl text-gray-500 cursor-pointer'>Others</h1>
                                </div>

                            </div>
                        </div>

                        <div className='w-full flex  justify-center'>
                            <div className='w-full flex justify-center flex-col'>

                                <div className='flex justify-center'>

                                    <div className='bg-gradient-custom flex items-start justify-between gap-[32px] pt-[34px] pl-[80px] pb-[171px] pr-[80px] rounded-[42px] w-[800px] cursor-pointer'>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='w-[35px] h-[35px]' viewBox='0 0 35 35' fill='none'>

                                            <path d="M13.125 30.625C13.125 31.4271 13.7813 32.0833 14.5833 32.0833H20.4167C21.2188 32.0833 21.875 31.4271 21.875 30.625V29.1667H13.125V30.625ZM17.5 2.91667C11.8708 2.91667 7.29168 7.49583 7.29168 13.125C7.29168 16.5958 9.0271 19.6437 11.6667 21.4958V24.7917C11.6667 25.5937 12.3229 26.25 13.125 26.25H21.875C22.6771 26.25 23.3333 25.5937 23.3333 24.7917V21.4958C25.9729 19.6437 27.7083 16.5958 27.7083 13.125C27.7083 7.49583 23.1292 2.91667 17.5 2.91667ZM21.6563 19.1042L20.4167 19.9792V23.3333H14.5833V19.9792L13.3438 19.1042C12.3776 18.4344 11.5878 17.5407 11.0419 16.4996C10.4959 15.4584 10.2099 14.3006 10.2083 13.125C10.2083 9.1 13.475 5.83333 17.5 5.83333C21.525 5.83333 24.7917 9.1 24.7917 13.125C24.7917 15.5021 23.625 17.7333 21.6563 19.1042Z" fill="#F5F5F5"></path>
                                        </svg>
                                        <h1 className='mt-[141px] font-[700] text-[38.26px] text-white'>9 + 6 + 7x - 2x - 3</h1>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='w-[35px] h-[35px]' viewBox='0 0 35 35' fill='none'>

                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4167 7.71454V4.71038C26.2646 6.03746 30.625 11.2583 30.625 17.5C30.625 23.7416 26.2646 28.9625 20.4167 30.2895V27.2854C24.6313 26.0312 27.7083 22.1229 27.7083 17.5C27.7083 12.877 24.6313 8.96871 20.4167 7.71454ZM4.37502 13.125V21.875H10.2083L17.5 29.1666V5.83329L10.2083 13.125H4.37502ZM24.0625 17.5C24.0622 16.2781 23.7208 15.0805 23.0766 14.0422C22.4325 13.0038 21.5113 12.1659 20.4167 11.6229V23.3625C22.575 22.2979 24.0625 20.0812 24.0625 17.5Z" fill="#F5F5F5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center'>

                                    <div className='w-[45%] mt-5 flex justify-between items-center'>
                                        <img src={refresh} alt="refresh" className='w-[30px] h-[30px] cursor-pointer' />

                                        <img src={leftarrow} alt="leftarrow" className='w-[60px] h-[60px] cursor-pointer' />
                                        <h1 className='font-[700] text-[24px] text-gray-800 cursor-pointer'>01/10</h1>
                                        <img src={rightarrow} alt="rightarrow" className='w-[60px] h-[60px] cursor-pointer' />
                                        <img src={box} alt="plus" className='w-[30px] h-[30px] cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flexcontainer flex items-center'>
                        <div className='w-max p-4 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                            <img src={logo} alt="companylogo" className='h-[34px] cursor-pointer' />
                        </div>
                        <div className='cursor-pointer'>
                            <p className='font-[700] text-[12.4px] text-zinc-500 relative top-6 left-10 '>Published by</p>
                            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg" className='relative top-8 left-10'>
                                <path d="M3.17789 3.18076H0.0973994V25.3067H3.17789V14.8529H16.3994V25.3067H19.4799V3.18076H16.3994V11.9583H3.17789V3.18076Z" fill="#06286E"></path>
                                <path d="M20.0471 8.91018L27.3454 25.3065C26.6871 27.6231 25.82 28.3846 23.7255 28.3846C23.3068 28.3846 22.7683 28.324 22.0209 28.202V31.0058C22.9178 31.0967 23.576 31.1279 24.0244 31.1279C28.0027 31.1279 28.6609 29.6342 30.605 25.1844L37.7241 8.91018H34.3447L28.9905 22.7164L23.5166 8.91018H20.0471Z" fill="#06286E"></path>
                                <path d="M51.7518 8.91051V11.5923C50.466 9.58119 48.312 8.39214 45.4999 8.39214C40.4456 8.39214 36.9158 12.0189 36.9158 17.1394C36.9158 22.2286 40.415 25.7637 45.5305 25.7637C48.1022 25.7637 50.077 24.8196 51.7518 22.8993V23.448C51.7518 27.0133 50.1067 28.4455 45.7097 28.4455C43.0479 28.4455 41.5523 27.6234 41.2533 25.8554H37.9927C38.3214 29.2685 40.9841 31.1888 45.68 31.1888C51.9607 31.1888 54.6531 28.7198 54.6531 23.2039V8.91051H51.7518ZM45.9492 11.1354C49.6582 11.1354 51.9607 13.3906 51.9607 17.1394C51.9607 20.8267 49.6582 23.0213 45.9492 23.0213C42.2402 23.0213 39.9665 20.857 39.9665 17.1394C39.9665 13.3906 42.2402 11.1354 45.9492 11.1354Z" fill="#06286E"></path>

                                <path d="M70.8937 8.91051V11.5923C69.6079 9.58119 67.454 8.39214 64.6418 8.39214C59.5875 8.39214 56.0577 12.0189 56.0577 17.1394C56.0577 22.2286 59.5569 25.7637 64.6724 25.7637C67.2441 25.7637 69.2189 24.8196 70.8937 22.8993V23.448C70.8937 27.0133 69.2486 28.4455 64.8516 28.4455C62.1898 28.4455 60.6942 27.6234 60.3952 25.8554H57.1346C57.4633 29.2685 60.126 31.1888 64.8219 31.1888C71.1026 31.1888 73.795 28.7198 73.795 23.2039V8.91051H70.8937ZM65.0911 11.1354C68.8001 11.1354 71.1026 13.3906 71.1026 17.1394C71.1026 20.8267 68.8001 23.0213 65.0911 23.0213C61.3821 23.0213 59.1084 20.857 59.1084 17.1394C59.1084 13.3906 61.3821 11.1354 65.0911 11.1354Z" fill="#06286E"></path>
                                <path d="M92.7877 17.7183V17.1394C92.7877 11.6841 89.5271 8.39214 84.0235 8.39214C78.6396 8.39214 75.1998 11.8364 75.1998 17.1394C75.1998 22.4112 78.6099 25.7637 84.0235 25.7637C88.3007 25.7637 91.3821 23.7526 92.5185 20.2175H89.1381C88.4808 22.0158 86.5664 23.0213 84.0235 23.0213C80.5837 23.0213 78.2803 20.9185 78.2803 17.7183H92.7877ZM78.3406 15.6155C78.8188 12.8116 80.943 11.1354 84.0235 11.1354C87.1346 11.1354 89.2282 12.8419 89.6766 15.6155H78.3406Z" fill="#06286E"></path>
                                <path d="M92.1611 3.18076L100.686 14.0914L91.7424 25.3067H98.5616L103.946 18.2054L109.001 25.3067H116L107.147 14.0309L115.701 3.18076H109.001L104.006 10.0986L99.0109 3.18076H92.1611Z" fill="#06286E"></path>

                                <path d="M115.8389 3.18076L107.3139 14.0914L116.2576 25.3067H109.4384L104.054 18.2054L99.0001 25.3067H92.0001L100.853 14.0309L92.2988 3.18076H99.0001L104.994 10.0986L109.989 3.18076H115.8389Z" fill="#06286E"></path>

                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <img src={plus} alt="pluslogo" className='w-[60px] h-[60px] cursor-pointer' />
                        <h1 className='text-4xl text-indigo-900 font-[700] text-[28px] cursor-pointer'>Create Flashcard</h1>
                    </div>
                </div>

                <div className='flex flex-col items-start w-full '>
                    <h1 className='text-4xl text-indigo-900 font-[700] text-[50px] mb-[60px]'>FAQ</h1>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='flex items-center justify-between gap-5 border-2 border-blue-800 w-[60%] p-4 rounded-xl cursor-pointer'>
                            <h1 className='text-xl font-[600]'>Can education flashcards be used for all age groups?</h1>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className='flex items-center justify-between gap-5 border-2 border-blue-800 w-[60%] p-4 rounded-xl cursor-pointer'>
                            <h1 className='text-xl font-[600]'>Can education flashcards be used for all age groups?</h1>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className='flex items-center justify-between gap-5 border-2 border-blue-800 w-[60%] p-4 rounded-xl cursor-pointer'>
                            <h1 className='text-xl font-[600]'>Can education flashcards be used for all age groups?</h1>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home