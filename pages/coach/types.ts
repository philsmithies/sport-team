export default interface Coach {
  coach: {
    id: number;
    email: string;
    name: true;
    phone: string;
    website: true;
    street: string;
    streetNumber: string;
    zip: string;
    city: string;
    specialties: {
      id: string;
      name: string;
    }[];
  }[];
}

export default interface SelectedCoach {
  id: number;
  email: string;
  name: true;
  phone: string;
  website: true;
  street: string;
  streetNumber: string;
  zip: string;
  city: string;
  specialties: {
    id: string;
    name: string;
  }[];
}

export default interface FetchMoreResult {
  data: {
    coaches: [];
    specialties: [];
  }[];
}
