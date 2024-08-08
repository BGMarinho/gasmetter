import Link from 'next/link';
import * as S from './styles';

interface ButtonProps {
  Title: string;
  Href: string;
  isDisabled: boolean;
}

export default function Button({ Title, Href, isDisabled }: ButtonProps) {
  return (
    <S.ButtonContainer>
      <Link href={Href} style={{ all: 'unset' }}>
        <S.Button disabled={isDisabled}>{Title}</S.Button>
      </Link>
    </S.ButtonContainer>
  );
}
