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
                <p></p>
            </div>

            <div className='my-4'>
                <h4>14.3 How does prototypical inheritance work?</h4>
                <h6>Answer:</h6>
                <p></p>
            </div>

            <div className='my-4'>
                <h4>14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                <h6>Answer:</h6>
                <p></p>
            </div>

            <div className='my-4'>
                <h4>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                <h6>Answer:</h6>
                <p></p>
            </div>

            <div className='my-4'>
                <h4>14.6 What is a unit test? Why should write unit tests?</h4>
                <h6>Answer:</h6>
                <p></p>
            </div>
        </div>
    );
};

export default Blogs;