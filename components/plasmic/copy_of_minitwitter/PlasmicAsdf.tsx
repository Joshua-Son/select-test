// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5t7S5k969EXd9MSJ9ASYQC
// Component: 4IQDdh-KQE
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Select2 from "../../Select2"; // plasmic-import: 6WZ_2qWZyHV/component
import Select2__Option from "../../Select2__Option"; // plasmic-import: I4IFKsqRdNe/component
import Select2__OptionGroup from "../../Select2__OptionGroup"; // plasmic-import: l0wkiJrXNXP/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_minitwitter.module.css"; // plasmic-import: 5t7S5k969EXd9MSJ9ASYQC/projectcss
import sty from "./PlasmicAsdf.module.css"; // plasmic-import: 4IQDdh-KQE/css

export type PlasmicAsdf__VariantMembers = {};

export type PlasmicAsdf__VariantsArgs = {};
type VariantPropType = keyof PlasmicAsdf__VariantsArgs;
export const PlasmicAsdf__VariantProps = new Array<VariantPropType>();

export type PlasmicAsdf__ArgsType = {};
type ArgPropType = keyof PlasmicAsdf__ArgsType;
export const PlasmicAsdf__ArgProps = new Array<ArgPropType>();

export type PlasmicAsdf__OverridesType = {
  root?: p.Flex<typeof Select2>;
  optionGroup?: p.Flex<typeof Select2__OptionGroup>;
};

export interface DefaultAsdfProps {
  className?: string;
}

export const defaultAsdf__Args: Partial<PlasmicAsdf__ArgsType> = {};

function PlasmicAsdf__RenderFunc(props: {
  variants: PlasmicAsdf__VariantsArgs;
  args: PlasmicAsdf__ArgsType;
  overrides: PlasmicAsdf__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultAsdf__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <Select2
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <Select2__Option
        className={classNames("__wab_instance", sty.option__bPcep)}
        value={"value1" as const}
      >
        {"Option 1"}
      </Select2__Option>

      <Select2__Option
        className={classNames("__wab_instance", sty.option__cNi26)}
        value={"value1 2" as const}
      >
        {"Option 1"}
      </Select2__Option>

      <Select2__OptionGroup
        data-plasmic-name={"optionGroup"}
        data-plasmic-override={overrides.optionGroup}
        className={classNames("__wab_instance", sty.optionGroup)}
        title={"sdfasdf"}
      >
        <Select2__Option
          className={classNames("__wab_instance", sty.option__apTd3)}
          value={"option" as const}
        >
          {"asdfasdfasdf"}
        </Select2__Option>

        <Select2__Option
          className={classNames("__wab_instance", sty.option__foJe)}
          onMid={true}
          value={"option 2" as const}
        >
          {"ss"}
        </Select2__Option>
      </Select2__OptionGroup>

      <Select2__Option
        className={classNames("__wab_instance", sty.option___3HZLj)}
        value={"value2" as const}
      >
        {"Option 2"}
      </Select2__Option>
    </Select2>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "optionGroup"],
  optionGroup: ["optionGroup"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof Select2;
  optionGroup: typeof Select2__OptionGroup;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAsdf__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAsdf__VariantsArgs;
    args?: PlasmicAsdf__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAsdf__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAsdf__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAsdf__ArgProps,
      internalVariantPropNames: PlasmicAsdf__VariantProps
    });

    return PlasmicAsdf__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAsdf";
  } else {
    func.displayName = `PlasmicAsdf.${nodeName}`;
  }
  return func;
}

export const PlasmicAsdf = Object.assign(
  // Top-level PlasmicAsdf renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    optionGroup: makeNodeComponent("optionGroup"),

    // Metadata about props expected for PlasmicAsdf
    internalVariantProps: PlasmicAsdf__VariantProps,
    internalArgProps: PlasmicAsdf__ArgProps
  }
);

export default PlasmicAsdf;
/* prettier-ignore-end */
