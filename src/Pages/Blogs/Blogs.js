import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='my-4'>
                <h4>14.1 How will you improve the performance of a React Application?</h4>
                <h6>Answer:</h6>
                <p>
                    <div>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.
                        In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</div>
                    <div>1. Keeping component state local where necessary.
                        <div>We’ve learned that a state update in a parent component re-renders the parent and its child components.So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.This ensures that only the component that cares about the state renders. In our code, only the input field cares about the state. So, we extracted that state and the input to a FormInput component, making it a sibling to the ChildComponent.

                            This means, when the state changes in the FormInput component, only the component re-renders.

                            If we test the app once again in our CodeSandbox demo, the ChildComponent no longer re-renders on every keystroke. With this technique, we can greatly improve the performance of our React app.

                            But sometimes, we cannot avoid having a state in a global component while passing it down to child components as a prop. In this case, let’s learn how to avoid re-rendering the unaffected child components.</div>
                    </div>
                    <div>2. Memoizing React components to prevent unnecessary re-renders
                        <div>
                            Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.

                            Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.

                            In essence, if a child component receives a prop, a memoized component shallowly compares the prop by default and skips re-rendering the child component if the prop hasn’t changed.By updating the input field, both the App component and ChildComponent re-render.

                            Instead, the ChildComponent should only re-render when clicking the count button because it must update the UI. Here, we can memoize the ChildComponent to optimize our app’s performance.
                        </div>
                    </div>
                    <div>3. Code-splitting in React using dynamic import()
                        <div>
                            Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.

                            The idea of bundling is useful because it reduces the number of HTTP requests a page can handle. However, as an application grows, the file sizes increase, thus increasing the bundle file. At a certain point, this continuous file increase slows the initial page load, reducing the user’s satisfaction.

                            With code-splitting, React allows us to split a large bundle file into multiple chunks using dynamic import() followed by lazy loading these chunks on-demand using the React.lazy. This strategy greatly improves the page performance of a complex React application.
                        </div>
                    </div>
                    <div>4. Windowing or list virtualization in React applications
                        <div>Imagine we have an application where we render several rows of items on a page. Whether or not any of the items display in the browser viewport, they render in the DOM and may affect the performance of our application.

                            With the concept of windowing, we can render to the DOM only the visible portion to the user. Then, when scrolling, the remaining list items render while replacing the items that exit the viewport. This technique can greatly improve the rendering performance of a large list.

                            Both react-window and react-virtualized are two popular windowing libraries that can implement this concept.</div>
                    </div>
                    <div>5. Lazy loading images in React
                        <div>To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.

                            Similar to the concept of windowing mentioned above, lazy loading images prevents the creation of unnecessary DOM nodes, boosting the performance of our React application.

                            react-lazyload and react-lazy-load-image-component are popular lazy loading libraries that can be used in React projects.
                        </div>
                    </div>

                </p>
            </div>

            <div className='my-4'>
                <h4>14.2 What are the different ways to manage a state in a React application?</h4>
                <h6>Answer:</h6>
                <p>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                    <div>
                        There are four main types of state you need to properly manage in your React apps:Local state,
                        Global state,
                        Server state,
                        URL state
                        <div>Local (UI) state – Local state is data we manage in one or another component.
                            Local state is most often managed in React using the useState hook.
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</div>
                        <div>Global (UI) state – Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                            Sometimes state we think should be local might become global.</div>
                        <div>Server state – Data that comes from an external server that must be integrated with our UI state.
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.</div>
                        <div>URL state – Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</div>
                    </div>
                </p>
            </div>

            <div className='my-4'>
                <h4>14.3 How does prototypical inheritance work?</h4>
                <h6>Answer:</h6>
                <p>Let’s understand the basics behind Prototype Inheritance in JavaScript.
                    Prototype Inheritance in JavaScript: Following bullet points will try to analyze the basics behind Prototype Inheritance in JavaScript- Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.)
                    JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance.
                    In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.
                    All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).In the above pictorial representation, we have taken an example to illustrate the Prototype Inheritance between a rabbit and another create prototype object which is an animal.
                    We will set the rabbit’s prototype object as an animal prototype object wherein we will store all the values of rabbit for a purpose that if in the case in while rabbit properties are missing then JavaScript will automatically take it from animal prototype object.
                    <div>
                        Approach 1:
                        In this approach we will use __proto__, which is the special name for the internal and hidden prototype called [[Prototype]].
                        We will store all the properties of the rabbit in the animal prototype object and thereafter we may access it whenever it is required.
                        This __proto__ is a bit old as well as an outdated approach that exists for some historical reasons associated with JavaScript.</div>
                    <div>Approach 2:
                        In this approach, we will use the new JavaScript methods to implement JavaScript Prototype Inheritance.
                        Here we will use Object.setPrototypeOf() method takes two parameters first one is the object which is to have its prototype set and the second one is the object’s new prototype.
                        Thereafter we have declared two objects and using those two objects, we will set one of the objects as the prototype object for another object.</div>
                </p>
            </div>

            <div className='my-4'>
                <h4>14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                <h6>Answer:</h6>
                <p>One should never update the state directly because of the following reasons:
                    If you update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.</p>
            </div>

            <div className='my-4'>
                <h4>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                <h6>Answer:</h6>
                <p>To find the product of elements of an array.
                    create an empty variable. (product)
                    Initialize it with 1.
                    In a loop traverse through each element (or get each element from user) multiply each element to product.
                    Print the product.</p>
            </div>

            <div className='my-4'>
                <h4>14.6 What is a unit test? Why should write unit tests?</h4>
                <h6>Answer:</h6>
                <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                    In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                    <div>Why Unit Testing?
                        Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</div>
                    <div>Here, are the key reasons to perform unit testing in software engineering:
                        Unit tests help to fix bugs early in the development cycle and save costs.
                        It helps the developers to understand the testing code base and enables them to make changes quickly
                        Good unit tests serve as project documentation
                        Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.</div></p>
            </div>
        </div>
    );
};

export default Blogs;