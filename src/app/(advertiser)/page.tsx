import AdNavBar from '@/components/navbar/AdvNavBar';
import IntroSection from './components/intro/IntroSection';
import PerformanceSection from './components/performance/PerformanceSection';
import AboutSection from './components/about/AboutSection';
import ScrollProvider from '@/hooks/useScroll';
import ServiceSection from './components/service/ServiceSection';
import ReferenceSection from './components/reference/ReferenceSection';

export default function AdvertiserPage() {
  return (
    <div>
      <ScrollProvider>
        <AdNavBar />
        <IntroSection />
        <PerformanceSection />
        <AboutSection />
        <ServiceSection />
        <ReferenceSection />
        </ScrollProvider>
       
      
    </div>
  );
}
