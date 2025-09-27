import {
  type DataSourceConnection,
  type ChannelActivation,
  type CampaignData,
  type Campaign,
} from "../types";

export const generateCampaignData = (
  isConnected: DataSourceConnection,
  activeChannels: ChannelActivation,
): CampaignData => {
  const connectedSources = (
    Object.entries(isConnected) as [keyof DataSourceConnection, boolean][]
  )
    .filter(([_, connected]) => connected)
    .map(([source, _]) => source);

  const enabledChannels = (
    Object.entries(activeChannels) as [keyof ChannelActivation, boolean][]
  )
    .filter(([_, active]) => active)
    .map(([channel, _]) => channel);

  const audiences: string[] = [
    "High-Intent Visitors",
    "Cart Abandoners",
    "Repeat Customers",
    "New Visitors",
    "Lookalike Audience",
  ];

  const messages: Record<keyof ChannelActivation, string[]> = {
    email: [
      "Limited Time: 20% Off Your Favorites!",
      "Complete Your Purchase - Items Still Available",
      "New Arrivals Just For You",
    ],
    sms: [
      "Flash Sale: 30% OFF ends tonight!",
      "Your cart is waiting - complete your order now",
      "Exclusive offer just for you!",
    ],
    push: [
      "Don't miss out! Sale ends in 2 hours",
      "New products you might love",
      "Your personalized deals are ready",
    ],
    whatsapp: [
      "Hi! We noticed you left items in your cart. Complete your order now and save 15%!",
      "Exclusive WhatsApp offer: Free shipping on your next order",
      "Your wishlist items are back in stock!",
    ],
  };

  const campaigns: Campaign[] = enabledChannels.map((channel) => ({
    channel,
    audience: audiences[Math.floor(Math.random() * audiences.length)],
    message:
      messages[channel][Math.floor(Math.random() * messages[channel].length)],
    timing: {
      send_time: new Date(Date.now() + Math.random() * 86400000).toISOString(),
      timezone: "user_timezone",
      optimal_window: `${Math.floor(Math.random() * 12) + 8}:00-${Math.floor(Math.random() * 4) + 18}:00`,
    },
    targeting: {
      segment: `${connectedSources.join("_")}_based_segment`,
      conditions: [
        "last_active_24h",
        "conversion_probability > 0.6",
        "engagement_score > 7",
      ],
    },
    content: {
      subject:
        channel === "email" ? "Your Personalized Offer Awaits" : undefined,
      cta: "Shop Now",
      personalization_tokens: [
        "{{first_name}}",
        "{{product_name}}",
        "{{discount_amount}}",
      ],
    },
    metrics: {
      expected_ctr: (Math.random() * 0.05 + 0.02).toFixed(3),
      expected_conversion: (Math.random() * 0.03 + 0.005).toFixed(3),
      estimated_revenue: Math.floor(Math.random() * 5000 + 1000),
    },
  }));

  return {
    timestamp: new Date().toISOString(),
    campaign_id: `campaign_${Date.now()}`,
    data_sources: connectedSources,
    recommendations: campaigns,
    insights: {
      best_performing_channel:
        enabledChannels[Math.floor(Math.random() * enabledChannels.length)],
      recommended_budget: Math.floor(Math.random() * 2000 + 500),
      confidence_score: (Math.random() * 0.3 + 0.7).toFixed(2),
    },
  };
};
