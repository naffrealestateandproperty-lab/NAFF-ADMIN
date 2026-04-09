import PropertyImg from "../assets/images/IMG_2010 mcneil.JPG"
import property2Img from "../assets/images/IMG_ nathan.JPG"
import property14Img from "../assets/images/IMG_2010 mcneil.JPG"
import property17Img from "../assets/images/IMG FINBARS.JPG"
import property18Img from "../assets/images/IMG ORETEDO.JPG"
import property3Img from "../assets/images/IMG_2010 mcneil.JPG"
import property19Img from "../assets/images/IMG CATHOLIC.JPG"
import property6Img from "../assets/images/IMG_4694_NO 3.JPG.jpg"
import property8Img from "../assets/images/IMG_4692_NO 8.JPG.jpg"
import property9Img from "../assets/images/IMG_4693_NO 3.JPG.jpg"
import property10Img from "../assets/images/IMG_4695_oseni.JPG.jpg"
import property11Img from "../assets/images/IMG_4696_gbagada.jpg.jpg"


const startDate = new Date("2025-02-01");  // 1 Feb 2025
const endDate = new Date("2026-01-31");    // 31 Jan 2026

console.log(startDate.toDateString()); // Sat Feb 01 2025
console.log(endDate.toDateString());   // Sat Jan 31 2026





export const TenantDetails = [
  {
    id: 1,
    name: "Property 1",
    address: "NO 3, ILUPEJU ROAD, ONIPAN LAGOS STATE",
    image: property6Img,
  },
  {
    id: 2,
    name: "Property 2",
    address: "No 6, ILUPEJU ROAD, ONIPAN Lagos",
    image: property9Img,
  },
  {
    id: 3,
    name: "Property 3",
    address: "No 8, ILUPEJU ROAD, ONIPAN Lagos",
    image: property8Img,
  },
  {
    id: 4,
    name: "Property 4",
    address: "No 5, ADEBANJO STREET, GBAGADA Lagos",
    image: property11Img,
  },
  {
    id: 5,
    name: "Property 5",
    address: "No 26, ARAROMI STREET, ONIKE YABA Lagos",
    image: property3Img,
  },
  {
    id: 6,
    name: "Property 6",
    address: "No 4, ST AGNES STREET, SABO YABA Lagos",
    image: property3Img,
  },
  {
    id: 7,
    name: "Property 7",
    address: "No 4, OYEKAN STREET, SABO YABA Lagos",
    image: property3Img,
  },
  {
    id: 8,
    name: "Property 8",
    address: "No 7, OSENI EWU STREET, OSHODI Lagos",
    image: property10Img,
  },
  {
    id: 9,
    name: "Property 9",
    address: "No 29/30, LAWANI STREET, AKOKA Lagos",
    image: property3Img,
  },
  {
    id: 10,
    name: "Property 10",
    address: "No 7, NATHAN STREET, SURULERE Lagos",
    image: property2Img,
  },
  {
    id: 11,
    name: "Property 11",
    address: "No 3, ABULE IJESHA STREET, ABULE IJESHA Lagos",
    image: property3Img,
  },
  {
    id: 12,
    name: "Property 12",
    address: "No 14B, BAILEY STREET, MOROCCO Lagos  NAFF HOUSE",
    image: property3Img,
  },
  {
    id: 13,
    name: "Property 13",
    address: "No 14A, BAILEY STREET, MOROCCO Lagos",
    image: property3Img,
  },
  {
    id: 14,
    name: "Property 14",
    address: "No 33, MCNEIL STREET, SABO YABA Lagos",
    image: property14Img,
  },
  {
    id: 15,
    name: "Property 15",
    address: "No 316, BORNO WAY, ALAGOMEJI Lagos",
    image: property3Img,
  },
  {
    id: 16,
    name: "Property 16",
    address: "No 36, SHOLANKE STREET, AKOKA Lagos",
    image: property3Img,
  },
  {
    id: 17,
    name: "Property 17",
    address: "No 33, ST FINBARS STREET, AKOKA Lagos",
    image: property17Img,
  },
  {
    id: 18,
    name: "Property 18",
    address: "No 1, ORETEDO STREET, SURULERE Lagos",
    image: property18Img,
  },
  {
    id: 19,
    name: "Property 19",
    address: "No 15, CATHOLIC MISSION STREET, LAGOS ISLAND Lagos",
    image: property19Img,
  },
];



