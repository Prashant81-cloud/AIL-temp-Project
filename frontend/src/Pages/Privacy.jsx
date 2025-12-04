import React from 'react'

function Privacy() {
  return (
    <div className='h-auto w-full  xl:px-15 px-6  '>
        <h1 className='archivo-black text-5xl w-full flex items-center justify-center'>Privacy Policy — AIL India</h1>
        <div className='flex md:flex-row flex-col mt-20 gap-5'>
        <div className='w-full flex flex-col items-start '>
            <p className='md:text-xl text-lg'> <span className='font-bold'>Website: </span> www.ail-india.com </p>
            <p className='md:text-xl text-lg'> <span className='font-bold'> Official Email: </span>connect@ail-india.com</p>
            <p className='md:text-xl text-lg'> <span className='font-bold'>Last Updated: </span> December 2, 2025 </p>
        </div>
        <p className=' md:text-xl font-semibold opacity-70 '>
            Advaita Innovation Labs (“AIL India”, “we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and safeguard your personal information when you visit our website
        </p>
</div>
<div className='flex flex-col gap-10 mt-10'>
        {/*Q.1*/}
        <div >
            <h1 className='text-2xl font-bold mb-3'>1. Information We Collect</h1>
            <p className='text-lg'>We collect personal information only when you submit it voluntarily through our website forms.</p>
            <p className='font-semibold '>This includes:</p>
            <ul className='list-disc list-inside '>
                <li>Name (if provided)</li>
                <li>Email Address</li>
                <li>Phone Number</li>
            </ul>
            <p className='text-lg'>We do not collect cookies, location data, or additional browsing data unless explicitly stated.</p>
        </div>


        {/*Q.2*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>2. How We Use Your Information</h1>
            <p  className='font-semibold '>Your information is used strictly for:</p>
            <ul className='list-disc list-inside '>
                <li>Responding to your inquiries</li>
                <li>Providing requested services or information</li>
                <li>Customer support</li>
                <li>Internal record keeping</li>
            </ul>
            <p className='text-lg'>We do not sell, rent, or trade your personal information.</p>
        </div>


        {/*Q.3*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>3. Data Sharing & Disclosure</h1>
            <p className='font-semibold '>We may share your information only:</p>
            <ul className='list-disc list-inside '>
                <li>With trusted third-party service providers who help operate our website</li>
                <li>If required by law, regulation, or legal process</li>
                <li>To protect our rights, users, or property</li>
            </ul>
            <p className='text-lg'>We never share your information for marketing or advertising purposes.</p>
        </div>


        {/*Q.4*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>4. Data Protection & Security</h1>
            <p className='font-semibold '>We use reasonable technical and administrative measures to protect your information, including:</p>
            <ul className='list-disc list-inside '>
                <li>Secure servers</li>
                <li>Access restrictions</li>
                <li>Encryption where applicable</li>
            </ul>
            <p className='text-lg'>However, no online transmission or storage method is 100% secure.</p>
        </div>


        {/*Q.5*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>5. Data Retention</h1>
            <p className='font-semibold '>We retain your information only for as long as necessary to:</p>
            <ul className='list-disc list-inside '>
                <li>Respond to your inquiries</li>
                <li>Provide requested services</li>
            </ul>
            <p className='text-lg'>Once no longer required, the data may be securely deleted.</p>
        </div>


        {/*Q.6*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>6. Your Rights (India)</h1>
            <p className='font-semibold '>Under applicable Indian data protection principles, you may:</p>
            <ul className='list-disc list-inside '>
                <li>Request access to the personal data we hold</li>
                <li>Request correction, updates, or deletion</li>
                <li>Withdraw previously given consent</li>
            </ul>
            <p className='text-lg'>To exercise these rights, contact us at connect@ail-india.com.</p>
        </div>


        {/*Q.7*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>7. External Links</h1>
            <p className='text-lg'>Our website may contain links to external websites. We are not responsible for their content or privacy practices.</p>
        </div>


        {/*Q.8*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>8. Contact Details</h1>
            <p className='font-semibold '>For any privacy concerns or data rights requests:</p>
            <ul className='list-disc list-inside '>
                <li> 📧 Email: connect@ail-india.com</li>
                <li> 🌐 Website: www.ail-india.com</li>
            </ul>
        </div>
</div>
    </div>
  )
}

export default Privacy