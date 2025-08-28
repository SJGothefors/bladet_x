import {Article, Comment} from "@/data/classes.ts";

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Revolutionary AI Technology Transforms Healthcare Industry',
    summary: 'New breakthrough in artificial intelligence promises to revolutionize patient care and medical diagnostics across the globe.',
    content: `A groundbreaking artificial intelligence system has been unveiled that promises to transform the healthcare industry. The technology, developed by researchers at leading medical institutions, can diagnose diseases with unprecedented accuracy.

The AI system analyzes medical imaging data in real-time, detecting patterns that human doctors might miss. Early trials show a 95% accuracy rate in identifying various conditions, from cancer to neurological disorders.

Dr. Sarah Chen, lead researcher on the project, explained: "This technology doesn't replace doctors – it enhances their capabilities. We're seeing diagnoses that would have taken weeks now completed in minutes."

[IMAGE:/src/assets/news-coding.jpg]

The system has already been deployed in several hospitals across major cities, with remarkable results. Patient outcomes have improved significantly, and doctors report increased confidence in their diagnostic decisions.

Healthcare officials are calling this the most significant advancement in medical technology in decades. Plans are underway to roll out the system globally within the next two years.`,
    category: 'News' as const,
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15T10:30:00Z',
    imageUrl: '/src/assets/news-coding.jpg',
    location: 'San Francisco, CA',
    showLocation: true,
    reactions: { like: 1247, thumbsUp: 892, smile: 234 },
    userReaction: 'like' as const,
    availableReactions: ['like', 'thumbsUp', 'smile']
  },
  {
    id: '2',
    title: 'Championship Victory Sparks City-Wide Celebration',
    summary: 'Local team defeats defending champions in thrilling overtime match, bringing home their first title in over a decade.',
    content: `In a stunning upset that will be remembered for years to come, the underdog Riverside Ravens defeated the three-time defending champion Metro Thunderbolts 28-24 in overtime last night.

The game was a nail-biter from start to finish, with both teams trading leads throughout regulation. The Ravens, who hadn't won a championship since 2011, showed incredible determination and teamwork.

Quarterback Mike Rodriguez threw for 342 yards and three touchdowns, while the defense made crucial stops when it mattered most. The winning touchdown came on a beautiful 15-yard pass to wide receiver Tommy Chen in overtime.

"I can't believe we did it," said an emotional Rodriguez after the game. "This team has worked so hard all season. We knew we had something special, but to actually win it all... it's incredible."

The victory sparked celebrations throughout the city, with thousands of fans pouring into downtown streets to celebrate. The mayor has declared today a city holiday in honor of the team's achievement.`,
    category: 'Sports' as const,
    author: 'Mike Thompson',
    publishedAt: '2024-01-15T08:15:00Z',
    imageUrl: '/src/assets/news-sports.jpg',
    location: 'Riverside City',
    showLocation: false,
    reactions: { like: 2156, thumbsUp: 1834, smile: 567, angry: 34 },
    availableReactions: ['like', 'thumbsUp', 'smile', 'angry']
  },
  {
    id: '3',
    title: 'Museum Unveils Revolutionary Interactive Art Experience',
    summary: 'Visitors can now step inside famous paintings and interact with artworks using cutting-edge virtual reality technology.',
    content: `The Metropolitan Museum of Modern Arts has opened its doors to a revolutionary new experience that allows visitors to literally step inside some of the world's most famous paintings.

Using advanced virtual reality and projection mapping technology, the "Living Canvas" exhibition transforms traditional art viewing into an immersive, interactive experience.

[IMAGE:/src/assets/news-culture.jpg]

Visitors can walk through Van Gogh's "Starry Night," feeling the swirling brushstrokes around them, or sit at the table in Vermeer's "Girl with a Pearl Earring" and interact with the subjects.

Museum director Dr. Elena Rodriguez explained: "We're not replacing traditional art appreciation – we're expanding it. This technology allows people to understand art in completely new ways."

The exhibition took three years to develop, working with artists, technologists, and art historians to ensure historical accuracy while creating magical experiences.

Early reviews have been overwhelmingly positive, with visitors describing the experience as "life-changing" and "the future of museums."`,
    category: 'Culture' as const,
    author: 'Elena Martinez',
    publishedAt: '2024-01-15T14:20:00Z',
    imageUrl: '/src/assets/news-culture.jpg',
    location: 'New York, NY',
    showLocation: true,
    reactions: { like: 987, smile: 432, hearteyes: 234 },
    availableReactions: ['like', 'smile', 'hearteyes']
  },
  {
    id: '4',
    title: 'New Climate Policy Draws Mixed Reactions from Lawmakers',
    summary: 'Government announces ambitious environmental plan with both praise and criticism from different political parties.',
    content: `The government unveiled its most ambitious climate policy to date yesterday, aiming to achieve carbon neutrality by 2035 – five years ahead of previous targets.

The comprehensive plan includes massive investments in renewable energy infrastructure, electric vehicle charging networks, and green job creation programs.

Prime Minister Alexandra Thompson announced the policy at a press conference, stating: "The climate crisis demands bold action. We cannot afford to wait any longer."

[IMAGE:/src/assets/news-politics.jpg]

The policy has drawn support from environmental groups and progressive lawmakers, who praise its ambitious timeline and comprehensive scope. However, conservative opposition leaders have criticized the plan's economic impact.

Senator Robert Hayes called the policy "economically reckless," while environmental advocate Dr. Maria Santos described it as "exactly what our planet needs."

The plan will require parliamentary approval and faces significant debate in the coming weeks. Public opinion polls show mixed support, with younger voters strongly in favor and older demographics expressing concerns about implementation costs.`,
    category: 'Politics' as const,
    author: 'David Wilson',
    publishedAt: '2024-01-15T16:45:00Z',
    imageUrl: '/src/assets/news-politics.jpg',
    location: 'Washington D.C.',
    showLocation: false,
    reactions: { like: 1543, thumbsUp: 892, angry: 456, thumbsDown: 234 },
    availableReactions: ['like', 'thumbsUp', 'angry', 'thumbsDown']
  },
  {
    id: '5',
    title: 'Breakthrough in Quantum Computing Achieved by Local University',
    summary: 'Researchers successfully demonstrate quantum advantage in practical applications, marking a new era in computing power.',
    content: `Researchers at the University of Technology have achieved a major breakthrough in quantum computing, successfully demonstrating quantum advantage in solving real-world problems.

The team, led by Professor Lisa Wang, developed a new quantum algorithm that can solve certain optimization problems 1000 times faster than traditional computers.

"This isn't just theoretical anymore," explained Professor Wang. "We're seeing practical applications that could revolutionize everything from drug discovery to financial modeling."

The breakthrough came after five years of intensive research and represents a significant step toward practical quantum computing for everyday use.

Major technology companies have already expressed interest in licensing the university's technology, with potential applications in artificial intelligence, cryptography, and materials science.

The research has been published in the prestigious journal Nature Quantum Information and is being hailed as one of the most significant advances in the field this decade.`,
    category: 'News' as const,
    author: 'Jennifer Liu',
    publishedAt: '2024-01-15T11:10:00Z',
    imageUrl: '/src/assets/news-urban.jpg',
    location: 'Boston, MA',
    showLocation: true,
    reactions: { like: 876, thumbsUp: 543, star: 234, crying: 19 },
    availableReactions: ['like', 'thumbsUp', 'star', 'crying']
  },
  {
    id: '6',
    title: 'Record-Breaking Space Mission Returns with Groundbreaking Samples',
    summary: 'International space agency successfully completes first-ever asteroid mining mission, bringing back rare materials for study.',
    content: `The International Space Consortium announced the successful return of the Prometheus mission today, marking humanity's first successful asteroid mining operation.

The mission, which lasted 18 months, traveled to asteroid Bennu and extracted over 2 kilograms of rare earth materials previously unavailable on Earth.

Mission commander Captain Elena Rodriguez described the achievement as "a watershed moment for space exploration and resource acquisition."

[IMAGE:/src/assets/news-environment.jpg]

The extracted materials include platinum group metals and rare isotopes that could revolutionize electronics manufacturing and medical treatments.

Scientists estimate the materials extracted could be worth over $50 billion, but the real value lies in the scientific breakthroughs they may enable.

The success of Prometheus has already sparked planning for three additional asteroid mining missions scheduled for the next decade.`,
    category: 'News' as const,
    author: 'Dr. Marcus Chen',
    publishedAt: '2024-01-14T09:20:00Z',
    imageUrl: '/src/assets/news-environment.jpg',
    location: 'Houston, TX',
    showLocation: false,
    reactions: { like: 2234, thumbsUp: 1456, smile: 789 },
    availableReactions: ['like', 'thumbsUp', 'smile']
  },
  {
    id: '7',
    title: 'Olympic Games Break All-Time Viewership Records',
    summary: 'Summer Olympics attract largest global audience in history, with innovative broadcast technology enhancing viewer experience.',
    content: `The Paris Olympic Games have shattered all previous viewership records, with over 5 billion people tuning in across traditional and digital platforms.

The International Olympic Committee credits innovative broadcast technologies, including 8K resolution streams and virtual reality experiences, for the unprecedented engagement.

Standout performances from athletes worldwide have created numerous viral moments, with swimmer Katie Walsh's world record performance being viewed over 100 million times.

"These Games have truly captured the world's imagination," said IOC President Thomas Bach during the closing ceremony preparations.

[IMAGE:/src/assets/news-sports.jpg]

The economic impact has been equally impressive, with host city Paris reporting a 340% increase in tourism revenue compared to the same period last year.

Digital engagement metrics show younger audiences are particularly drawn to the Games, with TikTok and Instagram content receiving unprecedented interaction rates.`,
    category: 'Sports' as const,
    author: 'Maria Santos',
    publishedAt: '2024-01-13T15:45:00Z',
    imageUrl: '/src/assets/news-sports.jpg',
    location: 'Paris, France',
    showLocation: true,
    reactions: { like: 3421, thumbsUp: 2156, smile: 1234, angry: 67 },
    availableReactions: ['like', 'thumbsUp', 'smile', 'angry']
  },
  {
    id: '8',
    title: 'Renaissance Art Discovery Rewrites History Books',
    summary: 'Hidden chamber in Italian cathedral reveals lost masterpieces, changing understanding of Renaissance art movement.',
    content: `Art historians are calling it the discovery of the century after a hidden chamber in Florence's Cathedral revealed a collection of previously unknown Renaissance masterpieces.

The chamber, sealed for over 400 years, contained 23 paintings and numerous sketches attributed to masters including Michelangelo and Leonardo da Vinci.

Dr. Isabella Rossi, lead curator at the Uffizi Gallery, described the find as "absolutely revolutionary for our understanding of Renaissance art."

The artworks show techniques and styles previously unknown, suggesting these masters experimented far more than historical records indicated.

Carbon dating and paint analysis confirm the works' authenticity, with several pieces predating the artists' known earliest works by decades.

[IMAGE:/src/assets/news-culture.jpg]

The Italian government has announced plans for a special exhibition featuring the discovered works, expected to draw millions of visitors to Florence.

Scholars worldwide are reassessing Renaissance art history textbooks in light of these extraordinary discoveries.`,
    category: 'Culture' as const,
    author: 'Prof. Antonio Benedetti',
    publishedAt: '2024-01-12T11:30:00Z',
    imageUrl: '/src/assets/news-culture.jpg',
    location: 'Florence, Italy',
    showLocation: false,
    reactions: { like: 1876, smile: 567, hearteyes: 334 },
    availableReactions: ['like', 'smile', 'hearteyes']
  },
  {
    id: '9',
    title: 'Global Trade Agreement Reshapes Economic Landscape',
    summary: 'Historic 15-nation trade pact promises to boost global GDP by $2.3 trillion while addressing environmental concerns.',
    content: `World leaders signed the most comprehensive trade agreement in history today, establishing new frameworks for international commerce while prioritizing environmental protection.

The Global Sustainable Trade Partnership includes provisions for carbon pricing, renewable energy requirements, and strict environmental standards for all participating nations.

President Chen Wei of the Trade Council emphasized that "economic growth and environmental stewardship are no longer competing priorities."

[IMAGE:/src/assets/news-politics.jpg]

Economists project the agreement will boost global GDP by $2.3 trillion over the next decade while reducing carbon emissions by 35%.

The pact includes groundbreaking worker protection clauses and technology sharing agreements aimed at bridging the digital divide between developed and developing nations.

Critics argue the timeline for implementation is too aggressive, while supporters herald it as a model for 21st-century international cooperation.`,
    category: 'Politics' as const,
    author: 'Ambassador Sarah Kim',
    publishedAt: '2024-01-11T14:20:00Z',
    imageUrl: '/src/assets/news-politics.jpg',
    location: 'Geneva, Switzerland',
    showLocation: true,
    reactions: { like: 2567, thumbsUp: 1234, angry: 234, thumbsDown: 123 },
    availableReactions: ['like', 'thumbsUp', 'angry', 'thumbsDown']
  },
  {
    id: '10',
    title: 'Revolutionary Gene Therapy Cures Rare Disease',
    summary: 'Medical breakthrough offers hope to millions as scientists successfully treat previously incurable genetic condition.',
    content: `Medical researchers have achieved a historic breakthrough with the first successful gene therapy treatment for Huntington's disease, offering hope to millions of patients worldwide.

The treatment, developed by an international consortium of medical institutions, uses advanced CRISPR technology to correct faulty genes at the cellular level.

Clinical trials involving 120 patients showed remarkable results, with 89% experiencing significant symptom improvement and 67% achieving complete remission.

Dr. Rachel Park, lead researcher, called the results "beyond our most optimistic expectations."

The therapy works by delivering corrected genetic material directly to affected brain cells, essentially rewriting the patient's genetic code to eliminate the disease.

Regulatory agencies are fast-tracking approval processes, with treatments expected to be available within 18 months.

The success has sparked immediate research into applying similar techniques to other genetic disorders, potentially revolutionizing treatment for thousands of rare diseases.`,
    category: 'News' as const,
    author: 'Dr. Michael Rodriguez',
    publishedAt: '2024-01-10T10:15:00Z',
    imageUrl: '/src/assets/news-business.jpg',
    location: 'Baltimore, MD',
    showLocation: false,
    reactions: { like: 4567, thumbsUp: 3234, smile: 1567 },
    availableReactions: ['like', 'thumbsUp', 'smile']
  },
  {
    id: '11',
    title: 'Professional Esports League Breaks Stadium Attendance Records',
    summary: 'Gaming championship draws 80,000 live spectators and 200 million online viewers, establishing esports as mainstream entertainment.',
    content: `The World Esports Championship made history this weekend by selling out the 80,000-capacity Olympic Stadium while simultaneously attracting over 200 million online viewers.

The five-day tournament featured teams from 32 countries competing across multiple gaming titles, with total prize pools exceeding $50 million.

Tournament director Alex Chen noted that "esports has officially entered the mainstream entertainment landscape alongside traditional sports."

[IMAGE:/src/assets/news-sports.jpg]

The championship's economic impact rivaled major sporting events, generating an estimated $300 million in local economic activity.

Broadcast innovations included real-time biometric data from players, 360-degree arena cameras, and AI-powered match analysis that enhanced viewer engagement.

Major sports networks are now negotiating multi-billion dollar broadcasting rights deals for future esports events, signaling the industry's explosive growth trajectory.`,
    category: 'Sports' as const,
    author: 'Gaming Reporter Lisa Wang',
    publishedAt: '2024-01-09T18:30:00Z',
    imageUrl: '/src/assets/news-sports.jpg',
    location: 'Seoul, South Korea',
    showLocation: true,
    reactions: { like: 5432, thumbsUp: 4321, smile: 2345, star: 123 },
    availableReactions: ['like', 'thumbsUp', 'smile', 'star']
  },
  {
    id: '12',
    title: 'Ancient Library Discovered Beneath Modern City',
    summary: 'Construction workers unearth 2,000-year-old library containing thousands of preserved scrolls and documents.',
    content: `Construction crews working on a subway extension in Rome have uncovered what archaeologists are calling one of the most significant ancient discoveries in decades.

The underground library, dating to the 1st century BCE, contains over 3,000 remarkably preserved papyrus scrolls and wax tablets.

Professor Maria Gonzalez from the University of Rome described the find as "a direct window into ancient intellectual life."

Initial translations reveal works on mathematics, astronomy, and philosophy, including several previously unknown texts by famous ancient scholars.

[IMAGE:/src/assets/news-culture.jpg]

The library's advanced preservation system, involving sealed chambers and natural climate control, kept the documents in near-perfect condition for two millennia.

Digital scanning technology is being used to safely examine the fragile texts without causing damage, with plans to make high-resolution copies available to researchers worldwide.

The discovery is expected to significantly advance understanding of ancient Roman intellectual and cultural life.`,
    category: 'Culture' as const,
    author: 'Dr. Francesco Romano',
    publishedAt: '2024-01-08T13:45:00Z',
    imageUrl: '/src/assets/news-culture.jpg',
    location: 'Rome, Italy',
    showLocation: false,
    reactions: { like: 2876, smile: 876, hearteyes: 543 },
    availableReactions: ['like', 'smile', 'hearteyes']
  },
  {
    id: '13',
    title: 'Renewable Energy Grid Powers Entire Nation for First Time',
    summary: 'Small island nation achieves 100% renewable energy milestone, becoming a model for sustainable development worldwide.',
    content: `The island nation of Costa Verde has become the first country in the world to operate entirely on renewable energy for 365 consecutive days.

The achievement was made possible through an innovative combination of solar, wind, hydroelectric, and geothermal power systems integrated with advanced battery storage technology.

Environment Minister Dr. Carlos Mendoza celebrated the milestone, stating: "We've proven that 100% renewable energy isn't just possible – it's economically viable."

The transition began five years ago with massive investments in renewable infrastructure and smart grid technology that optimizes energy distribution based on real-time demand.

[IMAGE:/src/assets/news-environment.jpg]

Energy costs for residents have decreased by 40% since the transition began, while the nation has become a net energy exporter, selling surplus power to neighboring countries.

International delegations are studying Costa Verde's model, with 12 countries announcing similar renewable energy transition plans inspired by this success.`,
    category: 'Politics' as const,
    author: 'Environmental Correspondent Ana Silva',
    publishedAt: '2024-01-07T16:20:00Z',
    imageUrl: '/src/assets/news-environment.jpg',
    location: 'Costa Verde',
    showLocation: true,
    reactions: { like: 6789, thumbsUp: 4532, smile: 2134, star: 567 },
    availableReactions: ['like', 'thumbsUp', 'smile', 'star']
  },
  {
    id: '14',
    title: 'AI Composer Creates First Computer-Generated Symphony',
    summary: 'Artificial intelligence system composes and orchestrates full symphony performed by London Philharmonic Orchestra.',
    content: `The London Philharmonic Orchestra premiered the world's first fully AI-composed symphony last night, marking a historic moment in both technology and classical music.

The AI system, developed by researchers at Cambridge University, analyzed over 10,000 classical compositions to create "Symphony No. 1 in Digital Major."

Conductor Maestro Giovanni Rossi described the piece as "surprisingly emotional and structurally sophisticated, challenging our assumptions about creativity and consciousness."

The 45-minute symphony received a standing ovation from the audience, with critics praising its innovative harmonies and unexpected emotional depth.

The AI composer, named "Orpheus," continues to generate new compositions daily, with plans for a full album of AI-created classical music.

[IMAGE:/src/assets/news-arts.jpg]

Musicians and composers worldwide are debating the implications for the future of musical creation, with some embracing the technology as a collaborator and others concerned about artistic authenticity.

The performance has been viewed over 50 million times online, sparking global conversations about AI's role in creative endeavors.`,
    category: 'Culture' as const,
    author: 'Music Critic James Harrison',
    publishedAt: '2024-01-06T20:00:00Z',
    imageUrl: '/src/assets/news-arts.jpg',
    location: 'London, UK',
    showLocation: false,
    reactions: { like: 3456, smile: 1876, hearteyes: 789, crying: 234 },
    availableReactions: ['like', 'smile', 'hearteyes', 'crying']
  },
  {
    id: '15',
    title: 'Underwater City Prototype Successfully Tested in Ocean Depths',
    summary: 'Revolutionary underwater habitat demonstrates viability of deep-sea colonization with sustainable life support systems.',
    content: `Marine engineers have successfully completed a six-month test of the world's first fully autonomous underwater city prototype, located 200 meters below the Pacific Ocean surface.

The "Atlantis Project" housed 50 researchers in a self-sustaining environment featuring hydroponic food production, water recycling systems, and renewable energy generation from ocean currents.

Project Director Dr. Yuki Tanaka reported that all systems performed beyond expectations, with zero environmental incidents and 100% life support reliability.

The underwater city successfully produced 80% of its food requirements and achieved complete water recycling, proving the concept's viability for permanent deep-sea habitation.

[IMAGE:/src/assets/news-entertainment.jpg]

Commercial applications include deep-sea mining operations, marine research stations, and potentially permanent underwater communities for coastal populations affected by rising sea levels.

Three additional prototype cities are planned for construction in different ocean environments, with the goal of establishing the first permanent underwater colony within the next decade.`,
    category: 'News' as const,
    author: 'Marine Technology Reporter Dr. Ocean Blue',
    publishedAt: '2024-01-05T12:30:00Z',
    imageUrl: '/src/assets/news-entertainment.jpg',
    location: 'Pacific Ocean',
    showLocation: true,
    reactions: { like: 4321, thumbsUp: 3456, smile: 2134, star: 890 },
    availableReactions: ['like', 'thumbsUp', 'smile', 'star']
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    author: 'TechEnthusiast42',
    content: 'This is incredible! Can\'t wait to see how this transforms healthcare in developing countries.',
    publishedAt: '2024-01-15T11:00:00Z',
    createdAt: '2024-01-15T11:00:00Z',
    likes: 23,
    liked: false
  },
  {
    id: '2',
    articleId: '1',
    author: 'HealthcareWorker',
    content: 'As a nurse, I\'m excited but also concerned about job displacement. Hope there\'s training for healthcare workers.',
    publishedAt: '2024-01-15T11:15:00Z',
    createdAt: '2024-01-15T11:15:00Z',
    likes: 45,
    liked: false
  },
  {
    id: '3',
    articleId: '2',
    author: 'RavensFan4Life',
    content: 'I WAS THERE! What an amazing game! Rodriguez is a legend!',
    publishedAt: '2024-01-15T08:30:00Z',
    createdAt: '2024-01-15T08:30:00Z',
    likes: 67,
    liked: false
  },
  {
    id: '4',
    articleId: '3',
    author: 'ArtLover',
    content: 'Visited yesterday - absolutely mind-blowing experience. My kids loved it!',
    publishedAt: '2024-01-15T15:00:00Z',
    createdAt: '2024-01-15T15:00:00Z',
    likes: 12,
    liked: false
  },
  {
    id: '5',
    articleId: '4',
    author: 'ClimateActivist',
    content: 'Finally! A government taking climate change seriously. This gives me hope.',
    publishedAt: '2024-01-15T17:00:00Z',
    createdAt: '2024-01-15T17:00:00Z',
    likes: 34,
    liked: false
  },
  {
    id: '6',
    articleId: '1',
    author: 'MedStudent',
    content: 'This could really help with early detection. Amazing breakthrough!',
    publishedAt: '2024-01-15T12:00:00Z',
    createdAt: '2024-01-15T12:00:00Z',
    likes: 15,
    liked: false,
    parentId: '1'
  },
  {
    id: '7',
    articleId: '6',
    author: 'SpaceExplorer',
    content: 'The future is here! Space mining will change everything about resource scarcity.',
    publishedAt: '2024-01-14T10:30:00Z',
    createdAt: '2024-01-14T10:30:00Z',
    likes: 89,
    liked: false
  },
  {
    id: '8',
    articleId: '6',
    author: 'EconomicsProf',
    content: 'The economic implications are staggering. This could destabilize entire mining industries.',
    publishedAt: '2024-01-14T11:45:00Z',
    createdAt: '2024-01-14T11:45:00Z',
    likes: 34,
    liked: false
  },
  {
    id: '9',
    articleId: '7',
    author: 'Olympics2024Fan',
    content: 'Best Olympics ever! The VR experience made me feel like I was competing alongside the athletes.',
    publishedAt: '2024-01-13T16:20:00Z',
    createdAt: '2024-01-13T16:20:00Z',
    likes: 156,
    liked: false
  },
  {
    id: '10',
    articleId: '7',
    author: 'SwimmingCoach',
    content: 'Katie Walsh\'s performance was superhuman. Breaking 3 world records in one event!',
    publishedAt: '2024-01-13T17:00:00Z',
    createdAt: '2024-01-13T17:00:00Z',
    likes: 278,
    liked: false
  },
  {
    id: '11',
    articleId: '8',
    author: 'ArtHistorian',
    content: 'This discovery will require us to rewrite entire chapters of art history. Absolutely revolutionary!',
    publishedAt: '2024-01-12T12:30:00Z',
    createdAt: '2024-01-12T12:30:00Z',
    likes: 67,
    liked: false
  },
  {
    id: '12',
    articleId: '8',
    author: 'FlrenceResident',
    content: 'As someone who lives here, I\'m so excited to see these masterpieces in person!',
    publishedAt: '2024-01-12T14:15:00Z',
    createdAt: '2024-01-12T14:15:00Z',
    likes: 45,
    liked: false
  },
  {
    id: '13',
    articleId: '9',
    author: 'TradeAnalyst',
    content: 'This agreement is a game-changer. Finally, trade and environment working together.',
    publishedAt: '2024-01-11T15:30:00Z',
    createdAt: '2024-01-11T15:30:00Z',
    likes: 123,
    liked: false
  },
  {
    id: '14',
    articleId: '9',
    author: 'BusinessOwner',
    content: 'Implementation timeline seems aggressive. Hope small businesses get adequate support.',
    publishedAt: '2024-01-11T16:45:00Z',
    createdAt: '2024-01-11T16:45:00Z',
    likes: 89,
    liked: false
  },
  {
    id: '15',
    articleId: '10',
    author: 'HuntingtonsPatient',
    content: 'As someone living with this disease, this gives me so much hope. Thank you to all the researchers!',
    publishedAt: '2024-01-10T11:30:00Z',
    createdAt: '2024-01-10T11:30:00Z',
    likes: 456,
    liked: false
  },
  {
    id: '16',
    articleId: '10',
    author: 'GeneticCounselor',
    content: 'The CRISPR applications here are groundbreaking. This could help so many rare disease patients.',
    publishedAt: '2024-01-10T12:15:00Z',
    createdAt: '2024-01-10T12:15:00Z',
    likes: 234,
    liked: false
  },
  {
    id: '17',
    articleId: '11',
    author: 'GamerGirl2024',
    content: 'I was there! The energy in the stadium was electric. Esports has truly arrived!',
    publishedAt: '2024-01-09T19:45:00Z',
    createdAt: '2024-01-09T19:45:00Z',
    likes: 345,
    liked: false
  },
  {
    id: '18',
    articleId: '11',
    author: 'TraditionalSportsFan',
    content: 'Never thought I\'d enjoy watching people play video games, but this was actually entertaining!',
    publishedAt: '2024-01-09T20:30:00Z',
    createdAt: '2024-01-09T20:30:00Z',
    likes: 178,
    liked: false
  },
  {
    id: '19',
    articleId: '12',
    author: 'ArchaeologyStudent',
    content: 'This is why I chose archaeology! Discoveries like this make all the hard work worth it.',
    publishedAt: '2024-01-08T14:30:00Z',
    createdAt: '2024-01-08T14:30:00Z',
    likes: 67,
    liked: false
  },
  {
    id: '20',
    articleId: '12',
    author: 'LatinScholar',
    content: 'I can\'t wait to read the translations. These texts could fill gaps in our knowledge of ancient philosophy.',
    publishedAt: '2024-01-08T15:45:00Z',
    createdAt: '2024-01-08T15:45:00Z',
    likes: 89,
    liked: false
  },
  {
    id: '21',
    articleId: '13',
    author: 'SolarEngineer',
    content: 'Costa Verde is showing the world what\'s possible. The technology is there, we just need the political will.',
    publishedAt: '2024-01-07T17:30:00Z',
    createdAt: '2024-01-07T17:30:00Z',
    likes: 234,
    liked: false
  },
  {
    id: '22',
    articleId: '13',
    author: 'ClimateScientist',
    content: 'This is the blueprint for global climate action. Every nation should study this model.',
    publishedAt: '2024-01-07T18:15:00Z',
    createdAt: '2024-01-07T18:15:00Z',
    likes: 345,
    liked: false
  },
  {
    id: '23',
    articleId: '14',
    author: 'ClassicalMusician',
    content: 'As a violinist, I\'m both amazed and terrified. The AI understood musical emotion better than I expected.',
    publishedAt: '2024-01-06T21:30:00Z',
    createdAt: '2024-01-06T21:30:00Z',
    likes: 156,
    liked: false
  },
  {
    id: '24',
    articleId: '14',
    author: 'ComposerMaestro',
    content: 'I attended the premiere. The AI created something genuinely beautiful and moving. Art knows no boundaries.',
    publishedAt: '2024-01-06T22:15:00Z',
    createdAt: '2024-01-06T22:15:00Z',
    likes: 289,
    liked: false
  },
  {
    id: '25',
    articleId: '15',
    author: 'MarineBiologist',
    content: 'The environmental implications are fascinating. Living underwater without disturbing marine ecosystems.',
    publishedAt: '2024-01-05T13:45:00Z',
    createdAt: '2024-01-05T13:45:00Z',
    likes: 123,
    liked: false
  },
  {
    id: '26',
    articleId: '15',
    author: 'DeepSeaDiver',
    content: 'I\'ve spent years underwater, and this technology could revolutionize deep-sea exploration.',
    publishedAt: '2024-01-05T14:30:00Z',
    createdAt: '2024-01-05T14:30:00Z',
    likes: 178,
    liked: false
  },
  {
    id: '27',
    articleId: '1',
    author: 'DocSmith',
    content: 'The 95% accuracy rate is impressive, but we need to ensure proper training for healthcare workers.',
    publishedAt: '2024-01-15T13:30:00Z',
    createdAt: '2024-01-15T13:30:00Z',
    likes: 67,
    liked: false,
    parentId: '2'
  },
  {
    id: '28',
    articleId: '2',
    author: 'SportsReporter',
    content: 'What a comeback story! The Ravens\' journey from underdogs to champions is pure inspiration.',
    publishedAt: '2024-01-15T09:15:00Z',
    createdAt: '2024-01-15T09:15:00Z',
    likes: 145,
    liked: false
  },
  {
    id: '29',
    articleId: '3',
    author: 'MuseumDirector',
    content: 'This is just the beginning. We\'re planning similar experiences with Impressionist and Modern art.',
    publishedAt: '2024-01-15T16:30:00Z',
    createdAt: '2024-01-15T16:30:00Z',
    likes: 89,
    liked: false,
    parentId: '4'
  },
  {
    id: '30',
    articleId: '4',
    author: 'PolicyAnalyst',
    content: 'The economic modeling looks solid. Green jobs creation could offset traditional industry impacts.',
    publishedAt: '2024-01-15T18:00:00Z',
    createdAt: '2024-01-15T18:00:00Z',
    likes: 123,
    liked: false
  }
];

export const categories = ['News', 'Sports', 'Culture', 'Politics'] as const;