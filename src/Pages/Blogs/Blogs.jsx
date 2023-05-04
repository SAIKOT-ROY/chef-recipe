import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import Pdf from "react-to-pdf";


const ref = React.createRef()


const Blogs = () => {
 return (
    <div className='bg-white w-2/4 mx-auto pb-48'>
       <div className='flex justify-end mr-16 p-4'>
       <Pdf targetRef={ref} filename="download.pdf">
            {({toPdf}) => <div onClick={toPdf} className='w-6 text-white'>
                <ArrowDownTrayIcon className='btn text-white'></ArrowDownTrayIcon>
            </div>}
       </Pdf>
       </div>
     <div ref={ref} className='text-black'>
     <h2 className='text-center text-5xl mb-8'>Blog</h2>
        <div className='w-2/4 mx-auto'>
            <div className='mb-4'>
                <h2 className='mb-3'>
                    <span className='font-bold'>1 .</span> Tell us the differences between uncontrolled and controlled components ?
                </h2>
                <p>The difference between them In an uncontrolled component, the DOM handles the form data by itself in the component. Whereas in a controlled component, the state is used to handle the form data within the component.</p>
            </div>
            <div className='mb-4'>
                <h2 className='mb-3'>
                    <span className='font-bold'>2 .</span> How to validate React props using PropTypes ?
                </h2>
                <p>When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
            </div>
            <div className='mb-4'>
                <h2 className='mb-3'>
                    <span className='font-bold'>3 .</span> Tell us the difference between nodejs and express js ?
                </h2>
                <p>Node.js is a runtime environment for executing JavaScript code outside the browser, while Express.js is a web framework built on top of Node.js that provides tools and features for building web applications and APIs.</p>
            </div>
            <div className='mb-4'>
                <h2 className='mb-3'>
                    <span className='font-bold'>4 .</span> What is a custom hook, and why will you create a custom hook?</h2>
                <p>A custom hook is a way to create reusable logic that can be shared across multiple components, just like a component is a way to create reusable UI elements that can be shared across multiple pages.</p>
            </div>
        </div>
     </div>
    </div>
  );
};

export default Blogs;