import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { motion, AnimatePresence } from 'framer-motion';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />;
        <motion.div
          className="fade-in-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.5, 0.75, 1] }}
        />
        <motion.div
          className="fade-out-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.5, 0.75, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
