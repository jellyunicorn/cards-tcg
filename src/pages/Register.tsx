import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosApi } from "../lib/axios";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(6, { message: "Username must be 6-20 characters" })
    .max(20, { message: "Username must be 6-20 characters" }),
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const [isPending, setIsPending] = useState<boolean>(false);
  const [failedLogin, setFailedLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister = async (values: FormSchema) => {
    setIsPending(true);
    try {
      await axiosApi.post("/users/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      setFailedLogin(false);
      toast.success("User registration successful!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("User registration failed!");
      setFailedLogin(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen font-pjs">
      <div className="flex flex-col shadow-xl p-6 rounded-xl">
        <div className="flex justify-center-safe">
          <img
            src={logo}
            alt="Company logo"
            className="w-[30%] h-[30%] mb-4"
          />
        </div>
        <div className="flex justify-center-safe">
          <h1 className="font-bold text-2xl mb-6">Create an Account</h1>
        </div>
        <div>
          {failedLogin && (
            <p className="text-red-600">
              Registration information is incorrect.
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-2"
        >
          <div>
            <p className="font-semibold">Username</p>
            <input
              type="text"
              {...register("name")}
              className="border border-gray-400 rounded-md p-2 my-1 w-100 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <input
              type="email"
              {...register("email")}
              className="border border-gray-400 rounded-md p-2 my-1 w-100 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <input
              type="password"
              {...register("password")}
              className="border border-gray-400 rounded-md p-2 my-1 w-100 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={`bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 rounded-xl my-4 ${isPending ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isPending ? "Processing..." : "Register"}
          </button>
        </form>
        <div className="flex flex-col items-center-safe text-xs gap-2">
          <div className="flex gap-1">
            <p className="font-semibold">Already have an account?</p>
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold">Or return to the</p>
            <Link to="/" className="text-blue-500 hover:underline">
              homepage
            </Link>
            <p className="font-semibold">instead</p>
          </div>
        </div>
      </div>
    </div>
  );
}
