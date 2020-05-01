import React from "react";
import styled from "styled-components";
import Scroll from "react-scroll-component";

const Info = styled.div`
  background-color: rgba(80, 80, 100, 0.2);
  color: #666;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 700px;
`;

const About = () => (
  <Info>
    <h1> hi </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla
      posuere sollicitudin aliquam ultrices sagittis. Ut sem nulla pharetra
      diam. Ridiculus mus mauris vitae ultricies. Maecenas sed enim ut sem
      viverra aliquet eget sit amet. Dignissim convallis aenean et tortor at
      risus viverra adipiscing. Aliquam sem et tortor consequat id porta. Tempus
      quam pellentesque nec nam. Quis hendrerit dolor magna eget est lorem ipsum
      dolor sit. A erat nam at lectus urna duis convallis convallis. Diam quis
      enim lobortis scelerisque fermentum dui faucibus in ornare. Nisi lacus sed
      viverra tellus in hac habitasse. Et malesuada fames ac turpis egestas
      maecenas pharetra convallis posuere. Semper feugiat nibh sed pulvinar
      proin gravida hendrerit lectus.
    </p>
    <br />
    <p>
      Eget magna fermentum iaculis eu non diam phasellus. Volutpat ac tincidunt
      vitae semper quis lectus nulla at volutpat. Dui ut ornare lectus sit amet.
      Amet volutpat consequat mauris nunc congue. Consectetur lorem donec massa
      sapien faucibus et molestie ac feugiat. Vitae congue eu consequat ac.
      Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.
      Adipiscing vitae proin sagittis nisl rhoncus mattis. Magna eget est lorem
      ipsum dolor. Amet consectetur adipiscing elit ut aliquam purus sit amet
      luctus. Libero justo laoreet sit amet cursus sit amet dictum. Etiam sit
      amet nisl purus in mollis nunc. Pharetra diam sit amet nisl suscipit
      adipiscing bibendum. Viverra aliquet eget sit amet tellus cras adipiscing.
      Porta non pulvinar neque laoreet suspendisse interdum consectetur libero
      id. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla
      phasellus. Id diam maecenas ultricies mi eget mauris pharetra et ultrices.
      Dignissim enim sit amet venenatis urna cursus eget.
    </p>
  </Info>
);

export default About;
