import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

export interface SocialIconProps {
  link: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

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
