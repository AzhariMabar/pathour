import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Header />

      <div
        className="not-found-section d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: '80vh',
          backgroundImage: "url('/images/bg_4.jpg')", // ganti sesuai gambar kamu
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 20px',
        }}
      >
        <div>
          <h1 className="display-1 fw-bold">404</h1>
          <p className="lead fs-4">Oops! Halaman tidak ditemukan.</p>
          <a href="/" className="btn btn-primary mt-3 px-4 py-2">Kembali ke Beranda</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