// Tenants data mapped by property ID
export const propertyTenants = {
  1: [
    { room: "Flat 1", name: "Service Apartment",Amount: "null", investor: "Mr Wole", apartment: "Selfcon", phone: null, start: null, end: null, serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 2", name: "Kingsley George",Amount: "400,000", investor: "Oju", apartment: "Selfcon", phone: "07064986620", start: "2026-07-31", end: "2026-01-01", serviceCharge: "150,000", remark: "Due" },
    { room: "Flat 3", name: "Onile",Amount: "400,000", investor: "Onile 1", apartment: "Selfcon", phone: null, start: null, end: null, serviceCharge: null, remark: "Due" },
    { room: "Flat 7", name: "Sanusi Abdusalam",Amount: "400,000", investor: "Kazeem", apartment: "Miniflat", phone: "08166403476", start: "2025-05-01", end: "2026-04-30", serviceCharge: "200,000", remark: "Overdue" },
    { room: "Flat 8", name: "Oguns Yinka",Amount: "400,000", investor: "Emma Azeezat", apartment: "Miniflat", phone: "08100454851", start: "2025-04-01", end: "2026-03-31", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 9", name: "Ademola Ozediran", investor: "Naff", apartment: "Selfcon", phone: "081828539966", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 10", name: "Evienbor Elizabeth",Amount: "400,000", investor: "Oni Ile 2", apartment: "Selfcon", phone: "08066704398", start: "2025-02-01", end: "2026-01-31", serviceCharge: "150,000", remark: "Due" },
    { room: "Flat 11", name: "Enabulele Osazee", investor: "Naff", apartment: "Miniflat", phone: "08034363246", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 12", name: "Long Lease", investor: "Lease", apartment: "Miniflat", phone: null, start: null, end: null, serviceCharge: "200,000", remark: "Overdue" },
    { room: "Flat 13", name: "Olawale Micheal", investor: "Omo Baba", apartment: "Miniflat", phone: "08142157302", start: "2025-07-01", end: "2026-06-30", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 14", name: "Joseph Apanisele", investor: "Hammed Friend", apartment: "Miniflat", phone: "08030507048", start: "2025-02-01", end: "2026-01-31", serviceCharge: "200,000", remark: "Due" },
    { room: "Flat 15", name: "Bashorun Mubaraq", investor: "Bro Sodiq", apartment: "Miniflat", phone: "08131232844", start: "2025-03-01", end: "2026-02-28", serviceCharge: "200,000", remark: "Due" },
    { room: "Flat 16", name: "Yusuf Iketin", investor: "Oni Ile 3", apartment: "Miniflat", phone: "08034624705", start: "2025-05-01", end: "2026-04-30", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 17", name: "Peter Koya", investor: "Hammed", apartment: "Selfcon", phone: "08030507048", start: "2025-02-01", end: "2026-01-31", serviceCharge: "150,000", remark: "Due" },
    { room: "Flat 18", name: "Winner Ogioghos", investor: "Joseph", apartment: "Selfcon", phone: "08034693555", start: "2025-08-01", end: "2026-07-31", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 19", name: "Adeniyi Samson", investor: "Oni Ile 4", apartment: "Miniflat", phone: "08175422688", start: "2025-08-01", end: "2026-07-31", serviceCharge: "200,000", remark: "Due" },
    { room: "Flat 20", name: "Olorundare Gbenga", investor: "Naff", apartment: "Miniflat", phone: "07033436970", start: "2025-08-01", end: "2026-07-31", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 21", name: "Mosunmola Oyetoro", investor: "Naff", apartment: "Miniflat", phone: "09041707675", start: null, end: null, serviceCharge: "200,000", remark: "Move out Feb ending" },
    { room: "Flat 22", name: "Adewuyi Abraham", investor: "My Uncle", apartment: "Miniflat", phone: "08069588656", start: "2025-02-01", end: "2026-01-31", serviceCharge: "200,000", remark: "Due" },
    { room: "Flat 23", name: "Destiny Udogaraya", investor: "Naff", apartment: "Miniflat", phone: "07069012365", start: "2025-08-01", end: "2026-07-31", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 24", name: "Tosin Blessing", investor: "Naff", apartment: "Miniflat", phone: "08135270006", start: "2025-04-01", end: "2026-03-31", serviceCharge: "200,000", remark: "Paid" },
    { room: "Flat 25", name: "Yolanda Omonigho", investor: "Nepa 1", apartment: "Miniflat", phone: "08138726345", start: "2025-06-01", end: "2026-05-31", serviceCharge: "200,000", remark: "Paid" },
    
  ],
  2: [
    { room: "Flat 1", name: "Yakubu Jumai Haminat",Amount: "1,000,000", investor: null,apartment: "Selfcon",phone: "08166138549", start: "2025-10-01", end: "2026-09-30", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 2", name: "Hassan Babatunde",Amount:"1,000,000", investor: null, apartment: "Selfcon", phone: "08083023411", start: "2025-07-01", end: "2026-06-30", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 3", name: "Ogunleye Anuoluwapo",Amount:"800,000", investor: null, apartment: "Selfcon", phone: "09130365606", start: "2025-03-01", end: "2026-02-28", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 4", name: "Omotunde Paul",Amount:"1,300,000", investor: null, apartment: "miniflat", phone: "08100601998", start: "2025-05-01", end: "2026-02-28", serviceCharge: "150,000", remark: "Due" },
    { room: "Flat 5", name: "Tony Faith",Amount: null, investor: "Mr Wole", apartment: "selfcon", phone: "08098765432", start: null, end: null, serviceCharge: "150,000", remark: "Overdue" },
    { room: "Flat 6", name: "Eze Bibian Ogechukwu",Amount: "700,000", investor: null, apartment: "selfcon", phone: "08153535253", start: "2025-01-01", end: "2025-12-31", serviceCharge: "150,000", remark: "Due" },
    { room: "Flat 7", name: "Juochi Chiebube",Amount: "900,000", investor: "Baba", apartment: "selfcon", phone: "08161399671", start: "2026-01-01", end: "2026-12-31", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 8", name: "Owolabi Temitope",Amount: "700,000", investor: "tolani", apartment: "selfcon", phone: "08066376001", start: "2026-03-01", end: "2027-02-28", serviceCharge: "100,000", remark: "paid" },
  ],
  3: [
    { room: "Flat 1", name: "Adeola Faith",Amount: "900,000", investor: "Mr Lanre", apartment: "Selfcon", phone: "08166138549", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 2", name: "Rotimi Fasusi",Amount: "700,000", investor: "Mr Valentino", apartment: "selfcon", phone: "08083023411", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 3", name: "Adeola Ojediran",Amount: "700,000", investor: "Tolani 1", apartment: "selfcon", phone: "08182853966", start: "2025-03-01", end: "2026-08-30", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 4", name: "Adekanye Stephen",Amount: "1,000,000", investor: "Naff", apartment: "selfcon", phone: "08023060431", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 5", name: "Besi Atsemudiasa",Amount: "1,500,000", investor: "Oju", apartment: "miniflat", phone: "07083620236", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 6", name: "Margeret Mogbolu",Amount: "800,000", investor: "Iya Mariam", apartment: "selfcon", phone: "07037915754", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 7", name: "Gbolahan Ademola",Amount: "1,100,000", investor: "Oni Ile", apartment: "miniflat", phone: "08165571165", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 8", name: "Of0nasaha Malachy",Amount: "700,000", investor: "Tolani 2", apartment: "selfcon", phone: "08131315465", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 9", name: "Edith Onwubiki",Amount: "1,300,000", investor: "Lekan", apartment: "miniflat", phone: "08125346444", start: null, end: null, serviceCharge: null, remark: "Evicted" },
    { room: "Flat 10", name: "Fasheun Oyindamola",Amount: "2,000,000", investor: "Baba Be", apartment: "2-bed", phone: "08145256718", start: "2026-03-01", end: "2027-02-28", serviceCharge: "250,000", remark: "paid" },
    { room: "Flat 11", name: "Shadrach joy",Amount: "1,000,000", investor: "Naff", apartment: "selfcon", phone: "08161652933", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 12", name: "Adeniran Samuel",Amount: "2,000,000", investor: "Naff", apartment: "2-bed", phone: "08137840740", start: "2026-03-01", end: "2027-02-28", serviceCharge: "250,000", remark: "paid" },
    { room: "Flat 13", name: "Dammy",Amount: null, investor: "dammy", apartment: "miniflat", phone: "08166543210", start: null, end: null, serviceCharge: "200,000", remark: "long lease" },
    { room: "Flat 14", name: "Omadoye Winniefred",Amount: "3,000,000", investor: "Naff", apartment: "2-bed", phone: "07032594429", start: "2026-01-01", end: "2026-12-31", serviceCharge: "300,000", remark: "paid" },
    { room: "Flat 15", name: "Blessing",Amount: null, investor: "Oni Ile", apartment: "miniflat", phone: "07069072565", start: "2025-06-01", end: "2026-05-31", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 16", name: "Ekwensi Dominic Kamzy",Amount: "1,500,000", investor: "Jeje", apartment: "miniflat", phone: "09035558573", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 17", name: "Service Apartment",Amount: null, investor: null, apartment: "miniflat", phone: null, start: null, end: null, serviceCharge: "200,000", remark: "Due" },
    { room: "Flat 18", name: "Service Apartment",Amount: null, investor: null, apartment: "2-bed", phone: null, start: null, end: null, serviceCharge: "200,000", remark: "Due" },
    { room: "Flat 19", name: "Doctor",Amount: "800,000", investor: "Baba 24", apartment: "selfcon", phone: "09024179088", start: "2025-10-01", end: "2027-03-31", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 20", name: "Doctor",Amount: "1,700,000", investor: "Oni Ile", apartment: "2-bed", phone: "09024179088", start: "2025-10-01", end: "2027-03-31", serviceCharge: "250,000", remark: "paid" },
    { room: "Flat 21", name: "Bello Al Ameen Ishola",Amount: "1,500,000", investor: "Naff", apartment: "miniflat", phone: "09098145566", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 22", name: "Otunba Abiola Muhammed",Amount: "2,000,000", investor: "Naff", apartment: "2-bed", phone: "08160976211", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "Flagged" },
    { room: "Flat 23", name: "Afolabi Ayola",Amount: "1,500,000", investor: "Sodiq", apartment: "miniflat", phone: "08110505842", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 24", name: "Agbeyi Resan",Amount: "1,500,000", investor: "Naff", apartment: "miniflat", phone: "080127731945", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
    { room: "Flat 25", name: "SHOP",Amount: "4,000,000", investor: "Naff", apartment: "SHOP", phone: "09135333219", start: "2024-03-01", end: "2026-08-31", serviceCharge: "300,000", remark: "paid" },
  ],
  4: [
{ room: "Flat 1", name: "Abiodun Adekunle",Amount: "1,500,000", investor: "Mr Naff", apartment: "Miniflat", phone: "09068957279", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "Paid" },
{ room: "Flat 2", name: "Omoniyi Samuel",Amount: "2,000,000", investor: "Naff", apartment: "Miniflat", phone: "09034512417", start: "2026-03-01", end: "2027-02-28", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 3", name: "Engineer",Amount: null, investor: "Engineer", apartment: "Miniflat", phone: "08022264702", start: null, end: null, serviceCharge: "200,000", remark: "due" },
{ room: "Flat 4", name: "Sajuyigbe Victor",Amount: "1,500,000", investor: "Mr Chucks", apartment: "Miniflat", phone: "08148422415", start: "2025-07-01", end: "2026-06-30", serviceCharge: "150,000", remark: "paid" },
{ room: "Flat 5", name: "Sherif",Amount: "900,000", investor: "Baba Onile", apartment: "Miniflat", phone: "09070293993", start: "2025-03-01", end: "2026-02-28", serviceCharge: "150,000", remark: "paid" },
{ room: "Flat 6", name: "Sarayu",Amount: "1,600,000", investor: "S.M.F", apartment: "Miniflat", phone: "08162828980", start: "2025-10-01", end: "2026-09-30", serviceCharge: "150,000", remark: "paid" },
{ room: "Flat 7", name: "OFLOR",Amount: null, investor: "Oflor", apartment: "Miniflat", phone: "07032187878", start: null, end: null, serviceCharge: "150,000", remark: "paid" },
{ room: "Flat 8", name: "Lawal",Amount: null, investor: "Onile", apartment: "2-bed", phone: "08143663322", start: "2025-03-01", end: "2026-02-28", serviceCharge: "250,000", remark: "paid" },
{ room: "Flat 9", name: "Abdulsalam",Amount: "1,500,000", investor:"Mr naff", apartment: "2-bed", phone: "07052520563", start: "2025-03-31", end: "2026-02-28", serviceCharge: "250,000", remark: "paid" },
{ room: "Flat 10", name: "Amosun Folashade",Amount: "1,000,000", investor: "Onile", apartment: "Miniflat", phone: "08088918282", start: "2025-03-01", end: "2026-02-28", serviceCharge: "150,000", remark: "Due" },
{ room: "Flat 11", name: "Sandra",Amount: "1,200,000", investor: "S.M.F", apartment: "Miniflat", phone: "08167918763", start: "2026-02-01", end: "2027-01-31", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 12", name: "Awe",Amount: "1,000,000", investor: "Naff", apartment: "selfcon", phone: "08023468413", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
{ room: "Flat 13", name: "Akintoye",Amount: "700,000", investor: "Naff", apartment: "selfcon", phone: "08027683463", start: "2025-03-01", end: "2026-02-28", serviceCharge: "150,000", remark: "due" },
{ room: "Flat 14", name: "Olajide",Amount: "1,000,000", investor: "Naff", apartment: "Miniflat", phone: "07060760691", start: "2025-11-01", end: "2026-10-30", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 15", name: "Precious Lucky",Amount: "1,000,000", investor: "Mr Niyi", apartment: "Miniflat", phone: "08124114457", start: "2025-03-01", end: "2026-02-28", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 16", name: "Eniola",Amount: "600,000", investor: "Ada", apartment: "selfcon", phone: "08064693037", start: null, end: null, serviceCharge: "150,000", remark: "TO MOVE OUT BY JUNE" },
{ room: "Flat 17", name: "Basit",Amount: null, investor: "Basit", apartment: "selfcon", phone: "07044209502", start: null, end: null, serviceCharge: "150,000", remark: "long lease" },
{ room: "Flat 18", name: null,Amount: null, investor: "Onile", apartment: "Miniflat", phone: null, start: null, end: null, serviceCharge: "200,000", remark: "no record of the new intake" },
{ room: "Flat 19", name: "Damilola",Amount: "1,200,000", investor: "Naff", apartment: "Miniflat", phone: "08071626987", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 20", name: "Moyosoreoluwa",Amount: "1,000,000", investor: "Onile", apartment: "Miniflat", phone: "07048180192", start: "2026-01-01", end: "2026-12-31", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 21", name: "Tega",Amount: "800,000", investor: "Jumoke", apartment: "Miniflat", phone: "08051812473", start: "2025-05-01", end: "2026-04-30", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 22", name: "Ayooluwa",Amount: "800,000", investor: "Naff", apartment: "Miniflat", phone: "08179060221", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "paid" },
{ room: "Flat 23", name: "Adetutu",Amount: "650,000", investor: "Naff friend", apartment: "selfcon", phone: "09078662749", start: "2025-11-01", end: "2026-10-31", serviceCharge: "150,000", remark: "paid" },
{ room: "Flat 24", name: null,Amount: null, investor: null, apartment: null, phone: null, start: null, end: null, serviceCharge: "200,000", remark: "no record of tenant" },
{ room: "Flat 25", name: "Mr abiodun",Amount: null, investor: "Naff", apartment: "2-bed", phone: "08055115034", start: null, end: null, serviceCharge: "250,000", remark: "long lease" },



  ],
  5: [
    { room: "Flat 1", name: "Adeola Faith",Amount: "900,000", investor: "Mr Lanre", apartment: "Selfcon", phone: "08166138549", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "Paid" },
    { room: "Flat 2", name: "Rotimi Fasusi",Amount: "700,000", investor: "Mr Valentino", apartment: "selfcon", phone: "08083023411", start: "2026-03-01", end: "2027-02-28", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 3", name: "Adeola Ojediran",Amount: "700,000", investor: "Tolani 1", apartment: "selfcon", phone: "08182853966", start: "2025-03-01", end: "2026-08-30", serviceCharge: "150,000", remark: "paid" },
  ],
  6:[
    { room: "Flat 1", name: "Service apartment",Amount: null, investor: null, apartment: "2-bed", phone: null, start: null, end: null, serviceCharge: "300,000", remark: "Paid" },
  { room: "Flat 2", name: "Service apartment",Amount: null, investor: null, apartment: "2-bed", phone: null, start: null, end: null, serviceCharge: "300,000", remark: "Paid" },
  { room: "Flat 3", name: "Feyi yemisi",Amount: "2,500,000", investor: "Gani", apartment: "2-bed", phone: "07086833575", start: "2025-09-01", end: "2026-08-31", serviceCharge: "300,000", remark: "Paid" },
  { room: "Flat 4", name: null,Amount: null, investor: "  Onile", apartment: "2-bed", phone: null, start: null, end: null, serviceCharge: "300,000", remark: "Paid" },
  { room: "Flat 5", name: "Ayomide",Amount: "2,500,000", investor: "Naff", apartment: "2-bed", phone: "07033926729", start: "2025-09-01", end: "2026-08-31", serviceCharge: "300,000", remark: "Paid" },
  { room: "Flat 6", name: "Sola",Amount: "1,300,000", investor: "Naff", apartment: "miniflat", phone: "08028966495", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "Paid" },
  { room: "Flat 7", name: "Adebisi",Amount: "1,200,000", investor: "Naff", apartment: "miniflat", phone: "08022429346", start: "2025-09-01", end: "2026-02-28", serviceCharge: "200,000", remark: "Due" },
  { room: "Flat 8", name: "Patricia",Amount: "1,300,000", investor: "Onile", apartment: "miniflat", phone: "08030472944", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "Paid" },
  { room: "Flat 9", name: "Lawal",Amount: "1,300,000", investor: "Naff", apartment: "miniflat", phone: "08125085287", start: "2025-09-01", end: "2026-02-28", serviceCharge: "200,000", remark: "Due" },
  { room: "Flat 10", name: "Suliamon",Amount: "1,300,000", investor: "Kazeem", apartment: "miniflat", phone: "08112737734", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "Paid" },
  { room: "Flat 11", name: null,Amount: null, investor: "Taofic", apartment: "miniflat", phone: "080283554346", start: null, end: null, serviceCharge: "200,000", remark: "over due" },
  { room: "Flat 12", name: "Seun",Amount: null, investor: "Seun lawani", apartment: "miniflat", phone: "09078175159", start: null, end: null, serviceCharge: "200,000", remark: "long lease" },
  { room: "Flat 13", name: "Feyi Kemi",Amount: "1,300,000", investor: "Muhammed", apartment: "miniflat", phone: "08029110980", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "paid" },
  { room: "Flat 14", name: "Evi",Amount: "1,200,000", investor: "Naff", apartment: "miniflat", phone: "08063943542", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "paid" },
  { room: "Flat 15", name: "Alakija",Amount: "1,300,000", investor: "Muhammed", apartment: "miniflat", phone: "08134774682", start: "2025-09-01", end: "2026-02-28", serviceCharge: "200,000", remark: "Due" },
  { room: "Flat 16", name: "Shimaya",Amount: "700,000", investor: "Jaiye", apartment: "selfcon", phone: "07039612323", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "paid" },
  { room: "Flat 17", name: "Esther",Amount: "700,000", investor: "Naff", apartment: "selfcon", phone: "09032711886", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "paid" },
  { room: "Flat 18", name: null,Amount: null, investor: "Kazeem", apartment: "selfcon", phone: null, start: null, end: null, serviceCharge: null, remark: "vacant" },
  { room: "Flat 19", name: "Oisetohamme",Amount: "1,500,000", investor: "Mr lanre", apartment: "miniflat", phone: "08181947482", start: "2025-11-01", end: "2026-10-31", serviceCharge: "200,000", remark: "Paid" },
  { room: "Flat 20", name: "Juliana",Amount: "700,000", investor: "Naff", apartment: "selfcon", phone: "09062380923", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "paid" },
  { room: "Flat 21", name: "Gloria",Amount: "700,000", investor: "Onile", apartment: "selfcon", phone: "07069027612", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "paid" },
  { room: "Flat 22", name: "Oluwaseun",Amount: "1,300,000", investor: "Naff", apartment: "miniflat", phone: "08032711886", start: "2025-09-01", end: "2026-08-31", serviceCharge: "200,000", remark: "paid" },
  { room: "Flat 23", name: "Blessing",Amount: "700,000", investor: "Mr lanre", apartment: "selfcon", phone: "07062451442", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "paid" },
    { room: "Flat 24", name: "Kola",Amount: "700,000", investor: "Kazeem", apartment: "selfcon", phone: "07036497792", start: "2025-09-01", end: "2026-08-31", serviceCharge: "150,000", remark: "paid" },
 ],
 7:[
  { room: "Flat 1", name: "Emma",Amount: null, investor: "Emma", apartment: "2-bed", phone: "07033846614", start: null, end: null, serviceCharge: "300,000", remark: "Paid" },
  { room: "Flat 2", name: "Ejima cynthia",Amount: "2,000,000", investor: "Naff", apartment: "2-bed", phone: "08034788333", start: "2025-03-01", end: "2026-02-28", serviceCharge: "300,000", remark: "Due" },
  { room: "Flat 3", name: "Laolu",Amount: null, investor: "Laolu", apartment: "3-bed", phone: "08055531564", start: null, end: null, serviceCharge: "200,000", remark: "long lease" },
  {}
 ]
  // Add more properties and their tenants as needed
};













