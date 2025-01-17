import React from "react";
import { Card, CardHeader, CardBody, Col, Row, Button, Progress } from "reactstrap";
import styled from "styled-components";

const activeCampaigns = [
  {
    id: 1,
    name: "Help Rebuild Homes After the Wildfire Disaster in Southern California",
    creator: "Sarah Thompson",
    description: "Our community has been devastated by a recent wildfire, leaving many families without homes. We are seeking your support to help rebuild these homes and restore hope to those affected. Your contributions will go towards construction materials, labor costs, transportation and essential household items. Let's come together and make a difference!",
    goal: 4.20,
    collected: 3.5,
    endDate: "2024-9-30",
    image: process.env.PUBLIC_URL + "/campaign-01.jpg",
  },
  {
    id: 2,
    name: "Empower Women in Rural Areas with Sustainable Farming",
    creator: "Maria Lopez",
    description: "We aim to empower women in rural areas by providing them with the resources and training needed to start sustainable farming businesses. This initiative will help create jobs, promote environmental sustainability, and improve the overall quality of life in these communities. Your support will fund training programs, equipment, and seeds for these aspiring entrepreneurs.",
    goal: 1.69,
    collected: 0.35,
    endDate: "2024-10-15",
    image: process.env.PUBLIC_URL + "/campaign-02.jpg",
  },
  {
    id: 3,
    name: "Innovate Education with Virtual Reality Classrooms",
    creator: "David Nguyen",
    description: "We are revolutionizing education by introducing virtual reality (VR) classrooms to schools in underserved areas. This cutting-edge technology will provide students with immersive learning experiences, making education more engaging and effective. Your donations will help us purchase VR equipment, develop educational content, and train teachers to integrate VR into their classrooms.",
    goal: 2.47,
    collected: 1.20,
    endDate: "2024-11-10",
    image: process.env.PUBLIC_URL + "/campaign-03.jpg",
  },
];

const StyledParagraph = styled.p`
  margin-bottom: 10px;
  text-align: justify;
`;

const StyledCardHeader = styled(CardHeader)`
  font-weight: bold;
`;

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
`;

const BoldLabel = styled.span`
  font-weight: bold;
`;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 10px 20px rgba(128, 0, 128, 0.5);
  }
`;


const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const CampaignsGrid = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateProgress = (collected, goal) => {
    return Math.min((collected / goal) * 100, 100);
  };

  return (
    <div className="content">
      <Row className="justify-content-center">
        {activeCampaigns.map((campaign) => (
          <Col md="6" lg="4" key={campaign.id}>
            <StyledCard className="mb-4">
              <StyledCardHeader className="text-center">
                {campaign.name}
              </StyledCardHeader>
              <StyledCardBody>
                <img
                  src={campaign.image}
                  alt={campaign.name}
                  className="img-fluid mb-3 rounded"
                />
                <div>
                  <StyledParagraph>
                    <BoldLabel>Creator: </BoldLabel>{campaign.creator}
                  </StyledParagraph>
                  <StyledParagraph>
                    <BoldLabel>Description: </BoldLabel>{campaign.description}
                  </StyledParagraph>
                  <StyledParagraph>
                    <BoldLabel>End Date: </BoldLabel>{formatDate(campaign.endDate)}
                  </StyledParagraph>
                  <StyledParagraph>
                    <BoldLabel>Goal: </BoldLabel>{campaign.goal.toLocaleString()} ETH
                  </StyledParagraph>
                  <StyledParagraph>
                    <BoldLabel>Collected: </BoldLabel>{campaign.collected.toLocaleString()} ETH
                  </StyledParagraph>
                  <Progress value={calculateProgress(campaign.collected, campaign.goal)} />
                </div>
                <StyledButton color="primary" block>
                  Donate
                </StyledButton>
              </StyledCardBody>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CampaignsGrid;