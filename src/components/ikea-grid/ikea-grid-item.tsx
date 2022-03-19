import {VFC} from "react";
import {IkeaGridItemProps} from "@/components";
import styles from "./ikea-grid.module.scss";

export const IkeaGridItem: VFC<IkeaGridItemProps> = (props) => {
  const {className = '', imageUrl, ...attrs} = props;

  return <article className={`${styles.IkeaGridItem} ${styles[className]}`}
                  {...attrs}>
    {!!imageUrl?.length && (
        <img src={imageUrl}
             alt=""
             loading={'lazy'}
             className={styles.image}/>
    )}
    {props.children}
  </article>;
}

export default IkeaGridItem;