import { PropsWithChildren } from 'react';
import * as S from './styles';

export default function Card({ children }: PropsWithChildren) {
  return <S.CardWrapper>{children}</S.CardWrapper>;
}
