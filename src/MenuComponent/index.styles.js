import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40rem;
  background-color: #f5f3f3;
  height: 93.5rem;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1.7rem 2.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  text-transform: uppercase;

  div {
    align-items: center;
    display: flex;
    gap: 1.2rem;
  }
`;

export const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const HarmonyLogo = styled.div`
  background-color: #ff8354;
  border-radius: 50%;
  height: 2.7rem;
  width: 2.7rem;
`;

export const FooterWrapper = styled.div``;

export const Resume = styled.p`
  font-size: ${(props) => props.fontSize || '2rem'};

  text-transform: ${(props) => (props.upper ? 'uppercase' : 'none')};
`;

export const EmailFooter = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  text-transform: uppercase;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #000;
`;
