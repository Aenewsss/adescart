import '../globals.css'
export const metadata = {
    title: 'Login | A Descart',
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {

    return (
        <main>
            {children}
        </main>
    )
}