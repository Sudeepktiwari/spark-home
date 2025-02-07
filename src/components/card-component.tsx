import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardsProps {
  title: string;
  subtitle?: string | null; // subtitle can be null or undefined
  content: React.ReactNode;
  icon?: JSX.Element | null; // icon can be null or undefined
}

const CardComponent: React.FC<CardsProps> = ({
  title,
  subtitle,
  content,
  icon,
}) => {
  return (
    <div>
      <Card>
        <CardHeader className="px-2 pt-4">
          <CardTitle className="pl-4 !font-normal">
            <div className="h-14 w-14 mb-8">{icon}</div>
            <div className="text-2xl mb-2">{title}</div>
          </CardTitle>

          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="text-justify">{content}</CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
