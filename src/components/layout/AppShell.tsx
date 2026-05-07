import {
    useState,
} from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import NotificationDrawer from './NotificationDrawer';

interface Props {
    children: React.ReactNode;
}

export default function AppShell({
    children,
}: Props) {
    const [mobileMenuOpen,
        setMobileMenuOpen] =
        useState(false);

    return (
        <div className="bg-slate-950 text-white min-h-screen flex overflow-hidden">
            {/* MOBILE OVERLAY */}

            {mobileMenuOpen && (
                <div
                    onClick={() =>
                        setMobileMenuOpen(false)
                    }
                    className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
                />
            )}

            {/* SIDEBAR */}

            <Sidebar
                mobileMenuOpen={
                    mobileMenuOpen
                }
                setMobileMenuOpen={
                    setMobileMenuOpen
                }
            />

            {/* MAIN */}

            <div className="flex-1 flex flex-col min-w-0">
                <Topbar
                    setMobileMenuOpen={
                        setMobileMenuOpen
                    }
                />

                <main
                    className="
            flex-1
            overflow-y-auto
            p-4
            sm:p-6
          "
                >
                    {children}
                </main>
            </div>

            <NotificationDrawer />
        </div>
    );
}