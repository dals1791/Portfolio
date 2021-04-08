import React,{useState} from 'react'
import styles from "./sort.module.css";

const Sort = (props) => {
  const { data, sort } = props;
  const [toggle, setToggle]=useState(false)
  const handleToggle =()=>{
    setToggle(toggle=>!toggle)
  }

  const getSkills = () => {
    return data.map((ele) => {
      let skills = ele.fields.skills;
      return skills.map((skill) => {
        return (
          <>
                {toggle? (<div className={styles.dropdownSkillContainer}>
              <button
                className={styles.sortButtonMobile}
                onClick={() => {
                  sort(skill);
                }}
              >
                {skill}
              </button>
              </div>): null}
        

            <button
              className={styles.sortButton}
              onClick={() => {
                sort(skill);
              }}
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
      
      <div className={styles.dropdownContainer} onClick={handleToggle}>
          Sort By Skill
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
