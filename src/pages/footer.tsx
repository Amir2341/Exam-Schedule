import { HiAcademicCap } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content md:flex md:flex-col">
      <div className="items-center grid-flow-col">
        <Link href="/examschedule">
          <HiAcademicCap />
          Home
        </Link>
      </div>
    </footer>
  );
}
