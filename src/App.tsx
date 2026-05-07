


import AppShell from './components/layout/AppShell';
import { Route, Routes } from 'react-router-dom';
import {
  lazy,
  Suspense,
} from 'react';

const Dashboard = lazy(
  () =>
    import(
      './components/pages/Dashboard'
    )
);

const Customer360 = lazy(
  () =>
    import(
      './modules/customer360/Customer360'
    )
);

const ProjectDetail = lazy(
  () =>
    import(
      './modules/projects/ProjectDetail'
    )
);

const TaskKanban = lazy(
  () =>
    import(
      './modules/tasks/TaskKanban'
    )
);
const OpportunityCenter = lazy(
  () =>
    import(
      './modules/opportunities/OpportunityCenter'
    )
);
export default function App() {
  return (
    <AppShell>
      <Suspense
        fallback={
          <div className="h-screen bg-slate-950 flex items-center justify-center text-cyan-400">
            Loading engageIQ...
          </div>
        }
      >
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
      </Suspense>
    </AppShell>
  );
}


