import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import {
  Menu,
  SubMenu,
  StyledLink,
  MenuItem,
  Container,
} from "./styled";

function getItem(label, key, href, icon, items, type) {
  return {
    key,
    icon,
    items,
    label,
    type,
    href
  };
}
const items = [
  getItem('General', 'general', undefined, <MailOutlined />, ),
  getItem('Management', 'management',undefined, <AppstoreOutlined />, [
    getItem('Researchers', 'researchers', '/researchers'),
    getItem('Timepoints', 'timepoints'),
    getItem('Groups', 'groups'),
    getItem('Patients', 'patients'),
    getItem('Forms', 'forms'),
  ]),
  getItem('Data Collection', 'dataCollection', <SettingOutlined />, [
    getItem('Collect Data', 'collectData'),
  ]),
];

const TableOfContents = () => {
  const renderSubMenu = (tutorial) => {
    return (
      <SubMenu 
        key={tutorial.key}
        title={
          <div>
            <span>{tutorial.label}</span>
          </div>
        }
      >
        {tutorial.items && tutorial.items
       .map((learningUnit) => {
         return (
           <MenuItem key={learningUnit.key}>
            {learningUnit.href ? 
             <StyledLink href={learningUnit.href}>
               <span>{learningUnit.label}</span>
             </StyledLink> : <span>{learningUnit.label}</span>}
           </MenuItem>
         );
       })}
     </SubMenu>
    );
  };
  
  return (
    <Container>
      <Menu
        style={{
          width: 256,
        }}
        mode="inline"
        defaultOpenKeys={items.map((tutorial) => tutorial.key)}
      >
        {items.map((tutorial) => renderSubMenu(tutorial))}
      </Menu>
    </Container>
  );
};

export default TableOfContents;
