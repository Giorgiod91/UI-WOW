import Link from "next/link";
import FetchUi from "./components/FetchUi";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Get My UI</h1>
      <FetchUi />
    </main>
  );
}
