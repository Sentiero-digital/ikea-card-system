import {useMemo, VFC} from "react";
import {IkeaGridDotProps} from "@/components";
import styles from "./ikea-grid.module.scss"

export const IkeaGridDot: VFC<IkeaGridDotProps> = props => {
  const {className = '', coordinates: {x, y}, name, ...attrs} = props;
  const {linkAttrs, style} = useMemo(() => ({
    linkAttrs: {
      href: `#${name}`,
      title: `Nagivate to "${name} - Tavolo da giardino"`,
    },
    style: {left: `${x}%`, top: `${y}%`}
  }), [name, x, y])

  return <div className={styles.IkeaGridDot} {...{style}}>
    <a className={styles['dot-link']}
       {...linkAttrs}
       {...attrs}
    ><span className="sr-only">{name}</span></a>
    <div aria-hidden={true}
         className={styles['dot-dialog']}
         role={'tooltip'}
    >
      <a className={styles['dot-dialog-link']}
         {...linkAttrs}
         {...attrs}
         tabIndex={-1}
      >
        <h4 className={styles.category}><em>Novità</em></h4>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.description}>Little description for {name}</span>
        <span className={styles.price}><span className={styles.currency}>€</span> 39</span>
      </a>
    </div>
  </div>;
}

export default IkeaGridDot;