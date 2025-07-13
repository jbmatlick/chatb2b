import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to top on every route change for better UX
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
} 