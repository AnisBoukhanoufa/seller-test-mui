import AutocompleteInputComponent from "components-v1/autocomplete-input/autocomplete-input";
import TextFieldComponent from "components-v1/text-field";
import { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import { useFormContext } from "react-hook-form";
import { getCommunes, getWilayas } from "utils/wilayas";

type wilayaType =
  | {
      id: string;
      value: string;
      label: string;
    }
  | null
  | undefined;

export default function AddressInfoStep() {
  const { watch } = useFormContext(); // To watch the password field for confirm password validation

  // const [wilayas, setWilayas] = useState([]);
  const [towns, setTowns] = useState<{ value: string; label: string }[]>([]);

  const countries = useMemo(() => {
    const countries = countryList().getData();
    return countries.map((country: { value: string; label: string }) => ({
      value: country.label,
      label: country.label,
    }));
  }, []);

  const wilayas = useMemo(() => {
    const wilayas = getWilayas;
    return wilayas.map((wilaya) => ({
      label: wilaya.name,
      value: wilaya.name,
      id: wilaya.id,
    }));
  }, []);
  //handle wilayas
  const watchedCity = watch("city");
  const [selectedWilaya, setSelectedWilaya] = useState<wilayaType>(
    watchedCity ? wilayas.find((wilaya) => watchedCity === wilaya.value) : null
  );

  //
  const watchedCountry = watch("country"); // Watch the "country" field
  useEffect(() => {
    if (selectedWilaya?.id) {
      const allCommunesDetails = getCommunes(selectedWilaya?.id).map(
        (commune) => ({
          label: commune,
          value: commune,
        })
      );
      setTowns(allCommunesDetails);
    } else {
      setTowns([]);
    }
  }, [selectedWilaya?.id]);

  const onWilayaChange = (selectedWilaya: wilayaType) => {
    setSelectedWilaya(selectedWilaya);
  };
  return (
    <div className="flex flex-col gap-4">
      <AutocompleteInputComponent
        name="country"
        label="Country"
        rules={{ required: `Country is required` }}
        options={countries} // Add more countries as needed
      />

      {watchedCountry === "Algeria" ? (
        <div className="flex gap-4">
          <AutocompleteInputComponent
            name="city"
            label="Wilaya"
            rules={{ required: `Wilaya is required` }}
            options={wilayas} // Add more countries as needed
            onChange={onWilayaChange}
          />
          <AutocompleteInputComponent
            name="district"
            label="Town"
            rules={{ required: `Town is required` }}
            options={towns} // Add more countries as needed
          />
        </div>
      ) : (
        <div className="flex gap-4">
          <TextFieldComponent
            name="city"
            label="City"
            rules={{ required: `City is required` }}
          />
          <TextFieldComponent
            name="district"
            label="District"
            rules={{ required: `District is required` }}
          />
        </div>
      )}
      <TextFieldComponent
        name="address"
        label="Address 01"
        rules={{ required: `Address is required` }}
      />
      <TextFieldComponent name="altAddress" label="address 02 (Optional)" />
    </div>
  );
}
