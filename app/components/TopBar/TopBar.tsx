import * as S from './styles';
import TopButton from './TopButton';

export default function TopBar() {
  const buttonContent = [
    {
      Title: 'Novo Abastecimento',
      Href: '#',
      isDisabled: false,
    },
    {
      Title: 'Histórico',
      Href: '#',
      isDisabled: false,
    },
  ];

  return (
    <S.TopBarWrapper>
      {buttonContent.map((button, index) => (
        <TopButton
          key={index}
          Title={button.Title}
          Href={button.Href}
          isDisabled={button.isDisabled}
        />
      ))}
    </S.TopBarWrapper>
  );
}
