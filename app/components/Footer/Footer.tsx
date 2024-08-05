import * as S from './styles';
import { useIcon } from '@/app/helpers/useIcon';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const icons = useIcon();
  return (
    <S.FooterWrapper>
      <S.Information>
        <span>
          Copyright © 2024 <a href="https://github.com/BGMarinho">BGMarinho</a>
          . Todos os direitos reservados.
        </span>
      </S.Information>
      <S.SocialNetworks>
        {icons.map((icon, index) => (
          <SocialIcon
            key={index}
            alt={icon.alt}
            src={icon.name}
            link={icon.link}
            height={icon.height}
            width={icon.width}
          />
        ))}
      </S.SocialNetworks>
    </S.FooterWrapper>
  );
}
