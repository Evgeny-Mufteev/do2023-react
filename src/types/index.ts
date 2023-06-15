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

export interface ITicketsModal extends ITickets {
  changeModalActive: (status: boolean) => void;
}

export interface ITicketsModalId extends ITicketsModal {
  setSelectedTicketId: (ticketId: number | null) => void
}

export interface PageInfoItem {
  name: string;
  text: string;
  pageName: string;
  id: string;
}
