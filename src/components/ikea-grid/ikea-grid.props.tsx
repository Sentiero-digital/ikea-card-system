import {ComponentProps} from "react";

export type IkeaGridProps = ComponentProps<'section'> & {}
export type IkeaGridItemProps = ComponentProps<'article'> & {
  imageUrl?: string
}
export type IkeaGridDotProps = ComponentProps<'a'> & {
  coordinates: {
    x: number,
    y: number,
  },
  name: string;
}