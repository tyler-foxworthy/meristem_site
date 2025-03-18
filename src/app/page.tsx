import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-white">
        {/* Hero section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
                    <span className="block">Cultivating Wealth</span>
                    <span className="block text-primary-light">Through Time</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    At Meristem Capital, we take a methodical approach to growing and preserving your wealth. Like the meristem tissue in plants, we focus on sustainable, long-term growth.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light md:py-4 md:text-lg md:px-10">
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/about" className="w-full flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
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
