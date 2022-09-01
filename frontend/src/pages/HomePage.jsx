import React from 'react'
import {NavLink} from "react-router-dom"
import {ColorModeSwitcher} from "@chakra-ui/theme"
import {Flex} from "@chakra-ui/react"
import ContactBar from '../components/Contactbar/ContactBar'
import { ProfileInfoBar } from '../components/profileInfoBar.jsx/ProfileInfo'
import ChatSection from '../components/ChatBox.jsx/ChatSection'

const HomePage = () => {
  return (
    <Flex>
        <ContactBar />
        <ChatSection />
    </Flex>
  )
}

export default HomePage