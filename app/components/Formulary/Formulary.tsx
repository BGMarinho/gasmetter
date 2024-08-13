import React from 'react';
import Button from '@/app/base-components/Button';
import * as S from './styles';

interface FormularyProps {
  title?: string;
  instructions?: string;
  formAction?: string;
  children: React.ReactNode;
}

export default function Formulary({
  title,
  instructions,
  formAction,
  children,
}: FormularyProps) {
  return (
    <S.FormularyWrapper action={formAction}>
      <S.FormularyInfo>
        <h1>{title}</h1>
        <p>{instructions}</p>
      </S.FormularyInfo>
      {children}
      <Button title="salvar" />
    </S.FormularyWrapper>
  );
}
