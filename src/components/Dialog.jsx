import React, { useContext } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { TimpeContext } from '../context/TimpeContext'

function Dialog() {

    // Context, passing boolean value to open/close dialog and data to be displayed on the dialog.
    const { setDialogOpen, dialogOpen } = useContext(TimpeContext);

    return (
      <div className='fixed inset-0 bg-gr4y bg-opacity-5 backdrop-blur-md flex justify-center items-center'>
        <div className='flex justify-center max-w-5xl'>
            <div className=' w-2/3 lg:w-1/2 border-2 border-darkgr33n rounded-lg'>
                <div className='bg-darkgr4y p-4 rounded-md'>
                    <div className='flex items-center justify-between'>

                        {/* Title and close button */}
                        <h3 className='text-wh1te font-video font-medium text-xl tracking-wide'>{dialogOpen.title}</h3>
                        <button 
                            className='text-wh1te font-medium text-2xl' 
                            onClick={() => setDialogOpen({open: false})}
                        >
                            <IoIosCloseCircle />
                        </button>
                    </div>

                    {/* Map stack */}
                    <div className='flex flex-wrap gap-2 mt-3'>
                        {dialogOpen.stack.map(item => (
                            <span className='inline-block px-2 py-1  text-[12px] font-effra font-medium border-2 border-darkgr33n rounded-md text-wh1te bg-gr4y'>
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Image and description */}
                    <div className='flex-row md:flex-row gap-4 mt-4'>
                        <img src={dialogOpen.imgUrl} alt={dialogOpen.title} className='w-full rounded-md' />
                        <div className='mt-3'>
                            <h5 className='text-gr33n tracking-wide font-video'>Description</h5>
                            <p className='text-wh1te font-effra font-regular text-md mt-2'>{dialogOpen.description}</p>
                        </div>

                    {/* Link */}
                        <div className='w-full'>
                            <a href={dialogOpen.link} target='_blank'>
                                <div className='flex justify-center mt-4 text-xs md:text-sm text-gr33n font-video font-medium tracking-wide border-2 border-darkgr33n rounded-md px-2 py-1 bg-lightgr4y hover:bg-gr33n hover:text-darkgr4y transition ease-in-out duration-200'>
                                    {dialogOpen.linkdesc}
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Dialog
  