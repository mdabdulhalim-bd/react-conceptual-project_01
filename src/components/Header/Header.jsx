
const Header = () => {
    return (
        <div>
            <nav className="container mx-auto md:flex md:justify-between items-center py-4">
                <div className="logo text-green-600 font-bold text-3xl uppercase">
                    <span>TrustBuilders</span>
                </div>
                <div className="menus text-[18px] space-x-4 list-none md:flex gap-4">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Cart</li>
                    </a>
                    <a href="#">
                        <li>$5000</li>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;