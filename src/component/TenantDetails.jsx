import { useParams } from "react-router-dom";
import { TenantDetails as properties, propertyTenants } from "../data/data.js";
import { ArrowLeft, User, Phone, Calendar, Wallet, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import {Card,CardHeader, CardTitle, CardContent} from "../component/card.jsx"
  import {Button} from "../component/button.jsx"
  import {Table,TableBody, TableCell, TableHead, TableHeader, TableRow} from "../component/Table.jsx"
  import { jsPDF } from "jspdf";




export default function TenantDetails() {
  const { id } = useParams(); // get :id from URL
  const property = properties.find((p) => p.id.toString() === id);

  if (!property) return <div>Property not found</div>;

  const tenants = propertyTenants[property.id] || [];

  const getStatusColor = (remark) => {
  if (!remark) return "bg-gray-100 text-gray-600";
  
  const r = remark.toLowerCase();
  
  if (r.includes("paid")) {
    return "bg-emerald-100 text-emerald-700 border-emerald-200";
  }
  
  if (r.includes("overdue")) {
    return "bg-red-100 text-red-700 border-red-200";
  }
  
  if (r.includes("due")) {
    return "bg-amber-100 text-amber-700 border-amber-200";
  }
  
  return "bg-blue-50 text-blue-700 border-blue-200";
};
const handleDownload = () => {
  const doc = new jsPDF();

  // Add content
  doc.text("This is your report!", 10, 10);

  // Save as PDF
  doc.save("report.pdf");
};
const getReminderDates = (endDate) => {
  const end = new Date(endDate);

  return {
    oneMonthBefore: new Date(end.setMonth(end.getMonth() - 1)),
    twoWeeksBefore: new Date(end.setDate(end.getDate() - 14)),
    oneWeekBefore: new Date(end.setDate(end.getDate() - 7)),
    onExpire: new Date(endDate),
  };

  
};
const shouldSendReminder = (reminderDate) => {
  const today = new Date();
  return (
    today.toDateString() === new Date(reminderDate).toDateString()
  );
};

const checkReminders = (tenant) => {
  if (!tenant.end) return;

  const reminders = getReminderDates(tenant.end);

  if (shouldSendReminder(reminders.oneMonthBefore)) {
    sendMessage("Reminder: Dear Tenant your rent expires in 1 month please treat as urgent, for more information or doubt kindly call MR NAFF thank you.");
  }
  if (shouldSendReminder(reminders.twoWeeksBefore)) {
    sendMessage("Reminder: Dear Tenant your  Rent expires in 2 weeks, please treat as urgent, for more information or doubt kindly call MR NAFF thank you.");
  }
  if (shouldSendReminder(reminders.oneWeekBefore)) {
    sendMessage("Reminder:Dear Tenant your Rent expires in 1 week, please treat as urgent and make payment as at when due, for more information or doubt, kindly call MR NAFF thank you.");
  }
  if (shouldSendReminder(reminders.onExpire)) {
    sendMessage("Reminder:Dear Tenant your Rent expires today, once done kindly share payment receipt with MR NAFF or the SECRETARY.");
  }
};
const sendMessage = (text) => {
  console.log(text); // Replace with actual email/SMS/notification logic
};




  return (
    <div className="p-6">
       <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
      <p className="text-gray-600 mb-4">{property.address}</p>
      <div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className="text-left">
        <p className="text-xs text-gray-500 uppercase font-semibold">Total Tenants</p>
        <p className="text-2xl font-bold text-primary">{tenants.length}</p>
      </div>
      <div className="flex items-center">
  {/* Divider */}
  <div className="h-10 w-px bg-gray-200" />

  {/* Occupancy Info */}
  <div className="ml-4 text-left">
    <p className="text-xs font-semibold uppercase text-gray-500">
      Occupancy
    </p>
    <p className="text-2xl font-bold text-emerald-600">
      100%
    </p>
  </div>
</div>
    </div>
    
  </div>
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-200 object-cover rounded mb-6"
      />
      <div className="p-6 space-y-6">
        
  
  <Link to="/home">
    <button
      class="pl-0 hover:pl-2 transition-all text-gray-500 hover:text-primary flex items-center"
    >

      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to Dashboard
    </button>
  </Link>
</div>

      {/* Tenant Table Card */}
     <Card className="border-0 shadow-md overflow-hidden bg-white">
       <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-4">
         <div className="flex items-center justify-between">
           <CardTitle className="font-heading text-xl">Tenant Directory</CardTitle>
           <Button size="sm" variant="outline" onClick={handleDownload}>Download Report</Button>
         </div>
       </CardHeader>

       <CardContent className="p-0">
         <div className="overflow-x-auto">
           <Table>
             <TableHeader>
               <TableRow className="bg-gray-550 hover:bg-gray-50">
                 <TableHead className="w-25">Flat/Room</TableHead>
                 <TableHead className="min-w-50">Tenant Name</TableHead>
                 <TableHead>Type</TableHead>
                 <TableHead>Amount</TableHead>
                 <TableHead>Phone</TableHead>
                 <TableHead>Duration</TableHead>
                 <TableHead className="text-right">Service Charge</TableHead>
                 <TableHead className="text-right">Status</TableHead>
               </TableRow>
             </TableHeader>

            <TableBody>
              {tenants.map((tenant, idx) => (
                <TableRow key={idx} className="hover:bg-blue-50 transition-colors">
                  <TableCell className="font-medium text-gray-900">{tenant.room}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                        {tenant.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tenant.name}</p>
                        {tenant.investor && (
                          <p className="text-xs text-gray-500">Inv: {tenant.investor}</p>
                        )}
                      </div>
                     </div>
                   </TableCell>

                   <TableCell className="text-gray-600 capitalize">{tenant.apartment}</TableCell>
                   <TableCell className="text-gray-600 font-mono font-medium">{tenant.Amount || "-"}</TableCell>

                   <TableCell>
                     {tenant.phone ? (
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <span className="text-sm">{tenant.phone}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm italic">No contact</span>
                    )}
                  </TableCell>

                   <TableCell>
                     {tenant.start && tenant.end ? (
                      <div className="text-xs space-y-1">
                        <div className="flex items-center gap-1 text-emerald-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {tenant.start}
                        </div>
                        <div className="flex items-center gap-1 text-red-500">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                          {tenant.end}
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs">-</span>
                    )}
                  </TableCell>

                  <TableCell className="text-right font-mono font-medium text-gray-700">
                    {tenant.serviceCharge || tenant.amount || "-"}
                  </TableCell>

                  <TableCell className="text-right">
                    <span
                      className={`${getStatusColor(tenant.remark)} border px-2 py-1 rounded font-medium`}
                    >
                      {tenant.remark || "Unknown"}
                    </span>
                  </TableCell>
                 </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}