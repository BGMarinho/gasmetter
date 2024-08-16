import * as S from './styles';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  $centralize?: string;
  $caption?: string;
}

export default function Button({
  title,
  disabled,
  onClick,
  $centralize,
  $caption,
}: ButtonProps) {
  return (
    <S.ButtonContainer $centralize={$centralize}>
      {!disabled ? (
        <S.Button onClick={onClick} $caption={$caption}>
          {title}
        </S.Button>
      ) : (
        <S.Button disabled>{title}</S.Button>
      )}
    </S.ButtonContainer>
  );
}
