import axios from "axios";
import type { Data } from "../../interfaces";
import { useState, useEffect } from "react";
import ExamList from "../examlist";
import ExamFilter from "../examfilter";

export default function Home() {
  const [exams, setExams] = useState<Data>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("/api/examschedule", {
          params: filters,
        });
        setExams(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchExams();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <ExamFilter onFilter={handleFilterChange} />
      <ExamList exams={exams} />
    </div>
  );
}
