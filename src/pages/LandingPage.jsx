import { useState } from 'react'
import Navbar from '../components/landingpage/Navbar';
import HeroSection from '../components/landingpage/HeroSection';
import BadgeMotivasi from '../components/landingpage/BadgeMotivasi';
import ProfilSingkat from '../components/landingpage/ProfilSingkat';
import TentangKami from '../components/landingpage/TentangKami';
import GaleriKegiatan from '../components/landingpage/GaleriKegiatan';
import Fasilitas from '../components/landingpage/FasilitasKegiatan';

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BadgeMotivasi/>
      <ProfilSingkat/>
      <TentangKami/>
      <GaleriKegiatan/>
      <Fasilitas/>
    </main>
  );
}