import iconsSprite from '../../assets/images/icons-sprite.svg';
import { theme } from '../../styles/Theme';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
};

export const Icon = ({ iconId, width = '18', height = '18', fill, stroke }: IconPropsType) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns='http://www.w3.org/2000/svg'
            fill={fill}
            stroke={stroke}
        >
            <use xlinkHref={`${iconsSprite}#${iconId}`} />
        </svg>
    );
};
