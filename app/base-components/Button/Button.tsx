import Link from 'next/link';
import * as S from './styles';

interface ButtonProps {
  Title: string;
  Href: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  Title,
  Href,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonContainer>
      <Link href={Href} style={{ all: 'unset' }}>
        <S.Button disabled={isDisabled} onClick={onClick}>
          {Title}
        </S.Button>
      </Link>
    </S.ButtonContainer>
  );
}
