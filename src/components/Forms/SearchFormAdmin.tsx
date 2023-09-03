const SearchFormAdmin = () => {
    return (
        <form className="d-flex mt-3" role="search">
            <input required className="form-control me-2 fw-bold text-black" type="search" placeholder="Buscar Produto" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Buscar</button>
        </form>
    );
}

export default SearchFormAdmin;