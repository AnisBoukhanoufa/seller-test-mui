import { Box } from "@mui/material";
import ConfirmInfoSection from "../confirm-info-section";
import { useFormContext } from "react-hook-form";
import { t } from "i18next";
// import { useFormContext } from "react-hook-form";

export default function ConfirmInfoStep() {
  const { watch } = useFormContext();
  const personalInfo: { label: string; value: string | null | undefined }[] = [
    { label: "first name", value: watch("firstName") },
    { label: "last name", value: watch("lastName") },
    { label: "email", value: watch("email") },
    { label: "phone 1", value: watch("phone1") },
    { label: "phone 2", value: watch("phone2") },
  ];
  const addressInfo: { label: string; value: string | null | undefined }[] = [
    { label: "country", value: watch("country") },
    { label: "city", value: watch("city") },
    { label: "district", value: watch("district") },
    { label: "address 1", value: watch("address") },
    { label: "address 2", value: watch("altAddress") },
  ];
  const additionalInfo: { label: string; value: string | null | undefined }[] =
    [
      // { label: "role", value: watch("country") },
      {
        label: "do you practice e-commerce ?",
        value: watch("isPracticingCOD"),
      },
      { label: "average order daily", value: watch("dailyOrderRate") },
      { label: "monthly income", value: watch("monthlyBusinessRate") },
      { label: "niche", value: watch("niche") },
      {
        label: "market",
        value: watch("market")?.filter((market: string) => market !== "Other"),
      },
      {
        label: "do you have an online store ?",
        value: watch("hasAnOnlineStore"),
      },
      { label: "do you have abusiness manager ?", value: watch("hasBM") },
      { label: "bank card", value: watch("bankCard").map((item:number) => t(item)) },
      { label: "capital", value: watch("capital") },
      { label: "message", value: watch("message") },
    ];

  return (
    <Box className="flex flex-col gap-7">
      <ConfirmInfoSection title={"personal info"} infos={personalInfo} />
      <ConfirmInfoSection title={"address info"} infos={addressInfo} />
      <ConfirmInfoSection
        title={"additional info"}
        infos={additionalInfo}
        direction="column"
      />
    </Box>
  );
}
