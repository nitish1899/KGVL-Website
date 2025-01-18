import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-white'>
      <div className='bg-black bg-opacity-10 p-8 rounded-md shadow-lg w-11/12 max-w-lg'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Privacy Policy</h1>
        <div className='text-sm text-gray-800'>
          <p className='mb-2'>
            1. We value your privacy and are committed to protecting your personal information.
          </p>
          <p className='mb-2'>
            2. The information collected is used for providing and improving our services.
          </p>
          <p className='mb-2'>
            3. Your data is never shared with third parties without your consent, except as required by law.
          </p>
          <p className='mb-2'>
            4. We implement appropriate security measures to safeguard your information.
          </p>
          <p className='mb-2'>
            5. You have the right to access, modify, or delete your personal data.
          </p>
          <p className='mb-2'>
            6. Our website uses cookies to enhance the user experience and track usage patterns.
          </p>
          <p className='mb-2'>
            7. We may update this policy from time to time; continued use of the website indicates acceptance of these changes.
          </p>
          <p className='mb-2'>
            8. If you have any concerns about your privacy, please contact us directly.
          </p>
          <p className='mb-2'>
            9. We are committed to complying with all applicable data protection regulations.
          </p>
          <p className='mb-2'>
            10. By using our services, you agree to this privacy policy and consent to the collection of your data.
          </p>
        </div>
      </div>
    </div>
  );
};
