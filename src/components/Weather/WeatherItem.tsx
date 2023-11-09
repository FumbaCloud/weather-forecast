import {FC, ReactNode} from "react";
import classNames from "classnames";

const WeatherItem: FC<{title?: string, main?: boolean, children: ReactNode}> = ({title, main, children}) => {
    return (
        <div className={classNames('weather__item', {'weather__item--main': main})}>
            {title && (
                <div className={'weather__item-title'}>
                    {title}
                </div>
            )}
            <div className={'weather__item-body'}>
                {children}
            </div>
        </div>
    );
};

export default WeatherItem;
