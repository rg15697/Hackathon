import { Box,Button,Flex,HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { ProfileInfoBar } from '../profileInfoBar.jsx/ProfileInfo'
import { StaticProfileBar } from '../profileInfoBar.jsx/StaticProfileBar'
import { ImRocket } from "react-icons/im";

const ChatSection = () => {
    const [w,setW] = React.useState(false)

 
    
  return (
    <Box style={w ? {width:"40%"} : {width:"70%"}}>
        <Flex  justifyContent="space-between" width={"100%"} border={"solid red 2px"} p={2} >
            <Box style={{cursor:"pointer"}} px={4}>
            <StaticProfileBar 
                position='right' 
                profileData = {{name:"Aaro"}} 
                onClick={()=>setW(!w)}
            /> 

            </Box>
            <HStack spacing='24px' >
                {/* <i style={{fontSize:"25px",cursor:"pointer"}} className="fa-solid fa-circle-notch"></i>
                <i style={{fontSize:"25px",cursor:"pointer"}} className="fa-solid fa-plus"></i>
                <i style={{fontSize:"25px",cursor:"pointer"}} className="fa-solid fa-ellipsis"></i> */}
            </HStack>
        </Flex>
        <Box height="80vh" border={"solid red 2px"} >

        </Box>
        <Box>
            <Flex gap={15} p={5}>
                <Input type="text" placeholder="Enter your message .........." />
                <Button backgroundColor="#179cd2" width={150} >
                    <ImRocket fontSize={25} />
                </Button>
            </Flex>
        </Box>
    </Box>
  )
}

export default ChatSection