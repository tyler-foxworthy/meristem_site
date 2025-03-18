import Layout from '@/components/Layout'

export default function Compliance() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-primary mb-8">Important Disclosures</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Regulatory Information</h2>
            <p className="mb-4">
              Meristem Capital is a Registered Investment Advisor (RIA) registered with the State of Indiana Securities Division. Registration as an investment advisor does not imply any level of skill or training.
            </p>
            <p className="mb-4">
              The presence of this website on the Internet shall not be directly or indirectly interpreted as a solicitation of investment advisory services to persons of another jurisdiction unless otherwise permitted by statute.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Investment Risks</h2>
            <p className="mb-4">
              Different types of investments involve varying degrees of risk, and there can be no assurance that any specific investment will either be suitable or profitable for a client's investment portfolio. Past performance may not be indicative of future results. No client should assume that the future performance of any specific investment or investment strategy will be profitable or equal to past performance levels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Form ADV</h2>
            <p className="mb-4">
              Our current Form ADV Part 2A is available upon request and on the SEC's website at www.adviserinfo.sec.gov. The Form ADV Part 2A contains important information about our business practices, fees, and conflicts of interest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Privacy Policy</h2>
            <p className="mb-4">
              Protecting your private information is our priority. We do not sell your information to third parties. For more information about our privacy practices, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Contact Information</h2>
            <p className="mb-4">
              For additional information about our services or to request a copy of our Form ADV Part 2A, please contact us:
            </p>
            <div className="pl-4 border-l-4 border-primary-light">
              <p>Meristem Capital</p>
              <p>[Your Address]</p>
              <p>[City], Indiana [ZIP]</p>
              <p>Phone: [Your Phone]</p>
              <p>Email: [Your Email]</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
} 