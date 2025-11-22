import Image from 'next/image'
import React from 'react'
import { Link } from '../../../navigation'
import Container from '@/components/shared/formcomponents/Container'
import { getTranslations } from 'next-intl/server'
import Blog from '@/components/blog'

const Page = async () => {
  const t = await getTranslations('blog')

  const blogPosts = [
    { id: 1, img: '/images/blog-1.png', text: 'أهمية الترجمة في العصر الرقمي ودورها في ربط العالم .....' },
    { id: 2, img: '/images/blog-1.png', text: 'كيف تساعد الترجمة الشركات على التوسع عالميًا بسهولة .....' },
    { id: 3, img: '/images/blog-1.png', text: 'أحدث تقنيات الترجمة في 2025 وتأثيرها على المستقبل .....' },
    { id: 4, img: '/images/blog-1.png', text: 'دور الذكاء الاصطناعي في تطوير خدمات الترجمة .....' },
    { id: 5, img: '/images/blog-1.png', text: 'أهمية الترجمة القانونية في المعاملات الدولية .....' },
    { id: 6, img: '/images/blog-1.png', text: 'ترجمة المحتوى التسويقي وأثرها على العلامات التجارية .....' },
    { id: 7, img: '/images/blog-1.png', text: 'لماذا تحتاج الشركات الناشئة لخدمات الترجمة الاحترافية؟ .....' },
    { id: 8, img: '/images/blog-1.png', text: 'كيف تختار شركة الترجمة المناسبة لعملك؟ .....' },
  ]

  return (
    <div className='min-h-screen'>

      {/* ✅ الهيدر */}
      <div className="relative w-full h-[233px]">
        <Image
          src="/images/team-1.png"
          alt="team"
          className="w-full h-full object-cover"
          width={1400}
          height={233}
        />
        <div className="absolute inset-0 bg-[#1F2149] bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
          <h2 className="text-white lg:text-[40px] text-3xl font-extrabold">
            {t('title')}
          </h2>

          <Link href='/' className='flex items-center justify-center gap-2'>
            <Image src='/images/home.svg' alt='home' width={24} height={24} />
            <span className='font-extrabold text-[#82D60C] lg:text-xl text-lg'>
              {t('home')}
            </span>
          </Link>
        </div>
      </div>

      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
          {blogPosts.map(post => (
            <Blog key={post.id} post={post} />
          ))}
        </div>
      </Container>

    </div>
  )
}

export default Page
