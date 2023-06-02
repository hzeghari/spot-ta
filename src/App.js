// import logo from './logo.svg';
import './App.css';

// import Layout from './components/Layout';
// Our components
import Header from './components/Header/Header';
import Heroreserve from './components/main/Heroreserve';
import Amenities from './components/main/Amenities';
import Meetingroom from './components/main/Meetingroom';
import Heretohelp from './components/main/Heretohelp';
import Footer from './components/Footer/Footer';

// Layout
import Layoutgen from './components/Layoutgen';

function App() {
  return (
    <Layoutgen>
      {/* Header */}
      <Header />
      {/* Main */}
      <Heroreserve />
      <Amenities />
      <Meetingroom />
      <Heretohelp />
      {/* Footer */}
      <Footer
        className="font-helveticaneue h-[430px] mt-32 pt-0.5 relative w-full"
        privateoffice="Private office"
        coworkingspace="Co-working space"
        virtualoffice="Virtual office"
        meetingroom="Meeting room"
        partners="Partners"
        solutions="Solutions"
        locations="Locations"
        contactus="Contact us"
        language="Enterprise "
        intheblogyou="In the blog you will find fascinating articles about the life of our this is worxpace, also about future"
        privacypolicy="Privacy Policy"
        termsandconditions="Terms & Conditions"
        p2022spotbusinesOne="© 2023 Spotbusiness All rights reserved."
      />
    </Layoutgen>
  );
}

export default App;
