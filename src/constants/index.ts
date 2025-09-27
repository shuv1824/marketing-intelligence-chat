import { Mail, Smartphone, Bell, MessageCircle } from "lucide-react";
import { type DataSource, type Channel } from "../types";

export const DATA_SOURCES: DataSource[] = [
  { id: "googleAds", name: "Google Ads Tag", icon: "🎯", color: "bg-blue-500" },
  { id: "shopify", name: "Shopify Store", icon: "🛍️", color: "bg-green-500" },
  {
    id: "facebookPixel",
    name: "Facebook Pixel",
    icon: "📊",
    color: "bg-blue-600",
  },
];

export const CHANNELS: Channel[] = [
  { id: "email", name: "Email", icon: Mail, color: "bg-red-500" },
  { id: "sms", name: "SMS", icon: Smartphone, color: "bg-yellow-500" },
  { id: "push", name: "Push", icon: Bell, color: "bg-purple-500" },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-green-600",
  },
];

export const SUGGESTED_QUERIES = [
  "What's the best time to reach my customers?",
  "Generate campaigns for abandoned cart users",
  "Show me high-converting audience segments",
  "Create a multi-channel retention campaign",
];

export const STREAMING_MESSAGES = [
  "Analyzing your connected data sources...",
  "Processing customer behavior patterns...",
  "Identifying optimal audience segments...",
  "Calculating best timing windows...",
  "Generating channel-specific campaigns...",
  "Campaign recommendations ready!",
];
