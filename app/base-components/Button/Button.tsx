import * as S from './styles';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  $centralize?: boolean;
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
    <S.ButtonContainer>
      {!disabled ? (
        <S.Button
          onClick={onClick}
          $caption={$caption}
          $centralize={$centralize}
        >
          {title}
        </S.Button>
      ) : (
        <S.Button disabled>{title}</S.Button>
      )}
    </S.ButtonContainer>
  );
}
