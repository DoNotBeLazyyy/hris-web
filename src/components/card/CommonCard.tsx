import CardHeader, { CardHeaderProps } from '@components/card/CardHeader';
import { CARD_SIZE_STYLES } from '@constants/style.constant';
import Card, { CardProps } from '@mui/material/Card';
import { ThemeSx } from '@type/common.type';
import { CardSize } from '@type/common/style.type';
import { normalizeSx } from '@utils/theme.util';
import { forwardRef } from 'react';

export interface CommonCardProps extends CardProps {
    // Card header properties
    cardHeaderProps?: CardHeaderProps;

    // Standardized size preset for the card layout
    size?: CardSize;
}

/**
 * CommonCard
 *
 * A highly reusable MUI Card component with standardized styling.
 * It is wrapped in `forwardRef` to allow it to act as a direct replacement
 * for MUI slots (like Dialog Paper) and supports dynamic size presets.
 *
 * @example
 * <CommonCard
 *  cardHeaderProps={{ title: 'Settings' }}
 *  size="MEDIUM"
 * >
 *  <p>Content goes here.</p>
 * </CommonCard>
 */
const CommonCard = forwardRef<HTMLDivElement, CommonCardProps>(({
    cardHeaderProps,
    children,
    size = 'MEDIUM',
    sx,
    ...props
}, ref) => {
    const baseStyle: ThemeSx = {
        backgroundColor: '#FFF',
        borderRadius: '20px',
        boxShadow: '0px 0px 20px 0px #00000026',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '20px'
    }; // Base core styles for the container
    const sizeStyle = CARD_SIZE_STYLES[size]; // Extracted styles based on the size prop

    return (
        <Card
            ref={ref}
            sx={[
                baseStyle,
                sizeStyle,
                ...normalizeSx(sx)
            ]}
            {...props}
        >
            {cardHeaderProps && <CardHeader {...cardHeaderProps} />}
            {children}
        </Card>
    );
});
CommonCard.displayName = 'CommonCard';

export default CommonCard;