// import { toast } from "react-toastify";
// import {Link, useNavigate} from "react-router";
// import React, {useState, useContext} from "react";

// function SignIn() {
//      const [ formData, setFormData ] = useState("")
//     const [errors, setErrors] = useState({});
//     const [submitError, setSubmitError] = useState("");
//     const [loading, setLoading] = useState(false);
//     // const { signIn } = useContext;
//     const navigate = useNavigate();
    

//     const handleChange = ({ target:{ name, value}})=>{setFormData((prev)=>({...prev,[name]: value}));
//     setErrors((prev)=>({...prev,[name]:""}));
//     };
//     const validateForm = () =>{
//         const newErrors = {};
//         if (!formData.email.trim())
//             newErrors.email = "Email is required";
//         if (!formData.password.trim())
//             newErrors.password = "password is required";
//         if (formData.password && formData.password.length < 6) {
//             newErrors.password = "password must be at least 6 characters";
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         if (!validateForm()) return;
//         setSubmitError("");
//         setFormData(initialFormState)
//         // console.log("sign in Data:", formData);
//         setLoading(true)
//         try {
//             await SignIn(formData)
//             toast.success("Signed in successfully!");
//             navigate("/")
//         } catch (error) {
//             setSubmitError(error.message || "sign in failed")
//             toast.danger("sign in failed, try again")        
//         }finally {
//             setLoading(false)
//         }
        
//          const renderInput = (label, name, type = "text")=> {
//         return <div>
//             <label className="block text-xl font-semibold">{label}</label>
//             <input value={formData[name]} onChange={handleChange} className="w-full border rounded-md px-2 py-3" name={name} type={type} />
//             {errors[name] && <p className="text-red-600 font-semibold mb-3">{errors[name]}</p>}
//         </div>
//          }
//     };
    
//     return (
// <div className="flex flex-col lg:flex-row h-screen w-full bg-gray-300">
//   <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
//     {/* <!-- Logo / Header --> */}
//     <div className="text-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">NAFF ADMIN</h1>
//       <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
//       <p className="text-gray-500">Sign in to your account</p>
//     </div>

//     {/* <!-- Form --> */}
//     <form onSubmit={handleSubmit} method="POST" className="space-y-5">
//       <div>
//         <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input type="email" id="email" name="email" required
//           className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//       </div>

//       <div>
//         <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
//         <input type="password" id="password" name="password" required
//           className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//       </div>

//       <div className="flex items-center justify-between">
//         <label className="flex items-center text-sm text-gray-600">
//           <input type="checkbox" className="mr-2 rounded border-gray-300" />
//           Remember me
//         </label>
//         <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
//       </div>

//       <button 
//         className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//         {loading ? "Signing in" : "sign in"}
//       </button>
//     </form>

//     {/* <!-- Footer --> */}
//     {/* <p className="mt-6 text-center text-sm text-gray-600">
//       Don’t have an account?
//       <a href="#" className="text-blue-600 hover:underline">Sign up</a>
//     </p>
//      */}

//     </div>
//     <div className="hidden lg:block lg:w-1/2">
//         <img className="object-cover w-full h-full " src={image} alt="" />
//         </div>
//   </div>
  



//     )
// }
// export default SignIn
