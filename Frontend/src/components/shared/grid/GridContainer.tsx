// GridContainer.js
import { Flex } from "antd";

const GridContainer = ({ children }) => {
  return (
    <Flex
      style={{
        width: "100%",
        }}
      justify="center" 
      align="center" 
    >
      {children}
    </Flex>
  );
};

export default GridContainer;
