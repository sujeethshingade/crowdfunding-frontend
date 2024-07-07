import React, { useState, useEffect } from "react";
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
import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const EnlargedText = styled.span`
  transition: font-size 0.3s ease-in-out;
  &:hover {
    font-size: 1.4em;
  }
`;

const SlideInLeft = styled(FormGroup)`
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  &.slide-in-left {
    animation: ${fadeInLeft} 0.5s forwards;
  }
`;

const SlideInRight = styled(FormGroup)`
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  &.slide-in-right {
    animation: ${fadeInRight} 0.5s forwards;
  }
`;

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
    console.log("Submitted campaign:", campaign);
  };

  /*useEffect(() => {
    const formGroups = document.querySelectorAll(".slide-in");
    formGroups.forEach((formGroup, index) => {
      setTimeout(() => {
        formGroup.classList.add("slide-in");
      }, index * 100); // Adjust the delay as needed
    });
  }, []);*/

  return (
    <Form onSubmit={handleSubmit} className="campaign-form">
      <SlideInLeft className="slide-in-left">
        <Label for="name">
          <EnlargedText>
            Campaign Name
          </EnlargedText>
        </Label>
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
      </SlideInLeft>
      <SlideInRight className="slide-in-right">
        <Label for="creator">
          <EnlargedText>
            Creator's Name
          </EnlargedText>
        </Label>
        <Input
          type="text"
          name="creator"
          id="creator"
          placeholder="Enter your Name"
          value={campaign.creator}
          onChange={handleChange}
          required
        />
      </SlideInRight>
      <SlideInLeft className="slide-in-left">
        <Label for="description">
          <EnlargedText>
            Description
          </EnlargedText>
        </Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Enter the Campaign Description"
          value={campaign.description}
          onChange={handleChange}
          required
        />
      </SlideInLeft>
      <SlideInRight className="slide-in-right">
        <Label for="goal">
          <EnlargedText>
            Goal Amount (ETH)
          </EnlargedText>
        </Label>
        <Input
          type="number"
          name="goal"
          id="goal"
          placeholder="Enter the Goal Amount in ETH"
          value={campaign.goal}
          onChange={handleChange}
          required
        />
        <FormText>Set a realistic goal that you can achieve.</FormText>
      </SlideInRight>
      <SlideInLeft className="slide-in-left">
        <Label for="endDate">
          <EnlargedText>
            End Date
          </EnlargedText>
        </Label>
        <Input
          type="date"
          name="endDate"
          id="endDate"
          value={campaign.endDate}
          onChange={handleChange}
          required
        />
        <FormText>Select a date that gives you enough time to reach your goal.</FormText>
      </SlideInLeft>
      <SlideInRight className="slide-in-right">
        <Label for="image">
          <EnlargedText>
            Campaign Image
          </EnlargedText>
        </Label>
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
      </SlideInRight>
      <Button type="submit" color="primary" id="submitBtn">Start Campaign</Button>
      <Tooltip placement="right" isOpen={tooltipOpen} target="submitBtn" toggle={toggleTooltip}>
        Click to Submit your Campaign!
      </Tooltip>
    </Form>
  );
};


const fadeIn1 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedCardHeader = styled(CardHeader)`
  text-align: center;
  font-size: 1.5rem;
  animation: ${fadeIn1} 1s ease-in forwards;
  opacity: 0; 
`;

const CampaignPage = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  return (
    <div className="content">
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="card-plain shadow-lg p-4 rounded">
            <AnimatedCardHeader className={animateHeader ? 'fade-in' : ''}>
              Start Campaign
            </AnimatedCardHeader>
            <CardBody>
              <CampaignForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignPage;