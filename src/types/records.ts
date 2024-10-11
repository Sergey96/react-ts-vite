export interface IAppointment {
  id?: number;
  client_id: number;
  master_id: number;
  work_place_id: number;
  services: number[];
  amount: number;
  start_time: string;
  end_time: string;
  duration: number;
  confirmed?: boolean;
  note: string;
  time_break?: number;
}
