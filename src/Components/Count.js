import React,{usestate , useEffect} from 'react'
import Box from '@material-ui/core/Box';

export default function Count() {
    const [count,setCount]=usestate(0)
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
  return (
   <Box > <h1>I have rendered {count} times!</h1></Box>
  )
}
  

