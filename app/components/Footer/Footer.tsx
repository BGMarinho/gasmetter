import * as S from './styles';
import { useIcon } from '@/app/helpers/useIcon';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const icons = useIcon();
  return (
    <S.FooterWrapper>
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
      <S.Information>
        <span>
          Desenvolvido por <a href="https://github.com/BGMarinho">BGMarinho</a>{' '}
        </span>
      </S.Information>
    </S.FooterWrapper>
  );
}
