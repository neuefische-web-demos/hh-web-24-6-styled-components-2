import styled, { css } from "styled-components";

export default function HomePage() {
  return (
    <Container>
      <Button $variant="contained" $color="primary">
        Default
      </Button>
      <Button $variant="text" $color="secondary">
        Default
      </Button>
      <Button $variant="outlined" $color="secondary">
        Default
      </Button>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  /* flex-direction: ${function (props) {
    if (props.$direction === undefined) {
      return "column";
    }
    return props.$direction;
  }}; */
  /* 
  flex-direction: ${({ $direction }) =>
    $direction ?? "column"}; // nullish coalecsence operator */

  flex-direction: ${({ $direction = "column" }) =>
    $direction}; // nullish coalecsence operator

  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 100dvh;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;
  background-color: ${({ $color }) => ($color === "primary" ? "red" : "green")};

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }

  ${({ $variant }) =>
    $variant === "contained" &&
    css`
      background-color: var(--color-primary);
      color: white;

      &:hover {
        color: white;
        background-color: red;
      }
    `}

  ${({ $variant }) =>
    $variant === "text" &&
    css`
      background-color: transparent;
      color: black;
    `}

  ${({ $variant }) => {
    if ($variant === "outlined") {
      return css`
        background-color: transparent;
        color: var(--color-primary);
        border: 3px solid var(--color-primary);
        font-weight: bold;
      `;
    }
  }}
`;

// 3 variants
// outlined
// text
// contained
