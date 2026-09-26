import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import {Subject} from "../types";

const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "An introductory course on computer science concepts.",
    createdAt: "2026-09-26T00:00:00Z"
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus I",
    department: "Mathematics",
    description: "Fundamental concepts of calculus.",
    createdAt: "2026-09-26T00:00:00Z"
  },
  {
    id: 3,
    code: "ENG105",
    name: "Introduction to Literature",
    department: "English",
    description: "A survey of literature.",
    createdAt: "2026-09-26T00:00:00Z"
  }
];



export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return {data: [] as TData[], total: 0}
    }

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    }
  },
  getOne: async () => {
    throw new Error('this function is not present in mock')
  },
  create: async () => {
    throw new Error('this function is not present in mock')
  },
  update: async () => {
    throw new Error('this function is not present in mock')
  },
  deleteOne: async () => {
    throw new Error('this function is not present in mock')
  },
  getApiUrl: () => ''
}