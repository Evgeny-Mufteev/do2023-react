export interface ISpeaker {
  id: number;
  imageUrl: string;
  name: string;
  jobTitle: string;
  city: string;
}
export interface ITickets {
  name: string;
  newPrice: number;
  oldPrice: number;
  options: string[];
  id: number;
}
export interface PageInfoItem {
  name: string;
  text: string;
  pageName: string;
  id: string;
}

export interface IFormData {
  fullName: string;
  email: string;
  phone: string;
  privacyPolicy: boolean;
  ticketId: string
}
