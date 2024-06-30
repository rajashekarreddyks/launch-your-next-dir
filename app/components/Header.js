export default function Header(){
    return(
        <section id="hero_section">
        <div className=" top-0 py-2 px-5 lg:py-5 w-full bg-transparent lg:relative z-50">
        <nav className=" max-w-4xl xl:max-w-5xl mx-auto px-2 lg:px-7 py-3 lg:border-none rounded-lg">
        <div className="flex items-center justify-between">
        <button>
            <div className="flex items-center space-x-2">
             <h2 className="text-black font-bold text-base">LaunchFast</h2>
            </div>
        </button>

        <div className=" lg:flex items-center gap-x-10">
            <ul className="flex gap-4 text-sm font-semibold text-black/60">
            <li className="w-fit border-b border-transparent hover:border-gray-900 transition-colors duration-100 ease-linear  hover:text-gray-800">
            <a href="/">
            <button>how to earn money</button>
            </a>
            </li>
            <li className="w-fit border-b border-transparent hover:border-gray-900 transition-colors duration-100 ease-linear  hover:text-gray-800">
            <a href="/">
            <button>Pricing</button>
            </a>
            </li>
            <li className="w-fit border-b border-transparent hover:border-gray-900 transition-colors duration-100 ease-linear  hover:text-gray-800">
            <a href="/">
            <button>Faqs</button>
            </a>
            </li>
            <li className="w-fit border-b border-transparent hover:border-gray-900 transition-colors duration-100 ease-linear  hover:text-gray-800">
            <a href="/">
            <button>Demo</button>
            </a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        </div>
        </section>
    )
}