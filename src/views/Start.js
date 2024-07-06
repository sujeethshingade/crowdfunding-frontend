import React from "react";
import { Card, CardHeader, CardBody, Col, Row, Button, Progress } from "reactstrap";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const activeCampaigns = [
  {
    id: 1,
    name: "Help Rebuild Homes After the Wildfire Disaster in Southern California",
    creator: "Sarah Thompson",
    description: "Our community has been devastated by a recent wildfire, leaving many families without homes. We are seeking your support to help rebuild these homes and restore hope to those affected. Your contributions will go towards construction materials, labor costs, transportation and essential household items. Let's come together and make a difference!",
    goal: 4.20,
    collected: 3.5,
    endDate: "2024-09-30",
    image: process.env.PUBLIC_URL + "/campaign-01.jpg",
    donations: [
      { date: "2024-01-01", amount: 0.0 },
      { date: "2024-01-18", amount: 0.27 },
      { date: "2024-02-05", amount: 0.71 },
      { date: "2024-02-28", amount: 1.1 },
      { date: "2024-03-05", amount: 1.2 },
      { date: "2024-03-16", amount: 1.4 },
      { date: "2024-04-07", amount: 1.95 },
      { date: "2024-04-19", amount: 2.4 },
      { date: "2024-04-30", amount: 2.6 },
      { date: "2024-05-02", amount: 2.75 },
      { date: "2024-06-01", amount: 3.09 },
      { date: "2024-06-21", amount: 3.36 },
      { date: "2024-07-07", amount: 3.5 },
    ],
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
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateProgress = (collected, goal) => {
    return Math.min((collected / goal) * 100, 100);
  };

  const campaign = activeCampaigns[0];

  const chartData = {
    labels: campaign.donations.map((donation) => formatDate(donation.date)),
    datasets: [
      {
        label: "Amount Collected in ETH",
        data: campaign.donations.map((donation) => donation.amount),
        fill: false,
        borderColor: "rgb(255, 78, 202)",
        tension: 0.1,
        borderWidth: 3,
        pointRadius: 3,
        pointBackgroundColor: "rgba(255, 78, 202, 0.8)",
        pointBorderColor: "rgb(255, 78, 202)",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "rgba(255, 78, 202, 1)",
        pointHoverBorderColor: "rgba(255, 78, 202, 1)",
        pointHoverBorderWidth: 2,
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        shadowBlur: 20,
        shadowColor: "rgba(255, 78, 202, 0.5)",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
          color: '#555',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'ETH Collected',
          color: '#555',
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        shadow: true,
      },
      point: {
        radius: 5,
        backgroundColor: 'rgba(255, 78, 202, 1)',
        borderColor: 'rgba(255, 78, 202, 1)',
        hoverRadius: 7,
        hoverBorderWidth: 2,
      },
    },
  };

  return (
    <div className="content">
      <Row>
        <Col md="6" lg="4">
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
        <Col md="6" lg="8">
          <StyledCard className="mb-4">
            <StyledCardHeader className="text-center">
              Campaign Analytics
            </StyledCardHeader>
            <StyledCardBody>
              <Line data={chartData} options={chartOptions} />
            </StyledCardBody>
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignsGrid;