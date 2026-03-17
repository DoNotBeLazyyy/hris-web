import CommonButton from '@components/button/CommonButton';

interface ButtonSamplesProps {

}

export default function ButtonSamples({
    ...props
}: ButtonSamplesProps) {
    return (
        <div className="flex flex-col gap-[12px]">
            <h2>BUTTONS</h2>
            <div className="flex flex-wrap gap-[12px]">
                <CommonButton>FIRST</CommonButton>
            </div>
        </div>
    );
}