export const allProducts = [
  {
    id: 1,
    title: 'AI Calling Agent',
    description: 'AI-powered phone agent that handles sales, support, and lead nurturing 24/7.',
    icon: 'https://cdn-icons-png.flaticon.com/512/12500/12500501.png'
  },
  {
    id: 2,
    title: 'SEO Genie',
    description: 'AI-driven SEO optimization for better Google rankings and content strategy.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5979/5979258.png'
  },
  {
    id: 3,
    title: 'Cold Email Generator',
    description: 'Personalized, high-converting cold email campaigns created instantly.',
    icon: 'https://cdn-icons-png.flaticon.com/512/18154/18154191.png'
  },
  {
    id: 4,
    title: 'Inbox Manager',
    description: 'Smart AI that organizes your inbox, drafts replies, and prioritizes leads.',
    icon: 'https://cdn-icons-png.flaticon.com/512/19023/19023130.png'
  },
  {
    id: 5,
    title: 'WhatsApp Bot',
    description: 'Automated WhatsApp messaging for engagement, follow-ups, and lead qualification.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2504/2504957.png'
  },
  {
    id: 6,
    title: 'Instagram DM Automation',
    description: 'Instantly replies to Instagram DMs, captures leads, and boosts conversions.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3621/3621435.png'
  },
  {
    id: 7,
    title: 'Lead Genie',
    description: 'Finds and qualifies prospects across multiple channels automatically.',
    icon: 'https://cdn-icons-png.flaticon.com/512/7756/7756163.png'
  },
  {
    id: 8,
    title: 'Automatic Blog Generator',
    description: 'Generates SEO-optimized blog posts using AI for consistent ranking growth.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3959/3959542.png'
  },
  {
    id: 9,
    title: 'Invoice Genie',
    description: 'AI invoice processor that extracts data and syncs with Sheets/CRMs.',
    icon: 'https://cdn-icons-png.flaticon.com/512/10686/10686264.png'
  },
  {
    id: 10,
    title: 'AI Ad Generator',
    description: 'Creates ad creatives and copy for Google, Meta, and Instagram in seconds.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6541/6541446.png'
  },
  {
    id: 11,
    title: 'Email Marketing (Interactive Templates)',
    description: 'Engaging, AI-built email templates designed to convert.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6029/6029514.png'
  },
  {
    id: 12,
    title: 'Digital Marketing Automation',
    description: 'Centralized AI campaign automation across multiple platforms.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1998/1998087.png'
  },
  {
    id: 13,
    title: 'Social Media Automation (Autoposting)',
    description: 'Auto-schedules and posts optimized content across social platforms.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1968/1968666.png'
  }
];

// Updated featured products for the homepage
export const featuredProducts = allProducts.filter(p => [1, 5, 3, 6].includes(p.id));
