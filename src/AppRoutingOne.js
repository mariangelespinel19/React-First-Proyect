import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOOME |</Link>
          <Link to='/about'>| ABOOUT |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
          <Link to='/any404'>|| Not Existing Route || </Link>
        </aside>

    <main>
      <Routes>
        <Route exact path='/' component={HomePage} />
        <Route path='/(about|faqs)' component={ AboutPage } />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tasks' component={ TasksPage } />
        <Route path='/tasks/:id' component={TaskDetailPage} />
        <Route component={ NotFoundPage } />

      </Routes>
    </main>
  </div>
    </Router>

  );
}


export default AppRoutingOne;

