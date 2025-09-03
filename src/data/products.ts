export const allProducts = [
  {
    id: 1,
    title: 'AI Calling Agent',
    description: 'AI-powered phone agent that handles sales, support, and lead nurturing 24/7.',
    icon: '📞'
  },
  {
    id: 2,
    title: 'SEO Genie',
    description: 'AI-driven SEO optimization for better Google rankings and content strategy.',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Cold Email Generator',
    description: 'Personalized, high-converting cold email campaigns created instantly.',
    icon: '✉️'
  },
  {
    id: 4,
    title: 'Inbox Manager',
    description: 'Smart AI that organizes your inbox, drafts replies, and prioritizes leads.',
    icon: '📧'
  },
  {
    id: 5,
    title: 'WhatsApp Bot',
    description: 'Automated WhatsApp messaging for engagement, follow-ups, and lead qualification.',
    icon: '💬'
  },
  {
    id: 6,
    title: 'Instagram DM Automation',
    description: 'Instantly replies to Instagram DMs, captures leads, and boosts conversions.',
    icon: '📸'
  },
  {
    id: 7,
    title: 'Lead Genie',
    description: 'Finds and qualifies prospects across multiple channels automatically.',
    icon: '🧞‍♂️'
  },
  {
    id: 8,
    title: 'Automatic Blog Generator',
    description: 'Generates SEO-optimized blog posts using AI for consistent ranking growth.',
    icon: '📝'
  },
  {
    id: 9,
    title: 'Invoice Genie',
    description: 'AI invoice processor that extracts data and syncs with Sheets/CRMs.',
    icon: '🧾'
  },
  {
    id: 10,
    title: 'AI Ad Generator',
    description: 'Creates ad creatives and copy for Google, Meta, and Instagram in seconds.',
    icon: '🎯'
  },
  {
    id: 11,
    title: 'Email Marketing (Interactive Templates)',
    description: 'Engaging, AI-built email templates designed to convert.',
    icon: '📩'
  },
  {
    id: 12,
    title: 'Digital Marketing Automation',
    description: 'Centralized AI campaign automation across multiple platforms.',
    icon: '🤖'
  },
  {
    id: 13,
    title: 'Social Media Automation (Autoposting)',
    description: 'Auto-schedules and posts optimized content across social platforms.',
    icon: '📱'
  }
];

export const featuredProducts = allProducts.filter(p => [1, 5, 3, 6].includes(p.id));
