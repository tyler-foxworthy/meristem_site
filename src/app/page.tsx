import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const AnimatedHero = dynamic(() => import('@/components/AnimatedHero'), {
  ssr: false
})

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        {/* Hero section */}
        <div className="relative overflow-hidden min-h-[80vh] flex items-center">
          {/* Hero background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.svg"
              alt="Abstract financial background"
              fill
              priority
              className="object-cover"
            />
          </div>

          <AnimatedHero />
        </div>

        {/* Features section */}
        <div className="py-12 bg-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Approach</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Investment Philosophy
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <h3 className="text-lg font-medium text-gray-900">Long-term Focus</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We believe in sustainable growth through carefully researched, long-term investment strategies.
                  </p>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-medium text-gray-900">Risk Management</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our approach prioritizes preserving capital while seeking consistent, risk-adjusted returns.
                  </p>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-medium text-gray-900">Personalized Strategy</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We develop customized investment plans aligned with your specific goals and risk tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
