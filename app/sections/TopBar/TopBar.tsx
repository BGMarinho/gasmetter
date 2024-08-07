import Button from '../../base-components/Button';
import * as S from './styles';

export default function TopBar() {
  const topButtonsContent = [
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
      {topButtonsContent.map((button, index) => (
        <Button
          key={index}
          Title={button.Title}
          Href={button.Href}
          isDisabled={button.isDisabled}
        />
      ))}
    </S.TopBarWrapper>
  );
}
