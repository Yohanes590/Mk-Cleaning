import './loader.css'
import { LoadingAnimation } from './animation-js'
function Loader() {
    LoadingAnimation()
    return (<>
        <div className="loading-cover">
            <div class="loader"></div>
        </div>
    </>)
}

export default Loader