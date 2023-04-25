import Link from "next/link";

const PageHeader = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto">
        <ul className="flex gap-4">
          <li>
            <Link href={"/investors"}>Investors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
