import { Blinds, Settings } from "lucide-react";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-col gap-5 p-4 ">
          <ListItem icon={<Blinds />} title="Form Builder" />
          <ListItem icon={<Settings />} title="Settings" />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

interface ListItemProps {
  icon: React.ReactNode;
  title: string;
  link?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  link,
}: ListItemProps) => {
  return (
    <li className="flex gap-4 cursor-pointer hover:bg-gray-100 field-sizing-content rounded-2xl p-2 text-in">
      <a href={link || "#"} className="flex gap-2 items-center">
        {icon}
        <h3>{title}</h3>
      </a>
    </li>
  );
};
