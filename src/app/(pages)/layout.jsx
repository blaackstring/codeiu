    'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-black text-white flex flex-col">
               
                <div className="px-3 sm:px-4 md:px-6 py-6">
                  {children}
                </div>
              
      </div>
    </AuthGuard>
  );
}
