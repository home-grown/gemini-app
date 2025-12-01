
export enum View {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  BOOKING = 'BOOKING',
  ACCESS = 'ACCESS',
  INSIGHTS = 'INSIGHTS',
  COMMUNITY = 'COMMUNITY',
  STUDIO = 'STUDIO',
  PROFILE = 'PROFILE'
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface Space {
  id: string;
  name: string;
  type: 'MEETING_ROOM' | 'HOT_DESK' | 'PRIVATE_SUITE' | 'EVENT_HALL';
  capacity: number;
  pricePerHour: number;
  image: string;
  location: string;
  amenities: string[];
  isAvailable: boolean;
  rating: number;
}

export interface Booking {
  id: string;
  spaceId: string;
  spaceName: string;
  date: string;
  startTime: string;
  endTime: string;
  attendees: number;
  status: 'UPCOMING' | 'COMPLETED' | 'CANCELLED';
  guests: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'IN_OFFICE' | 'REMOTE' | 'LEAVE';
}

export interface MonthlyMetric {
  month: string;
  spend: number;
  utilization: number;
}

export interface TechEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  image: string;
  tags: string[];
  attendeesCount: number;
}

export interface CommunityProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  skills: string[];
  isOnline: boolean;
}

export interface Notification {
  id: string;
  type: 'EVENT' | 'CHAT' | 'SYSTEM' | 'ALERT';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}
