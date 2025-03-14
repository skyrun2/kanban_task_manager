import add from "../assets/icon-add-task-mobile.svg"
import board from "../assets/icon-board.svg"
import cancel from "../assets/icon-cross.svg"
import check from "../assets/icon-check.svg"
import dark from "../assets/icon-dark-theme.svg"
import darkLogo from "../assets/logo-dark.svg"
import downArrow from "../assets/icon-chevron-down.svg"
import hide from "../assets/icon-hide-sidebar.svg"
import light from "../assets/icon-light-theme.svg"
import lightLogo from "../assets/logo-light.svg"
import mobileLogo  from "../assets/logo-mobile.svg"
import more from "../assets/icon-vertical-ellipsis.svg"
import show from "../assets/icon-show-sidebar.svg"
import upArrow from "../assets/icon-chevron-up.svg"
import purpleAdd from "../assets/add-new-board.svg"
import purpleBoard from "../assets/create-new-board.svg"

const assetsDataFunction  = () => {
    return{
    add,
    board,
    cancel,
    check,
    dark,
    darkLogo,
    downArrow,
    hide,
    light,
    lightLogo,
    mobileLogo,
    more,
    show,
    upArrow,
    purpleAdd,
    purpleBoard
    }

}
const assetsData = {...assetsDataFunction()};
export default assetsData;