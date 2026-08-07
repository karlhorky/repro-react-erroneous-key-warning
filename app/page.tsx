import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>React key warning reproduction</h1>

      <ul>
        <li>
          <Link href="/repro">Reproduction</Link>
        </li>
        <li>
          <Link href="/control">Control</Link>
        </li>
      </ul>
    </main>
  );
}
