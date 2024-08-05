import Link from 'next/link';

interface TopButtonProps {
  Title: string;
  Href: string;
  isDisabled: boolean;
  // onClick: () => void;
}

export default function TopButton({ Title, Href, isDisabled }: TopButtonProps) {
  return (
    <Link href={Href}>
      <button disabled={isDisabled}>{Title}</button>
    </Link>
  );
}
