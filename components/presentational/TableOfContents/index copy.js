import { useState } from 'react';
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, SubMenu, Icon, Item } from "antd";
import Link from 'next/link';

function getItem(label, key, href, icon, children, type) {
  return {
    key,
    icon,
    children,
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
  const [current, setCurrent] = useState('1');
  
  const renderSubMenu = (tutorial) => {
    return (
      <Menu.SubMenu 
        key={tutorial.key}
        title={
          <div>
            <span>{tutorial.label}</span>
          </div>
        }
      >
        {tutorial.children && tutorial.children
       .map((learningUnit) => {
         return (
           <Menu.Item key={learningUnit.key}>
            {learningUnit.href ? 
             <Link href={learningUnit.href} className="learning-unit-link">
               <span>{learningUnit.label}</span>
             </Link> : <span>{learningUnit.label}</span>}
           </Menu.Item>
         );
       })}
     </Menu.SubMenu>
    );
  };
  
  return (
    <Menu
      style={{
        width: 256,
      }}
      selectedKeys={[current]}
      mode="inline"
      defaultOpenKeys={items.map((tutorial) => tutorial.key)}
    >
      {items.map((tutorial) => renderSubMenu(tutorial))}
    </Menu>
  );
};

export default TableOfContents;
