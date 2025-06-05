import { TextField } from "@mui/material";

interface items {
  item: any;
}
export default function SidebarItem(props: any) {
  return (
    <div>
      <TextField
        // fullWidth
        id={props.id}
        type={props.type}
        label={props.lable}
        variant="outlined"
        onChange={props.onChange}
      />
    </div>
  );
}
