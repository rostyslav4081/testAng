export enum StatusOrder {
  New = 'nová',
  Accepted = 'přijatá',
  Completed = 'vyřízeno'
}

export interface Order {
  id: number;
  numberOrder: string;
  dateOrder: string;
  value: number;
  Status: StatusOrder;
  idCustomer: number;
}
