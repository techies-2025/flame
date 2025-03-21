import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/ui/logo";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="p-2 flex items-center gap-3 border-b border-gray-200 px-6 sticky top-0 bg-[#FFFFFFA9] backdrop-filter backdrop-blur-sm z-10">
        <Logo />
        <Link href="/signup" className="ml-auto">
          <Button variant={"outline"}>Sign In</Button>
        </Link>
        <Link href="/signup">
          <Button className="text-white">Sign Up</Button>
        </Link>
      </header>
      <main>
        <section className="flex flex-col items-center justify-center gap-4 px-6 py-16">
          <h1 className="text-5xl font-bold text-center">Welcome to Flames</h1>
          <p className="text-lg text-center text-gray-600">
            A platform to share your educational resources and connect with
            other people.
          </p>
          <Link href="/signup">
            <span className="text-white rounded p-2 px-4 bg-primary">
              Get Started
            </span>
          </Link>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
              <svg
                width={80}
                height={80}
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M48.5 30h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-21c0-.8.7-1.5 1.5-1.5h4c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V31.5c0-.8-.7-1.5-1.5-1.5M34 14c-10 0-19.1 8.9-19.9 19.4-.1.8.6 1.6 1.5 1.6h3c.8 0 1.4-.6 1.5-1.3C20.8 26.2 27.2 20 35 20h1.6c.9 0 1.3 1.1.7 1.7l-5.5 5.6c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L49.6 18c.6-.6.6-1.5 0-2.1L36.1 2.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.7 1.5-.1 2.1l5.6 5.6c.6.6.2 1.7-.7 1.7z" />
              </svg>
              <h3 className="text-xl font-bold">Share Resources</h3>
              <p className="text-gray-600 text-center">
                Share your educational resources with the community.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
              <svg
                width={80}
                height={80}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity={0.4}
                  d="M17.53 7.77a.7.7 0 0 0-.21 0 2.874 2.874 0 0 1-2.78-2.88C14.54 3.3 15.83 2 17.43 2c1.59 0 2.89 1.29 2.89 2.89a2.89 2.89 0 0 1-2.79 2.88m3.26 6.93c-1.12.75-2.69 1.03-4.14.84.38-.82.58-1.73.59-2.69 0-1-.22-1.95-.64-2.78 1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8M6.44 7.77q.105-.015.21 0a2.874 2.874 0 0 0 2.78-2.88C9.43 3.3 8.14 2 6.54 2 4.95 2 3.65 3.29 3.65 4.89a2.89 2.89 0 0 0 2.79 2.88m.11 5.08c0 .97.21 1.89.59 2.72-1.41.15-2.88-.15-3.96-.86-1.58-1.05-1.58-2.76 0-3.81 1.07-.72 2.58-1.01 4-.85-.41.84-.63 1.79-.63 2.8"
                  fill="currentColor"
                />
                <path
                  d="M12.12 15.87a1 1 0 0 0-.26 0 3.425 3.425 0 0 1-3.31-3.43c0-1.9 1.53-3.44 3.44-3.44 1.9 0 3.44 1.54 3.44 3.44 0 1.86-1.46 3.37-3.31 3.43m-3.25 2.07c-1.51 1.01-1.51 2.67 0 3.67 1.72 1.15 4.54 1.15 6.26 0 1.51-1.01 1.51-2.67 0-3.67-1.71-1.15-4.53-1.15-6.26 0"
                  fill="currentColor"
                />
              </svg>
              <h3 className="text-xl font-bold">Connect with People</h3>
              <p className="text-gray-600 text-center">
                Connect with other people and learn together.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={80}
                height={80}
                viewBox="0 0 256 196.7"
                xmlSpace="preserve"
              >
                <path d="M127.5 194.9c12 0 21.9-8.6 24-20h-48c2.1 11.4 12 20 24 20m80-60.2c-8.5-8.5-19-12.6-19-53.8 0-30.3-22.1-55.4-51-60.2H136c1.8-2 3-4.7 3-7.7 0-6.3-5.1-11.4-11.4-11.4S116.2 6.7 116.2 13c0 3 1.1 5.7 3 7.7h-1.6c-28.9 4.8-51 29.9-51 60.2 0 41.2-10.5 45.3-19 53.8-11.7 11.5-3.5 31.3 12.8 31.3h134.2c16.3 0 24.5-19.8 12.9-31.3M10.8 69.2c0 14.5 5.3 28.5 15.1 39.8l-6.8 6.8c-11.5-12.4-18-29.1-18-46.3 0-17.3 6.6-34 18.2-46.2l6.8 6.8c-10 11-15.3 24.5-15.3 39.1m17.2.3c0-10.3 3.6-19.8 10.4-27.8l6.8 6.8c-4.9 6-7.4 13.1-7.4 20.8s2.6 15 7.4 20.8l-6.8 6.8C31.6 89.3 28 79.7 28 69.5m202-39.4 6.8-6.8C248.4 35.5 255 52.1 255 69.5c0 17.2-6.5 33.9-18 46.3l-6.8-6.8c9.7-11.2 15.1-25.2 15.1-39.8S240 41.1 230 30.1m-12.2 66.7L211 90c4.8-5.8 7.4-13.1 7.4-20.8 0-7.6-2.6-14.8-7.4-20.8l6.8-6.8c6.8 8 10.4 17.5 10.4 27.8s-3.7 19.9-10.4 27.4" />
              </svg>
              <h3 className="text-xl font-bold">Get Notified</h3>
              <p className="text-gray-600 text-center">
                Get notified when someone shares a resource.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center">How to Use Flames</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 px-8">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
              <svg
                width={80}
                height={80}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-name="Path 184"
                  d="M11.5 13a.5.5 0 0 0-.5.5V15H1V3h2v.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V3h2v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5H9v-.5A1.5 1.5 0 0 0 7.5 0h-3A1.5 1.5 0 0 0 3 1.5V2H.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5M4 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3H4Zm11.854 4.646-2-2a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 7 10.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .354-.146l6-6a.5.5 0 0 0 0-.708M8 12v-1.293l5.5-5.5L14.793 6.5l-5.5 5.5Zm-2 .5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m0-3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M8.5 7h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1"
                />
              </svg>
              <h3 className="text-xl font-bold">Step 1: Sign Up</h3>
              <p className="text-gray-600 text-center">
                Create an account to get started and join the community.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
              <svg
                width={80}
                height={80}
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M48.5 30h-3c-.8 0-1.5.7-1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-21c0-.8.7-1.5 1.5-1.5h4c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V31.5c0-.8-.7-1.5-1.5-1.5M34 14c-10 0-19.1 8.9-19.9 19.4-.1.8.6 1.6 1.5 1.6h3c.8 0 1.4-.6 1.5-1.3C20.8 26.2 27.2 20 35 20h1.6c.9 0 1.3 1.1.7 1.7l-5.5 5.6c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L49.6 18c.6-.6.6-1.5 0-2.1L36.1 2.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.7 1.5-.1 2.1l5.6 5.6c.6.6.2 1.7-.7 1.7z" />
              </svg>
              <h3 className="text-xl font-bold">Step 2: Share Resources</h3>
              <p className="text-gray-600 text-center">
                Upload your educational resources to help others learn.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
              <svg
                id="Uploaded to svgrepo.com"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="80px"
                height="80px"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
              >
                <style type="text/css">
                  {"\n\t.puchipuchi_een{fill:#111918;}\n"}
                </style>
                <path
                  className="puchipuchi_een"
                  d="M24,17c-0.665,0-1.302,0.113-1.9,0.312l-2.068-3.878C21.238,12.337,22,10.759,22,9 c0-3.314-2.686-6-6-6s-6,2.686-6,6c0,1.759,0.762,3.337,1.968,4.434L9.9,17.312C9.302,17.113,8.665,17,8,17c-3.314,0-6,2.686-6,6 s2.686,6,6,6c2.972,0,5.433-2.163,5.91-5h4.18c0.477,2.837,2.938,5,5.91,5c3.314,0,6-2.686,6-6S27.314,17,24,17z M13.654,14.523 C14.375,14.83,15.167,15,16,15s1.625-0.17,2.346-0.477l1.991,3.732c-1.168,0.903-1.991,2.226-2.247,3.744h-4.18 c-0.255-1.518-1.078-2.841-2.247-3.744L13.654,14.523z"
                />
              </svg>
              <h3 className="text-xl font-bold">Step 3: Connect</h3>
              <p className="text-gray-600 text-center">
                Interact with others, share ideas, and grow together.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 py-16 px-6 bg-gray-200">
          <h2 className="text-3xl font-bold text-center">Stay Updated</h2>
          <p className="text-lg text-center">
            Subscribe to our newsletter to get the latest updates and resources.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded border border-primary text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-primary max-sm:w-full text-white px-6 py-3 rounded hover:bg-secondary-dark transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-white">
              <svg
                width="40"
                height="40"
                viewBox="-4 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                className="jam jam-flame"
                fill="currentColor"
              >
                <path d="M5.652 5.594q-.242.291-.424.522-.37.473-.7.922C2.813 9.383 2 11.204 2 12.381 2 15.461 4.665 18 8 18s6-2.538 6-5.619c0-1.888-1.97-5.13-5.972-9.453-1.192 1.307-1.988 2.2-2.376 2.666M8 20c-4.418 0-8-3.411-8-7.619q0-2.54 2.914-6.523a28 28 0 0 1 1.202-1.545Q4.952 3.311 8 0q8 8.174 8 12.381C16 16.589 12.418 20 8 20m0-3c-2.21 0-4-1.706-4-3.81Q4 11.087 8 7q4 4.087 4 6.19C12 15.294 10.21 17 8 17m-2-3.81c0 .977.874 1.81 2 1.81s2-.833 2-1.81c0-.537-.654-1.675-2-3.24-1.346 1.565-2 2.703-2 3.24" />
              </svg>
              <span className="text-xl font-bold">Flames</span>
            </Link>
            <p className="text-[#f2f2f2] text-sm mt-2 text-center md:text-left">
              A platform to share educational resources and connect with others.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 text-center">
            <Link href="/about" className="text-[#f2f2f2] hover:text-white">
              About Us
            </Link>
            <Link href="/contact" className="text-[#f2f2f2] hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="text-[#f2f2f2] hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#f2f2f2] hover:text-white">
              Terms of Service
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-[#f2f2f2] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116c.729 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-[#f2f2f2] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-[#f2f2f2] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.773.131 4.548.39 3.465 1.473 2.382 2.556 2.123 3.781 2.064 5.06.013 8.332 0 8.756 0 12s.013 3.668.072 4.948c.059 1.279.318 2.504 1.401 3.587 1.083 1.083 2.308 1.342 3.587 1.401 1.28.059 1.704.072 4.948.072s3.668-.013 4.948-.072c1.279-.059 2.504-.318 3.587-1.401 1.083-1.083 1.342-2.308 1.401-3.587.059-1.28.072-1.704.072-4.948s-.013-3.668-.072-4.948c-.059-1.279-.318-2.504-1.401-3.587-1.083-1.083-2.308-1.342-3.587-1.401C15.668.013 15.244 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="text-center text-white text-sm mt-4">
          © {new Date().getFullYear()} Flames. All rights reserved. Powered by{" "}
          <a className="underline" href="https://ayscript.vercel.app">
            Ayscript
          </a>
        </div>
      </footer>
    </>
  );
}
