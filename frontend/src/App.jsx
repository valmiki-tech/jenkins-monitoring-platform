import './App.css'

const services = [
  { name: 'React Frontend', detail: 'Vite application', status: 'Healthy', color: 'green' },
  { name: 'Jenkins CI/CD', detail: 'Pipeline automation', status: 'Ready to configure', color: 'blue' },
  { name: 'Kubernetes', detail: 'Kind cluster', status: 'Connected locally', color: 'green' },
  { name: 'Prometheus', detail: 'Metrics collection', status: 'Planned', color: 'gray' },
  { name: 'Grafana', detail: 'Dashboards and alerts', status: 'Planned', color: 'gray' },
]

function App() {
  return (
    <main className="dashboard">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">D</span>
          <div>
            <h1>DevOps Control Center</h1>
            <p>CI/CD · Kubernetes · Observability</p>
          </div>
        </div>
        <span className="environment"><span /> LOCAL LAB</span>
      </header>

      <section className="welcome">
        <p className="eyebrow">ENGINEERING PLATFORM</p>
        <h2>Build. Deploy. Monitor.</h2>
        <p>One place to track the health and progress of your delivery platform.</p>
      </section>

      <section className="metrics">
        <article className="metric-card">
          <span>Application</span>
          <strong className="healthy">● Healthy</strong>
          <small>React development server</small>
        </article>
        <article className="metric-card">
          <span>CI/CD Pipeline</span>
          <strong>Not configured</strong>
          <small>Jenkins is running</small>
        </article>
        <article className="metric-card">
          <span>Deployment</span>
          <strong>Pending</strong>
          <small>Kubernetes rollout not started</small>
        </article>
        <article className="metric-card">
          <span>Monitoring</span>
          <strong>Planned</strong>
          <small>Prometheus + Grafana</small>
        </article>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <div>
            <h2>Platform services</h2>
            <p>Current lab status</p>
          </div>
          <span className="live-badge"><span /> DEVELOPMENT</span>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.name}>
              <div className={`service-icon ${service.color}`}>
                {service.name.charAt(0)}
              </div>
              <div className="service-info">
                <strong>{service.name}</strong>
                <span>{service.detail}</span>
              </div>
              <span className={`status ${service.color}`}>{service.status}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>DEVOPS CONTROL CENTER</span>
        <span>React · Docker · Kubernetes · Jenkins</span>
      </footer>
    </main>
  )
}

export default App
