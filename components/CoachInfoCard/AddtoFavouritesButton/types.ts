export default interface CoachFavourite {
  isHearted: boolean;
  coach: {
    id: number;
    email: string | null;
    name: string;
    phone: string | null;
    website: string | null;
    street: string | null;
    streetNumber: string | null;
    zip: string | null;
    city: string | null;
    specialties: {
      id: string;
      name: string;
    }[];
  };
}
