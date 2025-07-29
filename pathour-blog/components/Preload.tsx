'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // kamu bisa ubah durasi sesuai kebutuhan

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      id="ftco-loader"
      className="show fullscreen d-flex justify-content-center align-items-center"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#fff',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: 'url(/images/loading/loading-bg.png)',
          width: 100,
          height: 100,
          backgroundSize: 'contain',
        }}
      >
        <img
          className="spin-random"
          src="/images/loading/loading-bar.png"
          alt=""
          style={{ width: 100, objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
