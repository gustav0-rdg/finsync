import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface ButtonWithIconProps {
  icon: IconProp;
  text: string;
  pageValue: number;
  currentPage: number;
  setPageValue: React.Dispatch<React.SetStateAction<number>>;
  changePage: React.Dispatch<React.SetStateAction<number>>;
}


export function ButtonWithIcon(
    {icon, text, pageValue, currentPage, setPageValue, changePage}:ButtonWithIconProps){
        return( 
        <button 
            className={`${pageValue === currentPage ? 'active':''} aside__btn`}
            onClick={() => {
                setPageValue(pageValue);
                changePage(pageValue);
            }}
        >
            <div className="aside__btn-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="aside__btn-text">
                {text}
            </div>
        </button>)
    }