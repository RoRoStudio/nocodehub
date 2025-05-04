import * as React from "react";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { createTheme } from "@mui/material/styles";

export interface DashboardShellProps {
    /**
     * JSON array of navigation items in Toolpad's Navigation format.
     */
    menuItems?: Navigation;
    children?: React.ReactNode;
    className?: string;
}

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

export function DashboardShell({ menuItems = [], children, className }: DashboardShellProps) {
    return (
        <AppProvider navigation={menuItems} theme={theme}>
            <DashboardLayout className={className}>{children}</DashboardLayout>
        </AppProvider>
    );
}
