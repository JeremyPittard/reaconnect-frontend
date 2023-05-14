import Image from "next/image";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto">
        <ul className="flex gap-4 items-end py-2">
          <li className="mr-auto">
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
            <Link href={"/service-providers"}>Service Providers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
