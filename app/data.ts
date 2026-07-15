type Project = {
  name: string
  description: string
  link: string
  img: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  img: string
}

type Achievements = {
  title: string
  event: string
  organizer: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TimelineEvent = {
  date: string
  description: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'MakanLah',
    description: 'Local food educhtion app featuring MLOps pipelines.',
    link: 'https://github.com/wyhong3103/makanlah',
    img: '/images/makanlah.png',
    id: 'project1',
  },
  {
    name: 'Sudoku Mobile',
    description:
      'Sudoku mobile app with sudoku image recognition and sudoku solver.',

    link: 'https://github.com/wyhong3103/sudoku-app',
    img: '/images/sudoku_mobile.png',
    id: 'project2',
  },
  {
    name: 'What If I Never Brick',
    description:
      'Predict Codeforces optimal rating with more than 400 upvotes on Codeforces.',

    link: 'https://codeforces.com/blog/entry/117421',
    img: '/images/wiinb.png',
    id: 'project3',
  },
  {
    name: 'Neural Network From Scratch',
    description:
      'Fully connected layers and auto-backpropagation, implemented from scratch.',
    link: 'https://github.com/wyhong3103/neural-network-from-scratch',
    img: '/images/nn_scratch.png',
    id: 'project4',
  },
  {
    name: 'MMLS Automater',
    description:
      'Automate attendance taking and notify new announcements on MMU virtual classroom.',
    link: 'https://github.com/wyhong3103/MMLS_Automator',
    img: '/images/mmls.png',
    id: 'project5',
  },
  {
    name: 'Mazey',
    description:
      'Solving and generating mazes using graph traversal algorithm.',
    link: 'https://github.com/wyhong3103/maze-solver',
    img: '/images/mazey.png',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Grab',
    title: 'Machine Learning Engineer Intern',
    start: 'Jul 2025',
    end: 'Nov 2025',
    link: 'https://www.grab.com/',
    img: '/images/grab.png',
    id: 'work2',
  },
  {
    company: 'MoneyLion',
    title: 'Data Science Intern',
    start: 'Jul 2024',
    end: 'Oct 2024',
    link: 'https://www.moneylion.com/',
    img: '/images/moneylion.png',
    id: 'work1',
  },
]

export const ACHIEVEMENTS: Achievements[] = [
  {
    event: 'Codeforces',
    title: 'Candidate Master (94th Percentile)',
    organizer: 'Codeforces',
    id: 'achievement-7',
  },
  {
    event: 'Programming League National 2025',
    title: 'Guest Speaker',
    organizer: 'Persatuan Komputer Universiti Malaya (PEKOM)',
    id: 'achievement-10',
  },
  {
    event: 'Programming League National 2024',
    title: 'Champion',
    organizer: 'Persatuan Komputer Universiti Malaya (PEKOM)',
    id: 'achievement-3',
  },
  {
    event: 'Programming League National 2023',
    title: '2nd Runner Up',
    organizer: 'Persatuan Komputer Universiti Malaya (PEKOM)',
    id: 'achievement-4',
  },
  {
    event: 'CodeNection 2024',
    title: 'Problemsetter',
    organizer: 'IT Society MMU',
    id: 'achievement-11',
  },
  {
    event: 'CodeNection 2023',
    title: 'Problemsetter',
    organizer: 'IT Society MMU',
    id: 'achievement-12',
  },
  {
    event: 'CodeNection 2022',
    title: '1st Runner Up',
    organizer: 'IT Society MMU',
    id: 'achievement-13',
  },
  {
    event: 'Monash Coding League 2024',
    title: 'Champion',
    organizer: 'Monash University Malaysia Tech Club',
    id: 'achievement-5',
  },
  {
    event: 'Monash Coding League 2023',
    title: 'Champion',
    organizer: 'Monash University Malaysia Tech Club',
    id: 'achievement-6',
  },
  {
    event: 'ImagineHack 2024',
    title: 'Best Innovation Award',
    organizer: "Taylor's Agents of Tech",
    id: 'achievement-2',
  },
  {
    event: 'Data Science Digital Race 2024',
    title: 'Champion',
    organizer: 'Universiti Malaya Data Analytics Club',
    id: 'achievement-1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Optimizing Heuristic Rankers',
    description: 'How I overkilled a problem with Constrained BO and LLM as a simulator.',
    link: '/blog/optimizing-heuristic-rankers',
    uid: 'blog-9',
  },
  {
    title: 'One week in the Aloha State 🌴',
    description: 'So, I somehow ended up in Hawaii for a week.',
    link: '/blog/hawaiyaiyai',
    uid: 'blog-8',
  },
  {
    title: 'My two weeks in the UK 🇬🇧',
    description: 'The UK, told in thousands of words.',
    link: '/blog/uk-2025',
    uid: 'blog-7',
  },
  {
    title: 'OxML 2025',
    description: 'Machine Learning Summer School at Oxford!',
    link: '/blog/oxml-2025',
    uid: 'blog-6',
  },
  {
    title: 'Conformal Prediction',
    description: 'Quantifying uncertainty in prediction tasks.',
    link: '/blog/conformal-prediction',
    uid: 'blog-5',
  },
  {
    title: 'Hello World #2',
    description: "print('Hello World!')",
    link: '/blog/hello-world-2',
    uid: 'blog-4',
  },
  {
    title: 'Problemsetting at CodeNection 2023',
    description:
      'My experience as a problemsetter and some other things about it.',
    link: '/blog/codenection-2023',
    uid: 'blog-3',
  },
  {
    title: 'Debiasing Word Embeddings',
    description:
      'Visualizing the linear algebra involved in debiasing word embeddings.',
    link: '/blog/debiasing-word-embedding',
    uid: 'blog-2',
  },
  {
    title: 'Dynamic Programming on Tree',
    description: 'A nice problem demonstrating DP on Tree.',
    link: '/blog/cf-890-e1',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/wong-yen-hong/',
  },
  {
    label: 'Github',
    link: 'https://github.com/wyhong3103',
  },
  {
    label: 'Codeforces',
    link: 'https://codeforces.com/profile/wyhong3103',
  },
  {
    label: 'Email',
    link: 'mailto:wyhong3103@gmail.com',
  },
  {
    label: 'CV',
    link: '/cv_nov2025.pdf',
  },
]

export const EMAIL = 'wyhong3103@gmail.com'
