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
import { Text, UnorderedList, ListItem } from '@chakra-ui/react';
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
    headDesc: 'Transformasi korporat untuk mencapai standar internasional',
    item: [
      'Pelatihan dan konsultasi ISO',
      'Standar internasional untuk berbagai bidang',
      'Standar mutu, keamanan data, sampai dengan energi',
      'Meningkatkan reputasi dan kepatuhan',
      'Cakupan lengkap dari ISO 9001 hingga ISO 50001',
    ],
  },
  {
    buttonLabel: 'Lihat layanan',
    link: `${Routes.OurProgram}#3`,
    head: 'Penempatan Talenta',
    headDesc: 'Menghubungkan talenta terbaik untuk kebutuhan perusahaan',
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
          Di Kellner Simora Internasional, kami menawarkan layanan{' '}
          <b>Pengembangan Bakat Berbasis Profesi</b> yang memberikan perusahaan
          lulusan universitas baru yang siap kerja. Kami menyediakan program
          bootcamp untuk mempercepat proses onboarding mereka dengan
          keterampilan siap pakai untuk berbagai peran seperti Sales/Account,
          Marketing, Human Capital, Project Manager, Administrator IT, Akuntan
          dan Financial Analyst, serta Data Analyst.
        </Text>
        <Text mt={'1em'}>
          Selain itu, kami menawarkan kursus-kursus yang dipimpin oleh{' '}
          <b>Subject Matter Expert (SME)</b> yang merupakan profesional kelas
          dunia dengan pengetahuan dan pengalaman dalam setiap bidang. Kursus
          kami mencakup berbagai area seperti Penjualan & Pemasaran, Organisasi,
          Soft Skills, Keahlian Digital, dan Keahlian Analitik, serta Sumber
          Daya Manusia. Kursus khusus juga tersedia sesuai kebutuhan spesifik
          perusahaan Anda, memastikan bahwa kami menyediakan pelatihan yang
          relevan dan efektif untuk mengembangkan talenta kelas dunia.
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
          Kellner menawarkan layanan pengembangan perusahaan dengan program
          Pelatihan dan Konsultasi ISO. Melalui program ini, perusahaan Anda
          akan bertransformasi menjadi organisasi dengan standar dan kualitas
          internasional yang memenuhi harapan pelanggan dan regulator. Layanan
          kami meliputi:
        </Text>
        <UnorderedList>
          <ListItem>ISO 9001: Kualitas</ListItem>
          <ListItem>ISO 14001: Lingkungan</ListItem>
          <ListItem>ISO 45001: Kesehatan dan Keselamatan Kerja</ListItem>
          <ListItem>ISO 22000: Keamanan Pangan</ListItem>
          <ListItem>ISO 27001: Keamanan Informasi</ListItem>
          <ListItem>ISO 37001: Anti Penyuapan</ListItem>
          <ListItem>ISO 21001: Pendidikan</ListItem>
          <ListItem>ISO 23001: Kontinuitas Bisnis</ListItem>
          <ListItem>ISO 50001: Energi</ListItem>
        </UnorderedList>
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
          Kellner juga memberikan dukungan kepada perusahaan dalam merekrut
          talenta eksternal untuk memenuhi peran dan posisi yang berkembang
          dalam perusahaan tersebut. Layanan Penempatan Talenta kami <b>tidak hanya
          merekrut</b> talenta eksternal sesuai dengan kebutuhan perusahaan, tetapi
          juga mengintegrasikan mereka dengan Layanan Pengembangan Talenta yang
          telah terbukti efektif. Ini dilakukan untuk <b>memperkuat keterampilan
          dan kemampuan</b> kandidat sebagai bagian dari proses on-boarding mereka
          ke dalam perusahaan, memastikan bahwa mereka dapat berkontribusi
          secara maksimal sejak hari pertama.
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
