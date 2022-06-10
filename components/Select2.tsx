import * as React from "react";
import {
  PlasmicSelect2,
  DefaultSelect2Props
} from "./plasmic/copy_of_minitwitter/PlasmicSelect2";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./Select2__Option";
import OptionGroup from "./Select2__OptionGroup";

interface Select2Props extends DefaultSelect2Props {}

function Select2_(props: Select2Props, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSelect2.useBehavior(props, ref);
  return <PlasmicSelect2 {...plasmicProps} />;
}

const Select2 = React.forwardRef(Select2_);

export default Object.assign(Select2, {
  Option,
  OptionGroup,
  __plumeType: "select"
});
