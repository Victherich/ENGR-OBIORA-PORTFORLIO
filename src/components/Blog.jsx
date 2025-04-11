import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import blogHero from '../Images4/blog.jpg'; // Replace with your actual image path

// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

// Styled Components
const BlogContainer = styled.div`
  background: ${({ theme }) =>
    theme === 'dark' ? '#0f172a' : '#f8fafc'};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1e293b')};
  animation: ${fadeIn} 1s ease;
`;

const HeroSection = styled.section`
  height: 50vh;
  background: url(${blogHero}); 
//   background-repeat:no-repeat;
  background-size:cover;
  background-position:bottom;
  animation: ${slideBackground} 25s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
  color: white;

  @media (max-width: 320px) {
    height: 60vh;
  }

 
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem;


  @media(max-width:428px){
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding:1rem;
  }

 @media(max-width:320px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

`;

const BlogCard = styled.div`
  background: ${({ theme }) =>
    theme === 'dark' ? '#1e293b' : '#ffffff'};
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    theme === 'dark'
      ? '0 4px 20px rgba(255, 255, 255, 0.05)'
      : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }


  @media(max-width:428px){
  padding:10px;
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
`;

const BlogText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#334155')};
`;

const blogs = [
  {
    title: 'Sustainable Materials in Modern Infrastructure',
    content: `With growing emphasis on environmental consciousness, civil engineers are shifting towards green concrete, recycled aggregates, and sustainable asphalt to reduce the carbon footprint of construction.`,
  },
  {
    title: 'The Role of AI in Structural Design',
    content: `Artificial Intelligence is revolutionizing the civil engineering world by optimizing structural analysis, reducing design time, and predicting failures through smart algorithms.`,
  },
  {
    title: 'Smart Roads: The Future of Urban Mobility',
    content: `Smart roads integrate sensors, solar panels, and real-time traffic systems to ensure better safety, energy use, and autonomous vehicle compatibility. Civil engineers play a critical role in implementing these innovations.`,
  },
  {
    title: 'Bridging Gaps with Advanced Materials',
    content: `From fiber-reinforced polymers to ultra-high-performance concrete, bridges today are designed to withstand higher loads and endure longer lifespans. These materials offer superior strength-to-weight ratios.`,
  },
  {
    title: 'Challenges of Urban Drainage Systems',
    content: `As cities grow, civil engineers must design smarter drainage solutions to handle stormwater, prevent flooding, and integrate with sustainable urban landscapes.`,
  },
  {
    title: 'Geotechnical Innovations in Foundation Design',
    content: `New tools in soil mechanics and foundation analysis now allow engineers to construct stable buildings even on soft or reclaimed land — thanks to geofoam, vibro-compaction, and deep soil mixing.`,
  },
];

// Component
const BlogsPage = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <BlogContainer theme={theme === true ? 'light' : 'dark'}>
      <HeroSection>
        <HeroTitle>Latest in Civil Engineering</HeroTitle>
      </HeroSection>

      <BlogGrid>
        {blogs.map((blog, index) => (
          <BlogCard key={index} theme={theme === true ? 'light' : 'dark'}>
            <BlogTitle theme={theme === true ? 'light' : 'dark'}>
              {blog.title}
            </BlogTitle>
            <BlogText theme={theme === true ? 'light' : 'dark'}>
              {blog.content}
            </BlogText>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );    
};

export default BlogsPage;
