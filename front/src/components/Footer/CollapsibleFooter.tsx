
import { useState } from "react";

import VersionDisplay from "./VersionDisplay";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-router";
import { Trans } from "react-i18next";
import ThemeToggle from "../Header/ThemeToggle";

export default function CollapsibleFooter({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-white rounded-xl dark:bg-bg_secondary_dark text-xs md:text-sm ${className}`}>
      {/* Header / handle: always visible */}
      <div className="flex justify-between">
        
        <div className=" h-[3vh] top-0 flex items-center justify-center gap-3 truncate overflow-hidden">
          <button
          type="button"
          aria-expanded={open}
          aria-controls="footer-content"
          onClick={() => {}}
          className="w-full h-[3vh] flex items-center justify-center gap-2 rounded-t-xl"
        >
        </button>
          {/* Version Display - Desktop and Tablet */}
          <div className="hidden md:block flex flex-col md:flex-row justify-center items-center gap-4 dark:text-white text-black w-full md:p-0 py-2">
            <VersionDisplay />
          </div>
          {/* Imprint */}
          <Link
            to={
              "https://www.th-deg.de/impressum"
            }
            target="_blank"
          >
            <p className="text-center text-blue-600 dark:text-blue-400 hover:underline">
              <Trans i18nKey="footer.imprint" />
            </p>
          </Link>
          {/* Privacy Policy */}
          <Link
          to={
              "https://www.th-deg.de/datenschutz"
          }
          target="_blank"
          >
          <p className="text-center text-blue-600 dark:text-blue-400 hover:underline">
              <Trans i18nKey="footer.privacy"></Trans>
          </p>
          </Link>
        </div>

        {/* Right section */}
        <div className="interface-toggles h-[3vh] top-0 flex items-center pr-3 gap-2"> 
          <ThemeToggle />
          <LanguageSelector />
        </div>

      </div>
    </footer>
  );
}
