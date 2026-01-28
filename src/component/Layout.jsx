import { useNavigate } from "react-router-dom";
import managerAvatar from "../assets/images/IMG C E O 2025.JPG";
import { Building2, LogOut, Phone, Mail, MapPin } from "lucide-react";

export function Layout({ children }) {
  const navigate = useNavigate(); // ✅ correct usage

  const handleSignOut = () => {
    // In a real app, clear auth state here
    navigate("/"); // ✅ go back to sign-in
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/home")} // ✅ works now
            >
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-primary">
                NAFF <span className="text-primary/70">Admin</span>
              </span>
            </div>


             <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">ALIMI NAFIU</p>
                  <p className="text-xs text-gray-500">C E O</p>
                </div>
                <img
                  className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-sm"
                  src={managerAvatar}
                  alt="User Avatar"
                />
              </div>

              <button
                onClick={handleSignOut}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                title="Sign Out"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Main Content */}
      <main className="grow py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>



      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Manager Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-white text-xl flex items-center gap-2">
              <span className="bg-white/10 p-1 rounded">MR OLANRENWAJU ALIMI & MR ADEBAYO ALIMI</span> Facility Manager
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Dedicated to ensuring smooth operations, tenant satisfaction, and property value preservation through proactive management.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>8 Ilupeju Road, Onipan, Lagos State</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+234 802 364 3683 / +234 813 470 3749</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>naffrealestateandproperty@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links / Socials */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs">Connect</h4>
            <div className="flex gap-4">
              <div className="h-10 w-10  flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer">
                <span className="font-bold">IG: naffrealestateandproperty</span>
              </div>
              {/* <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer">
                <span className="font-bold">WHATSAPP</span>
              </div> */}
              {/* <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer">
                <span className="font-bold">X</span>
              </div> */}
            </div>
            <p className="text-xs text-slate-500 mt-6">
              © {new Date().getFullYear()} NAFF REAL ESTATE AND PROPERTIES. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}