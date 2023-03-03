import React from 'react';

function Footer() {

    return (
      <div className='flex justify-center mt-3 text-darkgr33n font-video font-thin text-sm'>
        <span>&copy; {new Date().getFullYear()}</span>
        <span className='mx-1 text-gr33n'>Timpe.Dev</span>
        <span>All Rights Reserved</span>
      </div>
    )
  }
  
  export default Footer
  