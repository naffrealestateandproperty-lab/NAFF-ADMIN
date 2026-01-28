import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card } from "../component/card";

export default function PropertyCard({ property }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-2xl flex flex-col md:flex-row gap-0 md:h-48">
      {/* Image Section */}
      <div className="md:w-64 h-48 md:h-auto shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <div className="flex-1">
          <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
            {property.name}
          </h3>

          <div className="flex items-start gap-2 text-gray-500 mb-4">
            <MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />
            <span className="text-sm font-medium leading-relaxed max-w-md">
              {property.address}
            </span>
          </div>
        </div>

        <div className="flex justify-end mt-4 md:mt-0">
          <Link to={`/properties/${property.id}`}>
            <button className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/5 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all group-hover:translate-x-1">
              View Tenants <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </Card>
  );
}