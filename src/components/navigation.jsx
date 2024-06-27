import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import DropDown from "./DropDown";
import ExpertiesDropDown from "./ExpertiesDropDown";
import ServicesDropDown from "./ServicesDropDown";
export const Navigation = (props) => {
  const theme = useContext(ThemeContext);
  const [isCompanyDropdownVisible, setCompanyDropdownVisible] = useState(false);
  const [isExpertiesDropdownVisible, setExpertiesDropdownVisible] =
    useState(false);
  const [isServicesDropdownVisible, setServicesDropdownVisible] =
    useState(false);

  const handleCompanyMouseEnter = () => {
    setCompanyDropdownVisible(true);
  };

  const handleCompanyMouseLeave = () => {
    setCompanyDropdownVisible(false);
  };

  const handleExpertiesMouseEnter = () => {
    setExpertiesDropdownVisible(true);
  };

  const handleExpertiesMouseLeave = () => {
    setExpertiesDropdownVisible(false);
  };
  const handleServicesMouseEnter = () => {
    setServicesDropdownVisible(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesDropdownVisible(false);
  };
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{
        backgroundColor: theme.primary,
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ color: theme.whitecolor }}
          >
            CONVAITE
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li
              onMouseEnter={handleCompanyMouseEnter}
              onMouseLeave={handleCompanyMouseLeave}
              style={{ position: "relative" }}
            >
              <a
                // href="#features"
                href="#"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                Comapny
              </a>
              {isCompanyDropdownVisible && <DropDown />}
            </li>

            <li
              onMouseEnter={handleExpertiesMouseEnter}
              onMouseLeave={handleExpertiesMouseLeave}
              style={{ position: "relative" }}
            >
              <a
                href="#"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                Experties
              </a>
              {isExpertiesDropdownVisible && <ExpertiesDropDown />}
            </li>
            <li
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              style={{ position: "relative" }}
            >
              <a
                href="#portfolio"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                Services
              </a>
              {isServicesDropdownVisible && <ServicesDropDown />}
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                PORTFOLIO
              </a>
            </li>
            {/* <li>
              <a
                href="#testimonials"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a
                href="#team"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                Team
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="page-scroll"
                style={{ color: theme.whitecolor }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
