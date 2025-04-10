import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import logoEAU from '../Images4/lg1.jpg';
import logoLGS from '../Images4/lg2.jpg';
import logoESUT from '../Images4/lg3.jpg';
import logoIMC from '../Images4/lg4.png';
import logoDR from '../Images4/lg5.png';
import logoGantt from '../Images4/lg6.png';

const educationData = [
  {
    school: 'European-American University',
    degree: 'Doctor of Philosophy - PhD, Civil Engineering',
    date: 'Mar 2025',
    skills: ['Project Management', 'Program Management'],
    logo: logoEAU,
  },
  {
    school: 'London Graduate School',
    degree: 'Postgraduate Degree, Certified Management Specialist (CMS)',
    date: 'Feb 2024 - 2025',
    grade: 'Distinction In Time Management',
    logo: logoLGS,
  },
  {
    school: 'Enugu State University of Science and Technology',
    degree: 'Bachelor of Engineering - BE, Civil Engineering',
    date: 'Jan 2003 - Jul 2008',
    grade: 'Second Class',
    activities: 'Football',
    logo: logoESUT,
  },
  {
    school: 'THE INSTITUTE OF MANAGEMENT CONSULTANTS IMC-NIGERIA',
    degree: 'Postgraduate Degree, Management Consultant',
    date: 'Feb 2025 - Mar 2025',
    grade: 'Fellow',
    note: 'Certified Management Consultant (CMC)',
    logo: logoIMC,
  },
  {
    school: 'Digital Regenesys',
    degree: 'Postgraduate Degree, Advance Project Management',
    date: 'May 2024 - Feb 2025',
    location: 'South African Online Degree Awarding Institution',
    skills: ['Program Management', 'Project Engineering', 'Strategic Planning'],
    logo: logoDR,
  },
  {
    school: 'GANTTWORKS BUSINESS SCHOOL',
    degree: 'Postgraduate Degree, Business Administration and Management',
    date: 'Jul 2020',
    note: 'For Successfully Completing AGMSEIS Training',
    skills: ['Business Development', 'Team Building', 'Business Strategy'],
    logo: logoGantt,
  },
];

const Section = styled.div`
  padding: 4rem 2rem;
  background: ${({ theme }) => (theme === 'dark' ? '#0f172a' : '#f8fafc')};
  min-height: 100vh;
  transition: background 0.3s ease;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  transition: color 0.3s ease;

  &:hover {
    text-shadow: ${({ theme }) =>
      theme === 'dark' ? '0 0 10px #facc15' : 'none'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) =>
    theme === 'dark' ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: ${({ theme }) =>
    theme === 'dark'
      ? '0 10px 25px rgba(255, 255, 255, 0.05)'
      : '0 10px 25px rgba(0, 0, 0, 0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) =>
      theme === 'dark'
        ? '0 15px 30px rgba(255, 255, 255, 0.1)'
        : '0 15px 30px rgba(0, 0, 0, 0.15)'};
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

const School = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1e293b')};
`;

const Degree = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme === 'dark' ? '#f1f5f9' : '#0f172a')};
`;

const Meta = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#334155')};
`;

const SkillList = styled.ul`
  margin-top: 0.5rem;
  list-style: disc;
  padding-left: 1.2rem;

  li {
    font-size: 0.9rem;
    color: ${({ theme }) => (theme === 'dark' ? '#cbd5e1' : '#1e293b')};
  }
`;

const EducationSection = () => {
  const theme = useSelector((state) => state.theme);
  const themeMode = theme === true ? 'light' : 'dark';

  return (
    <Section theme={themeMode}>
      <Title theme={themeMode}>Education</Title>
      <Grid>
        {educationData.map((edu, idx) => (
          <Card key={idx} theme={themeMode}>
            <Logo src={edu.logo} alt={`${edu.school} logo`} />
            <School theme={themeMode}>{edu.school}</School>
            <Degree theme={themeMode}>{edu.degree}</Degree>
            {edu.date && <Meta theme={themeMode}>{edu.date}</Meta>}
            {edu.grade && <Meta theme={themeMode}>Grade: {edu.grade}</Meta>}
            {edu.activities && (
              <Meta theme={themeMode}>Activities: {edu.activities}</Meta>
            )}
            {edu.note && <Meta theme={themeMode}>{edu.note}</Meta>}
            {edu.location && <Meta theme={themeMode}>{edu.location}</Meta>}
            {edu.skills && (
              <SkillList theme={themeMode}>
                {edu.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </SkillList>
            )}
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default EducationSection;
