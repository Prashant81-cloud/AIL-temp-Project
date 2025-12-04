import React from 'react'

function TermsConditions() {
  return (
    <div className='h-auto w-full  xl:px-15 px-6  '>
        <h1 className='archivo-black text-5xl w-full flex items-center justify-center'>Terms & Conditions— AIL India</h1>
        <div className='flex md:flex-row flex-col mt-20 gap-5'>
        <div className='w-full flex flex-col items-start '>
            <p className='md:text-xl text-lg'> <span className='font-bold'>Last Updated: </span> December 2, 2025 </p>
        </div>
        <p className=' md:text-xl font-semibold opacity-70 '>
Welcome to www.ail-india.com, owned and operated by Advaita Innovation Labs. By accessing or using our website, you agree to the following Terms & Conditions. If you do not agree, please discontinue use of the website.
        </p>
</div>
<div className='flex flex-col gap-10 mt-10'>
        {/*Q.1*/}
        <div >
            <h1 className='text-2xl font-bold mb-3'>1. Use of Website</h1>
            <p className='font-semibold '>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul className='list-disc list-inside '>
                <li>Violate any local, national, or international law</li>
                <li>Harm the website, its content, or its functionality</li>
                <li>Interfere with other users’ access</li>
            </ul>
        </div>


        {/*Q.2*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>2. Intellectual Property</h1>
            <p className='text-lg'>All content on this website—including text, images, logos, graphics, and design—belongs to Advaita Innovation Labs unless otherwise noted.</p>
            <p  className='font-semibold '> You may not:</p>
            <ul className='list-disc list-inside '>
                <li>Copy</li>
                <li>Modify</li>
                <li>Reproduce</li>
                <li>Distribute</li>
                <li>Use commercially</li>
            </ul>
            <p className='text-lg'>without written permission.</p>
        </div>


        {/*Q.3*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>3. Accuracy of Information</h1>
            <p className='font-semibold '>While we strive for accuracy, we do not guarantee that all information is:</p>
            <ul className='list-disc list-inside '>
                <li>Complete</li>
                <li>Up-to-date</li>
                <li>Free from errors</li>
            </ul>
            <p className='text-lg'>We may change or update content at any time..</p>
        </div>


        {/*Q.4*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>4. Third-Party Links</h1>
            <p className='text-lg'>Our website may contain links to third-party websites. We do not control or endorse their content, and visiting them is at your own risk.</p>
        </div>


        {/*Q.5*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>5. Limitation of Liability</h1>
            <p className='font-semibold '>Advaita Innovation Labs is not liable for:</p>
            <ul className='list-disc list-inside '>
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>Loss of data, business, or profits</li>
                <li>Issues arising from website use or temporary unavailability</li>
            </ul>
            <p className='text-lg'>Use of the website is at your own risk.</p>
        </div>


        {/*Q.6*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>6. Indemnification</h1>
            <p className='font-semibold '>You agree to indemnify and hold harmless Advaita Innovation Labs from any:</p>
            <ul className='list-disc list-inside '>
                <li>Claims</li>
                <li>Losses</li>
                <li>Damages</li>
                <li>Liabilities</li>
            </ul>
            <p className='text-lg'>arising out of your use of the website or violation of these Terms.</p>
        </div>


        {/*Q.7*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>7. Changes to Terms</h1>
            <p className='text-lg'>We may update these Terms & Conditions at any time.  Continued use of the website after updates constitutes acceptance of the revised terms.</p>
        </div>


        {/*Q.8*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>8. Governing Law</h1>
            <p className='font-semibold '>These Terms and Conditions are governed by the laws of India, and any disputes will fall under the jurisdiction of Indian courts.</p>
        </div>


        {/*Q.9*/}
        <div>
            <h1 className='text-2xl font-bold mb-3'>9. Contact Information</h1>
            <p className='font-semibold '>For questions about these Terms, contact us at: connect@ail-india.com.</p>
        </div>
</div>
    </div>
  )
}

export default TermsConditions