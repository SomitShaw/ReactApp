import NavBar from "./Components/NavBar";
import ListGroup from "./Components/ListGroup";
import Carousel from "./Components/Carousel";
import PlaceHolders from "./Components/PlaceHolders";
import { Fragment } from "react";
function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="multiPlace">
        <PlaceHolders></PlaceHolders>
        <PlaceHolders></PlaceHolders>
        <PlaceHolders></PlaceHolders>
      </div>
      <div>
        <ListGroup></ListGroup>
      </div>
    </>
  );
}

export default App;
