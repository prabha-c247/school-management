import React from "react";
import { Card } from "react-bootstrap";

interface DashboardCardProps {
  heading: string;
  content?: React.ReactNode;
  search?: React.ReactNode;
  total?: number;
  filter?:React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  heading,
  search,
  content,
  total,
  filter
}) => {
  return (
    <Card>
      <div className="px-2">
        <Card.Header>
          <div className="d-flex ">
            <h6>{heading}</h6> {search}
          </div>
          <div>{total}</div>
        </Card.Header>
        <Card.Body style={{ maxHeight: "150px", overflowY: "auto" }}>
          {content}
        </Card.Body>
        <div className="line" />
      </div>
    </Card>
  );
};

export default DashboardCard;
