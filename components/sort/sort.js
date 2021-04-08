import React, { useState } from "react";
import styles from "./sort.module.css";

const Sort = (props) => {
  const { data, sort, setCurrent } = props;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };
  const handleCurrent =()=>{
    setCurrent(0);
  }

  const getSkills = () => {
    return data.map((ele) => {
      let skills = ele.fields.skills;
      return skills.map((skill, index) => {
        return (
          <>
            <button
              className={styles.sortButton}
              onClick={() => {
                sort(skill);handleToggle();handleCurrent();
              }}
              key={index}
            >
              {skill}
            </button>
          </>
        );
      });
    });
  };

  return (
    <>
      <button className={styles.dropdownButton} onClick={handleToggle}>
        {toggle ? "▲" : "▼"}
      </button>
      {toggle ? (
        <div className={styles.dropdownSkillContainer}>
          <button
            className={styles.sortButton}
            onClick={() => {sort("All"); handleToggle();handleCurrent();}}>
            All
          </button>
          {getSkills()}
        </div>
      ) : null}
      <div className={styles.skillContainer}>
      <button
        className={styles.sortButton}
        onClick={() => {
          sort("All");
        }}
      >
        All
      </button>
      {getSkills()}
      </div>
      
    </>
  );
};

export default Sort;
