import React from 'react'

function ContentIntellegence1() {
  return (
    <div className='px-15 flex gap-30 font-sans h-screen'>
        <div className=''>
            <img className='h-150 w-150 rounded-md ' src="https://i.pinimg.com/1200x/0b/a6/13/0ba61386dfacd3cc669b3254c794b2aa.jpg" alt="" />
        </div>
        <div className='flex flex-col gap-15'>
            <h1 className='archivo-black text-5xl'>GenAI Capabilities</h1>
            <div className='flex gap-20'>
                <div className='gap-30 flex flex-col'>
                    <h1 className='text-3xl w-70 italic font-bold'>Where Human Creativity Meets Generative Intelligence</h1>
                    <p className='w-70 text-lg font-medium text-gray-700'>At Advaita Innovation Labs, Generative AI isn’t a feature — it’s a core capability. We use GenAI to accelerate storytelling, enhance creativity, personalize content, and scale distribution across OTT, digital, and social ecosystems.</p>
                </div>
                <div className='flex flex-col gap-16 '>
                    <p className='w-70 text-lg font-medium'>While most agencies use AI as an add-on, AIL blends AI + Data + Storytelling + Media Distribution into one unified ecosystem — giving brands a competitive, intelligent, and future-ready edge.</p>
                    <div className='flex flex-col gap-4'>
                        <p className='w-60 text-gray-600 '>We combine the intuition of humans with the precision of AI to build stories that are more:</p>
                        <ul className='w-40'>
                            <li>  Effective</li>
                            <li>  Insight-driven</li>
                            <li>  Culturally relevant</li>
                            <li>  Efficient to produce</li>
                            <li>   Precisely distributed</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContentIntellegence1