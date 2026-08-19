# Decisions

**1. Why this product direction instead of a generic SaaS landing page?**
A generic SaaS page relies heavily on social proof (logos, testimonials, metrics). Since the challenge strictly forbade fake data, the only way to build credibility was through the product itself. The design focuses intensely on demonstrating the core value (self-healing deployments) through realistic, interactive mockups rather than empty marketing claims.

**2. Why the interactive deployment simulation?**
The core design principle was "Don't tell me that the product is self-healing. Show me." By using a React state machine to animate the exact failure and recovery sequence, the user experiences the product's value in the first 3 seconds, fulfilling the requirement of making them want an account immediately.

**3. What trade-off was made under the time limit?**
The deployment state machine runs on predefined timers. Under the time limit, I hardcoded the sequence (`IDLE -> BUILD -> DEPLOY -> HEALTH_CHECK -> FAILURE -> RECOVERY -> RECOVERED`). 

**4. What would be improved with a real week?**
With more time, I would abstract the deployment simulator into a hook-based state machine that could accept different "scenarios" (e.g., successful deployment, memory leak regression, instant crash). I would also add more robust a11y properties, such as live-regions announcing the state changes for screen readers.

**5. Where were AI tools used?**
AI was used to accelerate the initial structural boilerplate (Vite setup, Tailwind configuration, component scaffolding) and to assist in iterating the strict custom color palette mapping. 

**6. What was personally verified/changed afterward?**
I manually built and verified the React state machine for the Hero simulation, ensuring the timers and Framer Motion transitions were deliberate, restrained, and not generic "AI bloat." I completely rewrote the CSS/Tailwind layer to ensure strict adherence to the requested violet/dark color system and perfected the 390px mobile layout manually, as AI struggles with edge-case horizontal overflow.
