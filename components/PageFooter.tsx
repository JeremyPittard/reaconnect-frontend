import Link from "next/link";
import React from "react";

const PageFooter = () => {
  return (
    <footer>
      <nav className="max-w-md border-t border-storm-green mx-auto text-right">
        <ul className="flex gap-4">
          <li>
            <Link href={"/investors"}>Investors</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default PageFooter;
