import { Hero } from "@/components/hero";
import { StatStrip } from "@/components/stat-strip";
import { PackagesGrid } from "@/components/packages-grid";
import { WhyUs } from "@/components/why-us";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { CurrencyProvider } from "@/components/currency-provider";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/json-ld";

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <CurrencyProvider>
        <Hero />
        <StatStrip />
        <PackagesGrid />
        <WhyUs />
        <Testimonials />
        <Partners />
      </CurrencyProvider>
    </>
  );
}
