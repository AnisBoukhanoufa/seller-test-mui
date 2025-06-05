import AutocompleteInputComponent from "components-v1/autocomplete-input/autocomplete-input";
import MultiAutocompleteInputComponent from "components-v1/autocomplete-input/multiple-autocomplete-input";
import RadioComponent from "components-v1/radio";
import TextFieldComponent from "components-v1/text-field";
import {
  monthlyIncome,
  nicheOptions,
  sellerCapital,
  YesNoOptions,
} from "constants/constants";
import { EnumBank } from "constants/enums";
import { Box } from "@mui/material";
import MarketSelectorComponent from "../market-selector/market-selector";
import { useFormContext } from "react-hook-form";
import { t } from "i18next";
import { useEffect } from "react";

export default function AdditionalInfoStep() {
  const { watch, unregister } = useFormContext();

  // Watch the isPracticingCOD field to conditionally render content
  const isPracticingEcommerce = watch("isPracticingCOD");
  useEffect(() => {
    const dependOnPracticing = [
      "dailyOrderRate",
      "monthlyBusinessRate",
      "niche",
      "market",
    ];
    if (isPracticingEcommerce === "false") {
      dependOnPracticing.forEach((field) => {
        unregister(field);
      });
    }
  }, [isPracticingEcommerce]);

  return (
    <div className="flex flex-col gap-8">
      <RadioComponent
        name="isPracticingCOD"
        label="Do you practice ecommerce?"
        rules={{ required: `this field is required` }}
        options={YesNoOptions}
      />

      {isPracticingEcommerce === "true" && (
        <div className="is-practice-cod-infos ml-3 flex flex-col gap-4 ">
          <TextFieldComponent
            name="dailyOrderRate"
            label="Average Order Daily"
            rules={{ required: `Average Order Daily is required` }}
            direction="row"
            type="number"
            size="small"
            placeholder="1,000"
            icon={
              <Box
                sx={{
                  color: "black",
                }}
              >
                Order
              </Box>
            }
          />

          <AutocompleteInputComponent
            name="monthlyBusinessRate"
            label="Monthly Income"
            options={monthlyIncome}
            placeholder="Monthly Income"
            direction="row"
            size="small"
            rules={{ required: "Monthly Income is required" }}
          />

          <MultiAutocompleteInputComponent
            name="niche"
            label="Niche"
            options={nicheOptions}
            placeholder="Select Your Niche"
            rules={{ required: "Please select at least one niche" }}
            direction="row"
            size="small"
          />

          <MarketSelectorComponent
            name="market"
            label="Which market do you practice ecommerce?"
          />
        </div>
      )}

      <RadioComponent
        name="hasAnOnlineStore"
        label="Do you have an online store?"
        rules={{ required: `this field is required` }}
        options={YesNoOptions}
      />

      <RadioComponent
        name="hasBM"
        label="Do you have Business Manager?"
        rules={{ required: `this field is required` }}
        options={YesNoOptions}
      />

      <MultiAutocompleteInputComponent
        name="bankCard"
        label="Bank Card"
        options={Object.values(EnumBank).map((card) => ({
          value: card,
          label: t(String(card)) ?? "",
        }))}
        placeholder="Select your cards"
        rules={{ required: "Please select at least one country" }}
      />
      <AutocompleteInputComponent
        name="capital"
        label="Capital"
        options={sellerCapital}
        placeholder="Capital"
        direction="column"
        size="medium"
        rules={{ required: "Capital is required" }}
      />
      <TextFieldComponent
        name="message"
        label="message"
        placeholder="Leave a message"
      />
    </div>
  );
}
