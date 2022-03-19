import {VFC} from "react";
import {IkeaGridProps, IkeaGridDot, IkeaGridItem} from "@/components";
import styles from "./ikea-grid.module.scss";

import imageUrl from "../../assets/balcone.avif"
import {products} from "@/mocked-datas/ikea-grid.json";

export const IkeaGrid: VFC<IkeaGridProps> = (props) => {

  return (
      <section className={styles.IkeaGrid}>
        <IkeaGridItem className={`--status-active`}
                      imageUrl={imageUrl}
        >
          {products.map((product) => (
              <IkeaGridDot key={`${product.coordinates.x}${product.coordinates.y}`} {...product}/>
          ))}
        </IkeaGridItem>

        <IkeaGridItem><h2 className={styles.text}>Scopri tutte le novità</h2></IkeaGridItem>

        <IkeaGridItem imageUrl={imageUrl}>
          <IkeaGridDot name={'SUNDSÖ'} coordinates={{x: 60, y: 30}}/>
        </IkeaGridItem>

        <IkeaGridItem imageUrl={imageUrl}>
          {products.map((product) => (
              <IkeaGridDot key={`${product.coordinates.x}${product.coordinates.y}`} {...product}/>
          ))}
        </IkeaGridItem>

        <IkeaGridItem imageUrl={imageUrl} />

      </section>
  );
}

export default IkeaGrid;