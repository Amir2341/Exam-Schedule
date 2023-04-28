import type { NextApiRequest, NextApiResponse } from "next";
import TechTestJson from "../TechTestJson.json";
import type { Data } from "../../../interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { date, candidate, location } = req.query;
  let filteredExams = TechTestJson;

  if (date) {
    filteredExams = filteredExams.filter((exam) => exam.Date === date);
  }

  if (candidate) {
    filteredExams = filteredExams.filter(
      (exam) => exam.CandidateName === candidate
    );
  }

  if (location) {
    filteredExams = filteredExams.filter(
      (exam) => exam.LocationName === location
    );
  }

  res.status(200).json(filteredExams);
}
