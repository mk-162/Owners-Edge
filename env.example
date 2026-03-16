export type Pillar = 'Owner Independence' | 'Revenue Quality' | 'Growth Story' | 'Operational Resilience' | 'Financial Clarity';

export interface Question {
  id: number;
  pillar: Pillar;
  text: string;
  options: { text: string; score: number }[];
}

export const pillars: { name: Pillar; description: string; keyQuestion: string }[] = [
  {
    name: 'Owner Independence',
    description: 'Measures how dependent the business is on the owner for daily operations, key relationships, and decision-making.',
    keyQuestion: 'Could this business run without you for three months?'
  },
  {
    name: 'Revenue Quality',
    description: 'Measures recurring revenue percentage, customer concentration, contract strength, pricing power.',
    keyQuestion: 'How predictable and defensible is your income?'
  },
  {
    name: 'Growth Story',
    description: 'Measures market opportunity, competitive positioning, scalability, and whether there\'s a clear growth narrative a buyer would find exciting.',
    keyQuestion: 'What\'s the obvious next chapter?'
  },
  {
    name: 'Operational Resilience',
    description: 'Measures process documentation, team depth, supplier diversification, technology maturity, risk management.',
    keyQuestion: 'What happens when something goes wrong?'
  },
  {
    name: 'Financial Clarity',
    description: 'Measures accounting quality, the ability to present normalised/adjusted financials, margin understanding, and forecasting capability.',
    keyQuestion: 'Can you show me clean, reliable numbers?'
  }
];

