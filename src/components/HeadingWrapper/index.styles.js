import styled from 'styled-components';

export const Summary = styled.div`
  ul {
    padding: 0;
    padding-bottom: 1.2rem;
    border-bottom: 1px dashed #000;
    display: flex;
    list-style: none;
    justify-content: space-between;
    text-transform: uppercase;
  }
`;

export const Resume = styled.p`
  font-size: ${(props) => props.fontSize || '2rem'};

  text-transform: ${(props) => (props.upper ? 'uppercase' : 'none')};
`;

export const LearnWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 2rem;
  text-transform: uppercase;

  cursor: pointer;
`;
