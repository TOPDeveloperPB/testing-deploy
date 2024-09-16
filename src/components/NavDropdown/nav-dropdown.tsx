import React from "react";
import ServicesDropdown from "./servicesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import CompanyDropdown from "./companyDropdown";
import SolutionDropdown from "./solutionsDropdown";


interface NavDropdownProps {
  type: 'services' | 'solutions' | 'industries' | 'company';
}

const NavDropdown: React.FC<NavDropdownProps> = ({ type }) => {
  switch (type) {
    case 'services':
      return <ServicesDropdown />;
    case 'solutions':
      return <SolutionDropdown />;
    case 'industries':
      return <IndustriesDropdown />;
    case 'company':
      return <CompanyDropdown />;
    default:
      return null;
  }
};

export default NavDropdown;
