import { CallDropdown } from "./CallDropdown";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2 ">
      <button className="font-medium cursor-pointer">UA</button>

      <button className="opacity-50 cursor-pointer">EN</button>

      <CallDropdown />
    </div>
  );
}
