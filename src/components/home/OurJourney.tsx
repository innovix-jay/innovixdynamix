import React from "react";

const OurJourney: React.FC = () => {
  return (
    <section aria-labelledby="our-journey">
      <h2 id="our-journey" className="text-2xl md:text-3xl font-semibold">From services to products</h2>
      <p className="text-sm text-muted-foreground mt-3">
        We started consulting and started building systems for clients. But over time, it was clear — value came from tools that just worked. So we stopped selling hours and started building what works. JCAL.ai and Matalino are the first. More will follow.
      </p>
      <aside className="mt-4 border-l pl-4 text-sm italic text-muted-foreground" aria-label="Founder note">
        “I’m not here to consult you to sleep. I’m here to hand you the right tool and get out of your way.” — Jay Cadmus
      </aside>
    </section>
  );
};

export default OurJourney;
