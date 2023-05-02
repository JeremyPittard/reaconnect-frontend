import WaitlistForm from "./WaitlistForm";

const ExpandClaim = () => {
  return (
    <section className="my-40 max-w-3xl mx-auto">
      <h1 className="text-5xl mb-5">
        {`
        At ReaConnect, we believe that many real estate assets are "always for
        sale"... 
      `}
      </h1>
      <p className="mb-7">
        {`...or "always on the market" for the right price, even if they aren't
        listed publicly.
        That's why we're building a platform to connect potential buyers and
        renters with homeowners who haven't yet listed their property for sale.
        With our platform, you can make an offer on the house or apartment of
        your dreams, even if it's not officially on the market. Say goodbye to
        endless hours of scrolling through listings and hello to your perfect
        home or rental property. Sign up now for updates and launch information!
        `}
      </p>
      <WaitlistForm />
    </section>
  );
};

export default ExpandClaim;
