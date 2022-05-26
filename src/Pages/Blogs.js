import React from 'react';

const Blogs = () => {
  return (
    <div className='mt-24'>
      <div>
        <h1 className='text-4xl text-primary font-bold'>Q:How will you improve the performance of a React Application?</h1>
        <p className='text-xl text-accent'>Optimizing performance in a React application

          Keeping component state local where necessary.
          Memoizing React components to prevent unnecessary re-renders.
          Code-splitting in React using dynamic import()
          Windowing or list virtualization in React.
          Lazy loading images in React.</p>
      </div>
      <div>
        <h1 className='text-4xl text-primary font-bold'>Q: What are the different ways to manage a state in a React application?</h1>
        <p className='text-xl text-accent'>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

          There are four main types of state you need to properly manage in your React apps:

          Local state
          Global state
          Server state
          URL state

          Let's cover each of these in detail:

          Local (UI) state – Local state is data we manage in one or another component.

          Local state is most often managed in React using the useState hook.

          For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

          Global (UI) state – Global state is data we manage across multiple components.</p>
      </div>
      <div>
        <h1 className='text-4xl text-primary font-bold'>Q:How does prototypical inheritance work?</h1>
        <p className='text-xl text-accent'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
      </div>
      <div>
        <h1 className='text-4xl text-primary font-bold'>Q:  What is a unit test? Why should write unit tests?</h1>
        <p className='text-xl text-accent'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
      </div>
      <div>
        <h1 className='text-4xl text-primary font-bold'>Q: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
        <p className='text-xl text-accent'>setState() setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses..</p>
      </div>
    </div>
  );
};

export default Blogs;