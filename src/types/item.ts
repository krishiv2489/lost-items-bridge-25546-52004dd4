export type ItemStatus = 'lost' | 'found';
export type ItemCategory = 'electronics' | 'clothing' | 'accessories' | 'books' | 'keys' | 'cards' | 'other';

export interface Item {
  id: string;
  title: string;
  description: string;
  category: ItemCategory;
  status: ItemStatus;
  location: string;
  date: string;
  contactEmail: string;
  contactPhone?: string;
  imageUrl?: string;
}
