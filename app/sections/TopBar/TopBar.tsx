import { useContext, useEffect } from 'react';
import { GlobalContext } from '@/app/context/context';
import Button from '../../base-components/Button';
import * as S from './styles';

export default function TopBar() {
  const context = useContext(GlobalContext);

  const handleClick = () =>
    context?.selectedSection === 'history'
      ? context.setSelectedSection('fueling')
      : context?.setSelectedSection('history');

  return (
    <S.TopBarWrapper>
      <Button
        title="abastecimento"
        disabled={false}
        centralize
        caption="lowercase"
        onClick={() => {
          handleClick;
          console.log(context?.selectedSection);
        }}
      />
      <Button
        title="histórico"
        disabled={false}
        centralize
        caption="lowercase"
        onClick={() => {
          handleClick;
          console.log(context?.selectedSection);
        }}
      />
    </S.TopBarWrapper>
  );
}
