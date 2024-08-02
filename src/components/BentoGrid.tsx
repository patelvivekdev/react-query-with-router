import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import GridPattern from '@/components/ui/grid-pattern';
import RetroGrid from '@/components/ui/retro-grid';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { Share2Icon, FileText, TextCursorInput, Calendar } from 'lucide-react';

const features = [
  {
    Icon: FileText,
    name: 'React Query',
    description: 'Powerful asynchronous state management.',
    href: 'https://tanstack.com/query/latest',
    cta: 'Learn more',
    className:
      'col-span-3 lg:col-span-1 hover:border-dashed dark:hover:border-dashed dar:hover:border-[#646cffaa] dark:hover:border-4',
    background: (
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
      />
    ),
  },
  {
    Icon: TextCursorInput,
    name: 'React Router',
    description: 'React Router enables client side routing.',
    href: 'https://reactrouter.com/en/main',
    cta: 'Learn more',
    className:
      'col-span-3 lg:col-span-2 hover:border-dashed dark:hover:border-dashed dar:hover:border-[#646cffaa] dark:hover:border-4',
    background: (
      <DotPattern
        width={15}
        height={15}
        cx={2}
        cy={2}
        cr={2}
        className={cn('[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]')}
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Lucide Icons',
    description: 'Beautiful & consistent icons.',
    href: 'https://lucide.dev/',
    cta: 'Learn more',
    className:
      'col-span-3 lg:col-span-2 hover:border-dashed dark:hover:border-dashed dar:hover:border-[#646cffaa] dark:hover:border-4',
    background: <RetroGrid />,
  },
  {
    Icon: Calendar,
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework.',
    className:
      'col-span-3 lg:col-span-1 hover:border-dashed dark:hover:border-dashed dar:hover:border-[#646cffaa] dark:hover:border-4',
    href: 'https://tailwindcss.com',
    cta: 'Learn more',
    background: (
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn('[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]')}
      />
    ),
  },
];

export default function BentoGridDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
