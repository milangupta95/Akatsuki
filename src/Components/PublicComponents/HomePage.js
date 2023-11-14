import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function HomePage() {
  return (
    <div className='p-4 space-y-8'>
      <div className='flex items-center justify-center space-x-8'>
        <div className='w-[40%] space-y-8'>
          <div className='text-4xl'>RetailSense is retail analytics tool to boost conversion rates, measure
            & track
            <span className='font-bold text-violet-800'><Typewriter
              words={[' Customer Count', ' Customer Demographics', ' Customer Time Spent']}
              loop={true}
            /></span>

          </div>
          <p>Through the deployment of cutting-edge CCTV systems,
            we harness precise footfall and customer count data to create a foundation for smart optimization and proactive relationship management in the retail industry. This approach not only enhances the overall shopping experience but also
            empowers businesses to achieve greater success and efficiency in their operations.
          </p>
          <div className='space-x-2 flex items-center'>
            <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2  rounded-lg font-bold text-2xl'>Explore</div>
            <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2 rounded-lg font-bold text-2xl'>Signup</div>
          </div>
        </div>
        <iframe src="https://www.youtube.com/embed/KMJS66jBtVQ?autoplay=1&loop=1&autopause=0"
          height={400} width={600} className='rounded-lg'></iframe>
      </div>
      <div className='space-y-16'>
        <h1 className='text-4xl text-center font-bold'>Our Services</h1>
        <div className='space-y-24'>
          <div className='flex item-center justify-center space-x-8'>
            <iframe src="https://www.youtube.com/embed/KMJS66jBtVQ?autoplay=1&loop=1&autopause=0"
              height={350} width={600} className='rounded-lg'></iframe>
            <div className='w-[40%] space-y-2'>
              <h1 className='text-4xl font-bold'>Customer Visual Analytics</h1>
              <p className='text-xl'>Reveal Insights, Empower Growth: Unleash the Power of Customer Visual Analytics.</p>
              <ul className='list-disc font-bold p-6'>
                <li>Customer Count</li>
                <li>Customer Demographics</li>
                <li>Preffered Brands</li>
              </ul>

              <div className='space-x-2 flex items-center'>
                <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2  rounded-lg font-bold text-2xl'>Explore</div>
                <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2 rounded-lg font-bold text-2xl'>Signup</div>
              </div>

            </div>
          </div>
          <div className='flex item-center justify-center space-x-8'>

            <div className='w-[40%] items-center space-y-2'>
              <h1 className='text-4xl font-bold'>Relationship Management</h1>
              <p className='text-xl'>Nurturing Connections, Delivering Excellence: Elevate Your Business with Customer Relationship Management.</p>
              <ul className='list-disc font-bold p-6'>
                <li>Register New Customer</li>
                <li>Tailored Loyality Program</li>
                <li>Simplified Return and quality Resolution</li>
              </ul>
              <div className='space-x-2 flex items-center'>
                <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2  rounded-lg font-bold text-2xl'>Explore</div>
                <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2 rounded-lg font-bold text-2xl'>Signup</div>
              </div>

            </div>
            <iframe src="https://www.youtube.com/embed/KMJS66jBtVQ?autoplay=1&loop=1&autopause=0"
              height={350} width={600} className='rounded-lg'></iframe>
          </div>
          <div className='flex item-center justify-center space-x-8'>
            <iframe src="https://www.youtube.com/embed/KMJS66jBtVQ?autoplay=1&loop=1&autopause=0"
              height={350} width={600} className='rounded-lg'></iframe>

            <div className='w-[40%] space-y-2'>
              <h1 className='text-4xl font-bold'>Shop Analysis</h1>
              <p className='text-xl'>Reveal Insights, Empower Growth: Unleash the Power of Customer Visual Analytics.</p>
              <ul className='list-disc font-bold p-6'>
                <li>Dwell Time on Specific Store.</li>
                <li>HeatMaps Highlighting popular areas within the store.</li>
                <li>Queue Management.</li>
                <li>Customer Flow Analysis.</li>
                <li>Scurity and loss Prevention.</li>
              </ul>

              <div className='space-x-2 flex items-center'>
                <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2  rounded-lg font-bold text-2xl'>Explore</div>
                <div className='p-2 bg-violet-800 text-white hover:bg-white hover:text-black cursor-pointer border-violet-800 border-2 rounded-lg font-bold text-2xl'>Signup</div>
              </div>

            </div>

          </div>

        </div>


      </div>
    </div>
  )
}


export default HomePage