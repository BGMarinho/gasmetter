import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SocialIconProps } from './interfaces';
import * as S from './styles';

export default function SocialIcon({
  link,
  src,
  alt,
  width,
  height,
}: SocialIconProps) {
  return (
    <S.SocialIconContainer>
      <Link href={link}>
        <Image src={src} alt={alt} width={width} height={height} />
      </Link>
    </S.SocialIconContainer>
  );
}
