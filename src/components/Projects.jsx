import React, { useContext, useState } from 'react'
import { AiFillFolder } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { TimpeContext } from '../context/TimpeContext'
import projects from '../data/projects'
import ProjectItem from './ProjectItem'
import Dialog from './Dialog'

function Projects() {

  const { setWhois, dialogOpen } = useContext(TimpeContext);

    return (
      <>
{/* Component navigation part */}
        <div className='flex items-center font-video border-x border-t border-bordergr4y rounded-t-lg bg-lightgr4y'>
          
          <div className='flex items-center w-1/2 pl-4 py-2 rounded-t-lg bg-lightgr4y border-b border-bordergr4y cursor-pointer'
            onClick={() => setWhois(true)}
          >
            <div className='flex items-center -ml-px'>
              <BsFillPersonFill className='mr-3 text-darkgr33n text-xl' />
              <span className='text-textgr4y tracking-wide' >Whois</span>
            </div>
          </div>

          <div className='flex items-center w-1/2 pl-4 py-2 border-l border-b border-bordergr4y border-b-darkgr4y rounded-t-lg bg-darkgr4y'>
            <div className='flex items-center -ml-px'>
              <AiFillFolder className='mr-3 text-gr33n text-xl'/>
              <span className='text-wh1te tracking-wide' >Projects</span>
            </div>
          </div>

        </div>
{/* Component content part */}
        <div className='p-4 items-center justify-center  border-bordergr4y bg-darkgr4y border-b border-x'>
          <div className='flex justify-center text-darkgr33n font-video font-regular animate-pulse'>
              <span className='mx-1 mb-4 text-gr33n font-effra'>Click a project to get more info!</span>
          </div>
          <div className='flex md:flex-row'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {/* Map projects.js here */}
              {projects.map((project, index) => (
                <ProjectItem
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  description={project.description}
                  linkdesc={project.linkdesc}
                  link={project.link}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
		
		{/* Depending on the state of dialogOpen, the Dialog component is either rendered or not. */}
        {dialogOpen.open
          ? <Dialog />
          : null
        }
      
      </>
    )
  }
  
  export default Projects
  