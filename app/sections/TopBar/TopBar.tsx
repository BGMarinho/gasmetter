import Button from '../../base-components/Button';
import * as S from './styles';

export default function TopBar() {
  const topButtonsContent = [
    {
      title: 'Abastecimento',
      disabled: false,
      caption: 'lowercase',
    },
    {
      title: 'Histórico',
      disabled: false,
      caption: 'lowercase',
    },
  ];

  return (
    <S.TopBarWrapper>
      {topButtonsContent.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          disabled={button.disabled}
          caption={button.caption}
          centralize
        />
      ))}
    </S.TopBarWrapper>
  );
}
