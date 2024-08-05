import Link from 'next/link';
import * as S from './styles';

interface TopButtonProps {
  Title: string;
  Href: string;
  isDisabled: boolean;
}

export default function TopButton({ Title, Href, isDisabled }: TopButtonProps) {
  return (
    <S.TopButtonContainer>
      <Link href={Href} style={{ all: 'unset' }}>
        <S.TopButton disabled={isDisabled}>{Title}</S.TopButton>
      </Link>
    </S.TopButtonContainer>
  );
}
