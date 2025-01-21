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
        <CardHeader>
          <CardTitle>
            <div className="h-10 w-10 mb-4">{icon}</div>
            <div className="text-2xl">{title}</div>
          </CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="text-justify">{content}</CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
