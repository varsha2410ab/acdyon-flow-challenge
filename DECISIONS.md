# Design Decisions

## 1. Why this product direction over the obvious alternative?

I chose Acdyon Flow as a self-healing deployment product because it gave me an opportunity to make the homepage demonstrate the product rather than simply describe it. Instead of building a conventional SaaS landing page with generic feature cards and marketing claims, I made the deployment/recovery experience the central interaction so the value proposition is understandable within seconds.

The challenge explicitly asks candidates to avoid fabricated testimonials, user counts and logos. I therefore chose to demonstrate the product through an interactive deployment simulation rather than rely on artificial social proof.

## 2. One trade-off made under the time limit

The deployment experience is implemented as a deterministic client-side React state machine rather than a real production deployment backend. I chose this deliberately so a reviewer can experience the complete deployment → regression → rollback → recovery story immediately without requiring external infrastructure or credentials.

With a real development week, I would connect the state machine to real deployment and observability events, persist deployment history, and support multiple realistic failure scenarios.

## 3. AI tools and personal verification

I used AI tools as development assistance for initial structural boilerplate, Vite/Tailwind setup assistance, and iterative implementation support. I did not treat generated output as a finished submission.

I personally reviewed and changed the deployment state flow, visual design, responsive behavior, interactions, and final implementation. I also verified the product against the challenge requirements, including the responsive layout, deployment/recovery interaction, honest content, and absence of fabricated social proof.
