import styles from "./sort.module.css";

const Sort = (props) => {
  const { data, sort } = props;

  const getSkills = () => {
    return data.map((ele) => {
      let skills = ele.fields.skills;
      return skills.map((skill, index) => {
        return (
          <button key={index} className={styles.sortButton} onClick={()=>{sort(skill)}}>
            {skill}
          </button>
        );
      });
    });
  };

  return (<>
  <button className={styles.sortButton} onClick={()=>{sort('All')}}>All</button>
  {getSkills()}
  </>);
};

export default Sort;
