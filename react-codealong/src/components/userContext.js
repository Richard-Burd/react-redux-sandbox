// Lesson 38 & 39 (https://www.youtube.com/watch?v=lTjQjWemKgE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=39)
// This workspace concearns "Context" which is an API that allows you to pass props from
// a grand parent to grand child without passing it to the intermediary generation
// Implementing context has 3 steps:
// 1.) create the context
// 2.) provide a context value
// 3.) consume the context value
import React from 'react';

// The following lines accomplish step 1, creating the user context
// this is the "createContext()"" method with a default value of 'Codevolution'
const UserContext = React.createContext('Codevolution')

// Each object created with the "createContext()" method comes with a provider
// and a consumer React component... lets reassign those two components to more
// readable names:
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

// now let's export them
export { UserProvider, UserConsumer }

// now we'll look at the context type property.  previously [in Lesson 39] we
// learned how to use the consumer component [ComponentF] to consume the context
// value. Now let's learn another way where we use the context type property on
// a class.  first we need to export the UserContext...
export default UserContext
// ... next we put:
// ComponentE.contextType = UserContext
// inside ComponentE.js
