import React from "react";
import { Card, CardHeader, CardBody, Col, Row, Button } from "reactstrap";

// Example data for active campaigns (replace with actual data)
const activeCampaigns = [
  {
    id: 1,
    name: "Campaign 1",
    creator: "Person 1",
    description: "desc 1",
    goal: 1000,
    endDate: "2024-12-31",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Campaign 2",
    creator: "Person 2",
    description: "desc 2",
    goal: 500,
    endDate: "2024-11-30",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Campaign 3",
    creator: "Person 3",
    description: "desc 3",
    goal: 100,
    endDate: "2024-10-31",
    image: "https://via.placeholder.com/150",
  },
  // Add more campaigns as needed
];

const CampaignsGrid = () => {
  return (
    <div className="content">
      <Row className="justify-content-center">
        {activeCampaigns.map((campaign) => (
          <Col md="4" key={campaign.id}>
            <Card className="mb-4">
              <CardHeader>{campaign.name}</CardHeader>
              <CardBody>
                <img src={campaign.image} alt={campaign.name} className="img-fluid mb-3" />
                <p><strong>Creator:</strong> {campaign.creator}</p>
                <p><strong>Description:</strong> {campaign.description}</p>
                <p><strong>Goal:</strong> ${campaign.goal}</p>
                <p><strong>End Date:</strong> {campaign.endDate}</p>
                <Button color="primary">Donate</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CampaignsGrid;
