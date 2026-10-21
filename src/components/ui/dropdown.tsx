import { forwardRef } from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownTrigger = Dropdown.Trigger;
export const DropdownRoot = Dropdown.Root;
export const DropdownPortal = Dropdown.Portal;

export const DropdownContent = forwardRef<
  HTMLDivElement,
  Dropdown.DropdownMenuContentProps
>(({ className, ...props }, ref) => (
  <Dropdown.Content
    ref={ref}
    className={cn("z-50 min-w-44 rounded-xl glass p-2 shadow-lg", className)}
    {...props}
  />
));
DropdownContent.displayName = "DropdownContent";

export const DropdownItem = forwardRef<
  HTMLDivElement,
  Dropdown.DropdownMenuItemProps
>(({ className, ...props }, ref) => (
  <Dropdown.Item
    ref={ref}
    className={cn(
      "px-3 py-2 rounded-lg text-sm cursor-pointer hover:bg-accent/40 outline-none",
      className
    )}
    {...props}
  />
));
DropdownItem.displayName = "DropdownItem";