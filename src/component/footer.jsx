
// 
// Footer.jsx
export default function Footer({ managerName, contact, socials }) {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Manager Info */}
        <div>
          <h1 className="font-bold text-2xl mb-4">
            Facility Manager: {managerName}
          </h1>
          <p className="text-sm">
            Dedicated to ensuring smooth operations and excellent service.
          </p>
        </div>

        {/* Middle Section: Contact Info */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 {contact.address}</li>
            <li>📞 {contact.phone}</li>
            <li>✉️ {contact.email}</li>
          </ul>
        </div>

        {/* Right Section: Social / Images */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Connect</h2>
          <div className="flex space-x-4">
            {socials.map((social, idx) => (
              <img
                key={idx}
                src={social.icon}
                alt={social.name}
                className="w-8 h-8"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Facility Management. All rights reserved.
      </div>
    </footer>
  );
}