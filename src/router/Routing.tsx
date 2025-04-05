import { Route, Routes } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";
import Home from "../pages/Home";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <LandingLayout /> }>
          <Route index element={ <Home /> } />
        </Route>
      </Routes>
    </>
  )
}