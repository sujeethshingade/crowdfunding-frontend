import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Tooltip,
} from "reactstrap";

const CampaignForm = () => {
  const [campaign, setCampaign] = useState({
    name: "",
    creator: "",
    description: "",
    goal: "",
    endDate: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setCampaign({ ...campaign, image: file });
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      }
    } else {
      setCampaign({ ...campaign, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server, update state)
    console.log("Submitted campaign:", campaign);
  };

  return (
    <Form onSubmit={handleSubmit} className="campaign-form">
      <FormGroup>
        <Label for="name">Campaign Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the Campaign Name"
          value={campaign.name}
          onChange={handleChange}
          required
        />
        <FormText>Make it catchy and descriptive!</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="creator">Creator's Name</Label>
        <Input
          type="text"
          name="creator"
          id="creator"
          placeholder="Enter your Name"
          value={campaign.creator}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Enter the Campaign Description"
          value={campaign.description}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="goal">Goal Amount</Label>
        <Input
          type="number"
          name="goal"
          id="goal"
          placeholder="Enter the Goal Amount"
          value={campaign.goal}
          onChange={handleChange}
          required
        />
        <FormText>Set a realistic goal that you can achieve.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="endDate">End Date</Label>
        <Input
          type="date"
          name="endDate"
          id="endDate"
          value={campaign.endDate}
          onChange={handleChange}
          required
        />
        <FormText>Select a date that gives you enough time to reach your goal.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="image">Campaign Image</Label>
        <Input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleChange}
        />
        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        <FormText color="muted" style={{ textDecoration: 'underline' }}>
          Upload an image
        </FormText>
      </FormGroup>
      <Button type="submit" color="primary" id="submitBtn">Start Campaign</Button>
      <Tooltip placement="right" isOpen={tooltipOpen} target="submitBtn" toggle={toggleTooltip}>
        Click to Submit your Campaign!
      </Tooltip>
    </Form>
  );
};

function CampaignPage() {
  return (
    <div className="content">
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="card-plain shadow-lg p-4 rounded">
            <CardHeader className="text-center h4">Start Campaign</CardHeader>
            <CardBody>
              <CampaignForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CampaignPage;
