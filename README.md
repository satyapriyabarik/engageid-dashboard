<!-- This Project is based on Real time Scenarios and requirtements from the client -->
# engageIQ — AI Operations Dashboard

engageIQ is a modern enterprise AI operations dashboard built using React, TypeScript, Redux Toolkit, Tailwind CSS, GSAP, Chart.js, and WebSocket-based realtime architecture.

The platform helps ISC engineers monitor AI-generated maintenance insights, prioritize opportunities, manage operational tasks, and review customer intelligence in realtime.

---

# Features

## AI Operations Dashboard
- Realtime operational metrics
- AI-generated insights
- Revenue opportunity tracking
- Customer health analytics
- SLA monitoring

## Customer360
- Unified customer overview
- Customer health score
- Risk analysis
- Revenue visibility
- GeoMap integration

## Opportunity Center
- AI-prioritized opportunities
- Revenue potential analytics
- Urgency scoring
- Realtime updates

## Project Intelligence
- Recommended maintenance actions
- AI-generated recommendations
- Suggested infrastructure upgrades
- Maintenance timelines

## Task Operations Center
- Kanban task workflow
- Engineer assignment tracking
- SLA status monitoring
- Realtime workflow updates

## Notification System
- GSAP animated notification drawer
- Realtime alerts
- AI engine notifications
- SLA warnings

## Enterprise UI/UX
- Fully responsive layout
- Mobile sidebar navigation
- GSAP animations
- Interactive analytics
- Reusable chart system

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite

## State Management
- Redux Toolkit

## Styling
- Tailwind CSS

## Animations
- GSAP

## Charts
- react-chartjs-2
- chart.js

## Maps
- react-leaflet
- leaflet

## Icons
- react-icons

## Realtime
- WebSocket mock architecture

---

# Project Structure

```bash
src/
│
├── components/
│   ├── analytics/
│   ├── maps/
│   ├── ai/
│
├── layout/
│   ├── Sidebar.tsx
│   ├── Topbar.tsx
│   ├── NotificationDrawer.tsx
│
├── modules/
│   ├── dashboard/
│   ├── customer360/
│   ├── opportunities/
│   ├── projects/
│   ├── tasks/
│
├── redux/
│   ├── slices/
│
├── services/
│
├── store/
│
├── websocket/
│
└── utils/
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

# Required Packages

```bash
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
npm install tailwindcss
npm install gsap
npm install chart.js react-chartjs-2
npm install react-icons
npm install axios
npm install react-leaflet leaflet
```

---

# Run Development Server

```bash
npm run dev
```

---

# Environment Variables

Create `.env`

```env
VITE_API_URL=https://my-json-server.typicode.com/satyapriyabarik/engageiq/
```

---

# Responsive Features

- Mobile sidebar
- Adaptive layouts
- Responsive charts
- Tablet optimized views
- Flexible grids
- Mobile-first architecture

---

# Realtime Architecture

The platform simulates enterprise realtime infrastructure using:
- Redux state updates
- Mock websocket events
- GSAP transitions
- Live dashboard refresh patterns

---

# Future Enhancements

- Authentication
- Role-based access
- AI semantic search
- Drag-and-drop Kanban
- Dark/light theme
- WebSocket backend integration
- Microfrontend architecture
- Unit & integration testing
- Docker deployment

---

# Enterprise Design Goals

This project is designed to emulate modern enterprise AI platforms such as:
- Datadog
- Grafana
- ServiceNow
- Salesforce Einstein
- Jira Service Management

---

# Author

Satya

Frontend Application Developer — engageIQ Platform