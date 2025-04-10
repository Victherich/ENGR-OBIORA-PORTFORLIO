// import React from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { useSelector } from 'react-redux';

// const float = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-20px) rotate(5deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// const spaceBackgroundLight = `
//   radial-gradient(circle at 20% 40%, #dbeafe 0%, #e0f2fe 20%, #f8fafc 80%),
//   linear-gradient(to right, #f1f5f9, #e2e8f0)
// `;

// const spaceBackgroundDark = `
//   radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
// `;

// const Container = styled.div`
//   padding: 4rem 2rem;
//   background: ${({ theme }) =>
//     theme === 'dark' ? spaceBackgroundDark : spaceBackgroundLight};
//   background-size: cover;
//   background-repeat: no-repeat;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 3rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
// `;

// const Grid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
// `;

// const Badge = styled.div`
//   width: 120px;
//   height: 120px;
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
//   border: 2px solid ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.1rem;
//   font-weight: bold;
//   box-shadow: 0 0 20px ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
//   animation: ${float} 6s ease-in-out infinite;
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.1) rotate(2deg);
//     box-shadow: 0 0 30px ${({ theme }) => (theme === 'dark' ? '#facc15' : '#fb923c')};
//   }
// `;

// const QualificationsSpace = () => {
//   const theme = useSelector((state) => state.theme);

//   const qualifications = [
//     'D.SC',
//     'B.ENG',
//     'FIMC',
//     'CMC',
//     'CMS',
//     'ASCE',
//     'APM',
//     'COREN',
//     'MNSE',
//   ];

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       <Title theme={theme === true ? 'light' : 'dark'}>
//         Professional Qualifications
//       </Title>
//       <Grid>
//         {qualifications.map((qual, index) => (
//           <Badge key={index} theme={theme === true ? 'light' : 'dark'}>
//             {qual}
//           </Badge>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default QualificationsSpace;





// // rotating qualifications
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { useSelector } from 'react-redux';

// const rotate3D = keyframes`
//   0% { transform: rotateY(0deg) rotateX(0deg); }
//   100% { transform: rotateY(360deg) rotateX(360deg); }
// `;

// const spaceBackgroundLight = `
//   radial-gradient(circle at 20% 40%, #dbeafe 0%, #e0f2fe 20%, #f8fafc 80%),
//   linear-gradient(to right, #f1f5f9, #e2e8f0)
// `;

// const spaceBackgroundDark = `
//   radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
// `;

// const Container = styled.div`
//   padding: 4rem 2rem;
//   background: ${({ theme }) =>
//     theme === 'dark' ? spaceBackgroundDark : spaceBackgroundLight};
//   background-size: cover;
//   background-repeat: no-repeat;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 3rem;
//   color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
// `;

// const Grid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
// `;

// const Sphere = styled.div`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background: ${({ theme }) =>
//     theme === 'dark'
//       ? 'radial-gradient(circle at 30% 30%, #fbbf24, #92400e)'
//       : 'radial-gradient(circle at 30% 30%, #FF7133, #c2410c)'};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-weight: bold;
//   font-size: 1rem;
//   text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
//   box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
//   animation: ${rotate3D} 10s linear infinite;
//   transform-style: preserve-3d;
//   perspective: 1000px;
// `;

// const QualificationsSpace = () => {
//   const theme = useSelector((state) => state.theme);

//   const qualifications = [
//     'D.SC',
//     'B.ENG',
//     'FIMC',
//     'CMC',
//     'CMS',
//     'ASCE',
//     'APM',
//     'COREN',
//     'MNSE',
//   ];

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       <Title theme={theme === true ? 'light' : 'dark'}>
//         Professional Qualifications
//       </Title>
//       <Grid>
//         {qualifications.map((qual, index) => (
//           <Sphere key={index} theme={theme === true ? 'light' : 'dark'}>
//             {qual}
//           </Sphere>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default QualificationsSpace;







import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const spinY = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const spaceBackgroundLight = `
  radial-gradient(circle at 20% 40%, #dbeafe 0%, #e0f2fe 20%, #f8fafc 80%),
  linear-gradient(to right, #f1f5f9, #e2e8f0)
`;

const spaceBackgroundDark = `
  radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
`;

const Container = styled.div`
  padding: 50px 10px;
  background: ${({ theme }) =>
    theme === 'dark' ? spaceBackgroundDark : spaceBackgroundLight};
  background-size: cover;
  background-repeat: no-repeat;
  
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : '#FF7133')};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Sphere = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'radial-gradient(circle at 35% 35%, #fbbf24, #78350f)'
      : 'radial-gradient(circle at 35% 35%, #FF7133, #b45309)'};
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spinY} 8s linear infinite;
  transform-style: preserve-3d;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

const QualificationsSpace = () => {
  const theme = useSelector((state) => state.theme);

  const qualifications = [
    'D.SC', 'B.ENG', 'FIMC', 'CMC', 'ASCE', 'APM','COREN', 'MNSE','NICE',
  ];

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      <Title theme={theme === true ? 'light' : 'dark'}>
        Professional Qualifications
      </Title>
      <Grid>
        {qualifications.map((qual, index) => (
          <Sphere key={index} theme={theme === true ? 'light' : 'dark'}>
            {qual}
          </Sphere>
        ))}
      </Grid>
    </Container>
  );
};

export default QualificationsSpace;


