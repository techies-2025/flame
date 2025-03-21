import React from "react";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <form className="border rounded-2xl w-full max-w-md p-4 mx-auto my-[50px] flex flex-col items-center gap-1 space-y-4">
      <Logo />
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <Button variant={'outline'} className="w-full">
        <svg
          width={40}
          height={40}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#4285F4"
            d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 0 1-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15"
          />
          <path
            fill="#34A853"
            d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.04 7.04 0 0 0 8.14 15"
          />
          <path
            fill="#FBBC04"
            d="M4.187 9.342a4.17 4.17 0 0 1 0-2.68V4.859H1.849a6.97 6.97 0 0 0 0 6.286z"
          />
          <path
            fill="#EA4335"
            d="M8.14 3.77a3.84 3.84 0 0 1 2.7 1.05l2.01-1.999a6.8 6.8 0 0 0-4.71-1.82 7.04 7.04 0 0 0-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
          />
        </svg>
        <span>Login with Google</span>
      </Button>
      <p>OR</p>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Button className="w-full">Sign Up</Button>
      <p>
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
    </form>
  );
};

export default Page;
