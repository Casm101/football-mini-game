import { useRouter } from 'next/router';

import './styles.scss';

interface HeaderProps {
  title: string;
  backButton?: boolean;
  timeout?: number;
}

export const Header: React.FC<HeaderProps> = ({ title, backButton, timeout = false }) => {
  const router = useRouter();

  const backButtonClass = backButton ? '' : '--hidden';
  const timerClass = timeout ? '' : '--hidden';

  return (
    <header className="header-styled">
      <button
        className={['header-back', backButtonClass].join(' ').trim()}
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <h1 className="header-title">{title}</h1>
      <div className={['header-timer', timerClass].join(' ').trim()}>Timer</div>
    </header>
  );
};
