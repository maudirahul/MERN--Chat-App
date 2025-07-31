import { Box } from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
import React from 'react'

const UserBadgeItem = ({ user,handleFunction}) => {
  return (
  <Box
  px={2}
  py={1}
  borderRadius="lg"
    m={1}
    mb={2}
    cursor="pointer"
    backgroundColor="purple"
    color="white"
    variant="solid"
    fontSize={12}
    onClick={handleFunction}
  >
{user.name}
<CloseIcon pl={1} />
  </Box>
  )
}

export default UserBadgeItem;