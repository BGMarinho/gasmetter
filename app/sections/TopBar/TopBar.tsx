import { Dispatch, SetStateAction, useEffect } from 'react';
import Button from '../../base-components/Button';
import * as S from './styles';

interface TopBarProps {
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

export default function TopBar({
  selectedSection,
  setSelectedSection,
}: TopBarProps) {
  // Fazer uma função de handleClick para cada botão?
  const handleClick = () =>
    selectedSection === 'history'
      ? setSelectedSection('fueling')
      : setSelectedSection('history');

  useEffect(() => console.log(selectedSection), [selectedSection]);

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
