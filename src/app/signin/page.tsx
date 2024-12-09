import Link from "next/link";
import Image from "next/image";
import signin from "@/../../public/signin.png"
import email from "@/../../public/EnvelopeSimple.png"
import lock from "@/../../public/Lock.png"
import apple from "@/../../public/Apple.png"
import google from "@/../../public/Google.png"

export default function SigninPage() {
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
            404 Error
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
            <div className="flex items-center">
              <Image
                src={signin}
                width={10}
                height={10}
                alt="Vector Icon"
              />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]   text-[20px]">
                404
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Signin Form Section */}
      <section className="py-16 relative bg-white">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">
            Sign In
          </h3>
          <form>
            {/* Email Input */}
            <div className="mb-4 relative">
              <input
                type="email"
                className="w-full border rounded px-3 py-2 pl-10 focus:ring focus:ring-yellow-300"
                placeholder="Email"
              />
              <Image
                src={email} 
                alt="Email Icon"
                width={20}
                height={20}
                className="absolute left-3 top-2.5"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type="password"
                className="w-full border rounded px-3 py-2 pl-10 focus:ring focus:ring-yellow-300"
                placeholder="Password"
              />
              <Image
                src={lock}
                alt="Lock Icon"
                width={20}
                height={20}
                className="absolute left-3 top-2.5"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2 " />
              <span>{`Remember me?`}</span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Ip
            </button>

            {/* Forgot Password Link */}
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
                {`Forgot password?`}
              </Link>
            </p>
          </form>

          {/* Social Media Signin Buttons */}
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
