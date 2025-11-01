import { Item } from "@/types/item";

export const mockItems: Item[] = [
  {
    id: '1',
    title: 'Black Backpack',
    description: 'Black North Face backpack with blue zippers. Contains notebooks and laptop.',
    category: 'accessories',
    status: 'lost',
    location: 'Library Building',
    date: '2025-10-28',
    contactEmail: 'student1@college.edu',
    contactPhone: '555-0101'
  },
  {
    id: '2',
    title: 'iPhone 14',
    description: 'Space gray iPhone 14 Pro with cracked screen protector. Blue case.',
    category: 'electronics',
    status: 'found',
    location: 'Student Center',
    date: '2025-10-29',
    contactEmail: 'student2@college.edu'
  },
  {
    id: '3',
    title: 'Set of Keys',
    description: 'Keychain with dorm key and car key. Green lanyard attached.',
    category: 'keys',
    status: 'found',
    location: 'Gym',
    date: '2025-10-30',
    contactEmail: 'student3@college.edu',
    contactPhone: '555-0103'
  },
  {
    id: '4',
    title: 'Calculus Textbook',
    description: 'Calculus: Early Transcendentals 8th Edition. Name written inside.',
    category: 'books',
    status: 'lost',
    location: 'Math Building Room 204',
    date: '2025-10-27',
    contactEmail: 'student4@college.edu'
  },
  {
    id: '5',
    title: 'Blue Denim Jacket',
    description: 'Light blue denim jacket, size M. Has pin buttons on the collar.',
    category: 'clothing',
    status: 'found',
    location: 'Cafeteria',
    date: '2025-10-31',
    contactEmail: 'student5@college.edu'
  },
  {
    id: '6',
    title: 'Student ID Card',
    description: 'Student ID card for Sarah Johnson. Please return to admin office.',
    category: 'cards',
    status: 'found',
    location: 'Parking Lot B',
    date: '2025-11-01',
    contactEmail: 'admin@college.edu',
    contactPhone: '555-0100'
  }
];
