'use client';

import subapase from '@/public/subapase.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 pt-24">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <Image src={subapase} width={200} alt="supabase" />
          <h1 className="text-gray-200 font-mono sm:text-2xl text-base text-center font-bold">
            you spelled it wrong, but i can help you
          </h1>
        </div>
        <div className="flex items-center gap-4 w-full">
          <button
            onClick={() => window.open('https://supabase.com/', '_blank')}
            className="cursor-pointer font-mono space-x-2 hover:scale-110 transition-transform duration-300 ease-in-out text-center font-regular rounded-md outline-none  outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button border-brand shadow-sm text-sm px-4 py-2 xs:h-[38px] w-full text-white"
          >
            click here to go to{' '}
            <span className="italic underline">supabase.com</span>
          </button>
        </div>
      </div>
    </main>
  );
}
