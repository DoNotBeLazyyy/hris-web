import Button, { ButtonProps } from '@mui/material/Button';

export default function CommonButton({
    ...props
}: ButtonProps) {
    return <Button
        {...props}
    />;
}