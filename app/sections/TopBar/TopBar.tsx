import Button from '../../base-components/Button';
import * as S from './styles';

export default function TopBar() {
  const topButtonsContent = [
    {
      title: 'Abastecimento',
      isDisabled: false,
    },
    {
      title: 'Histórico',
      isDisabled: false,
    },
  ];

  return (
    <S.TopBarWrapper>
      {topButtonsContent.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          isDisabled={button.isDisabled}
          centralizedText={false}
        />
      ))}
    </S.TopBarWrapper>
  );
}
