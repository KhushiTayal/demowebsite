import React, { useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return (
    <Wrapper className="section">
    <div>
    <h2 className="common-heading">About Us</h2>
    <div className="container grid grid-two-column">
    {/* {services.map((curElem) => {
      const { id, name, image, description } = curElem;
      return (
        <div key={id} className="card">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="card-data">
            <h3>{name}</h3>
            <p>{description}</p>
            <NavLink to="/service">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
      );
    })} */}
    <div className="card">
          <figure>
            <img src="./images/e1.jpg" alt="name" />
          </figure>
          <div className="card-data">
            <h3>Team</h3>
            <p>Meet our team. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, omnis!</p>
            <NavLink to="/service">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src="./images/e1.jpg" alt="name" />
          </figure>
          <div className="card-data">
            <h3>Mission</h3>
            <p>What we do? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, minus.
            </p>
            <NavLink to="/service">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
        {/* <div className="card">
          <figure>
            <img src="./images/e1.jpg" alt="name" />
          </figure>
          <div className="card-data">
            <h3>Event</h3>
            <p>description</p>
            <NavLink to="/service">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div> */}
  </div>
  </div>
  </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default About;
