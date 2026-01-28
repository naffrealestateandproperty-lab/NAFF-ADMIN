// import { useParams, Link } from "react-router-dom";
// import { properties, propertyTenants } from "@/lib/data";
// import { Layout } from "@/components/layout";
// import { ArrowLeft, Phone } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../component/Table";
// import { Button } from "@/components/ui/button";

// export default function PropertyDetails() {
//   const { id } = useParams();
//   const propertyId = parseInt(id, 10);

//   // const propertyId = parseInt(params.id);
//   const property = properties.find((p) => p.id === propertyId);
//   const tenants = propertyTenants[propertyId] || [];

//   if (!property) return <div className="p-8">Property not found</div>;

//   const getStatusColor = (remark) => {
//     if (!remark) return "bg-gray-100 text-gray-600";
//     const r = remark.toLowerCase();
//     if (r.includes("paid")) return "bg-emerald-100 text-emerald-700 border-emerald-200";
//     if (r.includes("overdue")) return "bg-red-100 text-red-700 border-red-200";
//     if (r.includes("due")) return "bg-amber-100 text-amber-700 border-amber-200";
//     return "bg-blue-50 text-blue-700 border-blue-200";
//   };

//   return (
//     <Layout>
//       <div className="space-y-8 animate-in fade-in duration-500">
//         {/* Navigation & Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div className="space-y-2">
//             <Link to="/home">
//               <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-gray-500 hover:text-primary">
//                 <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
//               </Button>
//             </Link>
//             <h1 className="text-3xl font-heading font-bold text-gray-900">{property.name}</h1>
//             <p className="text-gray-500 flex items-center gap-2">
//               <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono text-gray-600">ID: {property.id}</span>
//               {property.address}
//             </p>
//           </div>

//           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
//             <div className="text-right">
//               <p className="text-xs text-gray-500 uppercase font-semibold">Total Tenants</p>
//               <p className="text-2xl font-bold text-primary">{tenants.length}</p>
//             </div>
//             <div className="h-10 w-1px bg-gray-200" />
//             <div className="text-right">
//               <p className="text-xs text-gray-500 uppercase font-semibold">Occupancy</p>
//               <p className="text-2xl font-bold text-emerald-600">100%</p>
//             </div>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg relative group">
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//           <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
//         </div>

//         {/* Tenant Table Card */}
//     <Card className="border-0 shadow-md overflow-hidden bg-white">
//       <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-4">
//         <div className="flex items-center justify-between">
//           <CardTitle className="font-heading text-xl">Tenant Directory</CardTitle>
//           <Button size="sm" variant="outline">Download Report</Button>
//         </div>
//       </CardHeader>

//       <CardContent className="p-0">
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow className="bg-gray-50 hover:bg-gray-50">
//                 <TableHead className="w-25">Flat/Room</TableHead>
//                 <TableHead className="min-w-50">Tenant Name</TableHead>
//                 <TableHead>Type</TableHead>
//                 <TableHead>Phone</TableHead>
//                 <TableHead>Duration</TableHead>
//                 <TableHead className="text-right">Service Charge</TableHead>
//                 <TableHead className="text-right">Status</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {tenants.map((tenant, idx) => (
//                 <TableRow key={idx} className="hover:bg-blue-50 transition-colors">
//                   <TableCell className="font-medium text-gray-900">{tenant.room}</TableCell>

//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
//                         {tenant.name.charAt(0)}
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{tenant.name}</p>
//                         {tenant.investor && (
//                           <p className="text-xs text-gray-500">Inv: {tenant.investor}</p>
//                         )}
//                       </div>
//                     </div>
//                   </TableCell>

//                   <TableCell className="text-gray-600 capitalize">{tenant.apartment}</TableCell>

//                   <TableCell>
//                     {tenant.phone ? (
//                       <div className="flex items-center gap-1.5 text-gray-600">
//                         <span className="text-sm">{tenant.phone}</span>
//                       </div>
//                     ) : (
//                       <span className="text-gray-400 text-sm italic">No contact</span>
//                     )}
//                   </TableCell>

//                   <TableCell>
//                     {tenant.start && tenant.end ? (
//                       <div className="text-xs space-y-1">
//                         <div className="flex items-center gap-1 text-emerald-600">
//                           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                           {tenant.start}
//                         </div>
//                         <div className="flex items-center gap-1 text-red-500">
//                           <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
//                           {tenant.end}
//                         </div>
//                       </div>
//                     ) : (
//                       <span className="text-gray-400 text-xs">-</span>
//                     )}
//                   </TableCell>

//                   <TableCell className="text-right font-mono font-medium text-gray-700">
//                     {tenant.serviceCharge || tenant.amount || "-"}
//                   </TableCell>

//                   <TableCell className="text-right">
//                     <span
//                       className={`${getStatusColor(tenant.remark)} border px-2 py-1 rounded font-medium`}
//                     >
//                       {tenant.remark || "Unknown"}
//                     </span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//       </div>
//     </Layout>
//   );
// }