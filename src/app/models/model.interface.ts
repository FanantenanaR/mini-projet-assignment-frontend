
export interface APIResponsePaginated<T> {
  docs: T[];
  totalDocs: number;
  limit?: number;
  page?: number;
  totalPages?: number;
  pagingCounter?: number;
  hasPrevPage?: number;
  hasNextPage?: number;
  prevPage?: number;
  nextPage?: number;
}

export interface APIResponse<T> {
  data?: T;
  datas?: T[];
  status: number;
  message: string;
}

export interface Prof {
  id?: string;
  _id?: string;
  lastname: string;
  firstname: string;
  email: string;
  profilPicture: string;
  isAdmin: boolean;
}

export interface Student {
  id?: string;
  _id?: string;
  lastname: string;
  firstname: string;
  email: string;
  profilPicture: string;
}

export interface Subject {
  id?: string;
  _id?: string;
  title: string;
  illustration: string;
  prof: string;
  profData?: Prof;
}

