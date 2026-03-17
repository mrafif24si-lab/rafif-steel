import React from 'react';
import "./custom.css";

// Component 1: Profil Header 
const ProfileHeader = () => (
  <div className="profile-header">
    <div className="profile-picture">
      <img src="/src/assets/hero.png" alt="Profile M Rafif Zidane" />
    </div>
    <div className="name-title">
      <h1>M Rafif Zidane</h1>
      <p>Mahasiswa Sistem Informasi</p>
    </div>
  </div>
);

// Component 2: Data Pribadi (Inti dari Biodata)
const DataPribadi = () => (
  <div className="biodata-section">
    <h3 className="section-title">Data Pribadi</h3>
    <table className="biodata-table">
      <tbody>
        <tr><td><strong>Nama Lengkap</strong></td><td>: M Rafif Zidane</td></tr>
        <tr><td><strong>Tempat, Tanggal Lahir</strong></td><td>: Pekanbaru, 25 Juni 2005</td></tr>
        <tr><td><strong>Jenis Kelamin</strong></td><td>: Laki-laki</td></tr>
        <tr><td><strong>Golongan Darah</strong></td><td>: A</td></tr>
        <tr><td><strong>Kewarganegaraan</strong></td><td>: Indonesia</td></tr>
        <tr><td><strong>Alamat Domisili</strong></td><td>: Pekanbaru, Riau, Indonesia</td></tr>
      </tbody>
    </table>
  </div>
);

// Component 3: Riwayat Pendidikan
const Pendidikan = () => (
  <div className="biodata-section">
    <h3 className="section-title">Riwayat Pendidikan</h3>
    <ul className="list-style">
      <li><strong>Politeknik Caltex Riau</strong> — D4 Sistem Informasi (Semester 4)</li>
      <li><strong>SMA Sains Tahfiz Islamic Center</strong> </li>
      <li><strong>SMP Islam Abdurrab</strong></li>
    </ul>
  </div>
);

// Component 4: Hobi dan Minat
const HobiMinat = () => (
  <div className="biodata-section">
    <h3 className="section-title">Hobi & Minat</h3>
    <ul className="list-style">
      <li><strong>Desain Grafis & UI/UX:</strong> Mengeksplorasi akurasi warna dan tren desain seperti estetika Y2K.</li>
      <li><strong>Bermain Game:</strong> Menghabiskan waktu luang dengan game seperti Valorant, Apex Legends, GTA, atau Wuthering Waves.</li>
      <li><strong>Mendengarkan Musik:</strong> Mengikuti rilisan lagu dari band favorit seperti LANY dan Febuary.</li>
    </ul>
  </div>
);

// Component 5: Motivasi Hidup
const MotivasiHidup = () => (
  <div className="biodata-section highlight-quote">
    <h3 className="section-title">Motivasi Hidup</h3>
    <p><em>"Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih cerdas. Jangan pernah berhenti belajar, karena ilmu adalah investasi yang tidak akan pernah merugikan."</em></p>
  </div>
);

// Component 6: Kontak
const Kontak = () => (
  <div className="biodata-section">
    <h3 className="section-title">Kontak</h3>
    <div className="contact-info">
      <p><i>📧</i> m.rafif24si@mahasiswa.pcr.ac.id</p>
      <p><i>📱</i> 0852-1061-1777 </p>
    </div>
  </div>
);

// KOMPONEN UTAMA (Parent Component)
const BiodataDiri = () => {
  return (
    <div className="biodata-container">
      <ProfileHeader />
      <DataPribadi />
      <Pendidikan />
      <HobiMinat />
      <MotivasiHidup />
      <Kontak />
    </div>
  );
};

export default BiodataDiri;