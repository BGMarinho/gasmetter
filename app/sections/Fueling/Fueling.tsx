import Card from '../../components/Card';
import Formulary from '@/app/components/Formulary/Formulary';
import * as S from './styles';

export default function Fueling() {
  return (
    <S.FuelingSection>
      <Card>
        <Formulary />
      </Card>
    </S.FuelingSection>
  );
}
