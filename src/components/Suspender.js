import React, { lazy, Suspense } from 'react';


const Suspender = ({ component: Component, ...props }) => {


  function ProfilePage() {
    return (
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Login />
      </Suspense>
    );
  }

  const Login = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./Login")), 3000);
    });
  });




  return (
    <div> {ProfilePage()}</div>

  );
}

export default Suspender;