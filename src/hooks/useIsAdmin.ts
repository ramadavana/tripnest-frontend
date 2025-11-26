import { usePathname } from 'next/navigation';

export function useIsAdmin(): boolean {
  const pathname = usePathname();
  return pathname.startsWith('/admin');
}