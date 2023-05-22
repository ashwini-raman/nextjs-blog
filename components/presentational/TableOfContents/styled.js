import styled, { css } from "styled-components";
import { Menu as StyledMenu } from "antd";
import Link from 'next/link';

const baseTextWrappedContainerStyles = css`
  white-space: normal;
  word-wrap: break-word;
`;

const indentation = css`
  display: inline-block;
  width: calc(100% - 4em);
  vertical-align: top;
`;
 
// Menu
export const Container = styled.div`
  margin-bottom: 50px;
  padding-bottom: 100px;
`;

export const Menu = styled(StyledMenu)`
  width: 100%;
  height: 100%;
  &&& {
    background: transparent;
    overflow-x: hidden;
  }
`;

export const MenuItem = styled(StyledMenu.Item)`
  &&& {
    margin: 0px;
    height: auto;
    ${baseTextWrappedContainerStyles}
    font-weight: 500;
  }
`;

export const StyledDashboardLinkContainer = styled(Link)`
  background: transparent;
`;

// Tutorial Name
export const SubMenu = styled(StyledMenu.SubMenu)`
  &&& {
    background: transparent;
    .ant-menu-submenu-title {
      height: auto;
    }
    ul {
      background: transparent;
    }
  }
`;

export const StyledTutorialNameContainer = styled.div`
  ${baseTextWrappedContainerStyles}
  font-weight: 650;
`;

export const StyledTutorialText = styled.span`
  ${indentation}
  line-height: 1.6;
  vertical-align: text-top;
  margin-top: -2px;
`;

// Learning Units
export const StyledLink = styled(Link)`
  background: transparent;
`;

export const StyledText = styled.span`
  ${indentation}
  line-height: 1.6;
  vertical-align: text-top;
  margin-top: -2px;
`;
