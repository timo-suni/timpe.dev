import React, { useContext } from 'react'
import { TimpeContext } from '../context/TimpeContext';

function ProjectItem({title, imgUrl, description, stack, linkdesc, link}) {

    // Context, 
    const { setDialogOpen } = useContext(TimpeContext);

	// Open the dialog function which is run onClick on the project title or image.
    const openDialog = () => {
      setDialogOpen({
					open: true, 
					title: title, 
					imgUrl: imgUrl, 
					description: description, 
					stack: stack, 
					linkdesc: linkdesc, 
					link: link
					})
    }

    return (
      <div className='border-2 border-bordergr4y rounded-md overflow-hidden'>
        <a onClick={openDialog}>
          <img 
              src={imgUrl} 
              alt='project' 
              className='w-full h-36, md:h-48 object-cover cursor-pointer grayscale' 
          />
        </a>
        <div className='w-full p-4'>
          <a onClick={openDialog}>
            <h3 className='text-lg text-wh1te font-video md:text-xl mb-2 md:mb-3 tracking-wide cursor-pointer'>{title}</h3>
          </a>
            <p className='flex flex-wrap gap-2 mb-1 flex-row items-center justify-start text-xs md:mb-0 md:text-sm'>
                {stack.map(item => (
                    <span className='inline-block mb-2 px-2 py-1 font-effra font-medium border-2 border-darkgr33n rounded-md text-wh1te bg-gr4y'>{item}</span>
                ))}
            </p>
            <a href={link} target='_blank' className='text-xs md:text-sm text-gr33n font-video font-medium border-2 border-darkgr33n rounded-md px-2 py-1 bg-lightgr4y tracking-wide hover:bg-gr33n hover:text-darkgr4y transition ease-in-out duration-300'>
              {linkdesc}
            </a>
        </div>
      </div>
    )
  }
  
  export default ProjectItem
  