import { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary justify-content-between">
      <div className='h4 p-3'>Nam Nguyen</div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
      <main className="mx-3 vh-100 d-flex">{renderPage()}</main>
    </div>
  );
}
