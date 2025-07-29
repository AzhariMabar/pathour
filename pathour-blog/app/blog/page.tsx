// app/blog/page.tsx
import { createServerClient } from '@/lib/supabase';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function BlogListPage() {
  const supabase = createServerClient();
  const { data: blogs } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  return (
  <>
    <Header />

    <section
      className="hero-wrap hero-wrap-2 js-fullheight"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/bg_1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container hover">
        <div className="row no-gutters slider-text js-fullheight align-items-end pb-5 justify-content-center">
          <div className="col-md-5 ftco-animate pb-5 text-center">
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="/">
                  Home <i className="fa fa-chevron-right"></i>
                </a>
              </span>{' '}
              <span>
                Blog <i className="fa fa-chevron-right"></i>
              </span>
            </p>
            <h1 className="mb-0 bread">Blog</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          {blogs?.map((blog) => {
            const date = new Date(blog.created_at);
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();

            return (
              <div key={blog.id} className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="block-20"
                    style={{
                      backgroundImage: `url(${blog.image_url})`,
                    }}
                  ></Link>
                  <div className="text">
                    <div className="d-flex align-items-center mb-4 topp">
                      <div className="one">
                        <span className="day">{day}</span>
                      </div>
                      <div className="two">
                        <span className="yr">{year}</span>
                        <span className="mos">{month}</span>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h3>
                    <p>{blog.content.replace(/<[^>]+>/g, '').slice(0, 150)}...</p>
                    <p>
                      <a href={`/blog/${blog.slug}`} className="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </>
  );
}
