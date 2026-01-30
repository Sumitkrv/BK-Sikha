import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronDown,
  FiHeart,
  FiSun,
  FiMoon,
  FiFeather,
  FiUsers,
  FiBook,
  FiAward,
  FiStar,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ShiftingDropDown = ({ isScrolled }) => {
  return <Tabs isScrolled={isScrolled} />;
};

const Tabs = ({ isScrolled }) => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <TabsWrapper
      onMouseLeave={() => handleSetSelected(null)}
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            isScrolled={isScrolled}
            link={t.link}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </TabsWrapper>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected, isScrolled, link }) => {
  return (
    <TabButton
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      $isActive={selected === tab}
      $isScrolled={isScrolled}
    >
      <span>{children}</span>
      <FiChevronDown
        style={{
          transition: "transform 0.2s ease",
          transform: selected === tab ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </TabButton>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <ContentWrapper
      as={motion.div}
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div style={{ overflow: "hidden" }} key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </ContentWrapper>
  );
};

const Bridge = () => (
  <div style={{
    position: "absolute",
    top: "-24px",
    left: 0,
    right: 0,
    height: "24px",
  }} />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <NubElement
      as={motion.span}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />
  );
};

// Services Dropdown Content
const Services = () => {
  return (
    <DropdownContent>
      <DropdownGrid>
        <DropdownColumn>
          <DropdownHeading>
            <FiSun style={{ color: theme.colors.accent }} />
            Yoga Programs
          </DropdownHeading>
          <DropdownLink to="/services">Hatha Yoga</DropdownLink>
          <DropdownLink to="/services">Vinyasa Flow</DropdownLink>
          <DropdownLink to="/services">Meditation Classes</DropdownLink>
        </DropdownColumn>
        <DropdownColumn>
          <DropdownHeading>
            <FiMoon style={{ color: theme.colors.accent }} />
            Wellness
          </DropdownHeading>
          <DropdownLink to="/services">Stress Management</DropdownLink>
          <DropdownLink to="/services">Mindfulness Training</DropdownLink>
          <DropdownLink to="/services">Breathwork Sessions</DropdownLink>
        </DropdownColumn>
        <DropdownColumn>
          <DropdownHeading>
            <FiFeather style={{ color: theme.colors.accent }} />
            Special Programs
          </DropdownHeading>
          <DropdownLink to="/services">Corporate Wellness</DropdownLink>
          <DropdownLink to="/services">Private Sessions</DropdownLink>
          <DropdownLink to="/services">Retreats</DropdownLink>
        </DropdownColumn>
      </DropdownGrid>

      <ViewMoreButton to="/services">
        <span>View All Services</span>
        <FiArrowRight />
      </ViewMoreButton>
    </DropdownContent>
  );
};

// About Dropdown Content
const About = () => {
  return (
    <DropdownContent>
      <AboutGrid>
        <AboutCard to="/about">
          <AboutCardIcon>
            <FiHeart />
          </AboutCardIcon>
          <AboutCardTitle>Our Story</AboutCardTitle>
          <AboutCardText>Discover the journey behind BK Shikha's wellness mission</AboutCardText>
        </AboutCard>
        <AboutCard to="/philosophy">
          <AboutCardIcon>
            <FiUsers />
          </AboutCardIcon>
          <AboutCardTitle>Philosophy</AboutCardTitle>
          <AboutCardText>Learn about our holistic approach to health & wellbeing</AboutCardText>
        </AboutCard>
        <AboutCard to="/portfolio">
          <AboutCardIcon>
            <FiAward />
          </AboutCardIcon>
          <AboutCardTitle>Portfolio</AboutCardTitle>
          <AboutCardText>Explore our transformative programs and success stories</AboutCardText>
        </AboutCard>
      </AboutGrid>
    </DropdownContent>
  );
};

// Blog Dropdown Content
const Blog = () => {
  return (
    <DropdownContent>
      <BlogGrid>
        <BlogCard to="/blog">
          <BlogImage 
            src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&auto=format&fit=crop&q=100"
            alt="Morning Yoga Practice"
          />
          <BlogCardContent>
            <BlogCardTitle>The Power of Morning Yoga</BlogCardTitle>
            <BlogCardText>
              Discover how starting your day with yoga can transform your energy and mindset.
            </BlogCardText>
          </BlogCardContent>
        </BlogCard>
        <BlogCard to="/blog">
          <BlogImage 
            src="https://images.unsplash.com/photo-1528319725582-ddc096101511?w=800&auto=format&fit=crop&q=100"
            alt="Meditation Benefits"
          />
          <BlogCardContent>
            <BlogCardTitle>Meditation for Beginners</BlogCardTitle>
            <BlogCardText>
              A simple guide to starting your meditation journey with practical tips.
            </BlogCardText>
          </BlogCardContent>
        </BlogCard>
      </BlogGrid>
      <ViewMoreButton to="/blog">
        <span>Read More Articles</span>
        <FiArrowRight />
      </ViewMoreButton>
    </DropdownContent>
  );
};

const TABS = [
  {
    title: "Services",
    Component: Services,
    link: "/services",
  },
  {
    title: "About",
    Component: About,
    link: "/about",
  },
  {
    title: "Blog",
    Component: Blog,
    link: "/blog",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

// Styled Components

const TabsWrapper = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  gap: 0.5rem;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  border-radius: 9999px;
  font-family: ${theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 400;
  background: ${props => props.$isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  color: ${props => props.$isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 24px);
  width: 480px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    ${theme.colors.backgroundAlt} 0%,
    ${theme.colors.background} 100%
  );
  border: 1px solid rgba(139, 115, 85, 0.15);
  padding: 1.25rem;
  box-shadow: 
    0 20px 50px rgba(74, 74, 74, 0.15),
    0 10px 20px rgba(74, 74, 74, 0.08);
`;

const NubElement = styled.span`
  position: absolute;
  left: 50%;
  top: 0;
  height: 16px;
  width: 16px;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  border-radius: 4px 0 0 0;
  border-left: 1px solid rgba(139, 115, 85, 0.15);
  border-top: 1px solid rgba(139, 115, 85, 0.15);
  background: ${theme.colors.backgroundAlt};
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
`;

const DropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DropdownHeading = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 0.375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DropdownLink = styled(Link)`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: ${theme.colors.textLight};
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ViewMoreButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  margin-top: 0.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.accent};
  text-decoration: none;
  transition: gap 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${theme.colors.accentDark};
    gap: 0.75rem;
  }
`;

// About Section Styles
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const AboutCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0.75rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(139, 115, 85, 0.05);
    transform: translateY(-2px);
  }
`;

const AboutCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(212, 165, 116, 0.15);
  color: ${theme.colors.accent};
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
`;

const AboutCardTitle = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.textDark};
  margin-bottom: 0.25rem;
`;

const AboutCardText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  color: ${theme.colors.textLight};
  line-height: 1.4;
`;

// Blog Section Styles
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 74, 74, 0.1);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const BlogCardContent = styled.div`
  padding: 0.75rem 0;
`;

const BlogCardTitle = styled.h4`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.textDark};
  margin-bottom: 0.25rem;
  line-height: 1.3;
`;

const BlogCardText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  color: ${theme.colors.textLight};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default ShiftingDropDown;
