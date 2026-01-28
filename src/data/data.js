import PropertyImg from "../assets/images/IMG_2010 mcneil.JPG"
import property2Img from "../assets/images/IMG_ nathan.JPG"
import property14Img from "../assets/images/IMG_2010 mcneil.JPG"
import property17Img from "../assets/images/IMG FINBARS.JPG"
import property18Img from "../assets/images/IMG ORETEDO.JPG"
import property3Img from "../assets/images/IMG_2010 mcneil.JPG"
import property19Img from "../assets/images/IMG CATHOLIC.JPG"


export const TenantDetails = [
  {
    id: 1,
    name: "Property 1",
    address: "NO 3, ILUPEJU ROAD, ONIPAN LAGOS STATE",
    image: PropertyImg,
  },
  {
    id: 2,
    name: "Property 2",
    address: "No 6, ILUPEJU ROAD, ONIPAN Lagos",
    image: property2Img,
  },
  {
    id: 3,
    name: "Property 3",
    address: "No 8, ILUPEJU ROAD, ONIPAN Lagos",
    image: property3Img,
  },
  {
    id: 4,
    name: "Property 4",
    address: "No 5, ADEBANJO STREET, GBAGADA Lagos",
    image: property3Img,
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
    image: property3Img,
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
    { room: "Flat 1", name: "Yakubu Jumai Haminat", investor: null, amount: "1,000,000", apartment: "Selfcon", phone: "08166138549", start: "2025-10-01", end: "2026-09-30", serviceCharge: null, remark: "Paid" },
    { room: "Flat 2", name: "Hassan Babatunde",investor: null, amount: "1,000,000",  apartment: "Selfcon", phone: "08083023411", start: "2025-07-01", end: "2026-06-30", serviceCharge: null, remark: "Paid" },
    { room: "Flat 3", name: "Ogunleye Anuoluwapo",investor: null, amount: "800,000", apartment: "Selfcon", phone: "09130365606", start: "2025-03-01", end: "2026-02-01", serviceCharge: null, remark: "Paid" },
    { room: "Flat 4", name: "Adewale Maryam",investor: null, amount: "800,000", apartment: "Selfcon", phone: "08123456789", start: "2025-05-01", end: "2026-04-30", serviceCharge: null, remark: "Due" },
  ]
}














