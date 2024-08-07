import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./FireBase/FireBase";
import PageLayout from "./Layouts/PageLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import Tagged from "./pages/TaggedPage/Tagged";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import SearchPage from "./pages/SearchPage/SearchPage";
import TravelGenie from "./pages/TravelGenie/TravelGenie";
import TripPool from "./pages/TripPool/TripPool";

function App() {
  
  const [authUser]= useAuthState(auth);
  return (

    <PageLayout>
    <Routes>

              <Route path='/' element={authUser? <HomePage  />:<Navigate to="/auth"/>} />
              <Route path='/auth' element={!authUser? <AuthPage />: <Navigate to="/"/>} />
              <Route path='/:username' element={<ProfilePage/>} />
              {/* <Route path='/tagged' element={<Tagged/>}/> */}
              <Route path="/Search" element={<SearchPage />} /> 
              <Route path="/travelgenie" element={<TravelGenie/>}/>   
              <Route path="/createpool" element={<TripPool/>}/>     
     </Routes>
    </PageLayout>
  );
  
}




export default App

