import Link from 'next/link';
import * as S from './styles';

interface TopButtonProps {
  Title: string;
  Href: string;
  isDisabled: boolean;
}

export default function TopButton({ Title, Href, isDisabled }: TopButtonProps) {
  return (
    <S.ButtonContainer>
      <Link href={Href} style={{ all: 'unset' }}>
        <S.Button disabled={isDisabled}>{Title}</S.Button>
      </Link>
    </S.ButtonContainer>
  );
}
