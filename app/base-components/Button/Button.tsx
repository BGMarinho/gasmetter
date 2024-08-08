import * as S from './styles';

interface ButtonProps {
  Title: string;
  centralizedText?: boolean;
  uppercase?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  Title,
  centralizedText,
  uppercase,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonContainer centralizedText={centralizedText}>
      <S.Button disabled={isDisabled} onClick={onClick} uppercase={uppercase}>
        {Title}
      </S.Button>
    </S.ButtonContainer>
  );
}
