import * as S from './styles';

interface ButtonProps {
  title: string;
  centralize?: boolean;
  caption?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  title,
  centralize,
  caption,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonContainer centralize={centralize}>
      <S.Button disabled={disabled} onClick={onClick} caption={caption}>
        {title}
      </S.Button>
    </S.ButtonContainer>
  );
}
