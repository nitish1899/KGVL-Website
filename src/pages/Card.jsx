import React from 'react';
import { Button, Image, Text, VStack } from '@chakra-ui/react';

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <VStack>
       <div className='flex items-center justify-between gap-2'>
      <Text className='p-1 text-white font-semibold text-sm' >{amount}</Text>
      <Button onClick={()=>checkoutHandler(amount)} className='text-black font-bold text-xl'>Pay</Button>
      </div>
    </VStack>
  );
}

export default Card;