import React from "react";

const OurJourney: React.FC = () => {
  return (
    <section aria-labelledby="our-journey">
      <h2 id="our-journey" className="text-2xl md:text-3xl font-semibold">From services to products</h2>
      <p className="text-sm text-muted-foreground mt-3">
        We spent years designing systems for other people. The pattern was obvious. Small teams need fewer moving parts, not more. So we stopped selling time and started shipping tools. Innovix is the origin point, JCAL.ai and Matalino are the result. The job is simple. Help you launch, learn, and grow without a twelve step ritual.
      </p>
      <aside className="mt-4 border-l pl-4 text-sm italic text-muted-foreground" aria-label="Founder note">
        “I’m not here to consult you to sleep. I’m here to hand you the right tool and get out of your way.” — Jay Cadmus
      </aside>
    </section>
  );
};

export default OurJourney;
