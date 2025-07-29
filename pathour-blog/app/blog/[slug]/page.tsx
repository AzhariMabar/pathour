// app/blog/[slug]/page.tsx
import { createServerClient } from '@/lib/supabase';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const supabase = createServerClient();
  const { data } = await supabase
    .from('blogs')
    .select('title, content')
    .eq('slug', slug)
    .single();

    const plainText = data.content.replace(/<[^>]+>/g, ''); // hilangkan tag HTML

  return {
    title:`${data.title} | PATHOUR`,
    description:plainText.substring(0, 150) + '...',
  };
}


interface BlogDetailProps {
  params: { slug: string };
}

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const supabase = createServerClient();

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !blog) return notFound();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: `url(${blog.image_url})` }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home <i className="fa fa-chevron-right" /></a>
                </span>
                <span className="mr-2">
                  <a href="/blog">Blog <i className="fa fa-chevron-right" /></a>
                </span>
                <span>{blog.title} <i className="fa fa-chevron-right" /></span>
              </p>
              <h1 className="mb-0 bread">{blog.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate py-md-5 mt-md-5">
              <h2 className="mb-3">{blog.title}</h2>
              <p><img src={blog.thumbnail} className="img-fluid mb-4" alt={blog.title} /></p>

              {/* HTML content dari Summernote */}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />

              {/* Tag */}
              {blog.tag && (
                <div className="tag-widget post-tag-container mb-5 mt-5">
                  <div className="tagcloud">
                    {blog.tag.map((t, i) => (
                      <a href="#" key={i} className="tag-cloud-link">{t}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar dummy (opsional, bisa nanti dibuat dinamis) */}
            <div className="col-lg-4 sidebar ftco-animate bg-light py-md-5">
              <div className="sidebar-box">
                <h3>Categories</h3>
                <ul className="categories">
                  <li><a href="#">Travel <span>(12)</span></a></li>
                  <li><a href="#">Culture <span>(8)</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );

}
