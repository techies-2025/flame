import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = (props) => {
  const pathname = usePathname(); // Get the current route

  return (
    <section className="bg-gray-100 h-screen w-64 p-4 hidden md:flex flex-col justify-between">
      <div>
        <Logo />
        <nav className="mt-8 flex flex-col gap-4">
          <Link href="/dashboard">
            <button
              className={`w-full px-4 py-2 text-start rounded transition flex gap-2 items-center ${
                pathname === "/dashboard"
                  ? "bg-primary text-white"
                  : "text-primary bg-transparent hover:bg-gray-200"
              }`}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04m.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 12.85 8.04c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37"
                  fill="currentColor"
                />
              </svg>
              <span>Dashboard</span>
            </button>
          </Link>
          <Link href="/upload">
            <button
              className={`w-full px-4 py-2 text-start rounded transition flex gap-2 items-center ${
                pathname === "/upload"
                  ? "bg-primary text-white"
                  : "text-primary bg-transparent hover:bg-gray-200"
              }`}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-line"
                {...props}
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                  d="M12 16V3"
                />
                <path
                  data-name="primary"
                  style={{
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                  d="m16 7-4-4-4 4m12 9v4a1.08 1.08 0 0 1-1.14 1H5.14A1.08 1.08 0 0 1 4 20v-4"
                />
              </svg>
              <span>Upload Resources</span>
            </button>
          </Link>
          <Link href="/profile">
            <button
              className={`w-full px-4 py-2 text-start rounded transition flex items-center gap-2 ${
                pathname === "/profile"
                  ? "bg-primary text-white"
                  : "text-primary bg-transparent hover:bg-gray-200"
              }`}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M6.75 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0m-2.5 12.071a5.32 5.32 0 0 1 5.321-5.321h4.858a5.32 5.32 0 0 1 5.321 5.321 4.18 4.18 0 0 1-4.179 4.179H8.43a4.18 4.18 0 0 1-4.179-4.179m5.321-3.821a3.82 3.82 0 0 0-3.821 3.821A2.68 2.68 0 0 0 8.43 21.25h7.142a2.68 2.68 0 0 0 2.679-2.679 3.82 3.82 0 0 0-3.821-3.821z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                />
              </svg>
              <span>Profile</span>
            </button>
          </Link>
        </nav>
      </div>
      <button
        onClick={() => props.onClick()}
        className="mt-4 w-full px-4 py-2 rounded hover:bg-gray-200 border-2 transition flex items-center gap-2 justify-centerf"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          data-name="Line Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon line-color"
        >
          <path
            style={{
              fill: "none",
              stroke: "#2ca9bc",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
            d="M12 3v9"
          />
          <path
            d="M17.66 7.34a8 8 0 1 1-11.32 0"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          />
        </svg>
        <span>Log Out</span>
      </button>
    </section>
  );
};

export default Sidebar;
