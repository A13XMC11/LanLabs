import Page from '../components/Page.jsx';
import Marquee from '../components/Marquee.jsx';
import HeroScene from '../sections/home/HeroScene.jsx';
import Statement from '../sections/home/Statement.jsx';
import ServicesRail from '../sections/home/ServicesRail.jsx';
import ChatScene from '../sections/home/ChatScene.jsx';
import ProjectsStack from '../sections/home/ProjectsStack.jsx';
import Process from '../sections/home/Process.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';

export default function Home() {
  return (
    <Page className="home">
      <HeroScene />
      <Statement />
      <ServicesRail />
      <ChatScene />
      <ProjectsStack />
      <section className="band band--night marquee-band">
        <Marquee rows={[['Asistentes con IA', 'Automatización', 'WhatsApp'], ['Experiencias web', 'n8n', 'React', 'Integraciones']]} />
      </section>
      <Process />
      <FinalCTA />
    </Page>
  );
}
