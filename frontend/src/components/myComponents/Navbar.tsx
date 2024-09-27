import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu";
  // import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-xl font-bold">MyApp</div>
      <NavigationMenu className="flex space-x-4 justify-center flex-grow">
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className="hover:text-gray-400">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" className="hover:text-gray-400">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className="hover:text-gray-400">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
      <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </Link>
    </nav>
  );
}

export default MyNavbar;
