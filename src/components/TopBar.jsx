import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function TopBar() {

    return (
      <div>
        <nav className='pb-4 flex items-center justify-between font-video '>
          <div className='font-bold'>
            <span className='text-gr33n text-3.5xl mr-1'>{'>'}</span>
            <span className='tracking-wider text-wh1te text-3xl'>TIMPE.Dev</span>
            <span className='tracking-wider text-wh1te text-3xl animate-blink'>_</span>
          </div>
          <div className='flex'>
            <a href='https://linkedin.com/in/tsuni/' target='_blank'>
              <AiFillLinkedin className='text-gr33n cursor-pointer transition ease-in-out delay-50 text-3xl hover:scale-105'/>
            </a>
            <a href='https://github.com/timo-suni/' target='_blank'>
              <AiFillGithub  className='text-gr33n cursor-pointer transition ease-in-out delay-50 text-3xl ml-2 hover:scale-105'/>
            </a>
          </div>
        </nav>        
        
      </div>
    )
  }
  
  export default TopBar
  