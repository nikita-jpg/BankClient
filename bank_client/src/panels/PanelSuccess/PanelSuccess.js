import './PanelSuccess.css'

const PanelSuccess = ({successMessage = ""}) => {

    return(
        <div className="PanelSuccess">
            {successMessage}
        </div>
    )
}

export default PanelSuccess