import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JobDetailPage from './pages/JobDetailPage';

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/job/:id" element={<JobDetailPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;