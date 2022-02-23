export default interface coach {
  coach: {
    coach: string;
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
