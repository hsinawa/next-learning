"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import "../../styles/common.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/contact/contactForm";

const ContactPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // Get the type parameter

  const acceptedArray = ["Contact-Me", "Book-My-Calendar", "/"];

  if (!acceptedArray.includes(type as string) && type !== null) {
    return (
      <main id="width-and-center-body">
        <h1 className="text-2xl font-bold text-center mt-5 pb-[30%]">
          Invalid type parameter, please try comething else
        </h1>
      </main>
    );
  }

  return (
    <main id="width-and-center-body">
      <div className="flex justify-center mb-[20%] md:mb-[40%] lg:mb-[10%]">
        <Tabs
          defaultValue={type || "Contact-Me"}
          className="w-[600px] bg-white rounded-lg"
        >
          {/* <TabsList className="flex space-x-2 border-b border-gray-300">
            <TabsTrigger
              value="Contact-Me"
              className="py-2 px-4 text-gray-600 font-semibold hover:bg-gray-100 transition duration-200 rounded-lg"
            >
              Contact Me
            </TabsTrigger>
            <TabsTrigger
              value="Book-My-Calendar"
              className="py-2 px-4 text-gray-600 font-semibold hover:bg-gray-100 transition duration-200 rounded-lg"
            >
              Book My Calendar
            </TabsTrigger>
            {type === "settings" && (
              <TabsTrigger
                value="settings"
                className="py-2 px-4 text-gray-600 font-semibold hover:bg-gray-100 transition duration-200 rounded-lg"
              >
                Settings
              </TabsTrigger>
            )}
          </TabsList> */}

          <TabsContent value="Contact-Me" className="p-0 w-auto rounded-lg">
            <ContactForm  />
          </TabsContent>

          <TabsContent
            value="Book-My-Calendar"
            className="p-0 rounded-lg"
          >
            <h2 className="text-lg font-bold">
              Book My Calendar
            </h2>
            <p className="text-gray-600">Function2</p>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default ContactPage;
