// components/SidebarItem.tsx
import * as React from "react";

export interface SidebarItemProps {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  badge?: React.ReactNode;
  expandable?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function SidebarItem({
  icon,
  label,
  badge,
  expandable,
  children,
  className
}: SidebarItemProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={className}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1rem"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flex: 1,
            overflow: "hidden"
          }}
        >
          {icon}
          {label}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {badge}
          {expandable && (
            <button
              onClick={() => setOpen((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              {open ? "▾" : "▸"}
            </button>
          )}
        </div>
      </div>

      {expandable && open && (
        <div style={{ paddingLeft: "1.5rem", paddingTop: "0.25rem" }}>
          {children}
        </div>
      )}
    </div>
  );
}
