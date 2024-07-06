import React from "react";
import styled from "styled-components";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Typography from "views/Typography";

const EnlargedText = styled.span`
  transition: font-size 0.3s ease-in-out;
  &:hover {
    font-size: 1.4em;
  }
`;

const routes = [
  {
    path: "/explore-campaigns",
    name: (
      <EnlargedText>
        Explore Campaigns
      </EnlargedText>
    ),
    icon: "tim-icons icon-chart-pie-36",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/my-campaigns",
    name: (
      <EnlargedText>
        My Campaigns
      </EnlargedText>
    ),
    icon: "tim-icons icon-atom",
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "/start-campaign",
    name: (
      <EnlargedText>
        Start Campaign
      </EnlargedText>
    ),
    icon: "tim-icons icon-pin",
    component: <Map />,
    layout: "/admin",
  },
];

export default routes;