import React, { useState } from 'react';
import classnames from 'classnames';

/* Types */
export interface Skill {
  category: string;
  name: string;
  level: number;
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  skills: Skill[];
}

/* Import Stylesheet */
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

/**
 * The component to display my skills in a nice way
 */
export const SkillGrid: React.FC<Props> = ({
  skills,
  className,
  ...props
}: Props) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [gridActive, setGridActive] = useState<boolean>(false);

  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const setCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setGridActive(false);
    } else {
      setActiveCategory(category);
      setGridActive(true);
    }
  };
  return (
    <section
      className={cx(styles['skill-grid'], {
        [styles['grid-active']]: gridActive
      })}
      {...props}
    >
      {Object.entries(categories).map(([category, skills]) => (
        <div
          key={category}
          className={cx(styles.category, {
            [styles.active]: activeCategory === category
          })}
          onClick={() => setCategory(category)}
        >
          <h3 className={styles.category__title}>{category}</h3>
          <ul className={styles.skills_list}>
            {skills.map((skill) => (
              <li key={skill.name} className={styles.skill}>
                <span className={styles.skill__name}>{skill.name}</span>
                <span
                  className={cx(
                    styles.skill__level,
                    styles[`level-${skill.level}`]
                  )}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SkillGrid;
