import Link from "next/link";
import Image from "next/image";
import React from "react";

const PageFooter = () => {
  return (
    <footer>
      <nav className="max-w-7xl border-t border-storm-green mx-auto text-right px-4">
        <ul className="flex gap-4 items-end py-2 mx-auto max-w-xs md:max-w-md">
          <li>
            <Link href={"/"}>
              <Image
                src="/img/logo.svg"
                alt="reaconnect logo"
                height={35}
                width={35}
              />
            </Link>
          </li>
          <li>
            <Link href={"/investors"}>Investors</Link>
          </li>
          <li>
            <Link href={"/investors"}>Service Providers</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default PageFooter;
