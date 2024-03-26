
function Header() {
    return ( 
      <nav className=" bg-gradient-to-br from-purple-700 via-purple-500 to-blue-500 py-4 w-[80%] mt-9 ml-[10%] rounded-full ">
      <ul className="flex justify-center">
        
        <li className="mr-6">
          
          <a href="/" className="text-white hover:text-blue-600">
            HOME
          </a>
        </li>
        <li className="mr-6">
          <a href="/about" className="text-white hover:text-blue-600">
            PROJECT
          </a>
        </li>
        <li className="mr-6">
          <a href="/services" className="text-white hover:text-blue-600">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-blue-600">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
    );
}

export default Header;