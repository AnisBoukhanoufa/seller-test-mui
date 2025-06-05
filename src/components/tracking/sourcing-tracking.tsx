import { Stepper, Step, StepLabel, Typography, styled } from "@mui/material";
import moment from "moment";
import { EnumSourcingStatus } from "../../statics/enums";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelIcon from '@mui/icons-material/Cancel';
import { t } from "i18next";
import { useContext } from "react";
import { SourcingContext } from "pages/sourcings/single-sourcing/single-sourcing";

// Styled components to replace makeStyles
const CircleIcon = styled('div')(({ theme, status }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: "50%",
  backgroundColor: 
    status === "rejected" ? "red" :
    status === "active" ? "var(--color-main)" :
    status === "completed" ? "green" : 
    "gray", // Default gray background color
  color: "#fff",
}));

const StyledStep = styled(Step)(({ theme, status }) => ({
  ...(status === "rejected" && {
    color: "red"
  }),
  ...(status === "active" && {
    color: "var(--color-main)"
  }),
  ...(status === "completed" && {
    color: "green"
  })
}));

// Define status sets for different categories

const TrackingSourcing = ({ statusData }) => {
  const { sourcingInfo } = useContext(SourcingContext);

  const allStatuses = [
    {
      label: t(EnumSourcingStatus.new),
      key: EnumSourcingStatus.new,
      icon: <NewReleasesIcon />,
    },
    {
      label: t(EnumSourcingStatus.search),
      key: EnumSourcingStatus.search,
      icon: <SearchIcon />,
    },
    {
      label: t(EnumSourcingStatus.payed),
      key: EnumSourcingStatus.payed,
      icon: <LocalAtmIcon />,
    },
    {
      label: t(EnumSourcingStatus.received),
      key: EnumSourcingStatus.received,
      icon: <CheckCircleIcon />,
    },

    {
      label: t(EnumSourcingStatus.shipping),
      key: EnumSourcingStatus.shipping,
      icon: <LocalShippingIcon />,
    },
    {
      label: t(EnumSourcingStatus.delivered),
      key: EnumSourcingStatus.delivered,
      icon: <DoneAllIcon />,
    },
  ];

  let filteredStatuses;
  switch (sourcingInfo?.category) {
    case 350:
      filteredStatuses = [
        {
          label: t(EnumSourcingStatus.new),
          key: EnumSourcingStatus.new,
          icon: <NewReleasesIcon />,
        },
        {
          label: t(EnumSourcingStatus.delivered),
          key: EnumSourcingStatus.delivered,
          icon: <DoneAllIcon />,
        },
      ];
      break;
    case 351:
      filteredStatuses = [
        {
          label: t(EnumSourcingStatus.new),
          key: EnumSourcingStatus.new,
          icon: <NewReleasesIcon />,
        },
        {
          label: t(EnumSourcingStatus.received),
          key: EnumSourcingStatus.received,
          icon: <CheckCircleIcon />,
        },
        {
          label: t(EnumSourcingStatus.shipping),
          key: EnumSourcingStatus.shipping,
          icon: <LocalShippingIcon />,
        },
        {
          label: t(EnumSourcingStatus.delivered),
          key: EnumSourcingStatus.delivered,
          icon: <DoneAllIcon />,
        },
      ];
      break;
    case 352:
      filteredStatuses = allStatuses;
      break;
    default:
      filteredStatuses = allStatuses; // Fallback for any undefined category
  }
  const rejectedStep =
    statusData.findIndex((e) => e.status === EnumSourcingStatus.rejected) - 1;

  const localStatusData = filteredStatuses.map((status) => {
    const existingStatus = statusData?.find((e) => e.status === status.key);
    return {
      label: status.label,
      date: existingStatus
        ? moment(existingStatus.createdAt).format("YYYY-MM-DD")
        : "",
      icon: status.icon,
    };
  });
  let activeStep;

  if (
    localStatusData.length === filteredStatuses.length &&
    localStatusData[filteredStatuses.length - 1]?.date !== ""
  ) {
    activeStep = filteredStatuses.length; // 4 is the correct index for the last step when all steps are completed
  } else {
    activeStep = localStatusData.findIndex((e) => e.date === "") - 1;
  }
  const stepsToRender = [...localStatusData];

  if (
    rejectedStep !== undefined &&
    rejectedStep >= 0 &&
    rejectedStep < stepsToRender.length
  ) {
    stepsToRender.splice(rejectedStep + 1, 0, {
      label: "Rejected",
      date: `${moment(statusData[rejectedStep + 1].createdAt).format(
        "YYYY-MM-DD",
      )}`,
      icon: <CancelIcon />,
    });
  }

  const StepIconComponent = ({ icon, active, completed, label }) => {
    const status = 
      label === "Rejected" ? "rejected" :
      active ? "active" :
      completed ? "completed" : "default";

    return <CircleIcon status={status}>{icon}</CircleIcon>;
  };

  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {stepsToRender.map((status, index) => (
        <StyledStep
          key={index}
          completed={index < activeStep && status.label !== "Rejected"}
          status={
            status.label === "Rejected"
              ? "rejected"
              : index === activeStep
                ? "active"
                : index < activeStep
                  ? "completed"
                  : ""
          }
        >
          <StepLabel
            StepIconComponent={() =>
              StepIconComponent({
                icon: status.icon,
                active: index === activeStep,
                completed: index < activeStep,
                label: status.label,
              })
            }
          >
            <Typography variant="body2">{status.label}</Typography>
            <Typography variant="caption" color="textSecondary">
              {status.date}
            </Typography>
          </StepLabel>
        </StyledStep>
      ))}
    </Stepper>
  );
};

export default TrackingSourcing;
