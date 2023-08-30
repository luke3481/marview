import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Container = styled.footer`
  width: 100%;
  min-height: 400px;
  display: flex;
  background: #00008b linear-gradient(140deg, #00008b 0%, #7282f4 100%);
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 10px;
  font-size: 1rem;
}
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
  gap: 150px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

export const SubContainer2 = styled.div`
  text-align: center;
  justify-self: end;
`;

export const ContentContainer = styled.div`
  display: block;
  max-width: 200px;
`;

export const Text = styled.div`
  color: #fff;
  margin-bottom: 10px;
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Links = styled(NavLink)`
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  color: #fff;
`;

export const SignUp = styled(Link)`
  padding: 10px 40px;
  border-radius: 25px;
  font-size: 1 rem;
  text-decoration: none;
  font-weight: 500;
  color: #00008b;
  cursor: pointer;
  background: #fff;
  text-align: center;

  &:hover {
    background: #4d4dff;
    color: #fff;
    transition: all 0.2s ease-in;
    text-decoration: none;
  }
`;
