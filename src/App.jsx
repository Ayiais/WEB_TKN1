import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Berita from './pages/Berita'; // kamu bikin halaman Berita
import DetailBerita from './pages/DetailBerita'; // opsional
import ProfilSekolah from './pages/ProfilSekolah';
import Kepengurusan from './pages/Kepengurusan';

import './App.css';

function App() {
  const path = window.location.pathname;

  let PageComponent;

  if (path === '/berita') {
    PageComponent = <Berita />;
  } else if (path === '/detail-berita') {
    PageComponent = <DetailBerita />;
  } else if (path === '/profil-sekolah') {
    PageComponent = <ProfilSekolah />;
  } else if (path === '/data-kepengurusan') {
    PageComponent = <Kepengurusan />;
  } else {
    PageComponent = <LandingPage />;
  }

  return <div className="w-full overflow-x-hidden">{PageComponent}</div>;
}

export default App;
