import instagram from '../images/svg/instagram.svg';
import whatsapp from '../images/svg/whatsapp.svg';
import linkedin from '../images/svg/linkedin.svg';

export function useIcon() {
  const icons = [
    {
      name: linkedin,
      link: 'https://www.linkedin.com/in/bernardomarinhodev/',
      alt: 'Whatsapp',
      width: 16,
      height: 16,
    },
    {
      name: whatsapp,
      link: 'https://wa.me/5521975986566',
      alt: 'Whatsapp',
      width: 16,
      height: 16,
    },
    {
      name: instagram,
      link: 'https://www.instagram.com/bernardomarinho__/',
      alt: 'Instagram',
      width: 16,
      height: 16,
    },
  ];
  return icons;
}
