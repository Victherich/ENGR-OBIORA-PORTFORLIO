


import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from './Context'; // Assuming you have a theme context

// Background Image
import contactBackground from '../Images4/ct4.jpg';
import contactBackground2 from '../Images4/ct3.jpg';
import carLogo from '../Images4/dp1.jpg'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

// Define theme colors for light and dark mode
const lightTheme = {
  background: 'linear-gradient(180deg, #f8fafc, #e2e8f0)',
  text: '#1e293b',
  primary: '#FF7133',
  secondary: '#eab308',
  inputBackground: 'rgba(255,255,255,0.3)',
  inputTextColor: '#333',
  
};

const darkTheme = {
  background: 'linear-gradient(180deg, #1e293b, #0f172a)',
  text: '#ffffff',
  primary: '#fbbf24',
  secondary: '#eab308',
  inputBackground: 'rgba(30, 41, 59, 0.3)',
  inputTextColor: '#e2e8f0',

};

// Styled Components
const ContactContainer = styled.div`
   background-image: url(${({ theme }) => (theme === 'dark' ? contactBackground : contactBackground2)});
   background-repeat:no-repeat;
   background-size:cover;
   background:position:center;
  // height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:100px 5px;
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.inputBackground};
  opacity: 0.9;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  backdrop-filter: blur(10px);
 
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-weight: bold;



  @media(max-width:428px){
  font-size:1.5rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  width:100%;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  display: block;
  margin-bottom: 0.5rem;
  width:100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputTextColor};
  background: ${({ theme }) => theme.inputBackground};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputTextColor};
  background: ${({ theme }) => theme.inputBackground};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Img = styled.img`
  width:50px;
  heigh:50px;
  border-radius:50%;


`

const ContactWrap = styled.div`
  width:100%;
  display:flex;
  justify-item:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  gap:20px;
  padding:20px;

  strong{
  // color:yellow;
  }
`

// Contact Form Component
const ContactUs = () => {
  // const { theme } = useContext(Context); // Access theme context
  const theme = useSelector((state)=>state.theme)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      Swal.fire({text:"Please wait..."});
      Swal.showLoading();
  
    try {
      const response = await fetch("https://hotsalesng.com/api_obi/contact_form_endpoint.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({text:"✅ Thanks for your message, I shall get back to you shortly", icon:"success"});
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        Swal.fire({text:`❌ Error: ${data.error}`});
      }
    } catch (error) {
      Swal.fire({text:"❌ Network error, please try again."});
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <ContactContainer theme={theme === true ? 'light' : 'dark'} >
      <FormWrapper theme={theme === false ? darkTheme : lightTheme}>
      <Img src={carLogo} alt="carlogo"/>
        <FormTitle theme={theme === false ? darkTheme : lightTheme}>Contact the Engineer</FormTitle>
        
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel theme={theme === false ? darkTheme : lightTheme} htmlFor="name">Name</InputLabel>
            <Input
              theme={theme === false ? darkTheme : lightTheme}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputLabel theme={theme === false ? darkTheme : lightTheme} htmlFor="email">Email</InputLabel>
            <Input
              theme={theme === false ? darkTheme : lightTheme}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputLabel theme={theme === false ? darkTheme : lightTheme} htmlFor="phone">Phone</InputLabel>
            <Input
              theme={theme === false ? darkTheme : lightTheme}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputLabel theme={theme === false ? darkTheme : lightTheme} htmlFor="message">Message</InputLabel>
            <TextArea
              theme={theme === false ? darkTheme : lightTheme}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </InputGroup>
          <SubmitButton theme={theme === false ? darkTheme : lightTheme} type="submit">Send Message</SubmitButton>
        </form>
        <ContactWrap>
          
          <p><strong>Address:</strong> 907 24th Str Canyon TX USA</p>
          <p><strong>Email:</strong> Emmyx2003@gmail.com | Emmyx2003@yahoo.com</p>

          <p><strong>Phone:</strong> +1 808 673 8702  | +234 803 476 6089</p>
        </ContactWrap>
      </FormWrapper>
    </ContactContainer>
  );
};

export default ContactUs;

