import { ChatState } from "../Context/ChatProvider";
import React from "react";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Mychats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";
const ChatPage = () => {
  const { user } = ChatState() || {};
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && (<Mychats fetchAgain={fetchAgain}/>)}
        {user && (<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>)}
      </Box>
    </div>
  );
};

export default ChatPage;
