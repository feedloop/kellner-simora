import { BasketFooter, FacebookFooter, GithubFooter, LinkedinFooter, PeaceSignFooter, TwitterFooter } from "@/assets/svgs";
import { DropdownItemType } from "@/components/atoms/dropdown";
import { Image } from "@/types/misc";

type SocialFooterType = Image & {
  link:string;
}

export const NavDropdownItem: DropdownItemType[] = [
  {
    label: <span>Mengapa Kellner's ?</span>,
    url:'/why-us'
  },
  {
    label: <span>Bidang Usaha</span>,
    url:'/field'
  },
  {
    label: <span>Kontak Kami</span>,
    url:'/contact'
  }
]

export const SocialFooter: SocialFooterType[] = [
  {
    image:TwitterFooter,
    alt:'twitter-social-footer',
    link:'/'
  },
  {
    image:LinkedinFooter,
    alt:'linkedin-social-footer',
    link:'/'
  },
  {
    image:FacebookFooter,
    alt:'facebook-social-footer',
    link:'/'
  },
  {
    image:GithubFooter,
    alt:'github-social-footer',
    link:'/'
  },
  {
    image:PeaceSignFooter,
    alt:'peace-sign-social-footer',
    link:'/'
  },
  {
    image:BasketFooter,
    alt:'basket-social-footer',
    link:'/'
  },
]