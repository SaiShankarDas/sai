import { allProducts as baseProducts } from './products';

export const industries = [
  { id: 'real_estate', name: 'Real Estate' },
  { id: 'e_commerce', name: 'E-commerce' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'education', name: 'Education' },
  { id: 'finance', name: 'Finance' },
  { id: 'travel', name: 'Travel' },
  { id: 'retail', name: 'Retail' },
  { id: 'saas_tech', name: 'SaaS/Tech' },
];

const productDescriptions: { [key: number]: { [key: string]: string } } = {
  1: { // AI Calling Agent
    real_estate: "Automate property inquiry calls, schedule site visits, and nurture leads 24/7 without human intervention.",
    e_commerce: "Handle order status inquiries, process returns, and upsell products with a fully automated, human-like voice agent.",
    hospitality: "Manage room bookings, answer common questions about amenities, and confirm reservations automatically.",
    healthcare: "Automate appointment reminders, follow-up on patient feedback, and manage inbound scheduling calls.",
    education: "Handle admission inquiries, provide course information, and automate student outreach campaigns.",
    finance: "Automate lead qualification for loans and financial products, and handle routine customer service calls.",
    travel: "Manage flight or tour bookings, provide travel updates, and handle customer queries around the clock.",
    retail: "Provide automated support for store hours, locations, and product availability, and handle customer feedback calls.",
    saas_tech: "Qualify inbound leads, schedule product demos, and provide tier-1 technical support automatically."
  },
  2: { // SEO Genie
    real_estate: "Rank your property listings higher on Google and dominate local search results for real estate agents.",
    e_commerce: "Optimize product pages for better search visibility and drive organic traffic to your online store.",
    hospitality: "Improve your hotel's visibility on search engines and attract more direct bookings.",
    healthcare: "Boost your clinic's online presence and attract more patients through targeted SEO strategies.",
    education: "Increase visibility for your institution's courses and programs in search engine results.",
    finance: "Drive organic traffic for financial keywords and establish your brand as an authority in the finance space.",
    travel: "Optimize your travel packages and destinations to rank higher and attract more travelers.",
    retail: "Improve local SEO for your physical stores and drive more foot traffic through online searches.",
    saas_tech: "Rank for high-intent software keywords and drive organic sign-ups for your SaaS product."
  },
  3: { // Cold Email Generator
    real_estate: "Generate personalized outreach emails to find potential property buyers, sellers, and investors.",
    e_commerce: "Create compelling email campaigns for abandoned carts, promotions, and customer re-engagement.",
    hospitality: "Send personalized offers to past guests and corporate clients to increase repeat bookings.",
    healthcare: "Automate patient communication for check-ups, health tips, and new service announcements.",
    education: "Craft personalized emails for prospective students, alumni engagement, and event invitations.",
    finance: "Generate high-converting emails for lead nurturing, client onboarding, and new financial product launches.",
    travel: "Create targeted email campaigns for seasonal promotions, special offers, and new destinations.",
    retail: "Design and send promotional emails for sales, new arrivals, and loyalty program members.",
    saas_tech: "Automate your B2B outreach and generate a consistent pipeline of qualified leads for your sales team."
  },
  5: { // WhatsApp Bot
    real_estate: "Send property updates, schedule site visits, and qualify leads instantly via WhatsApp.",
    e_commerce: "Automate order confirmations, shipping updates, and customer support on WhatsApp.",
    hospitality: "Provide instant booking confirmations, room service menus, and guest support via WhatsApp.",
    healthcare: "Send appointment confirmations, prescription reminders, and answer patient FAQs on WhatsApp.",
    education: "Share admission updates, course materials, and important announcements with students on WhatsApp.",
    finance: "Offer instant support for account inquiries, send transaction alerts, and qualify loan applicants on WhatsApp.",
    travel: "Send booking confirmations, travel itineraries, and real-time flight updates to travelers on WhatsApp.",
    retail: "Engage customers with new product alerts, special offers, and order tracking via WhatsApp.",
    saas_tech: "Provide instant customer support, share knowledge base articles, and onboard new users through WhatsApp."
  },
  // Add other product descriptions similarly...
};

export const industryProducts = industries.reduce((acc, industry) => {
  acc[industry.id] = baseProducts.map(product => ({
    ...product,
    description: productDescriptions[product.id]?.[industry.id] || product.description,
  }));
  return acc;
}, {} as { [key: string]: typeof baseProducts });
