export type TFilterDate = {
  date?: Date | string;
  date_start?: Date | string;
  date_end?: Date | string;
  orderBy?: "asc" | "desc";
  page?: number;
  perPage?: number;
};
