import { Moment } from "moment";
import { atom } from "recoil";

export interface IDateBooking {
  dateBookingMoment: Array<Date>;
  totalDate: number;
}
export interface IDataValuesBooking {
  data: {
    arriving: number;
    beds: boolean;
    date: Array<Moment>;
    email: string;
    name: string;
    phoneNumber: string;
    region: string;
    retypeEmail: string;
    smoking: boolean;
  };
}

export const dateBooking = atom<IDateBooking>({
  key: "dateBooking",
  default: {
    dateBookingMoment: [],
    totalDate: 0,
  },
});

export const valuesFormBooking = atom<IDataValuesBooking>({
  key: "valuesFormBooking",
  default: {
    data: null,
  },
});
