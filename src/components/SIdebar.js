import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function SIdebar() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the sidebar when a route change occurs
  useEffect(() => {
    setIsOpen(false);
  }, [location]);



  return (
    <>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</button>
     
    </div>
    </>
  )
}
