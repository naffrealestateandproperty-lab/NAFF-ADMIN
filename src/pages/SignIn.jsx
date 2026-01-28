
import image from '../assets/images/IMG_2010 mcneil.JPG'
import { toast } from "react-toastify";
 import { useNavigate } from "react-router-dom";
import { useState, } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Lock, CheckCircle2 } from "lucide-react";
import { Input } from "../component/input";
import { Button } from "../component/button";
import { Label } from "../component/label";
import { Checkbox } from "../component/checkbox";



const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});


export default function SignIn() {
  const navigate = useNavigate(); // ✅ useNavigate instead of navigate import
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit = async (data) => {
  setLoading(true);
  setError("");

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (data.email === "aliminafiu123@gmail.com" && data.password === "naffrealadmin") {
      toast({
        title: "Welcome back!",
        description: "Signed in successfully.",
      });
      navigate("/home");
// i navigate here
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    setError(message);
    toast({
      variant: "destructive",
      title: "Access Denied",
      description: message,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left: Form */}
      <div className="flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-4xl font-heading font-bold text-gray-900 tracking-tight">
              NAFF Admin
            </h1>
            <p className="text-gray-500">
              Enter your credentials to access the dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@naff.com"
                    className="pl-10"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    {...register("password")}
                    aria-invalid={!!errors.password}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none text-gray-600"
                >
                  Remember me
                </label>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium text-center">
                {error}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-11 text-base bg-gray-300 cursor-pointer hover:bg-primary/100 text-black shadow-lg shadow-primary/20 transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* <div className="pt-8 text-center text-sm text-gray-400">
            Protected by Secure Auth System v1.0
          </div> */}
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
        <img
          src={image}
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-16 z-20 text-white max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-6 border border-white/20">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            <span>NAFF REAL ESTATE AND PROPERTIES LIMITED</span>
            <p>RN: 2351129</p>
          </div>
          <h2 className="text-3xl font-heading font-bold leading-tight mb-4">
            "To Become A Foremost One Stop Real Estate Developer In Our Chosen Market."
          </h2>
          <p className="text-gray-300">
            To Efficiently Deliver And Maintain Quality Living Spaces.
          </p>
        </div>
      </div>
    </div>
  );
}