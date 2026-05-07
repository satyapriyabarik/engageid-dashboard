


import AppShell from './components/layout/AppShell';
import Dashboard from './components/pages/Dashboard';
import Customer360 from './modules/customer360/Customer360';

import OpportunityCenter from './modules/opportunities/OpportunityCenter';

import ProjectDetail from './modules/projects/ProjectDetail';

import TaskKanban from './modules/tasks/TaskKanban';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/customer360"
          element={<Customer360 />}
        />

        <Route
          path="/opportunities"
          element={<OpportunityCenter />}
        />

        <Route
          path="/projects"
          element={<ProjectDetail />}
        />

        <Route
          path="/tasks"
          element={<TaskKanban />}
        />
      </Routes>
    </AppShell>
  );
}


