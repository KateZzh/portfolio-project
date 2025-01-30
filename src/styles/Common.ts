type FontProps = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    size?: string;
    textTransform?: string;
};

export const font = ({ family, weight, color, lineHeight, size, textTransform }: FontProps) => `
font-family: ${family || 'Inter'};
font-weight: ${weight || 400};
color: ${color};
line-height: ${lineHeight || 1.2};
font-size: ${size};
text-transform: ${textTransform || 'none'};
`;

// font-size: calc( (100vw - 360px)/(1440 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px )
