import { registerComponent } from "@plasmicapp/react-web/lib/host";
import { SidebarItem } from "./components/SidebarItem";
import type { SidebarItemProps } from "./components/SidebarItem";

registerComponent(SidebarItem, {
    name: "SidebarItem",
    displayName: "Sidebar Item",
    importPath: "./components/SidebarItem",
    props: {
        icon: {
            type: "slot"
        },
        label: {
            type: "slot",
            defaultValue: {
                type: "text",
                value: "Dashboard"
            }
        },
        badge: {
            type: "slot"
        },
        expandable: {
            type: "boolean",
            defaultValue: false
        },
        children: {
            type: "slot",
            hidden: (props: SidebarItemProps) => !props.expandable
        }
    },
    defaultStyles: {
        width: "100%",
        maxWidth: "240px"
    }
});
