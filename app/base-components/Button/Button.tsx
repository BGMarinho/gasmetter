import * as S from './styles';

interface ButtonProps {
  title: string;
  centralize?: boolean;
  uppercase?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  title,
  centralize,
  uppercase,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonContainer centralize={centralize}>
      <S.Button disabled={isDisabled} onClick={onClick} uppercase={uppercase}>
        {title}
      </S.Button>
    </S.ButtonContainer>
  );
}
