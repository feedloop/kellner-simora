import {
  PricingCardType,
  TestimonialType,
} from '@/app/_components/pricing-card';
import { FieldItemType } from '@/app/our-program/_components/our-program-item';
import {
  AboutImage,
  Avatar,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  FieldImageItem1,
  FieldImageItem2,
  PeopleMeeting,
  PeopleWork,
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
import {
  DropdownItemType,
  DropdownOurPrograms,
} from '@/components/atoms/dropdown';
import { Image } from '@/types/misc';
import { Text } from '@chakra-ui/react';
import Routes from './routes';
import { AccordionListNavbar } from '@/components/organisms/navbar';

type SocialFooterType = Image & {
  link: string;
};

export const NavDropdownItem: DropdownItemType[] = [
  {
    label: <span>Mengapa Kellner?</span>,
    url: `${Routes.WhyUs}`,
  },
  {
    label: <span>Kontak Kami</span>,
    url: `${Routes.Contact}`,
  },
];
export const NavDropdownOurPrograms: DropdownOurPrograms[] = [
  {
    label: <span>Pengembangan Talenta</span>,
    url: `${Routes.OurProgram}#1`,
  },
  {
    label: <span>Pengembangan Perusahaan</span>,
    url: `${Routes.OurProgram}#2`,
  },
  {
    label: <span>Penempatan Talenta</span>,
    url: `${Routes.OurProgram}#3`,
  },
];

export const AboutListItem = [
  {
    icon: MessageChat,
    head: 'Pelatihan yang efektif sesuai kebutuhan',
    desc: 'Kami fokus pada pengembangan keterampilan yang sesuai dengan tuntutan industri saat ini, menawarkan pelatihan efektif untuk mempersiapkan peserta dengan keunggulan kompetitif dalam karier internasional.',
    buttonLabel: 'Pelatihan kami',
    link: `${Routes.OurProgram}#1`,
  },
  {
    icon: Dollar,
    head: 'Jaringan penempatan yang luas',
    desc: 'Dari peluang magang hingga pekerjaan penuh waktu, kami berupaya memfasilitasi kesempatan kerja yang relevan sesuai dengan keinginan dan keterampilan individu untuk sukses dalam lingkungan profesional di Eropa',
    buttonLabel: 'Lihat penempatan',
    link: `${Routes.OurProgram}#3`,
  },
  {
    icon: Internship,
    head: 'Kesempatan internship',
    desc: 'Dengan akses ke jaringan perusahaan dan organisasi yang beragam, kami berkomitmen untuk membantu peserta memperoleh pengalaman praktis yang bernilai serta membangun fondasi yang kokoh untuk karier global mereka.',
    buttonLabel: 'Lihat internship',
    link: `${Routes.Recruitment}`,
  },
];
export const NavbarResponsiveList: AccordionListNavbar[] = [
  {
    name: 'Tentang Kami',
    children: [
      {
        name: 'Mengapa memilih Kellner',
        link: `${Routes.WhyUs}`,
      },
      {
        name: 'Kontak kami',
        link: `${Routes.Contact}`,
      },
    ],
  },
  {
    name: 'Program Kami',
    children: [
      {
        name: 'Pengembangan Talenta',
        link: `${Routes.OurProgram}#1`,
      },
      {
        name: 'Pengembangan Perusahaan',
        link: `${Routes.OurProgram}#2`,
      },
      {
        name: 'Penempatan Talenta',
        link: `${Routes.OurProgram}#3`,
      },
    ],
  },
];
export const SocialFooter: SocialFooterType[] = [
  // {
  //   image: TwitterFooter,
  //   alt: 'twitter-social-footer',
  //   link: '/',
  // },
  {
    image: LinkedinFooter,
    alt: 'linkedin-social-footer',
    link: 'https://www.linkedin.com/in/kellner-simora-international-296901295/',
  },
  // {
  //   image: FacebookFooter,
  //   alt: 'facebook-social-footer',
  //   link: '/',
  // },
  // {
  //   image: GithubFooter,
  //   alt: 'github-social-footer',
  //   link: '/',
  // },
  // {
  //   image: PeaceSignFooter,
  //   alt: 'peace-sign-social-footer',
  //   link: '/',
  // },
  // {
  //   image: BasketFooter,
  //   alt: 'basket-social-footer',
  //   link: '/',
  // },
];

export const PricingItems: PricingCardType[] = [
  {
    buttonLabel: 'Lihat layanan',
    link: `${Routes.OurProgram}#1`,
    head: 'Pengembangan Talenta',
    headDesc: 'Membekali lulusan dengan keterampilan tingkat dunia',
    item: [
      'Bootcamp pelatihan khusus dari praktisi ahli',
      'Keterampilan berbasis profesi',
      'Keterampilan ready-to-use untuk mempercepat onboarding',
      'Mengasah talenta untuk standar global',
      'Mencakup bidang Sales, HR, Finance, sampai Digital',
    ],
  },
  {
    buttonLabel: 'Lihat layanan',
    link: `${Routes.OurProgram}#2`,
    head: 'Pengembangan Perusahaan',
    headDesc:
    'Transformasi korporat untuk mencapai standar internasional',
    item: [
      'Pelatihan dan konsultasi ISO',
      'Standar internasional untuk berbagai bidang',
      'Standar mutu, keamanan data, sampai dengan energi',
      'TMeningkatkan reputasi dan kepatuhan',
      'Cakupan lengkap dari ISO 5001 hingga ISO 45001',
    ],
  },
  {
    buttonLabel: 'Lihat layanan',
    link: `${Routes.OurProgram}#3`,
    head: 'Penempatan Talenta',
    headDesc:
      'Menghubungkan talenta terbaik untuk kebutuhan perusahaan',
    item: [
      'Rekrutmen talenta eksternal sesuai kebutuhan',
      'Memenuhi posisi yang sedang berkembang pesat',
      'Penguatan keterampilan kandidat',
      'Kualitas yang cakap untuk peran kunci dan strategis',
      'Proses onboarding yang efisien dan efektif',
    ],
  },
];
export const TestimonialList: TestimonialType[] = [
  {
    headDesc:
      '"Bekerja sama dengan Kellner merupakan pengalaman yang luar biasa bagi kami. Mereka memiliki tim ahli yang berpengetahuan dan berpengalaman dalam ISO 27001. Mereka membantu kami memahami standar tersebut dan manfaatnya, serta membimbing kami langkah demi langkah tentang cara menerapkannya di organisasi kami."',
    title: 'Firma hukum lokal',
  },
  {
    headDesc:
      '“Kellner lebih dari sekedar konsultan untuk ISO 27001. Mereka adalah mitra yang peduli tentang kesuksesan dan kepuasan kami. Mereka mendengarkan kebutuhan dan tantangan kami, serta menyesuaikan layanan mereka untuk situasi spesifik kami."',
    title: 'Perusahaan konsultan pajak lokal',
  },
  {
    headDesc:
      '“Kellner adalah mitra terpercaya bagi kami dalam perjalanan kami untuk mencapai sertifikasi ISO 27001. Mereka memberikan kami layanan konsultasi yang komprehensif dan disesuaikan yang mencakup semua aspek dari standar tersebut."',
    title: 'Perusahaan call center lokal',
  },
];
export const Programtems: FieldItemType[] = [
  {
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
    head: 'Layanan Pengembangan Talenta',
    smallHead: 'Program Kami',
    imageUrl: AboutImage,
    id: '1',
  },
  {
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
    head: 'Layanan Pengembangan Perusahaan',
    smallHead: 'Program Kami',
    id: '2',
    imageUrl: PeopleMeeting,
  },
  {
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
    head: 'Layanan Penempatan Talenta',
    smallHead: 'Program Kami',
    id: '3',
    imageUrl: PeopleWork,
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
    question:
      "Apakah program kuliah sambil kerja di Kellner's hanya tersedia di Eropa?",
    answer:
      'Tidak, program kami tersedia di berbagai lokasi global, memungkinkan peserta untuk mengakses program di berbagai negara.',
  },
  {
    question:
      'Apakah ada batasan usia untuk mengikuti program kuliah sambil kerja?',
    answer:
      'Tidak ada batasan usia yang ketat. Program ini terbuka untuk berbagai kelompok usia yang ingin menggabungkan studi dengan pengalaman kerja.',
  },
];
