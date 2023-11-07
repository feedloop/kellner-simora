import { PricingCardType } from '@/app/_components/pricing-card';
import { FieldItemType } from '@/app/field/_components/field-item';
import {
  Avatar,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  FieldImageItem1,
  FieldImageItem2,
} from '@/assets/images';
import {
  BasketFooter,
  Dollar,
  FacebookFooter,
  GithubFooter,
  Internship,
  LinkedinFooter,
  MessageChat,
  PeaceSignFooter,
  TwitterFooter,
} from '@/assets/svgs';
import { DropdownItemType } from '@/components/atoms/dropdown';
import { Image } from '@/types/misc';
import { Text } from '@chakra-ui/react';

type SocialFooterType = Image & {
  link: string;
};

export const NavDropdownItem: DropdownItemType[] = [
  {
    label: <span>Mengapa Kellner's ?</span>,
    url: '/why-us',
  },
  {
    label: <span>Bidang Usaha</span>,
    url: '/field',
  },
  {
    label: <span>Kontak Kami</span>,
    url: '/contact',
  },
];

export const AboutListItem = [
  {
    icon: MessageChat,
    head: 'Pelatihan yang efektif sesuai kebutuhan',
    desc: 'Kami fokus pada pengembangan keterampilan yang sesuai dengan tuntutan industri saat ini, menawarkan pelatihan efektif untuk mempersiapkan peserta dengan keunggulan kompetitif dalam karier internasional.',
    buttonLabel: 'Pelatihan kami',
  },
  {
    icon: Dollar,
    head: 'Jaringan penempatan yang luas',
    desc: 'Dari peluang magang hingga pekerjaan penuh waktu, kami berupaya memfasilitasi kesempatan kerja yang relevan sesuai dengan keinginan dan keterampilan individu untuk sukses dalam lingkungan profesional di Eropa',
    buttonLabel: 'Lihat penempatan',
  },
  {
    icon: Internship,
    head: 'Kesempatan internship',
    desc: 'Dengan akses ke jaringan perusahaan dan organisasi yang beragam, kami berkomitmen untuk membantu peserta memperoleh pengalaman praktis yang bernilai serta membangun fondasi yang kokoh untuk karier global mereka.',
    buttonLabel: 'Lihat internship',
  },
];

export const SocialFooter: SocialFooterType[] = [
  {
    image: TwitterFooter,
    alt: 'twitter-social-footer',
    link: '/',
  },
  {
    image: LinkedinFooter,
    alt: 'linkedin-social-footer',
    link: '/',
  },
  {
    image: FacebookFooter,
    alt: 'facebook-social-footer',
    link: '/',
  },
  {
    image: GithubFooter,
    alt: 'github-social-footer',
    link: '/',
  },
  {
    image: PeaceSignFooter,
    alt: 'peace-sign-social-footer',
    link: '/',
  },
  {
    image: BasketFooter,
    alt: 'basket-social-footer',
    link: '/',
  },
];

export const PricingItems: PricingCardType[] = [
  {
    buttonLabel: 'Daftar Kursus',
    head: 'Talent Development Services',
    headDesc: 'Solusi terintegrasi untuk mengasah bakat dan keterampilan.',
    item: [
      "Fast-track onboarding for new hires.",
      "Expert-led role-specific training.",
      "Covers roles like Sales, HR, Data Analysis.",
      "World-class skills for companies.",
      "Includes Sales, Digital Leadership, and HR."
    ],
  },
  {
    buttonLabel: 'Lihat Kesempatan',
    head: 'Corporate Development Services (ISO Training and Consultation Service)',
    headDesc: 'Providing ISO Training and Consultation for Enhanced Organizational Standards and Excellence',
    item: [
      "Achieve international quality standards.",
      "ISO standards like 9001, 14001.",
      "Transforms companies for excellence.",
      "Includes environmental and safety.",
      "Covers food safety, anti-bribery, more."
    ],
  },
  {
    buttonLabel: 'Lihat Penempatan',
    head: 'Talent Placement Services',
    headDesc: 'Connecting Skills with Opportunities, Tailored for Your Success.',
    item: [
      "External talent for specific roles.",
      "Integrates with skill development.",
      "Strengthens candidate capabilities.",
      "Addresses growing role needs.",
      "Combines external talent with training."
    ],
  },
];

