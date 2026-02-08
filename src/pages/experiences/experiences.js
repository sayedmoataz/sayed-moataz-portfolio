import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaClock,
    FaGraduationCap,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { AppContext } from "../../context/context/context.js";
import data from "../../data/experiences.json";
import projectsData from "../../data/projects.json";
import { ColorButton } from "../../utils/button.js";
import Header from "../../utils/header.js";

const ProjectLink = ({ projectTitle, colors }) => {
  const [open, setOpen] = useState(false);
  const project = projectsData.projects[projectTitle];

  if (!project) return null;

  return (
    <>
      <Stack>
        <Typography
          onClick={() => setOpen(true)}
          fontFamily='"Noto Sans", sans-serif'
          fontSize={{ xs: 13, md: 15 }}
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            color: colors.cold,
            width: "fit-content",
            "&:hover": { color: colors.teal },
          }}
        >
          {project.title}
        </Typography>
        <Typography
          color={colors.light}
          fontSize={{ xs: 12, md: 14 }}
          sx={{ opacity: 0.8, mt: 0.5 }}
        >
          {project.description}
        </Typography>
      </Stack>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#1E1E1EE9",
            boxShadow: `0px 0px 15px 1px ${colors.primary}`,
            color: colors.light,
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            fontFamily='"Noto Sans", sans-serif'
            color={colors.primary}
          >
            {project.title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              color: colors.light,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <Stack spacing={3}>
            <Box
              component="img"
              src={project.thumbnail}
              alt={project.title}
              sx={{
                width: "100%",
                maxHeight: 300,
                objectFit: "contain",
                borderRadius: 1,
              }}
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={2}
            >
              <Box>
                <Typography
                  variant="subtitle2"
                  color={colors.secondary}
                  fontFamily='"Noto Sans", sans-serif'
                >
                  Role / Type
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.light}
                  fontFamily='"Noto Sans", sans-serif'
                >
                  {project.action}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  color={colors.secondary}
                  fontFamily='"Noto Sans", sans-serif'
                >
                  Timeline
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.light}
                  fontFamily='"Noto Sans", sans-serif'
                >
                  {project.start_date} - {project.end_date}
                </Typography>
              </Box>
            </Stack>

            <Box>
              <Typography
                variant="subtitle2"
                color={colors.secondary}
                fontFamily='"Noto Sans", sans-serif'
                mb={1}
              >
                Description
              </Typography>
              <Typography
                variant="body2"
                color={colors.light}
                fontFamily='"Noto Sans", sans-serif'
              >
                {project.description}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                color={colors.secondary}
                fontFamily='"Noto Sans", sans-serif'
                mb={1}
              >
                Technologies
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {project.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: colors.primary,
                      color: colors.dark,
                      fontFamily: '"Noto Sans", sans-serif',
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          {project.link && (
            <ColorButton
              href={project.link}
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <Typography
                mr={0.5}
                fontSize={{ xs: 14, md: 16 }}
                fontFamily='"Noto Sans", sans-serif'
              >
                View Project
              </Typography>
              <LaunchIcon />
            </ColorButton>
          )}
          <Button onClick={() => setOpen(false)} sx={{ color: colors.light }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Utility function to calculate duration between two dates
const calculateDuration = (startDate, endDate) => {
  // Parse date strings (format: "Mon YYYY" or "Present")
  const parseDate = (dateStr) => {
    if (dateStr.toLowerCase() === "present") {
      return new Date();
    }
    // Parse "Mon YYYY" format
    const [month, year] = dateStr.split(" ");
    const monthMap = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    return new Date(parseInt(year), monthMap[month] || 0, 1);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  // Calculate difference in months
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months += end.getMonth() - start.getMonth();

  // Convert to years and months
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  // Format the output
  if (years === 0 && remainingMonths === 0) {
    return "1 month";
  } else if (years === 0) {
    return `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else {
    return `${years} year${years > 1 ? "s" : ""}, ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }
};

const TimelineConnector = ({ isActive, colors }) => (
  <Box
    sx={{
      position: "absolute",
      left: { xs: 15, md: "50%" },
      top: 60,
      bottom: -40,
      width: 3,
      bgcolor: isActive ? colors.primary : "rgba(255, 255, 255, 0.1)",
      transition: "all 0.6s ease-in-out",
      transform: { md: "translateX(-50%)" },
    }}
  />
);

const TimelineDot = ({ isActive, isEducation, colors }) => (
  <Box
    sx={{
      position: "absolute",
      left: { xs: 7, md: "50%" },
      top: 20,
      width: { xs: 18, md: 24 },
      height: { xs: 18, md: 24 },
      borderRadius: "50%",
      bgcolor: isActive
        ? isEducation
          ? colors.secondary
          : colors.primary
        : "rgba(255, 255, 255, 0.2)",
      border: `3px solid ${isActive ? (isEducation ? colors.secondary : colors.teal) : "rgba(255, 255, 255, 0.3)"}`,
      transform: { md: "translateX(-50%)" },
      transition: "all 0.6s ease-in-out",
      boxShadow: isActive
        ? `0 0 20px ${isEducation ? colors.secondary : colors.primary}`
        : "none",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {isActive && (
      <Box
        sx={{
          width: { xs: 6, md: 8 },
          height: { xs: 6, md: 8 },
          borderRadius: "50%",
          bgcolor: colors.light,
          animation: "pulse 2s infinite",
        }}
      />
    )}
  </Box>
);

const ExperienceCard = ({ experience, colors, index, isActive }) => {
  const isEducation = experience.employment_type === "Education";
  const isLeft = index % 2 === 0;
  const duration = calculateDuration(
    experience.start_date,
    experience.end_date,
  );

  return (
    <Box
      data-aos="fade-up"
      sx={{
        position: "relative",
        mb: 6,
        width: "100%",
      }}
    >
      <TimelineDot
        isActive={isActive}
        isEducation={isEducation}
        colors={colors}
      />
      <TimelineConnector isActive={isActive} colors={colors} />

      <Box
        sx={{
          ml: { xs: 5, md: 0 },
          display: "flex",
          justifyContent: {
            xs: "flex-start",
            md: isLeft ? "flex-start" : "flex-end",
          },
          width: "100%",
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "45%" },
            padding: 3,
            border: `2px solid ${isActive ? (isEducation ? colors.secondary : colors.primary) : "rgba(255, 255, 255, 0.1)"}`,
            boxShadow: isActive
              ? `0px 0px 20px 2px ${isEducation ? colors.secondary : colors.primary}`
              : `0px 0px 5px 1px rgba(255, 255, 255, 0.1)`,
            borderRadius: 3,
            bgcolor: isActive ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            transition: "all 0.6s ease-in-out",
            transform: isActive ? "scale(1.02)" : "scale(1)",
            "&:hover": {
              border: `2px solid ${isEducation ? colors.secondary : colors.teal}`,
              boxShadow: `0px 0px 25px 3px ${isEducation ? colors.secondary : colors.teal}`,
              transform: "scale(1.03)",
            },
          }}
        >
          {/* Header Section */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mb={2}
          >
            <Box flex={1}>
              <Typography
                variant="h5"
                fontFamily='"Noto Sans", sans-serif'
                fontWeight={700}
                fontSize={{ xs: 18, md: 22 }}
                sx={{
                  color: isEducation ? colors.secondary : colors.light,
                  mb: 0.5,
                }}
              >
                {experience.job_title}
              </Typography>
              <Typography
                component={experience.company_website ? "a" : "span"}
                href={experience.company_website}
                target="_blank"
                fontFamily='"Noto Sans", sans-serif'
                fontSize={{ xs: 16, md: 18 }}
                sx={{
                  cursor: experience.company_website ? "pointer" : "default",
                  textDecoration: "none",
                  color: colors.cold,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "fit-content",
                  "&:hover": experience.company_website
                    ? { color: colors.teal }
                    : {},
                }}
              >
                {isEducation ? (
                  <FaGraduationCap size={18} />
                ) : (
                  <FaBriefcase size={16} />
                )}
                {experience.company_name}
              </Typography>
            </Box>

            {/* Duration Badge */}
            <Chip
              icon={<FaClock size={14} />}
              label={duration}
              sx={{
                bgcolor: `${isEducation ? colors.secondary : colors.primary}20`,
                color: isEducation ? colors.secondary : colors.primary,
                border: `1px solid ${isEducation ? colors.secondary : colors.primary}`,
                fontFamily: '"Noto Sans", sans-serif',
                fontWeight: 600,
                fontSize: { xs: 11, md: 13 },
                height: "auto",
                py: 0.5,
                "& .MuiChip-icon": {
                  color: isEducation ? colors.secondary : colors.primary,
                },
              }}
            />
          </Stack>

          {/* Meta Information */}
          <Stack spacing={1} mb={2}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
            >
              <Chip
                label={experience.employment_type}
                size="small"
                sx={{
                  bgcolor: `${colors.teal}20`,
                  color: colors.teal,
                  fontFamily: '"Noto Sans", sans-serif',
                  fontSize: { xs: 11, md: 12 },
                  fontWeight: 600,
                }}
              />
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <FaCalendarAlt size={12} color={colors.secondary} />
                <Typography
                  variant="span"
                  fontFamily='"Noto Sans", sans-serif'
                  fontSize={{ xs: 12, md: 13 }}
                  color={colors.secondary}
                >
                  {experience.start_date} - {experience.end_date}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <FaMapMarkerAlt size={12} color={colors.primary} />
              <Typography
                variant="span"
                fontSize={{ xs: 12, md: 13 }}
                fontFamily='"Noto Sans", sans-serif'
                color={colors.primary}
              >
                {experience.location}
              </Typography>
            </Stack>
          </Stack>

          <Divider
            sx={{
              my: 2,
              border: `1px solid ${isActive ? colors.primary : "rgba(255, 255, 255, 0.1)"}`,
            }}
          />

          {/* Description */}
          <Typography
            variant="body2"
            fontFamily='"Noto Sans", sans-serif'
            fontSize={{ xs: 13, md: 15 }}
            lineHeight={1.7}
            color={colors.light}
            sx={{ opacity: 0.9 }}
          >
            {experience.description}
          </Typography>

          {/* Technologies */}
          {experience.technologies_used.length > 0 && (
            <>
              <Typography
                variant="subtitle2"
                mt={2}
                mb={1}
                fontFamily='"Noto Sans", sans-serif'
                fontSize={{ xs: 12, md: 13 }}
                color={colors.secondary}
                fontWeight={600}
              >
                Skills Earned
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {experience.technologies_used.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: colors.primary,
                      color: colors.dark,
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: { xs: 10, md: 12 },
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: colors.teal,
                      },
                    }}
                  />
                ))}
              </Stack>
            </>
          )}

          {/* Relevant Projects */}
          {experience.relevant_projects?.length > 0 && (
            <Stack mt={3} spacing={2}>
              <Typography
                variant="subtitle2"
                fontFamily='"Noto Sans", sans-serif'
                fontSize={{ xs: 12, md: 13 }}
                color={colors.secondary}
                fontWeight={600}
              >
                Relevant Projects
              </Typography>
              {experience.relevant_projects.map((projectTitle, index) => (
                <ProjectLink
                  key={index}
                  projectTitle={projectTitle}
                  colors={colors}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const Experiences = () => {
  const { state } = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px",
      },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Box
      id="Experiences"
      sx={{
        width: "100%",
        pt: { xs: 12, md: 15 },
        pb: { xs: 5, md: 10 },
        px: { xs: 2, md: 5 },
      }}
    >
      <Header color={state.color.light} title="EXPERIENCE" />

      {/* Timeline Container */}
      <Stack
        width="100%"
        sx={{
          position: "relative",
          "@keyframes pulse": {
            "0%, 100%": {
              opacity: 1,
            },
            "50%": {
              opacity: 0.5,
            },
          },
        }}
      >
        {data.data.map((experience, index) => (
          <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <ExperienceCard
              experience={experience}
              colors={state.color}
              index={index}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default Experiences;
