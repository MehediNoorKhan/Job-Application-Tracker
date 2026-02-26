"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <div>
      {/* Hero image section with tabs */}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto px-3">
          <div className="max-w-6xl mx-auto">
            {/* Tabs  */}
            <div className="flex justify-center gap-2 mb-8">
              <Button
                onClick={() => setActiveTab("organize")}
                className={`rounded-lg px-6 py-3 ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-200"}`}
              >
                Organize Applications
              </Button>
              <Button
                onClick={() => setActiveTab("hired")}
                className={`rounded-lg px-6 py-3 ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-200"}`}
              >
                Get Hired
              </Button>
              <Button
                onClick={() => setActiveTab("boards")}
                className={`rounded-lg px-6 py-3 ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-200"}`}
              >
                Manage Boards
              </Button>
            </div>
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-md border border-gray-300 shadow-lg">
              {activeTab === "organize" && (
                <Image
                  src="/hero-images/hero1.png"
                  alt="Hero Image1"
                  width={1200}
                  height={600}
                  className="mx-auto mt-8 rounded-lg shadow-lg"
                />
              )}
              {activeTab === "hired" && (
                <Image
                  src="/hero-images/hero2.png"
                  alt="Hero Image2"
                  width={1200}
                  height={600}
                  className="mx-auto mt-8 rounded-lg shadow-lg"
                />
              )}
              {activeTab === "boards" && (
                <Image
                  src="/hero-images/hero3.png"
                  alt="Hero Image3"
                  width={1200}
                  height={600}
                  className="mx-auto mt-8 rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
