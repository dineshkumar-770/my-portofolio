import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// export default function SoftwareSkill() {
//   return (
//     <div>
//       <div className="software-skills-main-div">
//         <ul className="dev-icons">
//           {skillsSection.softwareSkills.map((skills, i) => {
//             return (
//               <li
//                 key={i}
//                 className="software-skill-inline"
//                 name={skills.skillName}
//               >
//                 <i className={skills.fontAwesomeClassname}></i>
//                 <p>{skills.skillName}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img
                  src={skills.imagePath}
                  alt={skills.skillName}
                  className="skill-image"
                />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
