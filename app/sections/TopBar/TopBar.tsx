import Button from '../../base-components/Button';
import * as S from './styles';

export default function TopBar() {
  return (
    <S.TopBarWrapper>
      <Button
        title="abastecimento"
        disabled={false}
        centralize
        caption="lowercase"
      />
      <Button
        title="histórico"
        disabled={false}
        centralize
        caption="lowercase"
      />
    </S.TopBarWrapper>
  );
}
