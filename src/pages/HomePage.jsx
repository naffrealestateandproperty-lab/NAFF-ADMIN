import {Layout} from "../component/Layout"
import PropertyCard from "../component/PropertyCard";
import {TenantDetails,propertyTenants} from "../data/data"
import { Building, TrendingUp, Users } from "lucide-react";
import {Link} from "react-router-dom"

import React from "react";


export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight">
            Dashboard{" "}
            <span className="text-primary relative inline-block">
              Overview
              <svg
                className="absolute w-full h-2 bottom-0 left-0 text-accent opacity-40 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"

                />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Welcome back. You are currently managing{" "}
            <span className="font-bold text-gray-900">
              {TenantDetails.length} properties
            </span>{" "}
            across Lagos State.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Total Properties",
              value: TenantDetails.length,
              icon: Building,
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              label: "Occupancy Rate",
              value: "92%",
              icon: TrendingUp,
              color: "text-amber-600",
              bg: "bg-amber-50",
            },
            {
             label: "Active Tenants",
             value: "30+",
             icon: Users,
             color: "text-emerald-600",
             bg: "bg-emerald-50",
  },

          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>


       {/* Properties List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              Your Properties
            </h2>
            <div className="text-sm text-gray-500 font-medium">
              Sorted by Recent
            </div>
          </div>

          <div className="grid gap-6">
            {TenantDetails.map((property) => (
            <PropertyCard 
             key={property.id} 
             property={property} 
             tenants={propertyTenants[property.id] || []} 
             />
))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
