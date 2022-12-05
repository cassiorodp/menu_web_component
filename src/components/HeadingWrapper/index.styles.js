import { css } from 'goober';

export const summaryWrapper = css`
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

export const resumeWrapper = css`
  font-size: 2rem;
`;

export const learnWrapper = css`
  display: flex;
  align-items: center;

  font-size: 2rem;
  text-transform: uppercase;

  cursor: pointer;
`;
