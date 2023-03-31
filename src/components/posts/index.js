import React from "react";
import { SocialCard } from "../cards";
import data from "./data.json";
export default function index() {
  return (
    <div className="post-wrapper">
      <div className="row">
        {data.summary.map((item) => (
          <>
            <div className="col-md-6 mb-3">
              <SocialCard item={item.linkedin} name={item.name} isLinkedIn />
            </div>
            <div className="col-md-6 mb-3">
              <SocialCard item={item.twitter} name={item.name} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
