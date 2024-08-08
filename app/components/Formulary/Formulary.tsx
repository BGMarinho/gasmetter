import Button from '@/app/base-components/Button';
import * as S from './styles';

interface FormularyProps {}

export default function Formulary() {
  return (
    <S.FormularyWrapper>
      <h1>Titulo</h1>
      <p>frase para introduzir o preenchimento do form</p>
      <form action="">
        <label htmlFor="">posto</label>
        <input type="text" />
        <label htmlFor="">valor por litro</label>
        <input type="number" />
        <label htmlFor="">valor abastecido</label>
        <input type="number" />
        <label htmlFor="">tipo de combustível</label>
        <input type="text" />
      </form>
      <Button Title="Salvar" />
    </S.FormularyWrapper>
  );
}
