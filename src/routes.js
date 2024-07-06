import React from "react";
import styled from "styled-components";
import Explore from "views/Explore.js";
import My from "views/My.js";
import Start from "views/Start";

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
    component: <Explore />,
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
    component: <Start />,
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
    component: <My />,
    layout: "/admin",
  },
];

export default routes;