import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiTarget, FiUserCheck } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const cards = [
  {
    title: 'Mindset Rewiring',
    text: 'Transform limiting thought loops into empowering mental patterns for daily growth.',
    icon: <FiTarget />,
  },
  {
    title: 'Emotional Balance',
    text: 'Build calm responses and emotional regulation with practical NLP-based methods.',
    icon: <FiHeart />,
  },
  {
    title: 'Confidence Recovery',
    text: 'Strengthen self-image, communication, and personal courage with guided coaching.',
    icon: <FiUserCheck />,
  },
];

const NLPServicesPreview = () => {
  return (
    <Section>
      <div className="container">
        <Header>
          <Label>NLP Preview</Label>
          <Title>Neuro-Linguistic Programming Services</Title>
          <Description>
            A focused coaching path for mindset healing, emotional clarity, and confident living.
          </Description>
        </Header>

        <Grid>
          {cards.map((item) => (
            <Card
              key={item.title}
              as={motion.div}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.48 }}
            >
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </Grid>

        <Actions>
          <CTA to="/nlp">
            Explore NLP Page <FiArrowRight />
          </CTA>
        </Actions>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 5rem 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 4rem 0;
  }

  @media (max-width: 390px) {
    padding: 3rem 0;
  }
`;

const Header = styled.div`
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const Label = styled.p`
  margin: 0 0 0.8rem;
  color: #F5C5CA;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
`;

const Title = styled.h2`
  margin: 0 0 0.7rem;
  color: #3A1F23;
  font-size: clamp(2rem, 4vw, 3.1rem);
  line-height: 1.15;
`;

const Description = styled.p`
  margin: 0;
  color: rgba(33, 55, 26, 0.85);
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid rgba(206, 197, 173, 0.3);
  border-radius: ${theme.borderRadius.xl};
  padding: 1.7rem 1.4rem;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.md};
  }
`;

const Icon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #3A1F23;
  background: rgba(206, 197, 173, 0.35);
  margin-bottom: 0.85rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.55rem;
  color: #3A1F23;
  font-size: 1.35rem;
`;

const CardText = styled.p`
  margin: 0;
  color: rgba(33, 55, 26, 0.84);
  font-size: 0.95rem;
  line-height: 1.7;
`;

const Actions = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const CTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: ${theme.borderRadius.full};
  padding: 0.85rem 1.7rem;
  color: white;
  background: linear-gradient(135deg, #C25964 0%, #D4848C 100%);
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 4px 16px rgba(194, 89, 100, 0.22);
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(163, 64, 75, 0.3);
  }
`;

export default NLPServicesPreview;
