import React from "react";
import funnelImg from "../assets/hr/seasonal-funnel.png";
import programSummaryImg from "../assets/hr/seasonal_program_chart.png";
import cancellationReasonsImg from "../assets/hr/cancellation_reasons.png";
import appsPlacementsImg from "../assets/hr/applications-vs-placements.png";
import regPerformImg from "../assets/hr/regional-performance.png";

export default function HrPortfolio() {
  return (
    <div className="min-h-screen hero-gradient">
      <header className="header-wrapper">
        <div className="header-inner">
          <div>
            <div className="logo-sub">
              HR / People Operations Portfolio – Maria Zasypkina
            </div>
          </div>
          {/* без навигации, чтобы страница оставалась «скрытой» */}
        </div>
      </header>

      <main className="section-padding">
        <div className="container-centered bg-white rounded-3xl shadow-lg px-6 md:px-10 py-10 md:py-12">
          {/* Hero / contact */}
          <section className="mb-10">
            <div className="flex-center-col text-center">
              <h1 className="heading-md md:text-4xl mb-2">
                HR / People Operations Portfolio
              </h1>
              <p className="text-xl font-semibold text-lavender-dark mb-1">
                Maria Zasypkina
              </p>
              <p className="text-sage-dark mb-2">Thornton, CO · Remote</p>
              <p className="text-sage-dark">
                Email:{" "}
                <a
                  href="mailto:maria.zasy@yahoo.com"
                  className="text-lavender-dark underline-offset-2 hover:underline"
                >
                  maria.zasy@yahoo.com
                </a>{" "}
                · Phone:{" "}
                <a
                  href="tel:+17205902493"
                  className="text-lavender-dark underline-offset-2 hover:underline"
                >
                  (720) 590-2493
                </a>{" "}
                · LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/maria-zasypkina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-dark underline-offset-2 hover:underline"
                >
                  www.linkedin.com/in/maria-zasypkina
                </a>
              </p>
            </div>
          </section>

          {/* Profile */}
          <section aria-labelledby="intro-title" className="mb-10">
            <h2 id="intro-title" className="heading-md">
              Profile
            </h2>
            <p className="text-block">
              Detail-oriented HR and People Operations specialist with 20+ years
              of experience coordinating international seasonal programs,
              high-volume recruitment, and end-to-end onboarding for 10,000+
              participants across multiple U.S. employers. [file:1]
            </p>
            <p className="text-block">
              Skilled at managing candidate pipelines, HR documentation, and
              cross-functional workflows while maintaining accuracy,
              confidentiality, and strong organizational standards. Experienced
              in working with distributed teams, HR/registration systems, and
              data to improve speed and quality of HR operations. [file:1]
            </p>
          </section>

          {/* Case Studies */}
          <section aria-labelledby="cases-title" className="mb-10">
            <h2 id="cases-title" className="heading-md">
              Selected Case Studies
            </h2>

            {/* Case 1 */}
            <article
              aria-labelledby="case1-title"
              className="pt-6 mt-4 border-t border-sage/50"
            >
              <h3 id="case1-title" className="text-2xl font-semibold mb-3">
                Case 1 – High‑Volume Seasonal Recruitment
              </h3>

              <h4 className="font-semibold text-sage-dark mb-1">Context</h4>
              <p className="text-block">
                Coordinated seasonal hiring cycles for international camp and
                work‑travel programs with peak volumes of 2,000+ candidates per
                year across multiple U.S. host employers. Managed applications
                for 10,000+ participants over tenure.
              </p>

              <h4 className="font-semibold text-sage-dark mb-1">
                Responsibilities
              </h4>
              <ul className="list-default">
                <li>
                  Managed full candidate lifecycle: screening, interview
                  coordination, documentation collection, compliance checks, and
                  onboarding into HR/registration systems.
                </li>
                <li>
                  Aligned staffing needs with U.S. partners and internal program
                  targets, tracking pipeline status in internal databases and
                  applicant tracking tools.
                </li>
                <li>
                  Communicated timelines, requirements, and status updates to
                  candidates and regional representatives across multiple time
                  zones.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">What I Did</h4>
              <ul className="list-default">
                <li>
                  Standardized application review criteria and checklists to
                  make screening more consistent and efficient.
                </li>
                <li>
                  Implemented daily and weekly prioritization of application
                  queues together with head office HR and operations teams
                  during peak seasons.
                </li>
                <li>
                  Built simple tracking tables and reports to monitor
                  application volume, stage conversions, and processing
                  bottlenecks.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">Results</h4>
              <ul className="list-default">
                <li>
                  Processed applications for 10,000+ participants over tenure
                  while consistently meeting program and employer placement
                  deadlines. [file:1]
                </li>
                <li>
                  Reduced average application processing time by approximately
                  20% during peak periods by improving workflows and
                  documentation standards. [file:1]
                </li>
                <li>
                  Minimized backlogs and last‑minute escalations by giving
                  leadership clear visibility into pipeline health and
                  priorities.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">
                Sample Artifacts (Anonymized)
              </h4>

              <ul className="list-default">
                <li>
                  Example candidate pipeline report showing stages, conversion
                  rates, and seasonal volumes (data anonymized).
                </li>
                <li>
                  Screenshot of an internal status tracking board for
                  high‑volume seasonal hiring (names and IDs removed).
                </li>
                <li>
                  Email sequence templates used for candidate communication at
                  key stages (application received, documents needed, placement
                  confirmed).
                </li>
              </ul>

              <img src={funnelImg} alt="Seasonal candidate funnel example" />
              <p className="list-default">
                Example of a seasonal candidate funnel I used to monitor volume
                and conversion at each stage (dummy data, real structure).
              </p>
            </article>

            {/* Case 2 */}
            <article
              aria-labelledby="case2-title"
              className="pt-6 mt-6 border-t border-sage/50"
            >
              <h3 id="case2-title" className="text-2xl font-semibold mb-3">
                Case 2 – Onboarding &amp; Documentation Standards
              </h3>

              <h4 className="font-semibold text-sage-dark mb-1">Context</h4>
              <p className="text-block">
                Responsible for onboarding international participants into
                multiple U.S. host organizations, each with specific
                documentation, compliance, and timeline requirements. [file:1]
              </p>

              <h4 className="font-semibold text-sage-dark mb-1">
                Responsibilities
              </h4>
              <ul className="list-default">
                <li>
                  Collected and verified contracts, visa documentation, medical
                  forms, and other program-specific paperwork against employer
                  and regulatory requirements.
                </li>
                <li>
                  Communicated onboarding steps, policies, and deadlines to
                  candidates, regional representatives, and partner
                  organizations.
                </li>
                <li>
                  Maintained accurate onboarding and document status records in
                  internal HR/registration systems.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">What I Did</h4>
              <ul className="list-default">
                <li>
                  Created standardized onboarding checklists for different
                  program types and host employers.
                </li>
                <li>
                  Updated email templates and guidance documents to clearly
                  explain required documents, timelines, and next steps for
                  candidates.
                </li>
                <li>
                  Introduced simple status tracking (e.g., color codes or status
                  fields) to quickly identify missing documents and at‑risk
                  cases.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">Results</h4>
              <ul className="list-default">
                <li>
                  Reduced the number of incomplete document packages at key
                  program milestones.
                </li>
                <li>
                  Decreased repeat follow‑ups to candidates and representatives
                  by providing clearer instructions upfront.
                </li>
                <li>
                  Improved overall compliance and readiness of participants
                  prior to travel and program start dates.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">
                Sample Artifacts (Anonymized)
              </h4>

              <ul className="list-default">
                <li>
                  Onboarding checklist template for a specific program type
                  (without personal data).
                </li>
                <li>
                  Pre‑arrival email templates outlining required documents and
                  deadlines.
                </li>
                <li>
                  Dashboard-style view of onboarding status per employer or
                  program (summary data only).
                </li>
              </ul>
              <p className="list-default">
                Example seasonal program summary showing key recruitment and
                arrival metrics (dummy data, real reporting structure).
              </p>
              <img
                src={programSummaryImg}
                alt="Seasonal program summary example"
              />
              <p className="list-default">
                Example breakdown of cancellation reasons for one season (dummy
                data).
              </p>
              <img
                src={cancellationReasonsImg}
                alt="Cancellation reasons breakdown example"
              />
            </article>

            {/* Case 3 */}
            <article
              aria-labelledby="case3-title"
              className="pt-6 mt-6 border-t border-sage/50"
            >
              <h3 id="case3-title" className="text-2xl font-semibold mb-3">
                Case 3 – Leading a Distributed Team of 30+ Representatives
              </h3>

              <h4 className="font-semibold text-sage-dark mb-1">Context</h4>
              <p className="text-block">
                Led a distributed network of 30+ regional representatives
                responsible for local candidate sourcing, application support,
                and initial screening across multiple markets. [file:1]
              </p>

              <h4 className="font-semibold text-sage-dark mb-1">
                Responsibilities
              </h4>
              <ul className="list-default">
                <li>
                  Set performance expectations and KPIs such as application
                  volume, conversion rates, and timeliness of processing.
                </li>
                <li>
                  Provided ongoing feedback, coaching, and training materials to
                  improve quality and consistency of work.
                </li>
                <li>
                  Served as the main point of contact between regional reps and
                  central HR/operations teams.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">What I Did</h4>
              <ul className="list-default">
                <li>
                  Introduced regular reporting templates for reps to track their
                  pipelines and results.
                </li>
                <li>
                  Organized remote training sessions and Q&amp;A calls to review
                  policy updates, complex cases, and best practices.
                </li>
                <li>
                  Developed a concise handbook outlining workflows, quality
                  standards, and common scenarios for regional reps.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">Results</h4>
              <ul className="list-default">
                <li>
                  Improved the predictability of application pipelines across
                  regions, helping leadership plan program capacity more
                  effectively.
                </li>
                <li>
                  Reduced the share of incomplete or incorrect dossiers coming
                  from regional reps.
                </li>
                <li>
                  Strengthened collaboration and communication between local
                  representatives and the central office.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">
                Sample Artifacts (Anonymized)
              </h4>

              <ul className="list-default">
                <li>
                  Excerpt from the regional representative handbook (roles,
                  workflows, quality standards).
                </li>
                <li>
                  Template of a monthly regional performance report (with
                  anonymized data).
                </li>
                <li>
                  Agenda and outline from a remote training session or webinar
                  for reps.
                </li>
              </ul>

              <img
                src={regPerformImg}
                alt="Regional reps performance snapshot example"
              />
              <p className="list-default">
                Example of a simple performance snapshot I used to monitor
                application volume, conversion, and on-time documentation across
                regions (dummy data).
              </p>
            </article>

            {/* Case 4 */}
            <article
              aria-labelledby="case4-title"
              className="pt-6 mt-6 border-t border-sage/50"
            >
              <h3 id="case4-title" className="text-2xl font-semibold mb-3">
                Case 4 – Data &amp; Reporting for Leadership
              </h3>

              <h4 className="font-semibold text-sage-dark mb-1">Context</h4>
              <p className="text-block">
                Prepared statistical and financial summaries to support
                leadership decisions on program capacity, pricing, and staffing
                for international seasonal programs. [file:1]
              </p>

              <h4 className="font-semibold text-sage-dark mb-1">
                Responsibilities
              </h4>
              <ul className="list-default">
                <li>
                  Exported and cleaned data from HR/registration systems and
                  internal databases.
                </li>
                <li>
                  Produced weekly and seasonal reports on application pipelines,
                  placements, cancellations, and financial results.
                </li>
                <li>
                  Collaborated with finance and accounting teams to reconcile
                  program fees and payments.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">What I Did</h4>
              <ul className="list-default">
                <li>
                  Defined a set of standard reports and metrics for leadership
                  (e.g., applicants vs. placed, time‑to‑placement, no‑show and
                  cancellation reasons).
                </li>
                <li>
                  Built structured spreadsheets and summaries to present data
                  clearly and consistently across seasons.
                </li>
                <li>
                  Flagged trends and risks early (e.g., slower conversions in
                  specific regions or employers) to enable timely interventions.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">Results</h4>
              <ul className="list-default">
                <li>
                  Gave leadership a clear, data‑driven view of program
                  performance throughout the season.
                </li>
                <li>
                  Supported more accurate planning of quotas, recruitment
                  timelines, and resource allocation.
                </li>
                <li>
                  Improved cross‑functional collaboration between HR,
                  operations, and finance teams around key decisions.
                </li>
              </ul>

              <h4 className="font-semibold text-sage-dark mb-1">
                Sample Artifacts (Anonymized)
              </h4>
              <ul className="list-default">
                <li>
                  Sample seasonal performance summary in spreadsheet format
                  (with anonymized or dummy data).
                </li>
                <li>
                  Example of a weekly pipeline report highlighting key metrics
                  and trends.
                </li>
                <li>
                  High-level visualization of seasonal application vs. placement
                  dynamics (e.g., simple chart or infographic).
                  <img
                    src={appsPlacementsImg}
                    alt="Seasonal applications vs placements example"
                  />
                </li>
              </ul>
            </article>

            {/* Additional Experience */}
            <article
              aria-labelledby="additional-title"
              className="pt-6 mt-6 border-t border-sage/50"
            >
              <h3 id="additional-title" className="text-2xl font-semibold mb-3">
                Additional Experience (Optional Highlights)
              </h3>
              <p className="text-block">
                In addition to core HR and People Operations work, I have
                experience in cash office operations and remote product/UX
                quality assurance, which further strengthen my attention to
                detail, data accuracy, and cross-functional collaboration.
                [file:1]
              </p>
              <ul className="list-default">
                <li>
                  <strong>Cash Office Operations:</strong> Daily
                  reconciliations, deposits, and end-of-day financial reporting,
                  working under strict audit and deadline requirements.
                </li>
                <li>
                  <strong>UI/UX &amp; Linguistic QA:</strong> Remote testing of
                  web and mobile interfaces, identifying and documenting
                  linguistic, formatting, and functional issues, and
                  collaborating with distributed product teams using tools like
                  JIRA. [file:1]
                </li>
              </ul>
            </article>
          </section>

          {/* Skills */}
          <section aria-labelledby="skills-title" className="mb-10">
            <h2 id="skills-title" className="heading-md">
              Skills &amp; Tools
            </h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              HR &amp; People Operations
            </h3>
            <ul className="list-default">
              <li>
                High-volume recruitment support for international seasonal
                programs.
              </li>
              <li>
                Candidate screening, interview coordination, and onboarding
                support.
              </li>
              <li>
                Documentation and compliance checks for multiple employers and
                program types.
              </li>
              <li>
                Records management, workflow coordination, and process
                improvement.
              </li>
              <li>
                Remote collaboration with distributed teams and stakeholders.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Systems, Data &amp; Reporting
            </h3>
            <ul className="list-default">
              <li>
                Experience with HR/registration systems and internal databases
                (e.g., CampMinder, internal ATS / HRIS tools). [file:1]
              </li>
              <li>
                Data exports, validation, and creation of structured reports for
                leadership.
              </li>
              <li>
                Spreadsheet reporting (Excel, Google Sheets) and basic metrics
                analysis.
              </li>
              <li>
                Basic SQL queries and data validation in relational databases.
                [file:1]
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Productivity &amp; Collaboration
            </h3>
            <ul className="list-default">
              <li>
                Microsoft Office (Word, Excel, Outlook), Google Workspace (Docs,
                Sheets, Drive, Calendar). [file:1]
              </li>
              <li>
                Remote collaboration tools: Zoom, Microsoft Teams, Google Meet,
                Slack, Trello. [file:1]
              </li>
              <li>Issue tracking and QA tools such as JIRA.</li>
            </ul>
          </section>

          {/* CTA */}
          <section aria-labelledby="cta-title" className="mt-6">
            <h2 id="cta-title" className="heading-md">
              Get in Touch
            </h2>
            <p className="text-block">
              If you would like to see anonymized examples of reports,
              checklists, or communication templates referenced in these case
              studies, please contact me and I will be happy to provide
              additional samples on request.
            </p>
            <p className="text-sage-dark">
              Email:{" "}
              <a
                href="mailto:maria.zasy@yahoo.com"
                className="text-lavender-dark underline-offset-2 hover:underline"
              >
                maria.zasy@yahoo.com
              </a>{" "}
              · LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/maria-zasypkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lavender-dark underline-offset-2 hover:underline"
              >
                www.linkedin.com/in/maria-zasypkina
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
