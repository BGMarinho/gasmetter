import { PropsWithChildren } from 'react';
import Button from '@/app/base-components/Button';
import * as S from './styles';

interface FormularyProps {
  Title?: string;
  Instructions?: string;
  Action?: string;
}

export default function Formulary(
  { Title, Instructions, Action }: FormularyProps,
  { children }: PropsWithChildren,
) {
  return (
    <S.FormularyWrapper action={Action}>
      <S.FormularyInfo>
        <h1>{Title}</h1>
        <p>{Instructions}</p>
      </S.FormularyInfo>
      {children}
      <Button Title="Salvar" />
    </S.FormularyWrapper>
  );
}
