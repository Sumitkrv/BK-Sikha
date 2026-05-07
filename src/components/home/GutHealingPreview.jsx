import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const cards = [
  {
    title: 'Digestive Reset',
    text: 'Correct eating rhythm and reduce bloating with a practical healing foundation.',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=900&auto=format&fit=crop&q=80',
  },
  {
    title: 'Nutrition Personalization',
    text: 'Build symptom-based meal patterns that match your body and lifestyle.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mind-Gut Balance',
    text: 'Support deep gut healing with stress regulation, breathwork, and nervous-system calm.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=900&auto=format&fit=crop&q=80',
  },
];

const GutHealingPreview = () => {
  return (
    <Section>
      <div className="container">
        <Header>
          <Label>Gut Healing Preview</Label>
          <Title>Gut Missing · Gut Health Healing Programs</Title>
          <Description>
            Healthcare-inspired wellness support for digestion, inflammation recovery, and long-term balance.
          </Description>
        </Header>

        <Grid>
          {cards.map((item) => (
            <Card
              key={item.title}
              as={motion.div}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-35px' }}
              transition={{ duration: 0.5 }}
            >
              <CardImage src={item.image} alt={item.title} loading="lazy" />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.text}</CardText>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <Actions>
          <CTA to="/gut-missing">
            Explore Gut Healing Page <FiArrowRight />
          </CTA>
        </Actions>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 0;
  background: ${theme.colors.background};

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
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3rem;
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
  line-height: 1.8;
  color: rgba(33, 55, 26, 0.85);
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
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  border: 1px solid rgba(206, 197, 173, 0.28);
  background: white;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.md};
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.25rem 1.2rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: #3A1F23;
  font-size: 1.35rem;
`;

const CardText = styled.p`
  margin: 0;
  color: rgba(33, 55, 26, 0.84);
  line-height: 1.7;
  font-size: 0.95rem;
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

export default GutHealingPreview;
