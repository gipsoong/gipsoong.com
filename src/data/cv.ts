// CV content for /work. It changes rarely, so it lives here rather than in the CMS.
export const cv = {
  name: 'Ryan Gip Soong',
  role: 'Web Operations',
  location: 'Singapore',
  tagline: 'Turning design into deployed, reliable web experiences.',
  linkedin: 'https://www.linkedin.com/in/gipsoong/',
  // Base64 so the address isn't sitting in the HTML for scrapers; the contact button decodes it on click.
  emailB64: 'cnlhbmdpcHNvb25nQGdtYWlsLmNvbQ==',
  cvPdf: null as string | null, // e.g. '/ryan-gip-soong-cv.pdf' once the file is in /public
  about: 'Detail-obsessed, cat father and occasional tech enthusiast who gets a high from completing project milestones.',
  aboutMore: '[PLACEHOLDER: two or three sentences on what you are looking for next]',
  whatIDo: [
    { title: 'Build & QA', body: 'Work with internal and external developers to ship sites to spec and to approved designs. I lead QA and UAT.' },
    { title: 'Migrations & go-live', body: 'Hosting, domains, cPanel/WHM and CDNs, with low downtime and email, internal systems and portals kept safe.' },
    { title: 'Handover', body: 'Client training and clear docs, coordinating with IT vendors and internal teams to keep go-live on track.' },
  ],
  skills: ['React.js', 'Python', 'Database design', 'cPanel / WHM', 'DNS & CDN', 'QA / UAT', 'Adobe Illustrator'],
  languages: 'English · Mandarin (elementary)',
  experience: [
    { when: '2025 to now', title: 'Project Coordinator & Development Lead', org: 'DigiPixel Pte Ltd', note: 'Previously Web Tech (Jan to Jun 2025)' },
    { when: '2020 to 2021', title: 'Junior Digital Media Executive', org: 'Firstcom Solutions Pte Ltd' },
    { when: '2018', title: 'Junior Web Designer', org: 'IVS (Intelligent Video Solutions)' },
  ],
  education: [
    { title: 'BSc (Hons) Computing Science', org: 'Coventry University', when: '2023 to 2025' },
    { title: 'Diploma, Immersive Media & Game Design', org: 'Ngee Ann Polytechnic', when: '2018 to 2021' },
    { title: 'Higher National ITE Certificate, Interactive Design', org: 'ITE', when: '2016 to 2018' },
    { title: 'Adobe Certified Associate', org: 'Graphic Design & Illustration (Illustrator)', when: '' },
  ],
};
