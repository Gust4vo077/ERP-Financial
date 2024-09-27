// NavBar.tsx
import { useState } from "react";
import { Col } from "antd";
import { Template } from "../../shared";

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const isSelected = (item: string) => selectedItem === item;

  const Titles: string[] = ["Geral", "Tributos", "Quantidade de Entrada", "Quantidade de Saída"];

  return (   
    <Template.Grid.DefaultRow gutter={[60, 25]}>
      {Titles.map((item, index) => (
        <Col 
          key={index} 
          xs={24} 
          sm={12} 
          md={item.includes("Quantidade") ? 8 : 4} 
          lg={item.includes("Quantidade") ? 8 : 4} 
          align="center" 
          className={`text-black text-lg font-sans transition-opacity duration-300 hover:opacity-20 ${isSelected(item) ? 'underline' : ''}`} 
          style={{ whiteSpace: 'nowrap', cursor: 'pointer' }} 
          onClick={() => handleItemClick(item)}
        >
          <p>{item}</p>
        </Col>
      ))}
    </Template.Grid.DefaultRow>
  );
};

export default NavBar;
