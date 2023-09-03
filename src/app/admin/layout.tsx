import SidebarAdmin from "@components/components/SidebarAdmin"
import '../globals.css'
import PrivateRoute from "@components/components/PrivateRoute"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <PrivateRoute>
            <SidebarAdmin />
            {children}
        </PrivateRoute>
    )
}