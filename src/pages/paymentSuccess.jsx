import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Home, Receipt, CreditCard, User, Phone, DollarSign, FileText } from "lucide-react";

const PaymentSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Payment Data</h3>
          <p className="text-gray-600 mb-6">We couldn't find any payment information.</p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const { paymentId, orderId, signature, name, phone, totalAmount, payableAmount } = state;
  console.log(paymentId, orderId, signature, name, phone, totalAmount, payableAmount);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
            <CheckCircle className="text-green-500" size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Payment Successful!</h2>
          <p className="text-green-50 text-lg">Your transaction has been completed</p>
        </div>

        {/* Payment Details */}
        <div className="p-8">
          {/* Customer Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User size={20} className="text-gray-600" />
              Customer Details
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <User size={16} />
                  Name
                </span>
                <span className="font-semibold text-gray-800">{name}</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <Phone size={16} />
                  Phone
                </span>
                <span className="font-semibold text-gray-800">{phone}</span>
              </div>
            </div>
          </div>

          {/* Amount Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign size={20} className="text-gray-600" />
              Payment Summary
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-gray-800 font-medium">₹{totalAmount}</span>
              </div>
              <div className="h-px bg-green-200"></div>
              <div className="flex justify-between items-center">
                <span className="text-green-700 font-semibold flex items-center gap-2">
                  <CreditCard size={16} />
                  Paid (5% Advance)
                </span>
                <span className="text-2xl font-bold text-green-600">₹{payableAmount}</span>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Receipt size={20} className="text-gray-600" />
              Transaction Details
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex flex-col gap-1">
                <span className="text-gray-600 text-sm flex items-center gap-2">
                  <FileText size={14} />
                  Payment ID
                </span>
                <span className="font-mono text-sm text-gray-800 bg-white px-3 py-2 rounded-lg border border-gray-200">
                  {paymentId}
                </span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-600 text-sm flex items-center gap-2">
                  <FileText size={14} />
                  Order ID
                </span>
                <span className="font-mono text-sm text-gray-800 bg-white px-3 py-2 rounded-lg border border-gray-200">
                  {orderId}
                </span>
              </div>
              {signature && (
                <>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-600 text-sm flex items-center gap-2">
                      <FileText size={14} />
                      Signature
                    </span>
                    <span className="font-mono text-xs text-gray-800 bg-white px-3 py-2 rounded-lg border border-gray-200 break-all">
                      {signature}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> A confirmation receipt has been sent to your registered contact details.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <Home size={20} />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
// import { Box, Heading, Text, VStack } from '@chakra-ui/react';
// import React from 'react';
// import { useSearchParams } from 'react-router-dom';

// const PaymentSuccess = () => {
//   const searchQuery = useSearchParams()[0];
//   const referenceNum = searchQuery.get('reference');

//   return (
//     <Box>
//       <VStack h="80vh" justifyContent="center">
//         <Heading textTransform="uppercase" fontWeight="bold">
//           Order Successful
//         </Heading>
//         <Text fontWeight="bold">Reference No. {referenceNum}</Text>
        
//       </VStack>
//     </Box>
//   );
// };

// export default PaymentSuccess;