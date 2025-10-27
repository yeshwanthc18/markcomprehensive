"use client";

import ButtonPrimary from "@/components/layout/Button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Page Not Found
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Error 404
        </h1>

        <p className="text-gray-300 text-lg mb-10">
          The page you are looking for does not exist 
        </p>
        <div className="flex justify-center">
          {" "}
          <ButtonPrimary>
            <Link href="/" className="">
              Back to home
            </Link>
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
