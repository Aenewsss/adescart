import ReactLoading from "react-loading"

const Spinner = ({ visible }: any) => {

    return (
        <>
            {
                visible &&
                <div className="position-fixed vh-100 bg-opacity vw-100 top-0 left-0">
                    <ReactLoading className="spinner" type="spin" color="#008B98" />
                </div >
            }
        </>
    );
}

export default Spinner;