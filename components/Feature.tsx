import React from "react";
import WaitlistForm from "./WaitlistForm";

const Feature = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-mustard p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-left">
              <h2 className="text-2xl font-bold md:text-3xl">
                Seen a house you love? Let it know!
              </h2>

              <p className="hidden sm:mt-4 sm:block">
                use our platform to contact homeowners and express an interest
                to buy, with your potential budget. If the owner is also
                interested you can start on your way to owning your dream home.
              </p>

              <div className="mt-4 md:mt-8">
                <WaitlistForm formName="call-out" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Student"
              src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
