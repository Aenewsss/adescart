import Link from "next/link";
import SearchFormAdmin from "./Forms/SearchFormAdmin";

const SidebarAdmin = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="/admin">ADMIN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fs-3" id="offcanvasNavbarLabel">Admin</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body position-relative">
                        <ul className="navbar-nav justify-content-end flex-grow-1 ps-2 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-bold scale" aria-current="page" href="/admin">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-bold scale" href="/admin/adicionar-produto">Adicionar Produto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-bold scale" href="/admin/alterar-produto">Alterar Produto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black fw-bold scale" href="/admin/remover-produto">Remover Produto</Link>
                            </li>
                        </ul>

                        <SearchFormAdmin />


                        <Link className="nav-link fw-bold position-absolute bottom-0 mb-4 scale ps-2" href="/esqueceu-senha">Alterar Senha</Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SidebarAdmin;