export const questions: Question[] = [
  // Pillar 1: Owner Independence
  {
    id: 1,
    pillar: 'Owner Independence',
    text: "If you went on holiday for a month, what would happen to your business?",
    options: [
      { text: "It would basically stop. I'm involved in almost everything.", score: 1 },
      { text: "It would struggle. Key decisions and client relationships depend on me.", score: 2 },
      { text: "It would mostly keep running, but quality and growth would dip.", score: 3 },
      { text: "It would run fine. My team handles day-to-day operations without me.", score: 4 }
    ]
  },
  {
    id: 2,
    pillar: 'Owner Independence',
    text: "How many of your top 10 client relationships are personally managed by you?",
    options: [
      { text: "8-10 of them. Clients buy from me, not the company.", score: 1 },
      { text: "5-7 of them. I'm the main contact for most key accounts.", score: 2 },
      { text: "2-4 of them. My team manages most relationships.", score: 3 },
      { text: "0-1. Client relationships are with the company, not me personally.", score: 4 }
    ]
  },
  {
    id: 3,
    pillar: 'Owner Independence',
    text: "Who makes the important day-to-day decisions (hiring, pricing, supplier choices)?",
    options: [
      { text: "Almost always me. Nothing significant happens without my approval.", score: 1 },
      { text: "Mostly me, though I have a couple of people I trust with some decisions.", score: 2 },
      { text: "I've delegated most decisions but still handle strategic ones.", score: 3 },
      { text: "My management team handles nearly all operational decisions independently.", score: 4 }
    ]
  },
  {
    id: 4,
    pillar: 'Owner Independence',
    text: "If a key employee left tomorrow, how would the business cope?",
    options: [
      { text: "It would be a crisis. We'd lose critical knowledge and capability.", score: 1 },
      { text: "It would be very disruptive. We'd struggle for months.", score: 2 },
      { text: "We'd feel it, but processes are documented and others could step up.", score: 3 },
      { text: "We have depth. Roles are documented, cross-trained, and coverable.", score: 4 }
    ]
  },
  {
    id: 5,
    pillar: 'Owner Independence',
    text: "How much of your business's 'secret sauce' is in your head vs. documented in systems?",
    options: [
      { text: "Almost all of it is in my head — pricing logic, supplier contacts, processes.", score: 1 },
      { text: "Most key knowledge is with me, though some is written down.", score: 2 },
      { text: "We have decent documentation, but I still hold important institutional knowledge.", score: 3 },
      { text: "Our systems, SOPs, and playbooks capture virtually everything.", score: 4 }
    ]
  },
  // Pillar 2: Revenue Quality
  {
    id: 6,
    pillar: 'Revenue Quality',
    text: "What percentage of your revenue is recurring or contracted (subscriptions, retainers, long-term contracts)?",
    options: [
      { text: "Less than 10%. Most revenue is one-off or project-based.", score: 1 },
      { text: "10-30%. We have some repeat business but little is contracted.", score: 2 },
      { text: "30-60%. A solid chunk of our revenue is predictable.", score: 3 },
      { text: "Over 60%. The majority of our revenue recurs automatically or is under contract.", score: 4 }
    ]
  },
  {
    id: 7,
    pillar: 'Revenue Quality',
    text: "How concentrated is your revenue across customers?",
    options: [
      { text: "Our top client is over 30% of revenue.", score: 1 },
      { text: "Our top 3 clients make up over 50% of revenue.", score: 2 },
      { text: "Our top 5 clients are 30-50% of revenue. Reasonably spread.", score: 3 },
      { text: "No single client is more than 10% of revenue. Very diversified.", score: 4 }
    ]
  },
  {
    id: 8,
    pillar: 'Revenue Quality',
    text: "How easy would it be for your customers to switch to a competitor?",
    options: [
      { text: "Very easy. There are no contracts, switching costs, or lock-in.", score: 1 },
      { text: "Fairly easy. We rely mostly on relationships and habit.", score: 2 },
      { text: "Moderately difficult. We have some contracts and integration.", score: 3 },
      { text: "Very difficult. Strong contracts, deep integration, or high switching costs.", score: 4 }
    ]
  },
  {
    id: 9,
    pillar: 'Revenue Quality',
    text: "How has your revenue trended over the past 3 years?",
    options: [
      { text: "Declining or flat.", score: 1 },
      { text: "Inconsistent — some up years, some down.", score: 2 },
      { text: "Modest, steady growth (5-10% per year).", score: 3 },
      { text: "Strong, consistent growth (15%+ per year).", score: 4 }
    ]
  },
  {
    id: 10,
    pillar: 'Revenue Quality',
    text: "Do you have the ability to raise prices without losing significant customers?",
    options: [
      { text: "No. We compete mostly on price and any increase would cost us clients.", score: 1 },
      { text: "Limited. We could raise prices slightly but there's strong pushback.", score: 2 },
      { text: "Moderate. We've raised prices before with manageable impact.", score: 3 },
      { text: "Strong. We have pricing power and customers value us beyond cost.", score: 4 }
    ]
  },
  // Pillar 3: Growth Story
  {
    id: 11,
    pillar: 'Growth Story',
    text: "Is there an obvious, untapped market or growth opportunity for your business?",
    options: [
      { text: "Not really. We've captured most of our addressable market.", score: 1 },
      { text: "Maybe, but we haven't explored it seriously.", score: 2 },
      { text: "Yes, we've identified opportunities but haven't pursued them yet.", score: 3 },
      { text: "Yes, and we have a clear plan to capture them.", score: 4 }
    ]
  },
  {
    id: 12,
    pillar: 'Growth Story',
    text: "How would you describe your competitive position?",
    options: [
      { text: "We're in a crowded market with no clear differentiation.", score: 1 },
      { text: "We compete well but don't have a strong moat or unique advantage.", score: 2 },
      { text: "We have a clear niche or advantage that sets us apart.", score: 3 },
      { text: "We're a market leader or have a defensible competitive advantage.", score: 4 }
    ]
  },
  {
    id: 13,
    pillar: 'Growth Story',
    text: "Could your business scale significantly without proportional increases in cost or headcount?",
    options: [
      { text: "No. Growth requires adding people and costs at roughly the same rate.", score: 1 },
      { text: "Somewhat. There are some economies of scale but growth is labour-heavy.", score: 2 },
      { text: "Yes, we have systems and products that can scale reasonably efficiently.", score: 3 },
      { text: "Absolutely. Our model has strong operating leverage.", score: 4 }
    ]
  },
  {
    id: 14,
    pillar: 'Growth Story',
    text: "Do you have products or services that could be expanded into new markets or geographies?",
    options: [
      { text: "No. Our business is very local or niche with limited expansion potential.", score: 1 },
      { text: "Possibly, but it would require significant investment and adaptation.", score: 2 },
      { text: "Yes, we've had interest from new markets and could expand.", score: 3 },
      { text: "Yes, and expansion would be relatively straightforward with our current model.", score: 4 }
    ]
  },
  {
    id: 15,
    pillar: 'Growth Story',
    text: "How well can you articulate why a buyer should be excited about this business's future?",
    options: [
      { text: "I'd struggle to make the case beyond 'it's a solid business.'", score: 1 },
      { text: "I could describe some opportunities but it's not a compelling narrative.", score: 2 },
      { text: "I have a reasonable growth story but haven't formalised it.", score: 3 },
      { text: "I could clearly articulate a compelling investment thesis with data to back it.", score: 4 }
    ]
  },
  // Pillar 4: Operational Resilience
  {
    id: 16,
    pillar: 'Operational Resilience',
    text: "How well are your core business processes documented?",
    options: [
      { text: "Barely at all. Most processes exist only in people's heads.", score: 1 },
      { text: "Partially. We have some documentation but it's incomplete or outdated.", score: 2 },
      { text: "Well documented for most core processes.", score: 3 },
      { text: "Thoroughly documented with SOPs, playbooks, and regular updates.", score: 4 }
    ]
  },
  {
    id: 17,
    pillar: 'Operational Resilience',
    text: "How would you rate the depth of your management team?",
    options: [
      { text: "It's basically just me. There's no real management layer.", score: 1 },
      { text: "I have a few good people but there are critical gaps.", score: 2 },
      { text: "A solid team, though one or two key roles are single points of failure.", score: 3 },
      { text: "A strong, balanced team that could run the business without me.", score: 4 }
    ]
  },
  {
    id: 18,
    pillar: 'Operational Resilience',
    text: "How dependent are you on any single supplier, platform, or technology?",
    options: [
      { text: "Heavily. If one key supplier or platform failed, we'd be in serious trouble.", score: 1 },
      { text: "Quite dependent on 2-3 critical suppliers with no easy alternatives.", score: 2 },
      { text: "Some dependencies, but we have backup options for most.", score: 3 },
      { text: "Well diversified. No single dependency could significantly disrupt us.", score: 4 }
    ]
  },
  {
    id: 19,
    pillar: 'Operational Resilience',
    text: "How mature is your technology infrastructure?",
    options: [
      { text: "We rely on spreadsheets, manual processes, and basic tools.", score: 1 },
      { text: "We have some systems but they're disconnected and require manual work.", score: 2 },
      { text: "Good systems in place for most functions, mostly integrated.", score: 3 },
      { text: "Modern, integrated tech stack that automates key processes and provides good data.", score: 4 }
    ]
  },
  {
    id: 20,
    pillar: 'Operational Resilience',
    text: "Does your business have any formal risk management (insurance, contracts, compliance)?",
    options: [
      { text: "Very basic. We have standard insurance but that's about it.", score: 1 },
      { text: "Some coverage but gaps in contracts, IP protection, or compliance.", score: 2 },
      { text: "Reasonably covered with insurance, contracts, and basic compliance.", score: 3 },
      { text: "Comprehensive: insurance, strong contracts, IP protection, regulatory compliance all in order.", score: 4 }
    ]
  },
  // Pillar 5: Financial Clarity
  {
    id: 21,
    pillar: 'Financial Clarity',
    text: "How quickly could you produce accurate, up-to-date management accounts?",
    options: [
      { text: "It would take weeks. Our accounts are often behind and messy.", score: 1 },
      { text: "A few days. We have accounts but they're not always current.", score: 2 },
      { text: "Within 24 hours. We have regular management accounts.", score: 3 },
      { text: "Immediately. We have real-time financial dashboards and monthly reporting packs.", score: 4 }
    ]
  },
  {
    id: 22,
    pillar: 'Financial Clarity',
    text: "How cleanly separated are your business and personal finances?",
    options: [
      { text: "They're quite mixed. Personal expenses run through the business regularly.", score: 1 },
      { text: "Mostly separate but there are some grey areas.", score: 2 },
      { text: "Well separated with only a few adjustments needed.", score: 3 },
      { text: "Completely clean. Business finances are fully independent of personal spending.", score: 4 }
    ]
  },
  {
    id: 23,
    pillar: 'Financial Clarity',
    text: "Could you clearly explain your gross margins, net margins, and how they've trended?",
    options: [
      { text: "Honestly, I'm not confident I could explain our margins in detail.", score: 1 },
      { text: "I know the rough numbers but couldn't give a detailed breakdown.", score: 2 },
      { text: "I understand our margins well and could walk someone through them.", score: 3 },
      { text: "I know our margins by product/service line and can explain trends with data.", score: 4 }
    ]
  },
  {
    id: 24,
    pillar: 'Financial Clarity',
    text: "Do you have a financial forecast or budget that you track against?",
    options: [
      { text: "No. We don't do formal budgeting or forecasting.", score: 1 },
      { text: "We have rough targets but don't formally track against them.", score: 2 },
      { text: "We have an annual budget and review it periodically.", score: 3 },
      { text: "We have detailed forecasts, track monthly, and adjust proactively.", score: 4 }
    ]
  },
  {
    id: 25,
    pillar: 'Financial Clarity',
    text: "If an acquirer asked for 3 years of adjusted/normalised financials, how ready would you be?",
    options: [
      { text: "I wouldn't know where to start. What are normalised financials?", score: 1 },
      { text: "I've heard the term but would need significant help to produce them.", score: 2 },
      { text: "I understand the concept and could produce reasonable adjustments.", score: 3 },
      { text: "I could produce clean, adjusted financials with add-backs clearly documented.", score: 4 }
    ]
  }
];
