import Card from '../../components/Card';
import Formulary from '@/app/components/Formulary';
import * as S from './styles';

export default function Fueling() {
  return (
    <S.FuelingSection>
      <Card>
        <Formulary
          Title="Abastecimento"
          Instructions="Preencha as informações sobre o seu abastecimento."
        >
          <label htmlFor="">posto</label>
          <input type="text" />
          <label htmlFor="">valor por litro</label>
          <input type="number" />
          <label htmlFor="">valor abastecido</label>
          <input type="number" />
          <label htmlFor="">tipo de combustível</label>
          <input type="text" />
        </Formulary>
      </Card>
    </S.FuelingSection>
  );
}
