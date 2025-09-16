import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowRight, MoreVertical } from 'lucide-react';

const kpiData = [
  { title: 'Total Revenue', value: '$76,890', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
  { title: 'New Leads', value: '1,204', change: '+8.2%', icon: Users, color: 'text-blue-400' },
  { title: 'Conversion Rate', value: '24.5%', change: '-1.8%', icon: Target, color: 'text-red-400' },
  { title: 'Campaign ROI', value: '185%', change: '+22%', icon: TrendingUp, color: 'text-purple-400' },
];

const leadsData = [
  { name: 'Alice Johnson', company: 'Innovate Corp', status: 'Qualified', avatar: `https://i.pravatar.cc/150?u=a` },
  { name: 'Bob Smith', company: 'Tech Solutions', status: 'Contacted', avatar: `https://i.pravatar.cc/150?u=b` },
  { name: 'Charlie Brown', company: 'Future Enterprises', status: 'New', avatar: `https://i.pravatar.cc/150?u=c` },
  { name: 'Diana Prince', company: 'Wonder Co.', status: 'Qualified', avatar: `https://i.pravatar.cc/150?u=d` },
];

const campaignData = [
    { name: 'Q2 SaaS Outreach', channel: 'Email', progress: 75, color: 'bg-cyan-400' },
    { name: 'Real Estate Leads', channel: 'AI Caller', progress: 90, color: 'bg-purple-400' },
    { name: 'E-commerce Flash Sale', channel: 'WhatsApp', progress: 45, color: 'bg-pink-400' },
];

const ChartPlaceholder: React.FC = () => (
  <div className="w-full h-full flex items-end gap-2 p-4 bg-gradient-to-t from-cyan-500/10 to-transparent">
    {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
        className="w-full bg-gradient-to-t from-cyan-400 to-purple-500 rounded-t-md"
      />
    ))}
  </div>
);

const DashboardPage: React.FC = () => {
  return (
    <div className="relative z-10 pointer-events-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Welcome back, here's your performance overview.
          </p>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/5 dark:bg-white/5">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <span className={`text-sm font-semibold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{item.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leads Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
          >
            <h3 className="text-xl font-semibold mb-4">Lead Generation Trends</h3>
            <div className="h-80">
              <ChartPlaceholder />
            </div>
          </motion.div>

          {/* Recent Leads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
          >
            <h3 className="text-xl font-semibold mb-4">Recent Leads</h3>
            <div className="space-y-4">
              {leadsData.map(lead => (
                <div key={lead.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={lead.avatar} alt={lead.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">{lead.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{lead.company}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${lead.status === 'Qualified' ? 'bg-green-500/20 text-green-400' : lead.status === 'New' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Campaign Performance */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
          >
            <h3 className="text-xl font-semibold mb-4">Campaign Performance</h3>
            <div className="space-y-6">
                {campaignData.map(campaign => (
                    <div key={campaign.name}>
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold">{campaign.name} <span className="text-sm text-gray-500 dark:text-gray-400">- {campaign.channel}</span></p>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">{campaign.progress}%</p>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className={`${campaign.color} h-2.5 rounded-full`} style={{ width: `${campaign.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
