// import React, { useState } from "react";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   Box,
// } from "@mui/material";
// import { useForm } from "react-hook-form";

// const steps = ["Personal Information", "Contact Information", "Confirmation"];

// const MultiStepForm = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [formData, setFormData] = useState({});

//   const handleNext = (data) => {
//     setFormData({ ...formData, ...data });
//     setActiveStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   const handleConfirm = () => {
//     console.log("Final Data:", formData);
//     // Handle final form submission
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <form onSubmit={handleSubmit(handleNext)}>
//             <Typography variant="h6">
//               Enter your personal information:
//             </Typography>
//             <input
//               {...register("firstname", { required: "First name is required" })}
//               placeholder="First Name"
//             />
//             {errors.firstname && <p>{errors.firstname.message}</p>}
//             <input
//               {...register("lastname", { required: "Last name is required" })}
//               placeholder="Last Name"
//             />
//             {errors.lastname && <p>{errors.lastname.message}</p>}
//             <Button type="submit">Next</Button>
//           </form>
//         );
//       case 1:
//         return (
//           <form onSubmit={handleSubmit(handleNext)}>
//             <Typography variant="h6">
//               Enter your contact information:
//             </Typography>
//             <input
//               {...register("email", { required: "Email is required" })}
//               placeholder="Email"
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//             <input
//               {...register("phone", { required: "Phone is required" })}
//               placeholder="Phone"
//             />
//             {errors.phone && <p>{errors.phone.message}</p>}
//             <Button type="submit">Next</Button>
//           </form>
//         );
//       case 2:
//         return (
//           <Box>
//             <Typography variant="h6">Confirm your information:</Typography>
//             <Typography>First Name: {formData.firstname}</Typography>
//             <Typography>Last Name: {formData.lastname}</Typography>
//             <Typography>Email: {formData.email}</Typography>
//             <Typography>Phone: {formData.phone}</Typography>
//             <Button onClick={handleConfirm}>Submit</Button>
//             <Button onClick={handleBack}>Back</Button>
//           </Box>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="register_container">
//       <div className="register-form-container">
//         <h2> {t("register")}</h2>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <Box>{renderStepContent(activeStep)}</Box>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;
