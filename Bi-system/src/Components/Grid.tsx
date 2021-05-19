import * as React from "react";
import styles from "./Grid.module.css";
/*This code is adapted from: 
https://github.com/rleija703/react-examples/blob/master/grid-component-with-typescript/src/components/Grid.tsx */

/* This class makes the grid used in the website. 
The parameters are used to alter the apparance and placement of the items in the grid. */

type GridItemsAligns =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

type GridJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

/* How many colums the item is taking of the grid.
1 mmaking there be many small items in the column, 
and 12 meaning only one item in the whole column. */
type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  alignItems?: GridItemsAligns;
  column?: boolean;
  expanded?: boolean;
  justify?: GridJustify;
  lg?: GridSizes;
  md?: GridSizes;
  row?: boolean;
  sm?: GridSizes;
}

const Grid: React.FC<GridProps> = (props) => {
  const { alignItems, children, column, expanded, justify, lg, md, row, sm } =
    props;

  const isRow: boolean = row || !column;

  const classes: string =
    (!isRow ? styles.column : styles.row) +
    // Styling the row
    (isRow && expanded ? ` ${styles.expanded}` : "") +
    (isRow && justify ? ` ${styles[justify]}` : "") +
    (isRow && alignItems ? ` ${styles["align-" + alignItems]}` : "") +
    // Styling the column
    (!isRow && sm ? ` ${styles["sm-" + sm]}` : "") +
    (!isRow && md ? ` ${styles["md-" + md]}` : "") +
    (!isRow && lg ? ` ${styles["lg-" + lg]}` : "");

  return <div className={classes}>{children}</div>;
};

export default Grid;
