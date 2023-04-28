import type { NextApiRequest, NextApiResponse } from "next";
import TechTestJson from "../TechTestJson.json";
import type { Item } from "../../../interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item>
) {
  let exams = TechTestJson;

  const { id } = req.query;
  const numId = parseInt(id as string, 10);

  const exam = exams.find((exam) => exam.id === numId);

  res.status(200).json(exam);
}
