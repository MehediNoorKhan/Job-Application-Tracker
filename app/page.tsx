"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("organize"); //organize, hired, boards

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-foreground text-6xl mb-6 font-bold">
              A better way to track job application
            </h1>
            <p className="text-muted-foreground text-xl mb-10">
              Capture, organize and manage your job search in one place
            </p>

            <div className="flex flex-col gap-4 justify-center items-center">
              <Link href="/sign-up" className="cursor-pointer">
                <Button
                  size="lg"
                  className="h-12 w-40 text-lg px-8 font-medium"
                >
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>

              <p>Free forever. No credit card is required.</p>
            </div>
          </div>
        </section>

        {/* Hero image section with tabs */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
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
              <div className="max-w-5xl mx-auto relative overflow-hidden rounded-lg border border-gray-200 shadow-lg">
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
      </main>
    </div>
  );
}
