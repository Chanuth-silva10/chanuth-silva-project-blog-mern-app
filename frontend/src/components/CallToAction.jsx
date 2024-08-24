import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Explore learn more about my projects
            </h2>
            <p className='text-gray-500 my-2'>
                Look at these projects and try to do it
            </p>
            <img src="https://res.cloudinary.com/chanuth/image/upload/v1724482065/Capturedcsdcdscd-removebg_fbwmtz.png" />
        </div>
        <div className="p-7 flex-1">
            <img src="https://res.cloudinary.com/chanuth/image/upload/v1724482318/ph_css65s.png" />
        </div>
    </div>
  )
}