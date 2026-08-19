# Design Decisions

## 1. Why this product direction over the obvious alternative?

I chose to design Acdyon Flow as an infrastructure tool and focus the homepage around an interactive, self-healing deployment console instead of a generic SaaS marketing page. Because the challenge strictly prohibits fabricated testimonials, fake user counts, and false logos, I decided that the strongest way to build credibility without social proof was to let the product demonstrate itself. The interactive console proves the value proposition instantly rather than relying on empty marketing claims.

## 2. One trade-off made under the time limit

The deployment experience is implemented as a deterministic client-side React state-machine simulation rather than a real production deployment backend. This trade-off was chosen intentionally so the reviewer can experience the complete product story—from build to regression to recovery—quickly and reliably. 

With a real development week, I would connect this state machine to actual deployment and observability events via a backend, and expand it to support multiple realistic failure scenarios.

## 3. AI tools and personal verification

AI tools were used during development to accelerate the initial structural boilerplate, assist with the Vite/Tailwind setup, and provide iterative implementation support. 

However, I personally reviewed and changed the deployment state flow, the visual design, responsive behavior, component interactions, and the final implementation to ensure the project meets the rigorous standards of the challenge.
