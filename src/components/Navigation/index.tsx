import React from 'react';
import Link from 'next/link';

import './styles.scss';

interface Link {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

interface NavigationProps {
  links: Link[];
}

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav className="navigation-styled">
      {links.map(link => (
        <Link href={link.href} key={link.href}>
          {link.icon}
          {link.text}
        </Link>
      ))}
    </nav>
  );
};
