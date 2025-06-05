import { useCallback, useState } from "react";

const useCheckBox = () => {
  const [checked, setChecked] = useState(false);

  const handleToggleCheckBox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    },
    [] // No dependencies, so it will only be created once
  );

  const clearCheckBox = useCallback(() => {
    setChecked(false);
  }, []); // No dependencies, so it will only be created once

  return {
    checked,
    setChecked,
    handleToggleCheckBox,
    clearCheckBox,
  };
};
export default useCheckBox;
