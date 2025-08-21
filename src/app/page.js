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
import AitslProjectsGrid from '@/components/AitslProjectsGrid';
import Headers from '@/components/Headers';
import ProfileNav from '@/components/ProfileNav';
import WebsiteAuditProject from '@/components/WebsiteAuditProject';

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Headers /> */}
      <ProfileNav />
      <HeroSection />
      <EmailSidebar />
      <SocialLinks />
      {/* <AboutSection /> */}
      <AboutSectionWithCustomImage />

      <ExperienceSection />
      <AitslProjectsGrid />
      <WebsiteAuditProject />
      <ProjectsSection projects={extraProjects} />
    </div>
  );
}
