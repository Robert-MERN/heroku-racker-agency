import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import useStateContext from '../../context/contextProvider';
import IconButton from '@mui/material/IconButton';


const SlideMenu = () => {
    const { menu, closeMenu } = useStateContext();



    const navLinks = ["home", "skills", "project"]
    // navigating to sections
    const navigateTo = (sec) => {
        document.getElementById(sec).scrollIntoView({ behavior: "smooth" })
    }


    return (
        <div className={` h-screen w-screen bg-transparent inset-0 fixed z-[60] ${menu ? "translate-x-0" : "translate-x-full"} transition-all duration-400`} >
            <div className='w-full h-full relative' >
                <div className=' w-[65vw] bg-zinc-800 h-full fixed right-0 px-2 py-4 flex flex-col justify-between' >
                    <div onClick={closeMenu} className='text-gray-400 width-full px-2 py-2 flex justify-between items-center rounded-md hover:bg-zinc-700 mb-12 transition-all duration-200' >
                        <p className='text-gray-400 font-extrabold text-20 cursor-pointer select-none tracking-wider' >Racker</p>
                        <IconButton className='text-gray-400'>
                            <CloseIcon className='text-gray-400' />
                        </IconButton>
                    </div>
                    {navLinks.map((e, index) => (
                        <div key={index} onClick={() => { navigateTo(e); closeMenu() }} className='text-gray-400 width-full px-4 py-2  flex  transition-all duration-200 items-center bg-zinc-700 hover:bg-zinc-500 my-1 rounded-md border-b-1 border-zinc-700 text-17 capitalize transi' >

                            {e}
                        </div>
                    ))}
                    <div className='flex-1 flex items-end pb-12 px-2 justify-center' >
                        <p className='text-gray-400 text-14 capitalize text-center'>
                            Copyright 2022. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu