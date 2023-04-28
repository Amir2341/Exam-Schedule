import { HiAcademicCap } from "react-icons/hi";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content mb-2">
        <Link
          href="/examschedule"
          className="btn btn-ghost normal-case text-xl"
        >
          <HiAcademicCap />
          <h1>Exam Schedule</h1>
        </Link>
      </div>
    </div>
  );
}
