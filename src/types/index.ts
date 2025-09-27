// Type definitions
export interface DataSourceConnection {
  googleAds: boolean;
  shopify: boolean;
  facebookPixel: boolean;
}

export interface ChannelActivation {
  email: boolean;
  sms: boolean;
  push: boolean;
  whatsapp: boolean;
}

export interface DataSource {
  id: keyof DataSourceConnection;
  name: string;
  icon: string;
  color: string;
}

export interface Channel {
  id: keyof ChannelActivation;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface CampaignTiming {
  send_time: string;
  timezone: string;
  optimal_window: string;
}

export interface CampaignTargeting {
  segment: string;
  conditions: string[];
}

export interface CampaignContent {
  subject?: string;
  cta: string;
  personalization_tokens: string[];
}

export interface CampaignMetrics {
  expected_ctr: string;
  expected_conversion: string;
  estimated_revenue: number;
}

export interface Campaign {
  channel: keyof ChannelActivation;
  audience: string;
  message: string;
  timing: CampaignTiming;
  targeting: CampaignTargeting;
  content: CampaignContent;
  metrics: CampaignMetrics;
}

export interface CampaignInsights {
  best_performing_channel: keyof ChannelActivation;
  recommended_budget: number;
  confidence_score: string;
}

export interface CampaignData {
  timestamp: string;
  campaign_id: string;
  data_sources: string[];
  recommendations: Campaign[];
  insights: CampaignInsights;
}

export interface Message {
  type: "user" | "streaming" | "campaign";
  content: string;
  isBot: boolean;
  timestamp: string;
  campaignData?: CampaignData;
}
