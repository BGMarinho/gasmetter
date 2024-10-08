import whatsapp from '../images/svg/whatsapp.svg';
import linkedin from '../images/svg/linkedin.svg';
import github from '../images/svg/github.svg';

export function useIcon() {
  const icons = [
    {
      name: linkedin,
      link: 'https://www.linkedin.com/in/bernardomarinhodev/',
      alt: 'LinkedIn',
      width: 20,
      height: 20,
    },
    {
      name: github,
      link: 'https://github.com/BGMarinho',
      alt: 'Github',
      width: 20,
      height: 20,
    },
    {
      name: whatsapp,
      link: 'https://wa.me/5521975986566',
      alt: 'WhatsApp',
      width: 20,
      height: 20,
    },
  ];
  return icons;
}
