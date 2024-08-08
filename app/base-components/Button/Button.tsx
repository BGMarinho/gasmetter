import * as S from './styles';

interface ButtonProps {
  title: string;
  centralizedText?: boolean;
  uppercase?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  title,
  centralizedText,
  uppercase,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonContainer centralizedText={centralizedText}>
      <S.Button disabled={isDisabled} onClick={onClick} uppercase={uppercase}>
        {title}
      </S.Button>
    </S.ButtonContainer>
  );
}
