'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RegisterPage from '../../components/RegisterPage';

export default function RegisterPageRoute() {
  const router = useRouter();

  // Ensure scroll position is reset to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleBack = () => {
    router.push('/');
  };

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />
      <RegisterPage onBack={handleBack} />
    </>
  );
}
