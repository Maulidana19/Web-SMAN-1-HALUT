export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarSeed: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
