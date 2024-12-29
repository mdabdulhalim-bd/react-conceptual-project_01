import { useState } from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Header from "./components/Header/Header";

const App = () => {
  
  const [isActive, setIsActive] = useState({
    cart:true,
    status:"cart"
  })
  
  const handleIsActive = (status) =>{
      if(status == "cart"){
        setIsActive({
          cart:true,
          status:"cart"
        })
      }
      else{
        setIsActive({
          cart:false,
          status:"about"
        })
      }
  }
  console.log(isActive);
  return (
    <div>
      <Header></Header>
      <div className="md:flex gap-4 container mx-auto my-8">
        <AllProducts></AllProducts>
        <CartContainer isActive={isActive} handleIsActive={handleIsActive}></CartContainer>
      </div>
    </div>
  );
};

export default App;