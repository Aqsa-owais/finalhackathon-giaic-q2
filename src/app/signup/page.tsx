import Link from "next/link";
import Image from "next/image";
import apple from "@/../../public/Apple.png";
import google from "@/../../public/Google.png";
import signin from "@/../../public/signin.png";
import email from "@/../../public/EnvelopeSimple.png";
import lock from "@/../../public/Lock.png";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="w-full  bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/signin.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "300px",
        }}
      >
        {/* Header Section */}
        <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
          Sign Up Page
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
            <div className="flex items-center">
              <Image src={signin} width={10} height={10} alt="Vector Icon" />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]   text-[20px]">
                404
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>{`Remember me?`}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
               {` Forgot password?`}
              </Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={google} alt="Google" className="h-6 mr-2" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={apple} alt="Apple" className="h-6 mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
