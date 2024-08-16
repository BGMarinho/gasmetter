import { Dispatch, SetStateAction } from 'react';
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
  const handleClick = () =>
    selectedSection === 'history'
      ? setSelectedSection('fueling')
      : setSelectedSection('history');

  return (
    <S.TopBarWrapper>
      <Button
        title="abastecimento"
        disabled={false}
        onClick={handleClick}
        $caption="lowercase"
        $centralize
      />
      <Button
        title="histórico"
        disabled={false}
        onClick={handleClick}
        $caption="lowercase"
        $centralize
      />
    </S.TopBarWrapper>
  );
}
