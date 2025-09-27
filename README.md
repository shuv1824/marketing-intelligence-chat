# Marketing Intelligence Chat UI

## Overview

Marketing Intelligence Chat is an AI-powered marketing assistant that generates intelligent, multi-channel campaign recommendations based on connected data sources. The application analyzes customer behavior patterns and provides personalized campaign strategies optimized for the right time, right channel, right message, and right audience.

### Key Features

- **Multi-Source Data Integration**: Connect to Google Ads, Shopify, and Facebook Pixel for comprehensive customer insights
- **Multi-Channel Campaign Generation**: Create campaigns across Email, SMS, Push Notifications, and WhatsApp
- **Intelligent Recommendations**: AI-driven campaign suggestions based on customer behavior patterns
- **Real-time Streaming Interface**: Live processing feedback with streaming responses
- **Performance Metrics**: Expected CTR, conversion rates, and revenue estimates for each campaign
- **Audience Segmentation**: Automatic identification of high-value customer segments

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Lucide React icons
- **State Management**: React Hooks (useState, useCallback)
- **Code Quality**: ESLint with TypeScript support

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/shuv1824/marketing-intelligence-chat
cd marketing-intelligence-chat
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
marketing-intelligence-chat/
├── src/
│   ├── components/           # React components
│   │   ├── Chat/             # Chat interface components
│   │   │   ├── index.tsx
│   │   │   ├── CampaignCard.tsx
│   │   │   ├── InputArea.tsx
│   │   │   └── MessageList.tsx
│   │   ├── Header/           # Header component
│   │   │   └── index.tsx
│   │   ├── Sidebar/          # Configuration sidebar
│   │   │   ├── index.tsx
│   │   │   ├── DataSourceToggle.tsx
│   │   │   └── ChannelToggle.tsx
│   │   └── MarketingChat.tsx # Main application component
│   ├── constants/            # Application constants
│   │   └── index.ts
│   ├── hooks/                # Custom React hooks
│   │   └── useCampaignGenerator.ts
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   └── campaignGenerator.ts
│   ├── App.tsx               # Root application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## Usage

### Getting Started

1. **Connect Data Sources**: Use the sidebar to connect your marketing data sources (Google Ads, Shopify, Facebook Pixel)

2. **Enable Channels**: Select the marketing channels you want to generate campaigns for (Email, SMS, Push, WhatsApp)

3. **Ask Questions**: Use the chat interface to ask marketing questions or request campaign recommendations

### Example Queries

- "What's the best time to reach my customers?"
- "Generate campaigns for abandoned cart users"
- "Show me high-converting audience segments"
- "Create a multi-channel retention campaign"

### Campaign Generation Process

1. The system analyzes connected data sources
2. Processes customer behavior patterns
3. Identifies optimal audience segments
4. Calculates best timing windows
5. Generates channel-specific campaigns
6. Provides performance metrics and recommendations

## Features in Detail

### Data Source Integration

- **Google Ads Tag**: Analyze advertising performance and user behavior
- **Shopify Store**: Access e-commerce data and purchase patterns
- **Facebook Pixel**: Leverage social media engagement metrics

### Marketing Channels

- **Email**: Rich HTML campaigns with personalization
- **SMS**: Concise, high-impact text messages
- **Push Notifications**: Real-time browser/app notifications
- **WhatsApp**: Conversational marketing messages

### Campaign Intelligence

- **Audience Segmentation**: Automatic identification of high-intent visitors, cart abandoners, repeat customers, etc.
- **Timing Optimization**: AI-determined optimal send times based on user behavior
- **Content Personalization**: Dynamic content with personalization tokens
- **Performance Predictions**: Expected CTR, conversion rates, and revenue estimates

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Type Safety

The project uses TypeScript for type safety with comprehensive type definitions for:

- Data source connections
- Channel configurations
- Campaign data structures
- Message formats
- Component props

### Component Architecture

- **Modular Design**: Components are organized by feature with clear separation of concerns
- **Custom Hooks**: Business logic is extracted into reusable hooks
- **Type-Safe Props**: All components use TypeScript interfaces for prop definitions
- **Responsive Layout**: Flexbox-based responsive design with Tailwind CSS

## UI/UX Features

- **Clean Interface**: Minimalist design focused on usability
- **Real-time Feedback**: Streaming responses with loading states
- **Visual Indicators**: Color-coded channels and connection status
- **Interactive Sidebar**: Collapsible configuration panel
- **Smart Suggestions**: Pre-populated query suggestions for quick start

## Performance

- **Fast Build Times**: Vite's fast HMR for instant feedback during development
- **Optimized Bundle**: Production builds with code splitting and tree shaking
- **Efficient Re-renders**: React 19's improved rendering performance
- **Lightweight Dependencies**: Minimal external dependencies for faster load times

## Security Considerations

- Type-safe code reduces runtime errors
- Input validation on user queries
- Simulated data generation (no real API calls in current implementation)
- No sensitive data storage in the frontend

## Roadmap

### Planned Features

- [ ] Real API integration with marketing platforms
- [ ] Advanced analytics dashboard
- [ ] Campaign scheduling and automation
- [ ] A/B testing recommendations
- [ ] Budget optimization algorithms
- [ ] Export campaign configurations
- [ ] Team collaboration features
- [ ] Historical campaign performance tracking

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain component modularity
- Write clear, self-documenting code
- Update types when adding new features
- Test across different screen sizes

## Acknowledgments

- Built with React + TypeScript + Vite template
- Icons provided by Lucide React
- Styling powered by Tailwind CSS v4

---

**Note**: This application currently uses simulated data generation for demonstration purposes. Integration with real marketing platforms would require appropriate API credentials and backend implementation.
