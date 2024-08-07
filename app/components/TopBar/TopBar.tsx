import TopButton from './TopButton';
import * as S from './styles';

export default function TopBar() {
  const buttonContent = [
    {
      Title: 'Abastecimento',
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
