import Link from 'next/link';
export default function Headers() {
  return (
    <header class='h-28'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </header>
  );
}
