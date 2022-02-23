export default interface SelectedCoach {
  id: number;
  email: string;
  name: string;
  phone: string;
  website: string;
  street: string;
  streetNumber: string;
  zip: string;
  city: string;
  specialties: {
    id: string;
    name: string;
  }[];
}
