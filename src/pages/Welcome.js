import React from "react";
import { Button } from "./Button";
import { CommentCard,ProfileCard,Stat,SelectField} from "../ui-components";
import "./style.css";

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="group" alt="Group" src="group-2.png" />
          <div className="rectangle" />
          <div className="do-not-edit">
            <div className="text-wrapper-9">Amplify UI React version:</div>
            <div className="text-wrapper-10">4.2.0</div>
          </div>
          <div className="do-not-edit-2">
            <div className="text-wrapper-9">Figma file version:</div>
            <div className="text-wrapper-10">1.3.0</div>
          </div>
          <div className="do-not-edit-3">
            <div className="text-wrapper-9">Release date:</div>
            <div className="text-wrapper-10">2023-06-21</div>
          </div>
          <img className="line" alt="Line" src="line-60.svg" />
          <img className="line-2" alt="Line" src="line-61.svg" />
          <img className="line-3" alt="Line" src="line-64.svg" />
          <img className="line-4" alt="Line" src="line-62.svg" />
          <img className="line-5" alt="Line" src="line-63.svg" />
          <img className="codeimage" alt="Codeimage" src="codeimage-7-1.png" />
          <CommentCard className="comment-card-instance" image="image-3.png" />
          <ProfileCard className="profile-card-instance" image="image-4.png" />
          <Stat className="stat-instance" />
          <div className="frame-3">
            {/* <SelectField
              className="select-field-instance"
              isDisabled={false}
              labelHidden={false}
              size="small"
              text="Status"
              text1="All"
              variation="default"
            />
            <SelectField
              className="select-field-instance"
              isDisabled={false}
              labelHidden={false}
              size="small"
              text="Channel"
              text1="All"
              variation="default"
            /> */}
            <Button
              className="design-component-instance-node"
              isDisabled={false}
              label="Clear"
              size="small"
              variation="default"
            />
          </div>
          <div className="title">
            <div className="overlap-group">
              <div className="text-wrapper-11">AWS Amplify UI Kit</div>
              <div className="selection">
                <div className="corner" />
                <div className="corner-2" />
                <div className="corner-3" />
                <div className="corner-4" />
              </div>
            </div>
            <img className="union" alt="Union" src="union.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
