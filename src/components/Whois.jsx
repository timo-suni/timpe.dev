import React, { useContext } from 'react'
import { AiFillFolder } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { TimpeContext } from '../context/TimpeContext'
import Skills from '../data/skills'

function Whois() {
  // Context
  const { setWhois } = useContext(TimpeContext);

    return (
      <>
{/* Component navigation part */}
        <div className='flex items-center font-video border-x border-t border-bordergr4y rounded-t-lg bg-lightgr4y'>
          <div 
            className='flex items-center w-1/2 pl-4 py-2 border-r border-b border-bordergr4y border-b-darkgr4y rounded-t-lg bg-darkgr4y' 
          >
            <div className='flex items-center -ml-px'>
              <BsFillPersonFill className='mr-3 text-gr33n text-xl' />
              <span className='text-wh1te tracking-wide' >Whois</span>
            </div>
          </div>
          <div 
            className='flex items-center w-1/2 pl-4 py-2 bg-lightgr4y rounded-t-lg border-b border-bordergr4y cursor-pointer'
            onClick={() => setWhois(false)}
          >
            <div className='flex items-center '>
              <AiFillFolder className='mr-3 text-darkgr33n text-xl'/>
              <span className='text-textgr4y tracking-wide'>Projects</span>
            </div>
          </div>
        </div>

{/* Component content part */}
        <div className='w-full py-4 px-5 divide-x-0 border-bordergr4y font-effra bg-darkgr4y border-b border-x'>
          <h4 className='mb-3 font-video text-gr33n tracking-wide'>
            Hello World!
          </h4>
          <p className='text-wh1te font-regular'>
            Hi, My name is Timo and this site is here mainly to present some of my skills and projects to you.  Below you will find info about my studies/hobbies so far. 
          </p>
          <p className='italic text-darkgr33n mt-1'> PS. this site itself is created with React using TailwindCSS.</p>
          <hr className='my-4 h-px border-0 bg-hrcolor'/>
          {/* Map skills.js here */}
          <div>
            {Skills.map((skill, index) => (
              <div key={index} className='w-full mb-5 font-effra bg-darkgr4y'>
                <h4 className='mb-2 font-video text-gr33n tracking-wide'>
                  {skill.title}
                </h4>
                <span className='text-wh1te font-regular'>
                  {skill.content}
                </span>
                <br />
                <span className='italic text-darkgr33n'> {skill.italic}</span>
                <hr className='my-4 h-px border-0 bg-hrcolor'/>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default Whois