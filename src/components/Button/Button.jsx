import styled from "styled-components";

const ButtonComponent = styled.button`
  font-size: ${({ Size }) =>
    (Size === "Small" && "1.3rem") || (Size === "Large" && "1.5rem") || "1.3"};
  font-weight: ${({ Size }) =>
    (Size === "Small" && 500) || (Size === "Large" && 700) || 600};
  color: ${({ Type }) =>
    (Type === "Secondary" && "#000") ||
    (Type === "Danger" && "#fff") ||
    (Type === "Success" && "#fff") ||
    "#000"};
  background-color: ${({ Type }) =>
    (Type === "Secondary" && "#ffffff") ||
    (Type === "Danger" && "#b01602") ||
    (Type === "Success" && "#15a305") ||
    "#ffffff"};
  cursor: ${({ Type }) => (Type === "Disabled" && "default") || "pointer"};
  transition: all 200ms;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border-style: none;
  opacity: ${({ Type }) => (Type === "Disabled" && 0.8) || 1};
  &:hover {
    background-color: ${({ Type }) =>
      (Type === "Secondary" && "#b5b8b4") ||
      (Type === "Danger" && "#630c01") ||
      (Type === "Success" && "#0a4d02") ||
      "#ffffff"};
    box-shadow: ${({ Type }) =>
      (Type === "Disabled" && "none") || "rgba(0, 0, 0, 0.3) 0 5px 5px"};
    transform: ${({ Type }) =>
      (Type === "Disabled" && "translateY(0)") || "translateY(-2px)"};
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
  -webkit-tap-highlight-color: transparent;
`;

export const Button = (props) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};
