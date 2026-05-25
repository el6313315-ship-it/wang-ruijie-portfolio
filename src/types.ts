export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  prdLink?: string;
  metrics?: { label: string; value: string }[];
  image: string;
  category: string;
  role?: string;
  outputs?: string[];
  status?: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  videoUrl: string; // Placeholder or embed/aesthetic loop
  accentColor?: string;
}
