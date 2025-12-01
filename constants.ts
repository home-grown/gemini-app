
import { Space, TeamMember, Booking, MonthlyMetric, TechEvent, CommunityProfile, Notification } from './types';

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentMonthShort = now.toLocaleString('default', { month: 'short' });
const lastMonthShort = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'short' });

// Helper to get a date string YYYY-MM-DD
const getDateStr = (dayOffset: number) => {
  const d = new Date(now);
  d.setDate(d.getDate() + dayOffset);
  return d.toISOString().split('T')[0];
};

// Helper for event display dates (e.g. "Oct 26")
const getEventDateStr = (day: number) => {
    return `${currentMonthShort} ${day}`;
};

export const MOCK_SPACES: Space[] = [
  {
    id: 's1',
    name: 'The Hive - Boardroom Alpha',
    type: 'MEETING_ROOM',
    capacity: 12,
    pricePerHour: 85,
    image: 'https://picsum.photos/800/600?random=1',
    location: 'HiveTech CBD, Singapore',
    amenities: ['Video Conf', 'Whiteboard', 'Coffee', 'Soundproof'],
    isAvailable: true,
    rating: 4.9,
  },
  {
    id: 's2',
    name: 'Focus Pod 04',
    type: 'HOT_DESK',
    capacity: 1,
    pricePerHour: 15,
    image: 'https://picsum.photos/800/600?random=2',
    location: 'HiveTech CBD, Singapore',
    amenities: ['Power Outlet', 'Ergo Chair', 'Monitor'],
    isAvailable: true,
    rating: 4.7,
  },
  {
    id: 's3',
    name: 'Innovation Lab',
    type: 'EVENT_HALL',
    capacity: 30,
    pricePerHour: 200,
    image: 'https://picsum.photos/800/600?random=3',
    location: 'HiveTech Bugis',
    amenities: ['Projector', 'Mic System', 'Catering'],
    isAvailable: false,
    rating: 4.8,
  },
  {
    id: 's4',
    name: 'Private Suite A',
    type: 'PRIVATE_SUITE',
    capacity: 6,
    pricePerHour: 60,
    image: 'https://picsum.photos/800/600?random=4',
    location: 'HiveTech CBD',
    amenities: ['Private Access', 'Ensuite Screen', 'Whiteboard'],
    isAvailable: true,
    rating: 4.9,
  }
];

export const MOCK_TEAM: TeamMember[] = [
  { id: 'u1', name: 'Adrian Lim', role: 'Founder & CTO', avatar: 'https://picsum.photos/100/100?random=10', status: 'IN_OFFICE' },
  { id: 'u2', name: 'Sarah Tan', role: 'Product Lead', avatar: 'https://picsum.photos/100/100?random=11', status: 'IN_OFFICE' },
  { id: 'u3', name: 'Raj Kumar', role: 'Senior Dev', avatar: 'https://picsum.photos/100/100?random=12', status: 'REMOTE' },
  { id: 'u4', name: 'Wei Ling', role: 'Marketing', avatar: 'https://picsum.photos/100/100?random=13', status: 'LEAVE' },
];

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    spaceId: 's1',
    spaceName: 'The Hive - Boardroom Alpha',
    date: getDateStr(1), // Tomorrow
    startTime: '10:00',
    endTime: '11:30',
    attendees: 5,
    status: 'UPCOMING',
    guests: ['Client: Acme Corp']
  },
  {
    id: 'b2',
    spaceId: 's2',
    spaceName: 'Focus Pod 04',
    date: getDateStr(1),
    startTime: '13:00',
    endTime: '17:00',
    attendees: 1,
    status: 'UPCOMING',
    guests: []
  }
];

// Generate last 6 months for charts
export const INSIGHTS_DATA: MonthlyMetric[] = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1);
    const mName = d.toLocaleString('default', { month: 'short' });
    // Randomish data trending up
    const baseSpend = 2000 + (i * 300); 
    const spend = baseSpend + Math.floor(Math.random() * 500);
    const utilization = 60 + (i * 5) + Math.floor(Math.random() * 5);
    return { month: mName, spend, utilization: Math.min(utilization, 98) };
});

export const MOCK_EVENTS: TechEvent[] = [
  {
    id: 'e1',
    title: 'AI in FinTech Mixer',
    date: getEventDateStr(15),
    time: '6:30 PM',
    location: 'HiveTech CBD Lounge',
    organizer: 'HiveTech Community',
    image: 'https://picsum.photos/800/400?random=20',
    tags: ['Networking', 'AI', 'Finance'],
    attendeesCount: 42
  },
  {
    id: 'e2',
    title: 'React 19 Workshop',
    date: getEventDateStr(22),
    time: '2:00 PM',
    location: 'Innovation Lab',
    organizer: 'Tech SG Group',
    image: 'https://picsum.photos/800/400?random=21',
    tags: ['Workshop', 'Frontend'],
    attendeesCount: 25
  },
  {
    id: 'e3',
    title: 'Founder\'s Breakfast Club',
    date: getEventDateStr(28),
    time: '9:00 AM',
    location: 'HiveTech Bugis Cafe',
    organizer: 'Adrian Lim',
    image: 'https://picsum.photos/800/400?random=22',
    tags: ['Startup', 'Social'],
    attendeesCount: 12
  }
];

export const MOCK_COMMUNITY: CommunityProfile[] = [
  {
    id: 'c1',
    name: 'Jason Lee',
    role: 'CEO',
    company: 'FinSpark',
    avatar: 'https://picsum.photos/100/100?random=30',
    skills: ['Fintech', 'Strategy', 'Fundraising'],
    isOnline: true
  },
  {
    id: 'c2',
    name: 'Amanda Chen',
    role: 'UX Designer',
    company: 'PixelPerfect',
    avatar: 'https://picsum.photos/100/100?random=31',
    skills: ['Figma', 'User Research', 'Prototyping'],
    isOnline: false
  },
  {
    id: 'c3',
    name: 'David Tan',
    role: 'Cloud Architect',
    company: 'CloudScale',
    avatar: 'https://picsum.photos/100/100?random=32',
    skills: ['AWS', 'Kubernetes', 'DevOps'],
    isOnline: true
  },
  {
    id: 'c4',
    name: 'Priya Gupta',
    role: 'AI Researcher',
    company: 'NeuroNet',
    avatar: 'https://picsum.photos/100/100?random=33',
    skills: ['Python', 'TensorFlow', 'LLMs'],
    isOnline: true
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
      id: 'n1',
      type: 'EVENT',
      title: 'Event Reminder',
      message: 'AI in FinTech Mixer starts in 1 hour. Get ready to network!',
      time: '1h ago',
      isRead: false
  },
  {
      id: 'n2',
      type: 'CHAT',
      title: 'New Message',
      message: 'Jason Lee: "Hey Adrian, are you going to the mixer tonight?"',
      time: '2h ago',
      isRead: false
  },
  {
      id: 'n3',
      type: 'SYSTEM',
      title: 'Booking Confirmed',
      message: 'The Hive - Boardroom Alpha is confirmed for tomorrow at 10:00 AM.',
      time: '5h ago',
      isRead: true
  },
  {
      id: 'n4',
      type: 'ALERT',
      title: 'Payment Successful',
      message: 'Monthly membership invoice #INV-2024-11 has been paid.',
      time: '1d ago',
      isRead: true
  }
];