export const FieldItems: FieldItemType[] = [
  {
    buttonLabel: 'Lihat pelatihan',
    content: (
      <>
        <Text>
          We offer Talent Development Services that include Industry Intake
          Programs and Industry Leader Programs. Industry Intake Programs are
          for companies that want to speed up the learning process of their
          pre-hired or new hires so that they can quickly contribute to the
          company goals and objectives based on their new roles. We design our
          Industry Intake Program to address the significant gap between what
          university produces and what companies need for specific roles in the
          job market. We also notice that companies face challenges to grow
          their internal talent into leadership positions, due to limited
          resources in talent development and or the rapid changes in the
          industry landscape. That's why we create the Industry Leader Program
          to help companies equip them with ready, world class skills and
          capabilities taught by real world practitioners and leaders.
        </Text>
      </>
    ),
    head: 'Talent Development Services',
    smallHead: 'Bidang usaha',
    imageUrl: FieldImageItem1,
  },
  {
    buttonLabel: 'Lihat rekrutmen',
    content: (
      <>
        <Text>
          We also offer Talent Placement Services that support companies to
          recruit external talent to meet the required growing role position in
          that company. Our Talent Placement Service doesn’t only recruit
          external talent based on the company’s requirements but also infuse
          these external talents with our well-established Talent Development
          Services , to strengthen the candidates skills and capabilities as
          part of talent on-boarding into the company.
        </Text>
      </>
    ),
    head: 'Talent Placement Services',
    smallHead: 'Bidang usaha',
    imageUrl: FieldImageItem2,
  },
];

export const testimonials = [
  {
    picture: Avatar,
    name: 'Samantha L.',
    position: 'Marketing Executive',
    testimonial:
      "Joining the Study-Work program at Kellner's has been a game-changer in my career. The seamless blend of coursework and on-the-job experience has sharpened my skills and opened doors I never thought possible.",
  },
  {
    picture: Avatar2,
    name: 'Rajesh Patel',
    position: 'Finance Intern',
    testimonial:
      "The opportunity to learn and work simultaneously has given me a unique perspective on applying academic theories in real business scenarios. Kellner's support and mentorship have been instrumental in my growth.",
  },
  {
    picture: Avatar3,
    name: 'Emily Rodriguez',
    position: 'Business Development Trainee',
    testimonial:
      "Kellner's study-work program empowered me to explore my academic interests while gaining practical skills. The nurturing environment and networking opportunities have been invaluable for my career path.",
  },
  {
    picture: Avatar4,
    name: 'Zahara Thompson',
    position: 'IT Specialist',
    testimonial:
      "The flexibility of the study-work program at Kellner's allowed me to balance my academic pursuits with real-world projects. The experience enriched my learning and solidified my career goals.",
  },
  {
    picture: Avatar5,
    name: 'Sophie Lewis',
    position: 'HR Management Trainee',
    testimonial:
      "Kellner's program provided an immersive learning environment that enabled me to immediately apply my classroom knowledge to actual business challenges. The guidance and support were exceptional.",
  },
  {
    picture: Avatar6,
    name: 'Isabella Hernandez',
    position: 'Operations Apprentice',
    testimonial:
      "Being a part of Kellner's study-work initiative equipped me with practical skills in operations while pursuing my academic goals. The exposure and hands-on experience were instrumental in shaping my career path.",
  },
];

export const faqs = [
  {
    question: "Apakah program kuliah sambil kerja di Kellner's hanya tersedia di Eropa?",
    answer: "Tidak, program kami tersedia di berbagai lokasi global, memungkinkan peserta untuk mengakses program di berbagai negara."
  },
  {
    question: "Apakah ada batasan usia untuk mengikuti program kuliah sambil kerja?",
    answer: "Tidak ada batasan usia yang ketat. Program ini terbuka untuk berbagai kelompok usia yang ingin menggabungkan studi dengan pengalaman kerja."
  }
];
