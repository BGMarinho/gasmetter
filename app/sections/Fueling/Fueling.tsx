import FuelingCard from '../../components/Card';
import * as S from './styles';

export default function Fueling() {
  return (
    <S.FuelingSection>
      {/* FuelingCard pode, futuramente, virar Card. */}
      <FuelingCard />
    </S.FuelingSection>
  );
}
