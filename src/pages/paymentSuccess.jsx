import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get('reference');

  return (
    <Box>
      <VStack h="80vh" justifyContent="center">
        <Heading textTransform="uppercase" fontWeight="bold">
          Order Successful
        </Heading>
        <Text fontWeight="bold">Reference No. {referenceNum}</Text>
        
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;