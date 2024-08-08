#Namaste React 🚀

Header
    Logo
    nav-items
Body
    Searchbar
    Restaurant container-- will have lot of restaurant cards
        Cards
            Img
            name of res, star rating, cuisines,delivery time
Footer
    Copyright
    Links

# React Hooks
they are normal JS utility functions with some super powers.
-useState() -- to generate super powerful react variables
-useEffect()
useEffect will be called after the component re-renders
when the body component loads, it will render the body component and as soon as the render is finished, it calls the callback function passed inside the useEffect().
If we need to do something after rendering the component, then we have to use useEffect();
virtual dom is the representation of actual DOM.

Whenever state variables change/update, react rerenders the component.

Routing
how can we create multiple url routes, how can we create nested url routes.

In the useEffect, if the dependency array is empty, then the useEffect is called on every render.

Creating children routes using Outlet.
createBrowserRouter

2 tyoes of Routing in web apps
1)client side routing--in our app, we are not making any network calls, it just loads that particular component.

2)Server side routing--- index.htnml, contact.html,about.html---> it makes the network call and the page comes from server.


Restaurant Menu Component:
