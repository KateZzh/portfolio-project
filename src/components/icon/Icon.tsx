import iconsSprite from '../../assets/images/icons-sprite.svg';
import { theme } from '../../styles/Theme';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    fill?: string;
};

export const Icon = ({ iconId, width, height, fill }: IconPropsType) => {
    return (
        <svg
            width={width || '18'}
            height={height || '18'}
            viewBox={`0 0 ${width} ${height}` || '0 0 18 18'}
            xmlns='http://www.w3.org/2000/svg'
            fill={fill || theme.colors.font}
        >
            <use xlinkHref={`${iconsSprite}#${iconId}`} />
        </svg>
    );
};
