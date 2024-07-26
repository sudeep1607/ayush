import { useEffect } from "react";

const EventSocial = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])
    return (
      <>
        <h3 className='link-container-text'> Social Events</h3>
      </>
    );
  }
  
  export default EventSocial;
  