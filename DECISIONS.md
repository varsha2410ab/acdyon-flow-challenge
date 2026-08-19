# Design Decisions

## 1. Why this product direction over the obvious alternative?

I chose to build Acdyon Flow around an interactive, self-healing deployment console instead of a generic SaaS marketing page. Because the challenge strictly prohibits fabricated testimonials, fake user counts, and logos, I chose to demonstrate the product itself rather than rely on fake social proof. The interactive console instantly proves the value proposition.

## 2. One trade-off made under the time limit

The deployment experience is a deterministic client-side React state-machine simulation rather than a real production deployment backend. This was chosen so the reviewer can experience the complete product story quickly, reliably, and without external dependencies.

With a real week, I would connect the state machine to real deployment/observability events via a backend and support multiple realistic failure scenarios.

## 3. AI tools and personal verification

AI tools were used for initial structural boilerplate, Vite/Tailwind setup assistance, and iterative implementation support. 

I personally reviewed and changed the deployment state flow, visual design, responsive behavior, component interactions, and the final implementation.
