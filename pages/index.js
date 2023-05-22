import Link from "next/link";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center pt-5 mt-5">
      <h1>Home Page</h1>
      <Link href="/country-list">
        <p>Country List Page</p>
      </Link>
    </div>
  );
}
