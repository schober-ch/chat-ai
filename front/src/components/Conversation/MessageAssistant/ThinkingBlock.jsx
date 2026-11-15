import { useState, useRef, memo } from "react";
import { Trans } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown, ChevronRight, Brain } from "lucide-react";
import { rendererComponents } from "./MarkdownRenderer";

// Models often draft raw HTML while reasoning. Rendering that as live markup let
// injected <iframe>/<style> tags hit the network and restyle the whole page, so
// show raw HTML as literal text instead. Code fences are untouched: fenced and
// inline code are their own mdast node types, never "html".
const remarkHtmlAsText = () => (tree) => {
  const visit = (node) => {
    if (!Array.isArray(node.children)) return;
    node.children.forEach((child, i) => {
      if (child.type === "html") {
        node.children[i] = { type: "text", value: child.value };
      } else {
        visit(child);
      }
    });
  };
  visit(tree);
};

const ThinkingBlock = memo(
  ({ children, autoExpand = false, isStreaming = false, renderContent }) => {
    // Start collapsed by default; user can expand to view reasoning.
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    // Legacy autoExpand parameter is ignored: reasoning stays collapsed unless
    // the user explicitly opens it.

    return (
      <div className="my-4 rounded-lg border border-tertiary">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg cursor-pointer flex items-center w-full p-3 text-xs bg-blue-50 dark:bg-blue-900/30 rounded-t-lg hover:bg-blue-100 dark:hover:bg-blue-900/50"
          aria-expanded={isOpen}
          aria-controls="thinking-content"
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <Brain size={16} className="ml-2 mr-2" />
          <span className="flex items-center gap-2"><Trans i18nKey="conversation.reasoning" /></span>
        </button>
        {isOpen && (
          <div
            id="thinking-content"
            ref={contentRef}
            className="p-3 text-xs bg-blue-50/50 dark:bg-blue-900/20 rounded-b-lg"
            aria-live="polite"
            aria-busy={isStreaming ? "true" : "false"}
          >
            {renderContent ? (
              renderContent(children || "")
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkHtmlAsText]}
                components={rendererComponents}
              >
                {children || ""}
              </ReactMarkdown>
            )}
          </div>
        )}
      </div>
    );
  }
);

ThinkingBlock.displayName = "ThinkingBlock";

export default ThinkingBlock;
