import { BindingMetadata, ElementNode, NodeTypes } from "../compiler-core";
import * as CompilerDOM from "../compiler-dom";
import { TemplateCompiler } from "./compileTemplate";

export const DEFAULT_FILENAME = "anonymous.vue";

export interface SFCParseOptions {
  filename?: string;
  sourceRoot?: string;
  compiler?: TemplateCompiler;
}

export interface SFCBlock {
  type: string;
  content: string;
  attrs: Record<string, string | true>;
}

export interface SFCTemplateBlock extends SFCBlock {
  type: "template";
}

export interface SFCScriptBlock extends SFCBlock {
  type: "script";
  setup?: string | boolean;
  bindings?: BindingMetadata;
  scriptAst?: import("@babel/types").Statement[];
  scriptSetupAst?: import("@babel/types").Statement[];
}

export interface SFCDescriptor {
  filename: string;
  source: string;
  template: SFCTemplateBlock | null;
  script: SFCScriptBlock | null;
  scriptSetup: SFCScriptBlock | null;
}

export interface SFCParseResult {
  descriptor: SFCDescriptor;
}

export function parse(
  source: string,
  { filename = DEFAULT_FILENAME, compiler = CompilerDOM }: SFCParseOptions = {}
): SFCParseResult {
  const descriptor: SFCDescriptor = {
    filename,
    source,
    template: null,
    script: null,
    scriptSetup: null,
  };

  const ast = compiler.parse(source, {});
  ast.children.forEach((node) => {
    if (node.type !== NodeTypes.ELEMENT) return;

    switch (node.tag) {
      case "template": {
        descriptor.template = createBlock(node, source) as SFCTemplateBlock;
        break;
      }
      case "script": {
        const scriptBlock = createBlock(node, source) as SFCScriptBlock;
        const isSetup = !!scriptBlock.attrs.setup;
        if (isSetup && !descriptor.scriptSetup) {
          descriptor.scriptSetup = scriptBlock;
        }
        if (!isSetup && !descriptor.script) {
          descriptor.script = scriptBlock;
        }
        break;
      }
      default: {
        break;
      }
    }
  });

  return { descriptor };
}

function createBlock(node: ElementNode, source: string): SFCBlock {
  const type = node.tag;

  let { start, end } = node.loc;
  start = node.children[0].loc.start;
  end = node.children[node.children.length - 1].loc.end;
  const content = source.slice(start.offset, end.offset);

  const attrs: Record<string, string | true> = {};

  const block: SFCBlock = {
    type,
    content,
    attrs,
  };

  node.props.forEach((p) => {
    if (p.type === NodeTypes.ATTRIBUTE) {
      attrs[p.name] = p.value ? p.value.content || true : true;
      if (p.name === "lang") {
        // TODO: parse lang
      } else if (type === "style") {
        // TODO: parse style block
      } else if (type === "script" && p.name === "setup") {
        (block as SFCScriptBlock).setup = attrs.setup;
      }
    }
  });

  return block;
}
