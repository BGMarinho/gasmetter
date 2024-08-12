import { useContext, useEffect } from 'react';
import { GlobalContext } from '@/app/context/context';
import Button from '../../base-components/Button';
import * as S from './styles';

export default function TopBar() {
  const context = useContext(GlobalContext);

  const handleClick = () => {
    context?.selectedSection === 'history'
      ? context.setSelectedSection('fueling')
      : context?.setSelectedSection('history');

    console.log(context?.selectedSection);
  };

  return (
    <S.TopBarWrapper>
      <Button
        title="abastecimento"
        disabled={false}
        centralize
        caption="lowercase"
        onClick={handleClick}
      />
      <Button
        title="histórico"
        disabled={false}
        centralize
        caption="lowercase"
        onClick={handleClick}
      />
    </S.TopBarWrapper>
  );
}
