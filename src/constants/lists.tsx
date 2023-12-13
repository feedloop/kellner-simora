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
    label: <span>Mengapa Kellner's ?</span>,
    url: `${Routes.WhyUs}`,
  },
  {
    label: <span>Kontak Kami</span>,
    url: `${Routes.Contact}`,
  },
];
export const NavDropdownOurPrograms: DropdownOurPrograms[] = [
  {
    label: <span>Talent Development Services</span>,
    url: `${Routes.OurProgram}`,
  },
  {
    label: <span>Corporate Development Services</span>,
    url: `${Routes.OurProgram}`,
  },
  {
    label: <span>Talent Placement Services</span>,
    url: `${Routes.OurProgram}`,
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
        name: 'Talent Development Services',
        link: `${Routes.OurProgram}?section=1`,
      },
      {
        name: 'Corporate Development Services',
        link: `${Routes.OurProgram}?section=2`,
      },
      {
        name: 'Talent Placement Services',
        link: `${Routes.OurProgram}?section=3`,
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
    link: '/',
  },
  {
    image: FacebookFooter,
    alt: 'facebook-social-footer',
    link: '/',
  },
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
    head: 'Layanan Pengembangan Talenta',
    headDesc: 'SSolusi terintegrasi untuk mengasah talenta kelas dunia',
    item: [
      'Fast-track onboarding untuk keryawan baru',
      'Pelatihan yang dipimpin oleh ahli',
      'Meliputi peran seperti sales, HR, data analysis',
      'Talenta kelas dunia untuk perusahaan',
      'Meliputi sales, digital leadership, dan HR',
    ],
  },
  {
    buttonLabel: 'Lihat layanan',
    head: 'Layanan Pengembangan Perusahaan (Layanan Training & Konsultasi ISO)',
    headDesc:
      'Memberikan pelatihan dan konsultasi ISO untuk meningkatkan standar dan keunggulan organisasi.',
    item: [
      'Mencapai standar kualitas internasional',
      'SO standards like 9001, 14001',
      'Mentransformasi perusahaan menuju keunggulan',
      'Termasuk lingkungan dan keselamatan',
      'Meliputi keamanan pangan, anti suap, dan lainnya.',
    ],
  },
  {
    buttonLabel: 'Lihat layanan',
    head: 'Layanan Penempatan Talenta',
    headDesc:
      'Menghubungkan talenta dengan berbagai peluang untuk kesuksesan Anda.',
    item: [
      'Talenta untuk berbagai kebutuhan',
      'Terintegrasi dengan pengembangan keterampilan',
      'Memperkuat kemampuan kandidat',
      'Memenuhi kebutuhan yang senantiasa berkembang',
      'Menggabungkan bakat eksternal dengan pelatihan',
    ],
  },
];
export const TestimonialList: TestimonialType[] = [
  {
    headDesc:
      '“Working with Kellner was a great experience for us. They have a team of experts who are knowledgeable and experienced in ISO 27001. They helped us understand the standard and its benefits, and guided us step by step on how to implement it in our organization."',
    title: 'A local Law Firm company',
  },
  {
    headDesc:
      '“Kellner is more than just a consultant for ISO 27001. They are a partner who cares about our success and satisfaction. They listened to our needs and challenges, and tailored their service to suit our specific situation."',
    title: 'A local Tax Consultant company',
  },
  {
    headDesc:
      '“Kellner is a trusted partner for us in our journey to achieve ISO 27001 certification. They provided us with a comprehensive and customized consultation service that covered all aspects of the standard."',
    title: 'A local Call Center company',
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
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Dolor enim eu tortor
          urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
          aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam.
          Tempor integer aliquam in vitae malesuada. Elit nisi in eleifend sed
          nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis
          risus. Sed condimentum enim dignissim adipiscing faucibus consequat,
          urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
          posuere purus sit congue convallis aliquet. Ipsum sit mattis nulla
          quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
          congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
          Diam elit, orci, tincidunt aenean.
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
