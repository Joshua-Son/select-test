import * as React from "react";
import {
  PlasmicSelect2__OptionGroup,
  DefaultSelect2__OptionGroupProps
} from "./plasmic/copy_of_minitwitter/PlasmicSelect2__OptionGroup";

interface Select2__OptionGroupProps extends DefaultSelect2__OptionGroupProps {}

function Select2__OptionGroup(props: Select2__OptionGroupProps) {
  const { plasmicProps } = PlasmicSelect2__OptionGroup.useBehavior(props);
  return <PlasmicSelect2__OptionGroup {...plasmicProps} />;
}

export default Object.assign(Select2__OptionGroup, {
  __plumeType: "select-option-group"
});
