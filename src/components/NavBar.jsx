import {navLinks} from "../constants";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img  src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-5 sm:gap-7 max-sm:justify-end max-sm:flex-1 mr-4 lg:mr-8">
                    <button>
                        <img src="/search.svg" alt="Search" width={18} height={18} />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" width={18} height={18} />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
