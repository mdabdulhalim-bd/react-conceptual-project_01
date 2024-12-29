import About from "../About/About";
import Cart from "../Cart/Cart";

const CartContainer = ({handleIsActive, isActive}) => {
   
   
    return (
        <div className="border border-gray-200 w-1/4 ">
            <h1 className="text-2xl font-bold">This is cart container</h1>
            <div className="space-x-4 py-6">
                <button onClick={() => handleIsActive('cart')} className={`text-xl py-2 px-4 border border-lime-300 rounded-md ${isActive.cart? 'bg-black text-white' : 'btn'}`} >Cart</button>
                <button onClick={()=>handleIsActive('about')} className={`text-xl py-2 px-4 border border-lime-300 rounded-md ${isActive.cart? 'btn': 'bg-black text-white'}`}>About</button>
            </div>
            <div>
                {
                    isActive.cart? <Cart></Cart> : <About></About>
                }
            </div>
        </div>
    );
};

export default CartContainer;