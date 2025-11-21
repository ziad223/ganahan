import React from 'react'
import SectionTitle from '../shared/reusableComponents/SectionTitle'
import Container from './../shared/formcomponents/Container';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server'
import { Link } from '../../../navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface BlogProps {
  blogs: {
    id: number;
    title: string;
    content: string;
    image: string;
    viewers_count: number;
    created_at: string;
  }[];
    locale: string;
}

const Blog = async ({ blogs, locale }: BlogProps) => {
  const t = await getTranslations('blog');

  return (
    <div className='lg:my-14 my-10'>
      <SectionTitle title={t('title')} />
      <Container>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          {blogs?.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id} className="bg-white rounded-md shadow-sm" data-aos="fade-up">
              <Image
               src={blog.image}
                alt={blog.title}
                width={401}
                height={288}
                className='w-full h-[200px] lg:h-[288px] object-cover rounded-t-md'
              />
              <div className='px-4 lg:px-8 py-5'>
                <h2 className='text-[#121212] font-medium text-sm md:text-base leading-6 md:leading-[51px]'>
                  {blog.title}
                </h2>
                <div className='mt-2 lg:w-3/4 space-y-3'>
                  <div className='flex gap-3 items-center'>
                    <Image src="/images/blog-date.png" alt='date' width={20} height={20} />
                    <div className='flex w-full justify-between text-xs md:text-sm text-[#818181]'>
                      <span>{t('publishedAt')}</span>
                      <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <Image src="/images/blog-eye.png" alt='eye' width={20} height={20} />
                    <div className='flex w-full justify-between text-xs md:text-sm text-[#818181]'>
                      <span>{t('viewersCount')}</span>
                      <span>{blog.viewers_count}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link 
          href='/blogs' 
          className='mt-5 px-5 h-[45px] w-max rounded-lg bg-[#ffba00] text-white mx-auto flex items-center justify-center gap-2'
        >
          {t('showMore')}
          {locale === "en" ? <FaArrowRight /> : <FaArrowLeft />}
        </Link>
      </Container>
    </div>
  )
}

export default Blog
