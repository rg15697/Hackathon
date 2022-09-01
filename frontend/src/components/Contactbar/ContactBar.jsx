import { ChevronDownIcon, LockIcon, Search2Icon } from '@chakra-ui/icons'
import { Input,Flex,Box,Avatar,HStack,Text,VStack ,  Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    Button,
    MenuOptionGroup,
    MenuDivider,} from '@chakra-ui/react'

import React from 'react'
import {BsFillCaretDownFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { ProfileInfoBar } from '../profileInfoBar.jsx/ProfileInfo';

const ContactBar = () => {
    const [id,setId] = React.useState("")
    const [serach,setSearch] = React.useState("")
    let contactData = [{userName:"Aaro",mobile:"9532334248",about:"Health is welth"},
    {_id:1,userName:"Aaro1",mobile:"95323314248",about:"Health is welth",img:'https://bit.ly/dan-abramov'},
    {_id:2,userName:"Aaro2",mobile:"95323314248",about:"Health is welth",img:'https://bit.ly/dan-abramov'},
    {_id:3,userName:"Aaro3",mobile:"95323314248",about:"Health is welth",img:'https://bit.ly/dan-abramov'},
    {_id:4,userName:"Aaro4",mobile:"95312334248",about:"Health is welth",img:'https://bit.ly/dan-abramov'},
    {_id:5,userName:"Aaro5",mobile:"95323134248",about:"Health is welth",img:'https://bit.ly/dan-abramov'},
    {_id:6,userName:"Aaro6",mobile:"95312334248",about:"Health is welth",img:'https://bit.ly/dan-abramov'},
    {_id:7,userName:"Aaro7",mobile:"95321334248",about:"Health is welth",img:'https://bit.ly/dan-abramov'}
]

    const handleChange = (e) => {

    }

  return <Box w="30%" height={"100vh"} borderRight="2px solid black">
        {/* =================TOPBAr===================== */}
        <Flex justifyContent="space-between" width={"100%"} borderBottom={"1px solid #dddd"}  p={2}  >
            <Box style={{cursor:"pointer"}}>
            <ProfileInfoBar position='left' profileData = {{name:"Aaro"}} /> 
               {/* <Avatar 
                    name='Dan Abrahmov' 
                    src='https://bit.ly/dan-abramov'
                    onClick={()=>setUserShow(true)} 
                /> */}
            </Box>
            <HStack spacing='24px' >
                <i style={{fontSize:"25px",cursor:"pointer"}} className="fa-solid fa-circle-notch"></i>
                <i style={{fontSize:"25px",cursor:"pointer"}} className="fa-solid fa-plus"></i>
                
                <Menu>
                    <MenuButton  >
                    <i style={{fontSize:"25px",cursor:"pointer"}} className="fa-solid fa-ellipsis"> </i>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>New Group</MenuItem>
                        <MenuItem>Setting</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
               
            </HStack>
        </Flex>

        {/* ===================INPUT Search bar================== */}

        <Flex direction={"row"} width={"100%"} borderTop={"1px solid #dddd"} borderBottom={"1px solid #dddd"} p={2}>
            <Flex justifyContent="space-between" width={"100%"}>
                <Search2Icon style={{fontSize:"23px",marginTop:"7px",marginRight:"5px"}} />
                <Input 
                   style={{cursor:"pointer"}}
                   width="100%"
                   marginRight={5}
                   type="text" 
                   placeholder="Search or start new chat" 
                   onChange={handleChange}
                />
                <Box position="relative" right={0} ><BsFillCaretDownFill style={{fontSize:"25px",marginTop:"7px",cursor:"pointer"}} /></Box>
            </Flex>
            <HStack></HStack>
            
        </Flex>

        {/* =========================Contact Map====================== */}
        <VStack  space={4} overflow={"scroll"} height="72vh">

            {/* map the contact list */}


          {contactData.map((elem)=>(
                        <Flex key={elem.mobile} gap={5} width={"100%"} borderBottom={"1px solid #dddd"}  p={2} >
                        <Box> <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></Box>
                        <Flex direction="column"  width="100%" justifyContent="flex-start" style={{cursor:"pointer"}}>
                            <Text backgroundColor="#dddd" textAlign={'center'} width={100} >{elem.userName}</Text>
                            <Text>last message</Text>
                        </Flex>
                        </Flex>
          ))}

        </VStack>
 
       {/* =======================Last Messageencryption=============== */}

       <Flex justifyContent={"center"} gap={2} position="fixed"  bottom={5} left={5}>
           <LockIcon />
           <Text fontSize={14}>Your personal messages are <span style={{color:"#179cd2",cursor:"pointer"}}>end-to-end encrypted</span></Text>
           <Text fontSize={14}> </Text>
       </Flex>

    </Box>
  
}

export default ContactBar