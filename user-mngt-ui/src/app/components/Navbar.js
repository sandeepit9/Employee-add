import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
 
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-bold flex-auto">User Management System</p>
     
      </div>
    </div>
  );
};

export default Navbar;