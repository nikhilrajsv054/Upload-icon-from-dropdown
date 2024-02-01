// App.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomIcons, setSelectedIcon } from "./Redux/actions";
import {
  Select,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import * as Icons from "./icon";
import CustomIconUpload from "./CustomIconUpload";
// import CustomSvgIcon from "./CustomSvgIcon";

const App = () => {
  const dispatch = useDispatch();
  const selectedIcon = useSelector((state) => state.selectedIcon);
  const customIcons = useSelector((state) => state.customIcons);
  // const [fileInputKey, setFileInputKey] = useState(0);

  const handleIconChange = (event) => {
    dispatch(setSelectedIcon(event.target.value));
  };

  const handleFileUpload = (parsedIcon) => {
    dispatch(setCustomIcons([...customIcons, parsedIcon]));
  };

  const allIcons = [
    ...customIcons.map((customIcon, index) => ({
      value: customIcon,
      label: `Custom ${index + 1}`,
      key: index,
    })),
    { value: "home", label: "Home", component: <Icons.HomeIcon /> },
    { value: "phone", label: "Phone", component: <Icons.PhoneIcon /> },
    { value: "arrowDown", label: "Arrow Down", component: <Icons.CheckIcon /> },
  ];

  return (
    <div>
      <CustomIconUpload onFileUpload={handleFileUpload} />
      <ListItem>
        <ListItemIcon>
          <Select
            value={selectedIcon}
            onChange={handleIconChange}
            defaultValue=""
          >
            {allIcons.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </ListItemIcon>
        {/* <ListItemText primary="Selected Icon" /> */}
      </ListItem>

      <div>
        {selectedIcon &&
          (selectedIcon !== null ? (
            <SvgIcon
              component={() => (
                <span dangerouslySetInnerHTML={{ __html: selectedIcon }} />
              )}
            />
          ) : (
            allIcons.find((icon) => icon.value === selectedIcon)?.component ||
            null
          ))}
      </div>
    </div>
  );
};

export default App;
