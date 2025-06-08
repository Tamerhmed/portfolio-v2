import AboutSection from '@/components/AboutSection';
import AboutSectionWithCustomImage from '@/components/AboutSectionWithCustomImage';
import EmailSidebar from '@/components/EmailSidebar';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

import ProjectsSection from '@/components/ProjectsSection';
import SocialLinks from '@/components/SocialLinks';
import { extraProjects } from '../data/extraProjects';

import React from 'react';

export default function Home() {
  console.log(extraProjects);
  return (
    <div>
      <Header />
      <HeroSection />
      <EmailSidebar />
      <SocialLinks />
      {/* <AboutSection /> */}
      <AboutSectionWithCustomImage />

      <ExperienceSection />
      <ProjectsSection projects={extraProjects} />
    </div>
  );
}
