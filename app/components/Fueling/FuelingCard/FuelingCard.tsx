import * as S from './styles';

export default function FuelingCard() {
  return (
    <S.FuelingCard>
      {/* Transforamar em 2 componentes separados. */}
      <h1>Titulo</h1>
      <h3>frase para introduzir o preenchimento do form</h3>
      <form action="">
        <label htmlFor="">posto</label>
        <input type="text" />
        <label htmlFor="">valor por litro</label>
        <input type="number" />
        <label htmlFor="">valor abastecido</label>
        <input type="number" />
        <label htmlFor="">tipo de combustível</label>
        <input type="text" />
        <button>salvar</button>
      </form>
    </S.FuelingCard>
  );
}
